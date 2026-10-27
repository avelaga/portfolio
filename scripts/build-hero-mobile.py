#!/usr/bin/env python3
"""Build the phone (vertical 9:16) versions of the home hero slides.

For every slide in `heroSlides` (app/data/v3.js), writes public/hero/mobile/<name>:
  - clips: 720x1280, 4s, no audio, plus a poster frame (<name>.jpg)
  - photos: 9:16 webp, up to 1280 tall

Source, per slide:
  1. a hand-made vertical export in v3-assets/hero/picks/mobile/ with the same
     base name (e.g. indulgent-1.mp4 or indulgent-1.mov / .jpg / .webp), framed
     for phones; or, if there isn't one,
  2. an automatic 9:16 crop of the desktop file in public/hero/, centred on the
     slide's `focus` x position.

Run from the repo root: python3 scripts/build-hero-mobile.py
Needs ffmpeg (clips) and Pillow (photos). Re-run after adding or changing files
in picks/mobile/.
"""
import pathlib, re, subprocess, sys
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / 'app/data/v3.js'
DESKTOP = ROOT / 'public/hero'
OUT = ROOT / 'public/hero/mobile'
HANDMADE = ROOT / 'v3-assets/hero/picks/mobile'
SECONDS = 4

def run(*args):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', *args], check=True)

def find_handmade(base, exts):
    for ext in exts:
        for f in HANDMADE.glob(f'{base}{ext}') if HANDMADE.exists() else []:
            return f
    return None

def crop_filter(focus_x):
    # 9:16 window at full height, its centre at focus_x of the frame (clamped)
    return f"crop=ih*9/16:ih:max(0\\,min(iw-ih*9/16\\,iw*{focus_x}-ih*9/32)):0"

def main():
    src = DATA.read_text()
    block = src[src.index('export const heroSlides'):]
    block = block[:block.index('];')]
    slides = re.findall(r"type: '(video|image)', src: '/hero/([^']+)'.*?focus: '(\d+)%", block)
    if not slides:
        sys.exit('No hero slides found in app/data/v3.js')
    OUT.mkdir(parents=True, exist_ok=True)
    for kind, name, fx in slides:
        base = pathlib.Path(name).stem
        x = int(fx) / 100
        if kind == 'video':
            hand = find_handmade(base, ['.mp4', '.mov', '.m4v'])
            vf = 'scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280' if hand else crop_filter(x) + ',scale=720:1280'
            source = hand or DESKTOP / name
            out = OUT / f'{base}.mp4'
            run('-i', str(source), '-t', str(SECONDS), '-an', '-vf', vf + ',format=yuv420p',
                '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-movflags', '+faststart', str(out))
            run('-ss', '0.1', '-i', str(out), '-frames:v', '1', '-q:v', '4', str(OUT / f'{base}.jpg'))
        else:
            hand = find_handmade(base, ['.webp', '.jpg', '.jpeg', '.png'])
            im = Image.open(hand or DESKTOP / name).convert('RGB')
            w, h = im.size
            if not hand:
                cw = round(h * 9 / 16)
                left = max(0, min(w - cw, round(w * x - cw / 2)))
                im = im.crop((left, 0, left + cw, h))
            if im.height > 1280:
                im = im.resize((round(im.width * 1280 / im.height), 1280), Image.LANCZOS)
            im.save(OUT / f'{base}.webp', 'WEBP', quality=80, method=6)
        print(f"{'hand-made' if hand else 'auto-crop'}  {kind:5}  {base}")

if __name__ == '__main__':
    main()
