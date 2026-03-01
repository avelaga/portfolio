'use client';

import './globals.scss';
import './styles/App.scss';
import './styles/pages.scss';
import './styles/layout.scss';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import Script from 'next/script';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XGMDCDEFQ3', { page_path: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const container = sketchRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Perlin noise implementation
    const perm = new Uint8Array(512);
    const grad3 = [
      [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
      [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
      [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
    ];
    for (let i = 0; i < 256; i++) perm[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [perm[i], perm[j]] = [perm[j], perm[i]];
    }
    for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];

    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    function lerp(a, b, t) { return a + t * (b - a); }
    function dot3(g, x, y, z) { return g[0] * x + g[1] * y + g[2] * z; }

    function noise3d(x, y, z) {
      const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
      x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
      const u = fade(x), v = fade(y), w = fade(z);
      const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
      return (lerp(
        lerp(lerp(dot3(grad3[perm[AA] % 12], x, y, z), dot3(grad3[perm[BA] % 12], x - 1, y, z), u),
             lerp(dot3(grad3[perm[AB] % 12], x, y - 1, z), dot3(grad3[perm[BB] % 12], x - 1, y - 1, z), u), v),
        lerp(lerp(dot3(grad3[perm[AA + 1] % 12], x, y, z - 1), dot3(grad3[perm[BA + 1] % 12], x - 1, y, z - 1), u),
             lerp(dot3(grad3[perm[AB + 1] % 12], x, y - 1, z - 1), dot3(grad3[perm[BB + 1] % 12], x - 1, y - 1, z - 1), u), v), w)
        + 1) / 2;
    }

    const spacing = 30;
    const margin = 30;
    let t = 0;
    let animId;
    let lastTime = 0;
    const interval = 1000 / 30;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw(now) {
      animId = requestAnimationFrame(draw);
      if (document.hidden || now - lastTime < interval) return;
      lastTime = now;
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.196)';
      for (let y = margin; y <= canvas.height - margin; y += spacing) {
        for (let x = margin; x <= canvas.width - margin; x += spacing) {
          const n = noise3d(x * 0.01, y * 0.01, t);
          const dotSize = n * 31 - 1;
          const r = dotSize / 10;
          if (r > 0) {
            ctx.beginPath();
            ctx.arc(x, y + dotSize, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      t += 0.01;
    }
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="preload" href="/fonts/Berthold-Akzidenz-Grotesk-BE-Li.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NimbusSanL-Bol.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <title>Abhi Velaga</title>
        <meta property="og:title" content="Abhi Velaga" />
        <meta property="og:image" content="images/home/mecrop.jpg" />
        <meta property="og:site_name" content="Software Developer, Musician, Artist" />
        <meta property="og:description" content="Software Developer, Musician, Artist" />
        <meta property="og:url" content="https://abhi.work" />
        <meta name="description" content="Software Developer, Musician, Artist" />
        <meta name="keywords" content="Abhinav Velaga, UT Austin, Indulgent, Raspberry Pi, Rock Music, Film Photography, Electronics, Arduino, Art, Kodak, Portra, Nikon, Bronica, KVRX, Computer Science, Developer, Shivering Demons, Caladan, SXSW" />
        <meta name="author" content="Abhi Velaga" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Software Developer, Musician, Artist" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGMDCDEFQ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-XGMDCDEFQ3');
          `}
        </Script>
      </head>
      <body>
        <div ref={sketchRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, animation: 'appear 2.5s forwards' }} />
        {children}
      </body>
    </html>
  );
}
