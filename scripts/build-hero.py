"""Compress the hero picks into the files the site serves.

Reads the pick lists in app/data/hero-picks.json (chosen at /dev/hero) and, for
each set, turns the uncompressed files in public/hero-preview/ (desktop) and
public/hero-preview/mobile/ (phone) into public/hero/ and public/hero/mobile/:

  clips   trimmed to the slide length, no audio, H.264, plus a .jpg poster frame
  photos  .webp at their exported size (2560x1440 desktop, 1080x1920 phone)

Files in the output folders that are no longer picked are deleted, so dropped
shots don't stay in the repo. Folders there are left alone. Re-run after
changing the picks, then commit public/hero/.

Needs ffmpeg (clips) and Pillow (photos):
  python3 scripts/build-hero.py
"""
import json
import pathlib
import subprocess

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
PICKS = ROOT / 'app/data/hero-picks.json'
SECONDS = 3  # SLIDE_MS in app/components/v3/HeroSlideshow.js
SETS = {
    # set: (source, output, clip size)
    'desktop': (ROOT / 'public/hero-preview', ROOT / 'public/hero', '1920:1080'),
    'mobile': (ROOT / 'public/hero-preview/mobile', ROOT / 'public/hero/mobile', '720:1280'),
}


def run(*args):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', *args], check=True)


def build(set_name, files):
    source, out, size = SETS[set_name]
    out.mkdir(parents=True, exist_ok=True)
    keep = set()
    for file in files:
        src = source / file
        base = src.stem
        if src.suffix == '.mp4':
            clip, poster = out / f'{base}.mp4', out / f'{base}.jpg'
            vf = f'scale={size}:force_original_aspect_ratio=increase,crop={size},format=yuv420p'
            run('-i', str(src), '-t', str(SECONDS), '-an', '-vf', vf,
                '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-movflags', '+faststart', str(clip))
            run('-i', str(clip), '-frames:v', '1', '-q:v', '4', str(poster))
            keep |= {clip.name, poster.name}
        else:
            photo = out / f'{base}.webp'
            Image.open(src).convert('RGB').save(photo, 'WEBP', quality=80, method=6)
            keep.add(photo.name)
        print(f'{set_name:7}  {file}')
    for f in out.iterdir():
        if f.is_file() and f.name not in keep and f.name != '.DS_Store':
            f.unlink()
            print(f'{set_name:7}  removed {f.name}')


def main():
    picks = json.loads(PICKS.read_text())
    for set_name in SETS:
        build(set_name, picks[set_name])


if __name__ == '__main__':
    main()
