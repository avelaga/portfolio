import { NextResponse } from 'next/server';
import { getCart, createCart, updateCart, checkoutUrl } from '../../lib/fourthwall';

// Thin proxy so the storefront token stays on the server.
// GET  /api/cart?id=…                         → cart
// POST /api/cart { cartId?, action, items }   → cart (action: add | change | remove)

const withCheckout = (cart) => ({ ...cart, checkoutUrl: checkoutUrl(cart.id) });

export async function GET(request) {
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing cart id' }, { status: 400 });
  try {
    return NextResponse.json(withCheckout(await getCart(id)));
  } catch {
    return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
  }
}

export async function POST(request) {
  const { cartId, action, items } = await request.json();
  if (!['add', 'change', 'remove'].includes(action) || !Array.isArray(items)) {
    return NextResponse.json({ error: 'Invalid cart request' }, { status: 400 });
  }
  try {
    const cart = cartId ? await updateCart(cartId, action, items) : await createCart(items);
    return NextResponse.json(withCheckout(cart));
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 502 });
  }
}
