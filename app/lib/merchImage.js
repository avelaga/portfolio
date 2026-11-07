// Fourthwall serves every product photo at 1920px wide from a signed imgproxy URL
// (imgproxy.fourthwall.dev/<signature>/w:1920/...), so its size can't be changed
// from here: an edited URL fails the signature. Instead the photos go through
// Next's own image optimizer (/_next/image, allowed in next.config.js), which
// resizes and caches them. It keeps WebP transparency, and its URLs are on this
// site, so ProductPhoto can still read the pixels to trim margins.
//
// Widths must be in Next's default deviceSizes/imageSizes, and the quality in
// images.qualities, or the optimizer refuses the request.
const WIDTHS = [384, 640, 828, 1080, 1200, 1920];

export const merchSrc = (url, width) =>
  url ? `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=75` : undefined;

export const merchSrcSet = (url) =>
  url ? WIDTHS.map((w) => `${merchSrc(url, w)} ${w}w`).join(', ') : undefined;

// `sizes` for each place a product photo appears (see v3.scss): the shop grid is
// three across (two below 900px), and a product page's main photo is 7/12 of the
// 1360px content width (full width below 900px), with five thumbnails under it
export const MERCH_SIZES = {
  grid: '(max-width: 900px) 50vw, min(33vw, 460px)',
  main: '(max-width: 900px) 100vw, min(58vw, 800px)',
  thumb: '(max-width: 900px) 20vw, 160px',
};
