import Link from 'next/link';
import { elsewhereLinks } from '../../data/v3';

export default function Footer() {
  return (
    <footer className="v3-footer">
      <div className="v3-footer-links">
        {elsewhereLinks.map((link) => link.internal
          ? <Link key={link.label} href={link.href}>{link.label}</Link>
          : <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        )}
      </div>
      <div className="v3-footer-note">abhi.work</div>
    </footer>
  );
}
