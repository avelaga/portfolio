'use client';

import { useEffect, useRef, useState } from 'react';
import shared from '../hero/picker.module.scss';
import styles from './og.module.scss';

const W = 1200; // the share image size apps expect (see app/lib/meta.js)
const H = 630;
const MIN_WIDTH = 400; // smaller images (icons, thumbnails) aren't offered

// Every image a page shows: <img> sources, video posters and <picture> sources,
// plus its videos (any frame of one can be used). The page is loaded in a very
// tall hidden frame so lazy galleries and card slideshows load everything.
function collectImages(route) {
  return new Promise((resolve) => {
    const frame = document.createElement('iframe');
    frame.style.cssText = 'position:fixed;left:-20000px;top:0;width:1440px;height:30000px;border:0;';
    frame.src = route;
    frame.onload = () => {
      setTimeout(() => {
        const doc = frame.contentDocument;
        const urls = new Set();
        const add = (u) => {
          if (!u) return;
          const url = new URL(u, location.origin);
          if (url.origin === location.origin) urls.add(url.pathname);
        };
        doc.querySelectorAll('img').forEach((img) => { add(img.getAttribute('src')); add(img.currentSrc); });
        doc.querySelectorAll('video[poster]').forEach((v) => add(v.getAttribute('poster')));
        doc.querySelectorAll('video[src], video source[src]').forEach((v) => add(v.getAttribute('src')));
        doc.querySelectorAll('source[srcset], img[srcset]').forEach((s) =>
          s.getAttribute('srcset').split(',').forEach((part) => add(part.trim().split(/\s+/)[0])));
        frame.remove();
        resolve([...urls].filter((u) => !u.startsWith('/og/')));
      }, 2500);
    };
    document.body.appendChild(frame);
  });
}

const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);

// Natural sizes (and a video's length), dropping anything too small to make a
// share image from
function measure(urls) {
  return Promise.all(urls.map((src) => new Promise((resolve) => {
    if (isVideo(src)) {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.onloadedmetadata = () => resolve({ src, video: true, w: video.videoWidth, h: video.videoHeight, duration: video.duration });
      video.onerror = () => resolve(null);
      video.src = src;
      return;
    }
    const img = new Image();
    img.onload = () => resolve({ src, w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve(null);
    img.src = src;
  }))).then((list) => list.filter((i) => i && i.w >= MIN_WIDTH));
}

// A video at a given moment, ready to draw
function seek(video, time) {
  return new Promise((resolve) => {
    if (Math.abs(video.currentTime - time) < 0.01 && video.readyState >= 2) { resolve(); return; }
    video.addEventListener('seeked', resolve, { once: true });
    video.currentTime = time;
  });
}

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Where the photo sits in the 1200×630 frame. The crop is stored as a zoom
// (1 = just covers the frame) and the frame's centre on the photo (0–1 each way)
function layout(image, crop) {
  const scale = Math.max(W / image.w, H / image.h) * crop.zoom;
  const dw = image.w * scale;
  const dh = image.h * scale;
  // Keep the photo covering the whole frame
  const cx = clamp(crop.cx, W / 2 / dw, 1 - W / 2 / dw);
  const cy = clamp(crop.cy, H / 2 / dh, 1 - H / 2 / dh);
  return { scale, dw, dh, left: W / 2 - cx * dw, top: H / 2 - cy * dh, cx, cy };
}

function Cropper({ image, crop, onChange }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const drag = useRef(null);
  const box = layout(image, crop);
  const pct = (v, of) => `${(v / of) * 100}%`;

  // Drag pans the photo; the scroll wheel zooms
  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, cx: box.cx, cy: box.cy };
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const perPx = W / frameRef.current.getBoundingClientRect().width;
    onChange({
      ...crop,
      cx: drag.current.cx - ((e.clientX - drag.current.x) * perPx) / box.dw,
      cy: drag.current.cy - ((e.clientY - drag.current.y) * perPx) / box.dh,
    });
  };
  useEffect(() => {
    const el = frameRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      onChange({ ...crop, cx: box.cx, cy: box.cy, zoom: clamp(crop.zoom * Math.exp(-e.deltaY / 500), 1, 6) });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  });

  // A video shows the chosen moment
  useEffect(() => {
    if (videoRef.current) seek(videoRef.current, crop.time ?? 0);
  }, [image.src, crop.time]);

  const style = { left: pct(box.left, W), top: pct(box.top, H), width: pct(box.dw, W), height: pct(box.dh, H) };
  return (
    <div
      ref={frameRef}
      className={styles.frame}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => { drag.current = null; }}
    >
      {image.video
        ? <video ref={videoRef} src={image.src} muted playsInline preload="auto" style={style} />
        : <img src={image.src} alt="" draggable={false} style={style} />}
      {/* What square-thumbnail apps (e.g. WhatsApp) keep: the centre */}
      <div className={styles.square} />
    </div>
  );
}

export default function OgEditor({ pages, crops: savedCrops, extra }) {
  const [page, setPage] = useState(pages[0]);
  const [images, setImages] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ zoom: 1, cx: 0.5, cy: 0.5 });
  const [saved, setSaved] = useState(savedCrops);
  const [status, setStatus] = useState('');
  // Each image's URL carries its file's last change, so the browser never shows a
  // stale cached copy; a save stamps it anew
  const [versions, setVersions] = useState(() => Object.fromEntries(pages.map((p) => [p.file, p.mtime])));

  // Gather the page's images, and reopen its saved crop if there is one
  useEffect(() => {
    let cancelled = false;
    setImages(null);
    setImage(null);
    setStatus('');
    collectImages(page.route)
      .then((urls) => measure([...new Set([...urls, ...(extra[page.route] ?? [])])]))
      .then((list) => {
        if (cancelled) return;
        setImages(list);
        const prev = saved[page.file];
        const match = prev && list.find((i) => i.src === prev.src);
        setImage(match ?? null);
        setCrop(match ? { zoom: prev.zoom, cx: prev.cx, cy: prev.cy, time: prev.time } : { zoom: 1, cx: 0.5, cy: 0.5 });
      });
    return () => { cancelled = true; };
  }, [page]);

  const choose = (img) => {
    setImage(img);
    setCrop({ zoom: 1, cx: 0.5, cy: 0.5 });
    setStatus('');
  };

  const save = async () => {
    setStatus('Saving…');
    let el;
    if (image.video) {
      el = document.createElement('video');
      el.muted = true;
      el.preload = 'auto';
      el.src = image.src;
      await new Promise((resolve) => { el.onloadeddata = resolve; });
      await seek(el, crop.time ?? 0);
    } else {
      el = new Image();
      el.src = image.src;
      await el.decode();
    }
    const box = layout(image, crop);
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    canvas.getContext('2d').drawImage(el, box.left, box.top, box.dw, box.dh);
    const finalCrop = { src: image.src, zoom: +crop.zoom.toFixed(3), cx: +box.cx.toFixed(4), cy: +box.cy.toFixed(4) };
    if (image.video) finalCrop.time = +(crop.time ?? 0).toFixed(2);
    const res = await fetch('/api/dev/og', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: page.file, image: canvas.toDataURL('image/jpeg', 0.86), crop: finalCrop }),
    });
    const data = await res.json();
    if (res.ok) {
      setSaved((s) => ({ ...s, [page.file]: finalCrop }));
      setVersions((v) => ({ ...v, [page.file]: Date.now() }));
      setStatus('Saved');
    } else {
      setStatus(data.error || 'Not saved');
    }
  };

  // How many of the photo's own pixels span the 1200px width
  const sourceWidth = image ? Math.round(W / layout(image, crop).scale) : 0;

  return (
    <div className={shared.page} data-lenis-prevent>
      <header className={shared.bar}>
        <h1 className={shared.title}>Share images</h1>
        <span className={styles.hint}>Pick a page, pick one of its images, then drag to frame it and scroll (or use the slider) to zoom.</span>
        <span className={shared.status}>{status}</span>
      </header>

      <div className={styles.layout}>
        <nav className={styles.pages}>
          {pages.map((p) => (
            <button key={p.file} type="button" className={p === page ? styles.pageActive : styles.pageItem} onClick={() => setPage(p)}>
              <img src={`/og/${p.file}?v=${versions[p.file]}`} alt="" />
              <span>{p.route}</span>
            </button>
          ))}
        </nav>

        <main className={styles.main}>
          <div className={styles.editor}>
            <div>
              <h2 className={shared.heading}>
                New image
                <span className={shared.summary}>1200 × 630</span>
              </h2>
              {image
                ? <Cropper image={image} crop={crop} onChange={setCrop} />
                : <div className={styles.placeholder}>{images ? 'Choose an image below' : 'Collecting the page’s images…'}</div>}
              {image && (
                <div className={styles.controls}>
                  <label>
                    Zoom
                    <input type="range" min="1" max="6" step="0.01" value={crop.zoom} onChange={(e) => setCrop({ ...crop, zoom: +e.target.value })} />
                  </label>
                  {image.video && (
                    <label>
                      Moment
                      <input type="range" min="0" max={image.duration} step="0.04" value={crop.time ?? 0} onChange={(e) => setCrop({ ...crop, time: +e.target.value })} />
                      <span className={styles.dim}>{(crop.time ?? 0).toFixed(1)}s</span>
                    </label>
                  )}
                  <button type="button" onClick={() => setCrop({ ...crop, zoom: 1, cx: 0.5, cy: 0.5 })}>Reset</button>
                  <span className={sourceWidth < W ? styles.warn : styles.dim}>
                    {sourceWidth < W ? `Upscaled: ${sourceWidth}px of the photo fill 1200px` : `Sharp: ${sourceWidth}px of the photo`}
                  </span>
                  <button type="button" className={styles.save} onClick={save}>Save {page.file}</button>
                </div>
              )}
            </div>
            <div>
              <h2 className={shared.heading}>Current</h2>
              <img className={styles.current} src={`/og/${page.file}?v=${versions[page.file]}`} alt="" />
              {saved[page.file] && <p className={styles.dim}>From {saved[page.file].src.split('/').pop()}</p>}
            </div>
          </div>

          <h2 className={shared.heading}>
            Images on {page.route}
            <span className={shared.summary}>{images ? `${images.length} found` : ''}</span>
          </h2>
          <div className={styles.grid}>
            {images?.map((img) => (
              <button key={img.src} type="button" className={img.src === image?.src ? styles.thumbActive : styles.thumb} onClick={() => choose(img)}>
                {img.video
                  ? <video src={`${img.src}#t=0.1`} muted playsInline preload="metadata" />
                  : <img src={img.src} alt="" loading="lazy" />}
                <span>{img.video && 'Video · '}{img.src.split('/').pop()} · {img.w}×{img.h}</span>
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
