'use client';

import { useEffect, useRef, useState } from 'react';
import { srcSetFor } from '../../lib/imageSizes';

const SLIDE_MS = 1500;

// One large photo per project card that steps through the project's photos.
// With a mouse it plays only while hovered (the rest of the time it's a still
// photo); on touch screens, which can't hover, it plays on the card in the middle
// of the screen. Never more than one card moving, and none for reduced motion.
// Each photo is { src, phoneFocus }: phoneFocus is the object-position that
// picks what stays in frame on phones (see cardPhotos in app/data/v3.js).
export default function CardSlideshow({ photos, title }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [canHover, setCanHover] = useState(true);
  // The lead photo loads like any image. The second waits until the card is near
  // the screen (a hover steps to it at once, so it has to be ready), and the rest
  // until the card first plays: most cards are scrolled past without a hover,
  // and their slideshows never need downloading
  const [near, setNear] = useState(false);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: '300px 0px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setCanHover(hover);
    if (hover) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      // A band through the middle of the screen
      { rootMargin: '-35% 0px -35% 0px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Stopping (the pointer leaves, or on touch the card leaves the middle of the
    // screen) fades back to the lead, so a card always rests on its chosen photo
    if (!playing) { setActive(0); return; }
    setPlayed(true);
    if (photos.length < 2) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % photos.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [playing, active, photos.length]);

  const hoverProps = canHover ? {
    onPointerEnter: (e) => {
      if (e.pointerType !== 'mouse') return;
      // Step to the next photo right away, so it's clear the hover is what moves it
      if (photos.length > 1) setActive((i) => (i + 1) % photos.length);
      setPlaying(true);
    },
    onPointerLeave: () => setPlaying(false),
  } : {};

  return (
    <div ref={ref} className="v3-card-slides" {...hoverProps}>
      {photos.map(({ src, phoneFocus }, i) => ((i === 1 && !near) || (i > 1 && !played)) ? null : (
        <img
          key={src}
          src={src}
          srcSet={srcSetFor(src)}
          style={phoneFocus ? { '--phone-focus': phoneFocus } : undefined}
          alt={i === 0 ? title : ''}
          loading="lazy"
          className={i === active ? 'is-active' : undefined}
        />
      ))}
    </div>
  );
}
