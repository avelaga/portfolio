// Fourthwall Storefront API. Server-side only: the token comes from .env.local and
// never ships to the browser (cart calls from the page go through /api/cart).
// Docs: https://docs.fourthwall.com/storefront/overview

const API = 'https://storefront-api.fourthwall.com/v1';
export const CURRENCY = 'USD';

// Fourthwall's hosted checkout runs on whichever custom domain is connected in
// Fourthwall (Settings → Domain). Set FOURTHWALL_CHECKOUT_DOMAIN to checkout.abhi.work
// once that's connected; until then it's still shop.abhi.work.
const CHECKOUT_DOMAIN = process.env.FOURTHWALL_CHECKOUT_DOMAIN || 'shop.abhi.work';
// Fourthwall hosts the legal pages and support form (it's the Merchant of Record),
// on the same domain as checkout. We link to them rather than copy them.
export const policyLinks = () => [
  { label: 'Shipping & returns', href: `https://${CHECKOUT_DOMAIN}/pages/returns-faq` },
  { label: 'Terms', href: `https://${CHECKOUT_DOMAIN}/pages/terms-of-service` },
  { label: 'Privacy', href: `https://${CHECKOUT_DOMAIN}/pages/privacy-policy` },
  { label: 'Contact support', href: `https://${CHECKOUT_DOMAIN}/contact` },
];

export const checkoutUrl = (cartId) =>
  `https://${CHECKOUT_DOMAIN}/cart/checkout?${new URLSearchParams({ cartId, currency: CURRENCY })}`;

async function request(path, { method = 'GET', body, revalidate } = {}) {
  const token = process.env.FOURTHWALL_STOREFRONT_TOKEN;
  if (!token) throw new Error('FOURTHWALL_STOREFRONT_TOKEN is not set');
  const url = `${API}${path}${path.includes('?') ? '&' : '?'}${new URLSearchParams({ storefront_token: token, currency: CURRENCY })}`;
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    // Catalog is cached briefly; carts are always fresh
    ...(revalidate ? { next: { revalidate } } : { cache: 'no-store' }),
  });
  if (!res.ok) throw new Error(`Fourthwall ${method} ${path} failed: ${res.status}`);
  return res.json();
}

// Catalog reads never throw: a missing token or Fourthwall outage shows an empty
// shop instead of failing the whole site's build
export async function getProducts() {
  try {
    const { results } = await request('/collections/all/products', { revalidate: 300 });
    return results.filter((p) => p.state?.type === 'AVAILABLE' && p.access?.type === 'PUBLIC');
  } catch (e) {
    console.error(`[merch] ${e.message}`);
    return [];
  }
}

export async function getProduct(slug) {
  try {
    return await request(`/products/${encodeURIComponent(slug)}`, { revalidate: 300 });
  } catch {
    return null;
  }
}

export const getCart = (cartId) => request(`/carts/${encodeURIComponent(cartId)}`);
export const createCart = (items) => request('/carts', { method: 'POST', body: { items } });
export const updateCart = (cartId, action, items) =>
  request(`/carts/${encodeURIComponent(cartId)}/${action}`, { method: 'POST', body: { items } });
