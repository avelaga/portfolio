import BackLink from './BackLink';
import Header from './Header';
import Footer from './Footer';

// Shared V3 shell for every project page: header, the back link (it scrolls up
// with the page, then sticks under the name in the header), an intro (title,
// type · year line, optional subtitle and statement), the page's content, footer.
export default function ProjectPage({ title, projectId, backLabel = 'Portfolio', navActive, tag, year, subtitle, statement, headerExtra, footerLinks, className = '', children }) {
  return (
    <div className={`v3 ${className}`}>
      <Header active={navActive} extra={headerExtra} />

      {/* Outside the intro, so it can stay stuck for the whole page */}
      {backLabel && (
        <div className="v3-back-bar">
          <BackLink projectId={projectId} label={backLabel} />
        </div>
      )}

      <section className={`v3-gallery-intro${backLabel ? ' v3-gallery-intro--after-back' : ''}`}>
        <h1 className="v3-gallery-title">{title}</h1>
        {(tag || year) && (
          <div className="v3-row-meta">
            {tag && <span>{tag}</span>}
            {year && <>
              {tag && <span className="v3-row-meta-divider" aria-hidden="true">·</span>}
              <span>{year}</span>
            </>}
          </div>
        )}
        {subtitle && <p className="v3-gallery-subtitle">{subtitle}</p>}
        {statement && <div className="v3-gallery-statement">{statement}</div>}
      </section>

      {children}

      <Footer extraLinks={footerLinks} />
    </div>
  );
}
