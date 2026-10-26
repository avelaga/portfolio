import { useRef } from 'react';
import Link from 'next/link';
import FadeInOnLoad from '../FadeInOnLoad';

// V1's menu curve (CSS 'ease'): a gentle start, a glide through the middle, a soft stop
const SWEEP_EASE = 'ease';
const SWEEP_IN_MS = 1100;
const SWEEP_OUT_MS = 700;

// Drives the title-bar invert with the Web Animations API instead of a CSS
// transition. Browsers cut a reversed transition short in proportion to how far it
// got, so on a quick hover the bar vanished instead of easing out. Here each move
// starts from wherever the bar is, and leaving always takes the full out time.
function useSweep() {
  const ref = useRef(null);
  const animation = useRef(null);

  const to = (target) => {
    const bar = ref.current;
    if (!bar) return;
    const matrix = getComputedStyle(bar).transform;
    const from = matrix === 'none' ? 0 : parseFloat(matrix.slice(7));
    animation.current?.cancel();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduceMotion ? 0 : target === 1 ? SWEEP_IN_MS * (1 - from) : SWEEP_OUT_MS;
    const header = bar.parentElement;
    header.classList.add('is-sweeping');
    const run = bar.animate(
      [{ transform: `scaleX(${from})` }, { transform: `scaleX(${target})` }],
      { duration, easing: SWEEP_EASE, fill: 'forwards' },
    );
    if (target === 0) run.onfinish = () => header.classList.remove('is-sweeping');
    animation.current = run;
  };

  return { ref, show: () => to(1), hide: () => to(0) };
}

function Img({ src, alt, className }) {
  if (!src) return <div className={`${className} v3-img-placeholder`}><span>In progress</span></div>;
  // V2's per-image fade-in once each photo loads
  return <FadeInOnLoad src={src} alt={alt} cls={className} />;
}

function ProjectLink({ link }) {
  if (!link) return null;
  const label = <>{link.label} <span aria-hidden="true">→</span></>;
  return link.external
    ? <a className="v3-row-link" href={link.href} target="_blank" rel="noopener noreferrer">{label}</a>
    : <Link className="v3-row-link" href={link.href}>{label}</Link>;
}

export default function ProjectRow({ project, index, imageSide, onSelect }) {
  const { id, tag, year, title, description, link, lead, images } = project;
  const sweep = useSweep();

  return (
    // --i offsets each card's sticky position so the headers stack instead of overlapping
    <article id={id} className={`v3-row v3-row--image-${imageSide}`} style={{ '--i': index }}>
      {/* Clicking a title bar, e.g. one stacked at the top, brings that card back into view */}
      <header
        className="v3-row-header"
        role="button"
        tabIndex={0}
        aria-label={`Go to ${title}`}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
          }
        }}
        // Mouse only, so a tap on a phone doesn't leave the bar stuck on
        onPointerEnter={(e) => e.pointerType === 'mouse' && sweep.show()}
        onPointerLeave={(e) => e.pointerType === 'mouse' && sweep.hide()}
        onFocus={(e) => e.currentTarget.matches(':focus-visible') && sweep.show()}
        onBlur={sweep.hide}
      >
        <h3 className="v3-row-title">{title}</h3>
        <div className="v3-row-meta">
          <span className={tag === 'Client' ? 'v3-tag--client' : undefined}>{tag}</span>
          {year && <>
            <span className="v3-row-meta-divider" aria-hidden="true">·</span>
            <span>{year}</span>
          </>}
        </div>
        {/* Last child, so the invert blends over the text */}
        <span ref={sweep.ref} className="v3-row-sweep" aria-hidden="true" />
      </header>
      <div className="v3-row-body">
        <div className="v3-row-media">
          <Img src={lead} alt={title} className="v3-row-lead" />
          <div className="v3-row-thumbs">
            {images.map((src, i) => <Img key={i} src={src} alt={`${title} ${i + 2}`} className="v3-row-thumb" />)}
          </div>
        </div>
        <div className="v3-row-text">
          <p className="v3-row-description">{description}</p>
          <ProjectLink link={link} />
        </div>
      </div>
    </article>
  );
}
