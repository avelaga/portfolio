'use client';

import { useEffect, useState } from 'react';
import FadeInOnLoad from '../FadeInOnLoad';
import { EXTERNAL_ARROW } from './arrows';

// Building blocks for V3 project pages, carrying over V2's music and software
// layouts: sections (optionally titled), a wide 16:9 photo or looping clip, a
// pair of photos side by side, release covers, and YouTube videos (no captions:
// the player shows the video's own title; `title` is for screen readers).

export function Section({ title, role, years, children }) {
  return (
    <section className="v3-block-section">
      {title && (
        <header className="v3-block-section-header">
          <h2 className="v3-block-section-title">{title}</h2>
          <div className="v3-row-meta">
            <span>{role}</span>
            {years && <>
              <span className="v3-row-meta-divider" aria-hidden="true">·</span>
              <span>{years}</span>
            </>}
          </div>
        </header>
      )}
      {children}
    </section>
  );
}

// priority: set on the page's first photo (see FadeInOnLoad)
export function WidePhoto({ src, alt, priority }) {
  return <FadeInOnLoad src={src} alt={alt} cls="v3-block-wide" priority={priority} />;
}

// A short looping clip set exactly like a wide photo: same crop, no caption, no
// controls, so it reads as one more image in the sequence (a still frame for
// reduced motion)
export function WideVideo({ src, poster, label }) {
  const [still, setStill] = useState(false);
  useEffect(() => {
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  return (
    <video
      className="v3-block-wide"
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      autoPlay={!still}
      preload="metadata"
    />
  );
}

// A screen from a piece of software, shown whole (never cropped like WidePhoto)
// with a 1px line around it: a sheet on the dark page, like the resume
export function Screenshot({ src, alt, priority }) {
  return <FadeInOnLoad src={src} alt={alt} cls="v3-block-screenshot" priority={priority} sizes="(max-width: 900px) 100vw, 50vw" />;
}

// For pages where the words carry the project and the screens back them up
// (software): text on the left, a screen beside it, half and half, the home
// card's layout. The text stays on the left in every row, so it reads straight
// down like one article. Stacks below 900px, text first.
export function TextBeside({ screenshot, children }) {
  return (
    <div className="v3-block-beside">
      <div className="v3-block-beside-text">{children}</div>
      <Screenshot {...screenshot} />
    </div>
  );
}

export function PhotoPair({ photos }) {
  return (
    <div className="v3-block-pair">
      {photos.map((p) => <FadeInOnLoad key={p.src} src={p.src} alt={p.alt} cls="v3-block-pair-img" sizes="(max-width: 600px) 100vw, 50vw" />)}
    </div>
  );
}

export function BodyText({ children }) {
  return <p className="v3-block-text">{children}</p>;
}

export function Releases({ releases }) {
  return (
    <div className="v3-releases">
      {releases.map((r) => (
        <a key={r.title} className="v3-release" href={r.link} target="_blank" rel="noopener noreferrer">
          <FadeInOnLoad src={r.cover} alt={r.alt} cls="v3-release-cover" />
          {/* ↗: opens Spotify or Bandcamp in a new tab */}
          <span className="v3-release-title">{r.title} <span aria-hidden="true">{EXTERNAL_ARROW}</span></span>
          <span className="v3-release-year">{r.year}</span>
        </a>
      ))}
    </div>
  );
}

export function Videos({ videos }) {
  return (
    <div className={`v3-videos${videos.length === 1 ? ' v3-videos--single' : ''}`}>
      {videos.map((v) => (
        <figure key={v.id} className="v3-video">
          <iframe
            loading="lazy"
            src={`https://www.youtube.com/embed/${v.id}`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </figure>
      ))}
    </div>
  );
}
