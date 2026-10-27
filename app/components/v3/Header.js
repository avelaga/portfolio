'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { elsewhereLinks } from '../../data/v3';
import { scrollToY } from '../../lib/scroll';

const NAV = [
  { key: 'about', href: '/about', label: 'About' },
  { key: 'merch', href: '/merch', label: 'Merch' },
  { key: 'hi', href: '/hi', label: 'Say hi' },
];

export default function Header({ active, extra }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  // While the menu is open: no page scrolling, Escape closes it, and the page's dot
  // grid is lifted above the menu's backdrop (v3.scss)
  const gridTimer = useRef(0);
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    window.lenis?.stop();
    clearTimeout(gridTimer.current);
    root.classList.add('v3-menu-open', 'v3-menu-grid');
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.lenis?.start();
      root.classList.remove('v3-menu-open');
      window.removeEventListener('keydown', onKey);
      // The dots stay lifted until the backdrop has faded out (0.4s), or they'd dim
      // under it on the way out and then pop back
      gridTimer.current = setTimeout(() => root.classList.remove('v3-menu-grid'), 400);
    };
  }, [open]);

  // On the home page the name takes you back up to the montage instead of reloading
  const toTop = (e) => {
    if (pathname !== '/') return;
    e.preventDefault();
    // From the open menu: Lenis is paused until the menu's cleanup runs, so wake it now
    if (open) {
      setOpen(false);
      window.lenis?.start();
    }
    scrollToY(0);
  };

  const bar = (extraClass = '') => (
    <header className={`v3-header${extraClass}`}>
      <Link href="/" className="v3-logo" onClick={toTop}>Abhi Velaga</Link>
      <nav className="v3-nav">
        {NAV.map((l) => (
          <Link key={l.key} href={l.href} className={active === l.key ? 'is-active' : ''}>{l.label}</Link>
        ))}
        {extra}
      </nav>
      {/* Phones: the links collapse behind a MENU button */}
      <div className="v3-header-mobile">
        {extra}
        <button type="button" className="v3-menu-button" aria-expanded={open} onClick={() => setOpen(true)}>Menu</button>
      </div>
    </header>
  );

  return (
    <>
      {/* Server-rendered bar, handed over once mounted to the fixed one below */}
      {bar(mounted ? ' v3-header--handed-off' : '')}
      {mounted && createPortal(
        <>
          {/* From V2's phone header: stays put the whole time with no background and
              inverts against whatever passes beneath it. Portaled to <body> so the
              blend sees the whole page */}
          <div className="v3-fixed">{bar()}</div>
          <MobileMenu active={active} open={open} close={() => setOpen(false)} toTop={toTop} />
        </>,
        document.body,
      )}
    </>
  );
}

// V2's mobile menu, rebuilt for V3: big stacked italic links between lines, the
// current page inverted, the elsewhere links small underneath
function MobileMenu({ active, open, close, toTop }) {
  return (
    <>
      {/* Blurred backdrop on its own layer, so the page's dot grid can be lifted
          between it and the links while the menu is open (v3.scss) */}
      <div className={`v3-menu-backdrop${open ? ' is-open' : ''}`} aria-hidden="true" />
      <div className={`v3-menu${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <div className="v3-menu-bar">
          <Link href="/" className="v3-logo" onClick={(e) => { close(); toTop(e); }}>Abhi Velaga</Link>
          <button type="button" className="v3-menu-button" onClick={close}>Close</button>
        </div>
        <nav className="v3-menu-links">
          {NAV.map((l) => (
            <Link key={l.key} href={l.href} className={active === l.key ? 'is-active' : ''} onClick={close}>{l.label}</Link>
          ))}
        </nav>
        <div className="v3-menu-elsewhere">
          {elsewhereLinks.map((l) => l.internal
            ? <Link key={l.label} href={l.href} onClick={close}>{l.label}</Link>
            : <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
        </div>
      </div>
    </>
  );
}
