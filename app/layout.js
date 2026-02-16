'use client';

import './globals.scss';
import '../src/styles/App.scss';
import '../src/styles/pages.scss';
import '../src/styles/layout.scss';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Script from 'next/script';

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
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
          src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js"
          strategy="beforeInteractive"
        />
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
        <Script src="/sketch.js" strategy="beforeInteractive"/>
        {children}
      </body>
    </html>
  );
}
