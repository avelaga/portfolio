'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/v3/Header';
import Footer from '../../components/v3/Footer';
import Button from '../../components/v3/Button';
import { CartButton, formatPrice, useCart } from '../../components/v3/merch/Cart';

const inStock = (v) => v.stock?.type === 'UNLIMITED' || (v.stock?.inStock ?? 0) > 0;

export default function ProductPage({ product }) {
  const { add, busy } = useCart();
  const variants = product.variants;
  const hasSizes = variants.some((v) => v.attributes?.size?.name);
  const [variantId, setVariantId] = useState(hasSizes ? null : variants[0]?.id);
  const [image, setImage] = useState(0);
  const [error, setError] = useState(null);
  const variant = variants.find((v) => v.id === variantId);
  const price = (variant ?? variants[0]).unitPrice;

  const addToCart = async () => {
    if (!variant) { setError('Pick a size first.'); return; }
    setError(null);
    try { await add(variant.id); } catch { setError('Something went wrong adding that. Try again?'); }
  };

  return (
    <div className="v3">
      <Header active="merch" extra={<CartButton />} />

      <section className="v3-product">
        <div className="v3-product-gallery">
          <img src={product.images[image]?.url} alt={product.name} className="v3-product-main" />
          {product.images.length > 1 && (
            <div className="v3-product-thumbs">
              {product.images.map((img, i) => (
                <button key={img.id} type="button" className={`v3-product-thumb${i === image ? ' is-active' : ''}`} onClick={() => setImage(i)} aria-label={`Photo ${i + 1}`}>
                  <img src={img.url} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="v3-product-info">
          <Link href="/merch" className="v3-back-link">← Merch</Link>
          <h1 className="v3-gallery-title v3-product-title">{product.name}</h1>
          <div className="v3-row-meta"><span>{formatPrice(price)}</span></div>

          {hasSizes && (
            <fieldset className="v3-sizes">
              <legend className="v3-label">Size</legend>
              <div className="v3-size-options">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    disabled={!inStock(v)}
                    className={`v3-size${v.id === variantId ? ' is-selected' : ''}`}
                    aria-pressed={v.id === variantId}
                    onClick={() => { setVariantId(v.id); setError(null); }}
                  >
                    {v.attributes.size.name}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          <Button variant="primary" size="large" disabled={busy} onClick={addToCart}>
            {busy ? 'Adding…' : 'Add to cart'}
          </Button>
          {error && <p className="v3-product-error" role="alert">{error}</p>}

          {/* Product copy and details come from Fourthwall as HTML */}
          <div className="v3-product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
          {product.additionalInformation?.map((info) => (
            <details key={info.title} className="v3-product-details">
              <summary className="v3-label">{info.title}</summary>
              <div dangerouslySetInnerHTML={{ __html: info.bodyHtml }} />
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
