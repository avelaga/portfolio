'use client';

import { useEffect, useRef, useState } from 'react';
import { merchSrc, merchSrcSet, MERCH_SIZES } from '../../../lib/merchImage';

// Fourthwall's product mockups are 3:4 canvases with the garment floating in the
// middle and the top and bottom fifth transparent, so the shirt sat well below
// the title beside it. Once a photo loads, its transparent margins are measured
// (the resized copies come from this site's /_next/image, so the pixels are
// readable) and cropped away; photos
// without transparency (real photos) are shown whole.
const MARGIN = 0.03; // a little air kept around the garment

function measureContent(img) {
  const w = 160;
  const h = Math.round((img.naturalHeight / img.naturalWidth) * w);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);
  const { data } = ctx.getImageData(0, 0, w, h);
  let top = h, bottom = -1, left = w, right = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 8) {
        if (y < top) top = y;
        if (y > bottom) bottom = y;
        if (x < left) left = x;
        if (x > right) right = x;
      }
    }
  }
  if (bottom < 0) return null;
  const crop = {
    x: Math.max(0, left / w - MARGIN),
    y: Math.max(0, top / h - MARGIN),
    w: 0, h: 0,
  };
  crop.w = Math.min(1, (right + 1) / w + MARGIN) - crop.x;
  crop.h = Math.min(1, (bottom + 1) / h + MARGIN) - crop.y;
  // Nothing worth trimming
  if (crop.w > 0.97 && crop.h > 0.97) return null;
  return crop;
}

export default function ProductPhoto({ src, alt }) {
  const [crop, setCrop] = useState(null);
  const [ratio, setRatio] = useState(null);
  const [measured, setMeasured] = useState(false);
  const imgRef = useRef(null);

  const measure = (img) => {
    setRatio(img.naturalWidth / img.naturalHeight);
    try {
      setCrop(measureContent(img));
    } catch {
      setCrop(null); // pixels not readable: show the photo whole
    }
    setMeasured(true);
  };

  // A photo that finished loading before the page's script took over never sends
  // its load event to React, so check for that too
  useEffect(() => {
    setCrop(null);
    setMeasured(false);
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth) measure(img);
  }, [src]);

  // The box takes the shape of what's shown: the garment's own bounds, or the
  // whole photo
  const aspect = crop && ratio ? (crop.w * ratio) / crop.h : ratio || 3 / 4;
  const imgStyle = crop ? {
    position: 'absolute',
    width: `${100 / crop.w}%`,
    height: `${100 / crop.h}%`,
    left: `${(-crop.x / crop.w) * 100}%`,
    top: `${(-crop.y / crop.h) * 100}%`,
    maxWidth: 'none',
  } : { width: '100%', height: '100%' };

  return (
    <div className={`v3-product-main${measured ? ' is-measured' : ''}`} style={{ aspectRatio: aspect }}>
      <img
        key={src}
        ref={imgRef}
        src={merchSrc(src, 1080)}
        srcSet={merchSrcSet(src)}
        sizes={MERCH_SIZES.main}
        alt={alt}
        crossOrigin="anonymous"
        onLoad={(e) => measure(e.currentTarget)}
        style={imgStyle}
      />
    </div>
  );
}
