import widths from '../data/image-sizes.json';

// Photos wider than a phone have a 1290px copy beside them (name-1290.webp, built
// by scripts/build-image-sizes.py). This offers both through srcset, so a phone
// downloads the copy and a desktop keeps the full photo. Photos without a copy
// get nothing extra.
export function srcSetFor(src) {
  const width = widths[src];
  if (!width) return undefined;
  return `${src.replace(/\.[^.]+$/, '-1290.webp')} 1290w, ${src} ${width}w`;
}
