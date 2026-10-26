'use client';

import Link from 'next/link';
import ProjectPage from '../components/v3/ProjectPage';
import FadeInOnLoad from '../components/FadeInOnLoad';
import { CartButton, formatPrice, useCart } from '../components/v3/merch/Cart';

const fromPrice = (product) => {
  const prices = product.variants.map((v) => v.unitPrice.value);
  return formatPrice({ value: Math.min(...prices), currency: product.variants[0].unitPrice.currency });
};

export default function MerchIndex({ products }) {
  const { policyLinks } = useCart();
  return (
    <ProjectPage
      title="Merch"
      backLabel={null}
      navActive="merch"
      tag="Shop"
      subtitle="Personal, hand-designed merch. Free shipping on 2+ items."
      headerExtra={<CartButton />}
      footerLinks={policyLinks}
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
    </ProjectPage>
  );
}
