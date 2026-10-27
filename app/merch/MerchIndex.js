'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectPage from '../components/v3/ProjectPage';
import FadeInOnLoad from '../components/FadeInOnLoad';
import { CartButton, formatPrice, useCart } from '../components/v3/merch/Cart';

const VIDEO_ID = '_lGyHqbhK-A';

const fromPrice = (product) => {
  const prices = product.variants.map((v) => v.unitPrice.value);
  return formatPrice({ value: Math.min(...prices), currency: product.variants[0].unitPrice.currency });
};

export default function MerchIndex({ products }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches), []);
  const { policyLinks } = useCart();
  return (
    <ProjectPage
      title="Merch"
      backLabel={null}
      navActive="merch"
      subtitle="Personal, hand-designed merch. Free shipping on 2+ items."
      headerExtra={<CartButton />}
      footerLinks={policyLinks}
      className="v3--merch"
    >
      {products.length === 0 && (
        <p className="v3-merch-empty">The shop is restocking. Check back soon.</p>
      )}
      <section className="v3-merch-grid">
        {products.map((p) => (
          <Link key={p.id} href={`/merch/${p.slug}`} className="v3-merch-card">
            <div className="v3-merch-images">
              <FadeInOnLoad src={p.images[0]?.url} alt={p.name} cls="v3-merch-img" />
              {/* Second photo swaps in on hover */}
              {p.images[1] && <img src={p.images[1].url} alt="" className="v3-merch-img v3-merch-img--alt" loading="lazy" />}
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
            src="/videos/merch/rebuild-loop.mp4"
            poster="/videos/merch/rebuild-loop.jpg"
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
          />
        </a>
        <a className="v3-row-link" href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </section>

      {/* Blurred Miata at sunset, fixed behind the page like the old shop */}
      <div className="v3-merch-backdrop" aria-hidden="true" />
    </ProjectPage>
  );
}
