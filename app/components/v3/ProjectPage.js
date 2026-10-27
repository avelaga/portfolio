import BackLink from './BackLink';
import Header from './Header';
import Footer from './Footer';

// Shared V3 shell for every project page: header, an intro (back link, title,
// type · year line, optional subtitle and statement), the page's own content, footer.
export default function ProjectPage({ title, projectId, backLabel = 'Portfolio', navActive, tag, year, subtitle, statement, headerExtra, footerLinks, className = '', children }) {
  return (
    <div className={`v3 ${className}`}>
      <Header active={navActive} extra={headerExtra} />

      <section className="v3-gallery-intro">
        {backLabel && <BackLink projectId={projectId} label={backLabel} />}
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
