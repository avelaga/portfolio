import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

// Shared V3 shell for every project page: header, an intro (back link, title,
// type · year line, optional subtitle and statement), the page's own content, footer.
export default function ProjectPage({ title, projectId, backLabel = 'Featured work', navActive, tag, year, subtitle, statement, headerExtra, footerLinks, className = '', children }) {
  return (
    <div className={`v3 ${className}`}>
      <Header active={navActive} extra={headerExtra} />

      <section className="v3-gallery-intro">
        {/* scroll={false}: Home.js lands on the card in its stacked spot; Next's own
            jump to the anchor would fire later and override that */}
        {backLabel && <Link href={projectId ? `/#${projectId}` : '/'} scroll={false} className="v3-back-link">← {backLabel}</Link>}
        <h1 className="v3-gallery-title">{title}</h1>
        <div className="v3-row-meta">
          {tag && <span>{tag}</span>}
          {year && <>
            {tag && <span className="v3-row-meta-divider" aria-hidden="true">·</span>}
            <span>{year}</span>
          </>}
        </div>
        {subtitle && <p className="v3-gallery-subtitle">{subtitle}</p>}
        {statement && <div className="v3-gallery-statement">{statement}</div>}
      </section>

      {children}

      <Footer extraLinks={footerLinks} />
    </div>
  );
}
