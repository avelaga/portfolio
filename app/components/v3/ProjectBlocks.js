'use client';

import { useEffect, useState } from 'react';
import FadeInOnLoad from '../FadeInOnLoad';

// Building blocks for V3 project pages, carrying over V2's music and software
// layouts: titled sections, a wide 16:9 photo, a pair of photos side by side,
// release covers, YouTube videos with venue and date, and short looping clips.

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

export function WidePhoto({ src, alt }) {
  return <FadeInOnLoad src={src} alt={alt} cls="v3-block-wide" />;
}

export function PhotoPair({ photos }) {
  return (
    <div className="v3-block-pair">
      {photos.map((p) => <FadeInOnLoad key={p.src} src={p.src} alt={p.alt} cls="v3-block-pair-img" />)}
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
          <span className="v3-release-title">{r.title}</span>
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
            title={`${v.venue}, ${v.date}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <figcaption className="v3-row-meta">
            <span>{v.venue}</span>
            <span className="v3-row-meta-divider" aria-hidden="true">·</span>
            <span>{v.date}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

// Short muted clips that loop in place, like the home hero. Reduced-motion
// visitors get the poster frame instead of playback.
export function Loops({ clips }) {
  const [still, setStill] = useState(false);
  useEffect(() => {
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className={`v3-loops v3-loops--${clips.length}`}>
      {clips.map((c) => (
        <figure key={c.src} className="v3-loop">
          <video src={c.src} poster={c.poster} muted loop playsInline autoPlay={!still} preload="metadata" />
          <figcaption className="v3-row-meta"><span>{c.caption}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}
