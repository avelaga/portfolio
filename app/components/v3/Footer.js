import Link from 'next/link';
import { elsewhereLinks } from '../../data/v3';

// `extraLinks` (merch pages: Fourthwall's policy pages) sit on the right of the
// same footer bar, in place of the site note
export default function Footer({ extraLinks }) {
  return (
    <footer className="v3-footer">
      <div className="v3-footer-links">
        {elsewhereLinks.map((link) => link.internal
          ? <Link key={link.label} href={link.href}>{link.label}</Link>
          : <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        )}
      </div>
      {extraLinks?.length
        ? (
          <nav className="v3-footer-extra" aria-label="Shop policies">
            {extraLinks.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
          </nav>
        )
        : <div className="v3-footer-note">abhi.work</div>}
    </footer>
  );
}
