'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDE_MS = 4000;

// Phones held upright get their own vertical (9:16) slides; tablets, phones on
// their side and desktop get the landscape ones
export const PHONE_HERO = '(max-width: 600px) and (orientation: portrait)';

const still = (slide) => slide.poster || slide.src;

export default function HeroSlideshow({ slides: landscapeSlides, phoneSlides }) {
  // Which set to show is only known in the browser. Until then (the server
  // render and the first moment after load) the first slide's still is shown,
  // picked by the browser itself, so a phone never starts on the landscape files.
  const [phone, setPhone] = useState(null);
  const slides = phone && phoneSlides ? phoneSlides : landscapeSlides;

  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRefs = useRef([]);
  // Slides that have been shown or are up next. Only these get their files, so
  // the page downloads the current and next slide, not all of them (a stacked
  // slideshow counts as "on screen", so lazy loading alone fetches every slide).
  const [reached, setReached] = useState(() => new Set([0, 1]));
  // Reduced-motion visitors get a still frame; otherwise it always plays
  const stopped = reducedMotion;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Pick the set, and start it over from the top if the phone is turned
  useEffect(() => {
    const mq = window.matchMedia(PHONE_HERO);
    const pick = () => {
      setPhone(mq.matches);
      setActive(0);
      setReached(new Set([0, 1]));
      videoRefs.current = [];
    };
    pick();
    mq.addEventListener('change', pick);
    return () => mq.removeEventListener('change', pick);
  }, []);

  useEffect(() => {
    if (stopped || phone === null) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, stopped, slides.length, phone]);

  useEffect(() => {
    const upcoming = (active + 1) % slides.length;
    setReached((prev) => (prev.has(active) && prev.has(upcoming) ? prev : new Set([...prev, active, upcoming])));
  }, [active, slides.length]);

  // Each clip starts from the top when its slide comes in
  useEffect(() => {
    const video = videoRefs.current[active];
    if (video) video.currentTime = 0;
  }, [active, phone]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && !stopped) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, stopped, phone]);

  if (phone === null) {
    const first = landscapeSlides[0];
    const firstPhone = phoneSlides?.[0];
    return (
      <div className="v3-slideshow">
        <div className="v3-slide is-active">
          <picture>
            {firstPhone && <source media={PHONE_HERO} srcSet={still(firstPhone)} />}
            <img src={still(first)} alt="" style={{ objectPosition: first.focus }} />
          </picture>
        </div>
      </div>
    );
  }

  const next = (active + 1) % slides.length;
  const current = slides[active];

  return (
    <div className="v3-slideshow">
      {slides.map((slide, i) => (
        <div key={slide.src} className={`v3-slide${i === active ? ' is-active' : ''}`} aria-hidden={i !== active}>
          {!reached.has(i) ? null : slide.type === 'video'
            ? <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={slide.src}
                poster={slide.poster}
                // Only the showing slide and the one after it load up front
                preload={i === active || i === next ? 'auto' : 'metadata'}
                muted
                loop
                playsInline
                style={{ objectPosition: slide.focus }}
              />
            : <img
                src={slide.src}
                alt=""
                loading="eager"
                style={{ objectPosition: slide.focus }}
              />}
        </div>
      ))}

      <div className="v3-slideshow-controls">
        <a className="v3-slide-caption" href={`#${current.project}`}>{current.caption}</a>
      </div>
    </div>
  );
}
