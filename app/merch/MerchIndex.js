'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ProjectPage from '../components/v3/ProjectPage';
import FadeInOnLoad from '../components/FadeInOnLoad';
import { merchSrc, merchSrcSet, MERCH_SIZES } from '../lib/merchImage';
import { CartButton, formatPrice, useCart } from '../components/v3/merch/Cart';
import { EXTERNAL_ARROW } from '../components/v3/arrows';

const VIDEO_ID = '_lGyHqbhK-A';

const fromPrice = (product) => {
  const prices = product.variants.map((v) => v.unitPrice.value);
  return formatPrice({ value: Math.min(...prices), currency: product.variants[0].unitPrice.currency });
};

export default function MerchIndex({ products }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches), []);
  // The rebuild loop (2 MB) sits below the products: its poster shows from the
  // start, and the clip itself loads only once it's about a screen away
  const videoRef = useRef(null);
  const [videoNear, setVideoNear] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVideoNear(true);
      observer.disconnect();
    }, { rootMargin: '100% 0px' });
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);
  const { policyLinks } = useCart();
  return (
    <ProjectPage
      title="Merch"
      backLabel={null}
      navActive="merch"
      subtitle="Hand-designed shirts and stickers. Free shipping on 2+ items :)"
      headerExtra={<CartButton />}
      footerLinks={policyLinks}
      className="v3--merch"
    >
      {products.length === 0 && (
        <p className="v3-merch-empty">The shop is restocking. Check back soon.</p>
      )}
      <section className="v3-merch-grid">
        {products.map((p, i) => (
          <Link key={p.id} href={`/merch/${p.slug}`} className="v3-merch-card">
            <div className="v3-merch-images">
              {/* The first row (three across on desktop) loads at once, with no fade */}
              {/* One size (FadeInOnLoad has no srcset): 1080px covers a desktop card at 2x */}
              <FadeInOnLoad src={merchSrc(p.images[0]?.url, 1080)} alt={p.name} cls="v3-merch-img" priority={i < 3} />
              {/* Second photo swaps in on hover */}
              {p.images[1] && <img src={merchSrc(p.images[1].url, 1080)} srcSet={merchSrcSet(p.images[1].url)} sizes={MERCH_SIZES.grid} alt="" className="v3-merch-img v3-merch-img--alt" loading="lazy" />}
            </div>
            <div className="v3-merch-card-text">
              <span className="v3-merch-name">{p.name}</span>
              <span className="v3-row-meta"><span>{fromPrice(p)}</span></span>
            </div>
          </Link>
        ))}
      </section>

      {/* The rebuild, as on the old Fourthwall shop: a muted loop cut from the
          channel's footage (a YouTube embed forces captions and its paid-promotion
          badge), and the whole banner opens the video on YouTube */}
      <section className="v3-merch-video">
        <a className="v3-merch-video-frame" href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noopener noreferrer" aria-label="Watch the car rebuild on YouTube">
          <video
            ref={videoRef}
            src={videoNear ? '/videos/merch/rebuild-loop.mp4' : undefined}
            poster="/videos/merch/rebuild-loop.jpg"
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
          />
        </a>
        <a className="v3-row-link" href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube <span aria-hidden="true">{EXTERNAL_ARROW}</span>
        </a>
      </section>

      {/* Blurred Miata at sunset, fixed behind the page like the old shop */}
      <div className="v3-merch-backdrop" aria-hidden="true" />
    </ProjectPage>
  );
}
