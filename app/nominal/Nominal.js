'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

function TitleSlide({ title, subtitle }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      gap: '16px',
    }}>
      <div style={{
        fontFamily: 'Nimbus-Sans-Bol',
        fontSize: '5rem',
        lineHeight: 1,
        color: '#000',
        textAlign: 'center',
      }}>
        {title}
      </div>
      <div style={{
        fontFamily: 'Berthold-Akzidenz-Grotesk-Light-Extended',
        fontSize: '1rem',
        color: '#444',
        textAlign: 'center',
        letterSpacing: '0.1em',
      }}>
        {subtitle}
      </div>
    </div>
  );
}

function Slide({ type, title, subtitle, body, link, image, imageAlt }) {
  if (type === 'title') return <TitleSlide title={title} subtitle={subtitle} />;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: '60px 80px',
      gap: '32px',
    }}>
      <div style={{
        fontFamily: 'Nimbus-Sans-Bol',
        fontSize: '2.5rem',
        lineHeight: 1.1,
        color: '#000',
      }}>
        {title}
      </div>

      <div style={{
        display: 'flex',
        flex: 1,
        gap: '60px',
        overflow: 'hidden',
      }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{
            fontFamily: 'Berthold-Akzidenz-Grotesk-Light-Extended',
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#444',
            background: 'rgba(255, 255, 255, 0.85)',
            padding: '24px',
            borderRadius: '4px',
            overflowY: 'auto',
            height: '100%',
          }}>
            {Array.isArray(body) ? (
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {body.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            ) : body}
          </div>
        </div>

        {image && (
          <div style={{ flex: 1, position: 'relative' }}>
            <img
              src={image}
              alt={imageAlt || ''}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />
          </div>
        )}
      </div>

      {link && (
        <div style={{ textAlign: 'center', paddingBottom: '3rem' }}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'Berthold-Akzidenz-Grotesk-Light-Extended',
            fontSize: '2rem',
            color: '#000',
            fontStyle: 'italic',
          }}>
            {link.label}
          </a>
        </div>
      )}
    </div>
  );
}

const slides = [
  {
    type: 'title',
    title: 'abhi.work',
    subtitle: 'personal portfolio',
  },
  {
    title: 'Why I Built It',
    body: [
      'Wanted a single place to document creative work across music, creative coding, and photography',
      'Goal: simple static site with heavy branding focus to feel special and unlike anything else',
      'Replacing an expensive Squarespace site - wanted to see how cheap I could go',
      'Junior year of college, handled design, development, and deployment entirely solo'
    ],
    image: null,
    imageAlt: '',
  },
  {
    title: 'V1 Design Decisions',
    body: [
      'Landing page: auto-rotating image/video slideshow to immediately set tone',
      'Navigation overlapping content to create layered, dimensional feel',
      'Desktop nav: animated colored bars sliding behind links on hover using layered divs and CSS transitions',
      'Photo page: four-quadrant auto-playing slideshows previewing each collection',
      'Mobile menu: Gaussian blur backdrop for dimension without blocking content',
      'Home page menu auto-opens on load to guide first-time visitors',
    ],
    image: '/images/nominal/v1QrCode.jpg',
    imageAlt: '',
    link: { label: 'v1.abhi.work', href: 'https://v1.abhi.work' }
  },
  {
    title: 'V1 Deployment',
    body: [
      'Client-side React SPA - static files only, no server costs',
      'Deployed to Amazon S3',
      'CloudFront CDN for HTTPS and global caching',
      'Automated build pipeline: git push to master triggers build, moves files to S3, clears CloudFront cache invalidation',
    ],

  },
  {
    title: 'V1 Pain Points',
    body: [
      'Inconsistent branding: yellow nav text, turquoise buttons, white text - no cohesion',
      'Contrast issues from overlapping nav, especially on mobile over text-heavy content',
      'Largest contentful paint 5.3 seconds due to unoptimized asset-heavy design',
      '47,000 page views with high bounce rate at every click - content buried too deep',
      'Client-side rendering = bad SEO, no per-page OG images or metadata',
      'Mobile nav buttons too small and hard to tap',
      'AWS console setup cumbersome for ongoing maintenance',
      'Mobile design was afterthought'
    ],
    image: null,
    imageAlt: '',
  },
  {
    title: 'V2 Design Rethink',
    body: [
      'Switched from dark mode to light mode for readability and fresh aesthetic',
      'Adopted brutalist design philosophy: minimal, striking, unlike typical commercial sites',
      'Researched and built a mood board before designing',
      'Mobile menu redesigned with large easy-to-tap buttons satisfying both UX and creative goals',
      'Gaussian blur on mobile menu with inverted font color to maintain contrast',
      'p5.js animated dot grid background using Perlin noise algorithm to add organic refinement to white canvas',
      'Designed mobile view alongside desktop view'
    ],
    image: '/images/nominal/v2figma.jpeg',
    imageAlt: '',
    link: { label: 'abhi.work', href: 'https://abhi.work' }
  },
  {
    title: 'V2 UX Strategy',
    body: [
      'Replaced landing page slideshow with featured work cards across all mediums',
      'Content from all categories visible on home page without clicking',
      'Photo portfolio now accessible in one click vs. three previously',
      'Photo page goes directly to portfolio instead of collection picker',
      'Even without clicking, scrolling the home page gives a full picture of who i am',
    ],
    image: null,
    imageAlt: '',
  },
  {
    title: 'V2 Architecture',
    body: [
      'Migrated from React to Next.js for framework-level optimization and static site generation',
      'Bundle reduced from 1.2MB of JavaScript to pre-rendered static files',
      'Per-page metadata implemented for proper OG images and SEO',
      'Web crawlers can now read and differentiate every page',
      'Migrated deployment from AWS to Vercel for dramatically simpler DX',
    ],
    image: null,
    imageAlt: '',
  },
  {
    title: 'V2 Performance Solutions',
    body: [
      'Added lazy loading for images',
      'Used Next.js Image component with hardcoded width/height to reserve space and prevent content layout shifts',
      'Built custom React component with CSS opacity transition for smooth image fade-in on scroll',
      'Added cache detection logic so pre-cached images don\'t get stuck at opacity zero',
      'Replaced p5.js dot grid with SVG animation - eliminated library dependency and JavaScript overhead while keeping the animation',
    ],
    image: null,
    imageAlt: '',
  },
  {
    title: 'V2 Results',
    body: [
      'Improved accessibility, SEO, page load speed, and UX simultaneously',
      'Cohesive design across the whole site',
      'Smooth scroll experience with zero content layout shift',
      'Dramatically improved Lighthouse scores across the board',
    ],
    image: null,
    imageAlt: '',
    image: '/images/nominal/lighthouse.jpeg',
  },
  {
    title: 'The Blog - Pebble',
    body: [
      'Wanted a blog to share technical write-ups, life learnings, and thoughts across all mediums',
      'Needed to write from anywhere including mobile - markdown-in-repo approach ruled out',
      'Researched existing CMS options: Strapi, Ghost - all too complicated and bloated',
      'Identified market gap for a truly minimal headless blog CMS',
      'Scope expanded: built it as a standalone open source project called Pebble so it could be reused for others (e.g. dad\'s financial firm)',
    ],
    image: '/images/nominal/pebbleQrCode.jpg',
    imageAlt: '',
    link: { label: 'pebble on github', href: 'https://github.com/avelaga/pebble' }
  },
  {
    title: 'Pebble Architecture',
    body: [
      'Next.js frontend deployed on Vercel',
      'Cloudflare Worker as serverless backend API - cold starts under 5ms vs AWS Lambda\'s 1-2 seconds',
      'Built on V8 engine directly, not Node.js, eliminating memory overhead',
      'Free up to 100,000 requests/month',
      'Cloudflare D1 NoSQL database - auto-replicated, stored at edge for ultra-low latency',
      'Cloudflare R2 for blob/image storage',
      'Admin login UI for authenticated content management',
      'Auto deploy with hook when new page is created - maintains SEO/performance advantages of SSG'
    ],
    image: null,
    imageAlt: '',
  },
  {
    title: 'YouTube Series',
    body: [
      'Started a YouTube series documenting the redesign process',
      'Completed three episodes covering the detailed redesign and implementation',
      'Discovered filming + coding simultaneously is extremely complex and produces massive files',
      'Goal: share the passion and bring others along on the build',
    ],
    image: null,
    imageAlt: '',
    link: { label: 'youtube playlist', href: 'https://www.youtube.com/playlist?list=PLiLXVIT8v9XKXhY1ncbq5HEjtUW3XcB3m' }
  },
  {
    title: 'Cherry on Top - The "Hi" Page',
    body: [
      'Added a unique interactive page where visitors can flash an LED strip at my desk in real time',
      'Button only shows success if it receives a 200 response - truly live feedback',
      'Challenge 1: rotating ISP IP address would break the connection randomly — Solution: Duck DNS dynamic DNS service, updated via cron job running on a Raspberry Pi at home',
      'Challenge 2: exposing home IP address in network requests is a security risk — Solution: Cloudflare Worker proxies all requests, obfuscating home IP',
      'Never seen anything like it on another site',
    ],
    image: null,
    imageAlt: '',
    link: { label: 'abhi.work/hi', href: 'https://abhi.work/hi' }
  },
  {
    title: 'Future Improvements',
    body: [
      'Redesigning featured cards on home page to include image + body text preview for clarity',
      'Implementing stacked card scroll effect using Framer Motion - cards stack on top of each other as you scroll down, unstack as you scroll back up',
      'Blends creative motion design with functionality without getting in the way',
      'Furthers the original goal: show who i am, with creative flair and polish',
    ],
    image: null,
    imageAlt: '',
  },
  {
    type: 'title',
    title: 'thanks for listening :)',
  },
];

export default function Nominal() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((getNext) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(getNext);
      setVisible(true);
    }, 500);
  }, []);

  const prev = useCallback(() => {
    goTo(i => (i - 1 + slides.length) % slides.length);
  }, [goTo]);

  const next = useCallback(() => {
    goTo(i => (i + 1) % slides.length);
  }, [goTo]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <div className='appear'
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}>
      <div style={{
        width: '100%',
        height: '100%',
        opacity: visible ? 1 : 0,
        transition: 'opacity .5s linear',
      }}>
        <Slide {...slides[current]} />
      </div>

      <button onClick={prev} style={arrowStyle('left')}>&#8592;</button>
      <button onClick={next} style={arrowStyle('right')}>&#8594;</button>

      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
      }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => goTo(() => i)} style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i === current ? '#000' : '#ccc',
            cursor: 'pointer',
          }} />
        ))}
      </div>
    </div>
  );
}

function arrowStyle(side) {
  return {
    position: 'fixed',
    top: '50%',
    [side]: '24px',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: '#000',
    padding: '12px',
    lineHeight: 1,
    userSelect: 'none',
  };
}
