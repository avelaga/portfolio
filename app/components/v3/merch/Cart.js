'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'abhi-work-cart-id';

export const formatPrice = ({ value, currency }) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: value % 1 ? 2 : 0 }).format(value);

const storedId = () => { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } };
const storeId = (id) => { try { id ? localStorage.setItem(STORAGE_KEY, id) : localStorage.removeItem(STORAGE_KEY); } catch {} };

// Cart state for the merch pages. The cart itself lives in Fourthwall; we keep its
// id in localStorage so it survives reloads, and talk to it through /api/cart.
export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const id = storedId();
    if (!id) return;
    fetch(`/api/cart?id=${encodeURIComponent(id)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setCart)
      .catch(() => storeId(null));
  }, []);

  const send = useCallback(async (action, items) => {
    setBusy(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId: cart?.id, action, items }),
      });
      if (!res.ok) throw new Error('Cart update failed');
      const next = await res.json();
      setCart(next);
      storeId(next.id);
      return next;
    } finally {
      setBusy(false);
    }
  }, [cart?.id]);

  const add = async (variantId, quantity = 1) => { await send('add', [{ variantId, quantity }]); setOpen(true); };
  const setQuantity = (variantId, quantity) => send('change', [{ variantId, quantity }]);
  const remove = (variantId, quantity) => send('remove', [{ variantId, quantity }]);

  const count = cart?.items?.reduce((n, i) => n + i.quantity, 0) ?? 0;

  return (
    <CartContext.Provider value={{ cart, count, busy, open, setOpen, add, setQuantity, remove }}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <button type="button" className="v3-cart-button" onClick={() => setOpen(true)} aria-label={`Cart, ${count} items`}>
      <span className="v3-cart-label">Cart </span>({count})
    </button>
  );
}

function CartDrawer() {
  const { cart, count, busy, open, setOpen, setQuantity, remove } = useCart();
  const items = cart?.items ?? [];
  const subtotal = items.reduce((sum, i) => sum + i.variant.unitPrice.value * i.quantity, 0);
  const currency = items[0]?.variant.unitPrice.currency ?? 'USD';

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  return (
    <div className={`v3-cart${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <div className="v3-cart-backdrop" onClick={() => setOpen(false)} />
      <aside className="v3-cart-panel" role="dialog" aria-label="Cart" aria-modal="true">
        <header className="v3-cart-header">
          <span className="v3-label">Cart ({count})</span>
          <button type="button" className="v3-cart-close" onClick={() => setOpen(false)}>Close</button>
        </header>

        {items.length === 0 ? (
          <p className="v3-cart-empty">Your cart is empty.</p>
        ) : (
          <ul className="v3-cart-items">
            {items.map(({ variant, quantity }) => (
              <li key={variant.id} className="v3-cart-item">
                {variant.images?.[0] && <img src={variant.images[0].url} alt="" className="v3-cart-thumb" />}
                <div className="v3-cart-item-text">
                  <span className="v3-cart-item-name">{variant.product?.name ?? variant.name}</span>
                  {variant.attributes?.description && <span className="v3-row-meta">{variant.attributes.description}</span>}
                  <div className="v3-cart-qty">
                    <button type="button" disabled={busy} onClick={() => setQuantity(variant.id, quantity - 1)} aria-label="One fewer">−</button>
                    <span>{quantity}</span>
                    <button type="button" disabled={busy} onClick={() => setQuantity(variant.id, quantity + 1)} aria-label="One more">+</button>
                    <button type="button" className="v3-cart-remove" disabled={busy} onClick={() => remove(variant.id, quantity)}>Remove</button>
                  </div>
                </div>
                <span className="v3-cart-price">{formatPrice({ value: variant.unitPrice.value * quantity, currency })}</span>
              </li>
            ))}
          </ul>
        )}

        <footer className="v3-cart-footer">
          <div className="v3-cart-subtotal">
            <span className="v3-label">Subtotal</span>
            <span>{formatPrice({ value: subtotal, currency })}</span>
          </div>
          <p className="v3-cart-note">Shipping and taxes at checkout. Free shipping on 2+ items.</p>
          {items.length > 0 && (
            // Hands off to Fourthwall's hosted checkout (same tab, like any checkout)
            <a href={cart.checkoutUrl} className="v3-button v3-button--primary v3-button--large v3-cart-checkout">Checkout</a>
          )}
        </footer>
      </aside>
    </div>
  );
}
