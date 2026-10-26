import Link from 'next/link';

export default function Header({ active, extra }) {
  return (
    <header className="v3-header">
      <Link href="/" className="v3-logo">Abhi Velaga</Link>
      <nav className="v3-nav">
        <Link href="/about" className={active === 'about' ? 'is-active' : ''}>About</Link>
        <Link href="/merch" className={active === 'merch' ? 'is-active' : ''}>Merch</Link>
        <Link href="/hi" className={active === 'hi' ? 'is-active' : ''}>Say hi</Link>
        {extra}
      </nav>
    </header>
  );
}
