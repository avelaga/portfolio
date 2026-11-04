'use client';

import { useEffect, useRef, useState } from 'react';
import shared from '../hero/picker.module.scss';
import styles from './cropper.module.scss';

const PHONE_RATIO = 4 / 5; // the card's shape on phones (v3.scss)
const CENTRE = '50% 50%';

const parse = (pos) => (pos ?? CENTRE).split(' ').map((v) => parseFloat(v) / 100);
const format = (x, y) => `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
const clamp = (v) => Math.min(1, Math.max(0, v));

// One photo: the whole image with the phone crop drawn on it (drag it to move
// it), and the crop as the phone card shows it
function Photo({ src, lead, focus, onChange }) {
  const [ratio, setRatio] = useState(null); // the photo's width / height
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const [x, y] = parse(focus);
  const measure = (img) => setRatio(img.naturalWidth / img.naturalHeight);

  // A photo that loaded before the page's script took over never sends React its
  // load event, so check for that too
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth) measure(img);
  }, []);

  // The crop spans the photo's full height (wide photos) or full width (tall
  // ones), so it only moves along the other axis
  const wide = ratio == null || ratio > PHONE_RATIO;
  const size = wide ? PHONE_RATIO / ratio : ratio / PHONE_RATIO; // crop span, 0–1
  const crop = wide
    ? { width: `${size * 100}%`, height: '100%', left: `${x * (1 - size) * 100}%`, top: 0 }
    : { width: '100%', height: `${size * 100}%`, left: 0, top: `${y * (1 - size) * 100}%` };

  // Centre the crop on the pointer, as far as the photo's edges allow
  const moveTo = (e) => {
    if (size >= 1) return;
    const r = frameRef.current.getBoundingClientRect();
    const at = wide ? (e.clientX - r.left) / r.width : (e.clientY - r.top) / r.height;
    const pos = clamp((at - size / 2) / (1 - size));
    onChange(wide ? format(pos, y) : format(x, pos));
  };

  return (
    <div className={styles.photo}>
      <div
        ref={frameRef}
        className={styles.frame}
        style={{ aspectRatio: ratio ?? 3 / 2 }}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); moveTo(e); }}
        onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e); }}
      >
        <img ref={imgRef} src={src} alt="" draggable={false} onLoad={(e) => measure(e.currentTarget)} />
        {ratio && <div className={styles.window} style={crop} />}
      </div>
      <div className={styles.result}>
        <img src={src} alt="" style={{ objectPosition: focus ?? CENTRE }} />
      </div>
      <div className={styles.meta}>
        <span className={styles.name}>{lead && <b>Lead </b>}{src.split('/').pop()}</span>
        <span className={styles.value}>{focus ?? CENTRE}</span>
        {focus && focus !== CENTRE && <button type="button" onClick={() => onChange(CENTRE)}>Centre</button>}
      </div>
    </div>
  );
}

export default function CardCropper({ cards }) {
  const [focus, setFocus] = useState(() => Object.fromEntries(
    cards.flatMap((c) => c.photos).filter((p) => p.phoneFocus).map((p) => [p.src, p.phoneFocus]),
  ));
  const [status, setStatus] = useState('Saved');
  const firstRender = useRef(true);

  // Save every change straight to card-focus.json, so the home page shows it on reload
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    setStatus('Saving…');
    const t = setTimeout(async () => {
      try {
        const res = await fetch('/api/dev/card-focus', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(focus) });
        const data = await res.json();
        setStatus(res.ok ? 'Saved' : data.error || 'Not saved');
      } catch {
        setStatus('Not saved (is the dev server running?)');
      }
    }, 300);
    return () => clearTimeout(t);
  }, [focus]);

  return (
    <div className={shared.page} data-lenis-prevent>
      <header className={shared.bar}>
        <h1 className={shared.title}>Card crops</h1>
        <span className={styles.hint}>Phones show each card photo at 4:5. Drag the box to choose what stays in frame; desktop is unaffected.</span>
        <span className={shared.status}>{status}</span>
        <a className={shared.link} href="/" target="_blank" rel="noreferrer">Home page ↗</a>
      </header>

      {cards.map((card) => (
        <section key={card.id} className={styles.card}>
          <h2 className={shared.heading}>{card.title}<span className={shared.summary}>{card.photos.length} photos</span></h2>
          <div className={styles.row}>
            {card.photos.map(({ src }, i) => (
              <Photo
                key={src}
                src={src}
                lead={i === 0}
                focus={focus[src]}
                onChange={(pos) => setFocus((f) => ({ ...f, [src]: pos }))}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
