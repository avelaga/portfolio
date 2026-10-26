'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDE_MS = 5000;

export default function HeroSlideshow({ slides }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRefs = useRef([]);
  const stopped = paused || reducedMotion;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (stopped) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, stopped, slides.length]);

  // Each clip starts from the top when its slide comes in
  useEffect(() => {
    const video = videoRefs.current[active];
    if (video) video.currentTime = 0;
  }, [active]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && !stopped) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, stopped]);

  const next = (active + 1) % slides.length;
  const current = slides[active];

  return (
    <div className="v3-slideshow">
      {slides.map((slide, i) => (
        <div key={slide.src} className={`v3-slide${i === active ? ' is-active' : ''}`} aria-hidden={i !== active}>
          {slide.type === 'video'
            ? <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={slide.src}
                poster={slide.poster}
                // Only the showing slide and the one after it load up front
                preload={i === active || i === next ? 'auto' : 'none'}
                muted
                loop
                playsInline
                style={{ objectPosition: slide.focus }}
              />
            : <img
                src={slide.src}
                alt=""
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{ objectPosition: slide.focus }}
              />}
        </div>
      ))}

      <div className="v3-slideshow-controls">
        <a className="v3-slide-caption" href={`#${current.project}`}>{current.caption}</a>
        {!reducedMotion && (
          <button type="button" className="v3-slide-pause" onClick={() => setPaused(!paused)}>
            {paused ? 'Play' : 'Pause'}
          </button>
        )}
      </div>
    </div>
  );
}
