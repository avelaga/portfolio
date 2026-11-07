"""Write phone-sized copies of the site's photos.

Every photo in public/images wider than PHONE_WIDTH gets a copy at that width
beside it (name-1290.webp), and app/data/image-sizes.json records which photos
have one and how wide the original is. FadeInOnLoad and CardSlideshow read that
file to offer both sizes through srcset, so a phone downloads the smaller copy
and desktop keeps the full photo.

1290px covers the widest phone at full sharpness (430px wide at 3x). Re-run after
adding or replacing photos, then commit the copies with the JSON:
  python3 scripts/build-image-sizes.py
"""
import json
import pathlib

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMAGES = ROOT / 'public/images'
OUT = ROOT / 'app/data/image-sizes.json'
PHONE_WIDTH = 1290
SUFFIX = f'-{PHONE_WIDTH}'


def main():
    sizes = {}
    wanted = set()
    for path in sorted(IMAGES.rglob('*')):
        if path.suffix.lower() not in ('.webp', '.jpg', '.jpeg', '.png') or path.stem.endswith(SUFFIX):
            continue
        with Image.open(path) as im:
            width, height = im.size
            if width <= PHONE_WIDTH:
                continue
            copy = path.with_name(f'{path.stem}{SUFFIX}.webp')
            wanted.add(copy)
            # Only rebuild when the original is newer than its copy
            if not copy.exists() or copy.stat().st_mtime < path.stat().st_mtime:
                small = im.convert('RGB').resize((PHONE_WIDTH, round(height * PHONE_WIDTH / width)), Image.LANCZOS)
                small.save(copy, 'WEBP', quality=80, method=6)
                print(f'wrote {copy.relative_to(ROOT)}')
        sizes['/' + str(path.relative_to(ROOT / 'public'))] = width

    # Copies whose original is gone or no longer wider than the phone size
    for copy in IMAGES.rglob(f'*{SUFFIX}.webp'):
        if copy not in wanted:
            copy.unlink()
            print(f'removed {copy.relative_to(ROOT)}')

    OUT.write_text(json.dumps(sizes, indent=2) + '\n')
    print(f'{len(sizes)} photos have a phone copy')


if __name__ == '__main__':
    main()
