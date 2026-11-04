'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './picker.module.scss';

const SLIDE_S = 3; // matches SLIDE_MS in HeroSlideshow

const isClip = (file) => file.endsWith('.mp4');
const baseName = (file) => file.replace(/\.[^.]+$/, '');
const loopLength = (count) => {
  const s = count * SLIDE_S;
  return `${Math.floor(s / 60)} min ${s % 60} s`;
};

function Thumb({ dir, file, number, selected, onSelect, actions, dragProps }) {
  const videoRef = useRef(null);
  const src = `${dir}/${file}`;
  return (
    <div
      className={`${styles.thumb}${selected ? ` ${styles.selected}` : ''}`}
      onClick={onSelect}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => { const v = videoRef.current; if (v) { v.pause(); v.currentTime = 0; } }}
      {...dragProps}
    >
      <div className={styles.media}>
        {isClip(file)
          ? <video ref={videoRef} src={src} poster={`${dir}/${baseName(file)}.jpg`} muted loop playsInline preload="none" />
          : <img src={src} alt="" loading="lazy" draggable={false} />}
      </div>
      <div className={styles.thumbMeta}>
        {number != null && <span className={styles.number}>{number}</span>}
        <span className={styles.kind}>{isClip(file) ? 'Clip' : 'Photo'}</span>
        <span className={styles.name}>{baseName(file)}</span>
      </div>
      <div className={styles.actions} onClick={(e) => e.stopPropagation()}>{actions}</div>
    </div>
  );
}

export default function HeroPicker({ files, initialPicks, captions, dirs }) {
  const [set, setSet] = useState('desktop');
  const [picks, setPicks] = useState(initialPicks);
  const [selected, setSelected] = useState(initialPicks.desktop[0] ?? null);
  const [status, setStatus] = useState('Saved');
  const [dropAt, setDropAt] = useState(null); // index in the list a drag would land at
  const drag = useRef(null); // { file, from: 'list' | 'pool' }
  const firstRender = useRef(true);

  const dir = dirs[set];
  const list = picks[set];
  const pool = files[set].filter((f) => !list.includes(f));

  // Save every change straight to hero-picks.json, so the home page shows it on reload
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    setStatus('Saving…');
    const t = setTimeout(async () => {
      try {
        const res = await fetch('/api/dev/hero-picks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(picks) });
        const data = await res.json();
        setStatus(res.ok ? 'Saved' : data.error || 'Not saved');
      } catch {
        setStatus('Not saved (is the dev server running?)');
      }
    }, 300);
    return () => clearTimeout(t);
  }, [picks]);

  const update = (next) => setPicks((p) => ({ ...p, [set]: next }));
  const insert = (file, index) => {
    const without = list.filter((f) => f !== file);
    const from = list.indexOf(file);
    const at = from !== -1 && from < index ? index - 1 : index;
    update([...without.slice(0, at), file, ...without.slice(at)]);
  };
  const remove = (file) => update(list.filter((f) => f !== file));
  const move = (file, by) => {
    const i = list.indexOf(file);
    const j = Math.min(list.length - 1, Math.max(0, i + by));
    const next = [...list];
    next.splice(i, 1);
    next.splice(j, 0, file);
    update(next);
  };

  // Arrow keys move the selected slide, Delete takes it out, Enter adds it
  useEffect(() => {
    const onKey = (e) => {
      if (!selected || e.target.closest('input, textarea')) return;
      const inList = list.includes(selected);
      if (inList && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); move(selected, e.key === 'ArrowLeft' ? -1 : 1); }
      else if (inList && (e.key === 'Backspace' || e.key === 'Delete')) { e.preventDefault(); remove(selected); }
      else if (!inList && e.key === 'Enter') { e.preventDefault(); update([...list, selected]); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const switchSet = (next) => {
    setSet(next);
    setSelected(picks[next][0] ?? null);
  };

  const listDrag = (file, index) => ({
    draggable: true,
    onDragStart: (e) => { drag.current = { file, from: 'list' }; e.dataTransfer.effectAllowed = 'move'; },
    onDragEnd: () => { drag.current = null; setDropAt(null); },
    onDragOver: (e) => {
      e.preventDefault();
      // Before or after this slide, by which half the pointer is over
      const r = e.currentTarget.getBoundingClientRect();
      setDropAt(e.clientX < r.left + r.width / 2 ? index : index + 1);
    },
  });
  const poolDrag = (file) => ({
    draggable: true,
    onDragStart: (e) => { drag.current = { file, from: 'pool' }; e.dataTransfer.effectAllowed = 'move'; },
    onDragEnd: () => { drag.current = null; setDropAt(null); },
  });

  const onListDrop = (e) => {
    e.preventDefault();
    if (drag.current) insert(drag.current.file, dropAt ?? list.length);
    drag.current = null;
    setDropAt(null);
  };
  const onPoolDrop = (e) => {
    e.preventDefault();
    if (drag.current?.from === 'list') remove(drag.current.file);
    drag.current = null;
    setDropAt(null);
  };

  const clipCount = list.filter(isClip).length;
  const caption = selected ? captions[baseName(selected)] : null;
  const selectedIndex = list.indexOf(selected);

  return (
    <div className={`${styles.page} ${set === 'mobile' ? styles.phone : ''}`} data-lenis-prevent>
      <header className={styles.bar}>
        <h1 className={styles.title}>Hero picks</h1>
        <div className={styles.tabs} role="tablist">
          {['desktop', 'mobile'].map((s) => (
            <button key={s} type="button" role="tab" aria-selected={set === s} className={set === s ? styles.tabActive : styles.tab} onClick={() => switchSet(s)}>
              {s === 'desktop' ? 'Desktop' : 'Phone'} <span className={styles.count}>{picks[s].length}</span>
            </button>
          ))}
        </div>
        <span className={styles.status}>{status}</span>
        <a className={styles.link} href="/" target="_blank" rel="noreferrer">Home page ↗</a>
      </header>

      <div className={styles.layout}>
        <main>
          <section>
            <h2 className={styles.heading}>
              In the slideshow
              <span className={styles.summary}>{list.length} slides · {clipCount} clips, {list.length - clipCount} photos · {loopLength(list.length)} loop</span>
            </h2>
            <div
              className={styles.grid}
              onDragOver={(e) => { e.preventDefault(); if (e.target === e.currentTarget) setDropAt(list.length); }}
              onDrop={onListDrop}
            >
              {list.map((file, i) => (
                <div key={file} className={styles.slot}>
                  {dropAt === i && <span className={styles.marker} />}
                  <Thumb
                    dir={dir}
                    file={file}
                    number={i + 1}
                    selected={file === selected}
                    onSelect={() => setSelected(file)}
                    dragProps={listDrag(file, i)}
                    actions={<>
                      <button type="button" onClick={() => move(file, -1)} aria-label="Earlier">←</button>
                      <button type="button" onClick={() => move(file, 1)} aria-label="Later">→</button>
                      <button type="button" onClick={() => remove(file)} aria-label="Take out">×</button>
                    </>}
                  />
                  {dropAt === list.length && i === list.length - 1 && <span className={`${styles.marker} ${styles.markerEnd}`} />}
                </div>
              ))}
              {list.length === 0 && <p className={styles.empty}>Drag files up here, or press + on one.</p>}
            </div>
          </section>

          <section className={styles.poolSection}>
            <h2 className={styles.heading}>
              Not used
              <span className={styles.summary}>{pool.length} in the folder · drag up, or +</span>
            </h2>
            <div className={styles.grid} onDragOver={(e) => e.preventDefault()} onDrop={onPoolDrop}>
              {pool.map((file) => (
                <Thumb
                  key={file}
                  dir={dir}
                  file={file}
                  selected={file === selected}
                  onSelect={() => setSelected(file)}
                  dragProps={poolDrag(file)}
                  actions={<button type="button" onClick={() => update([...list, file])} aria-label="Add to the end">+</button>}
                />
              ))}
              {pool.length === 0 && <p className={styles.empty}>Everything in the folder is in the slideshow.</p>}
            </div>
          </section>
        </main>

        <aside className={styles.preview}>
          {selected ? (
            <>
              <div className={styles.frame}>
                {isClip(selected)
                  ? <video key={selected} src={`${dir}/${selected}`} poster={`${dir}/${baseName(selected)}.jpg`} autoPlay muted loop playsInline />
                  : <img key={selected} src={`${dir}/${selected}`} alt="" />}
                {/* What a 1080p monitor shows of a 16:9 frame (the hero is ~2.3:1 there) */}
                {set === 'desktop' && <div className={styles.band} />}
              </div>
              <dl className={styles.details}>
                <dt>File</dt><dd>{selected}</dd>
                <dt>Caption</dt><dd>{caption}</dd>
                <dt>Position</dt><dd>{selectedIndex === -1 ? 'Not used' : `${selectedIndex + 1} of ${list.length}`}</dd>
              </dl>
              {set === 'desktop' && <p className={styles.note}>Lines mark what a 1080p monitor shows; above and below them is cropped there.</p>}
              <p className={styles.note}>Keys: ← → move the selected slide, Delete takes it out, Enter adds an unused one.</p>
            </>
          ) : <p className={styles.note}>Click a slide to preview it.</p>}
        </aside>
      </div>
    </div>
  );
}
