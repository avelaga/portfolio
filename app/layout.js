'use client';

import './globals.scss';
import './styles/App.scss';
import './styles/pages.scss';
import './styles/layout.scss';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import p5 from 'p5';
import Script from 'next/script';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
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
    const spacing = 30;
    const margin = 30;
    let t = 0;

    const sketch = new p5((p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();
      };

      p.draw = () => {
        p.background(255);
        p.fill(0);
        for (let y = margin; y <= p.height - margin; y += spacing) {
          for (let x = margin; x <= p.width - margin; x += spacing) {
            let n = p.noise(x * 0.01, y * 0.01, t);
            let dotSize = p.map(n, 0, 1, -1, 30);
            p.fill(0, 0, 0, 50);
            p.circle(x, y + dotSize, dotSize / 5);
          }
        }
        t += 0.005;
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    });

    return () => sketch.remove();
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
          src="https://www.googletagmanager.com/gtag/js?id=UA-165347174-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-165347174-1');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
