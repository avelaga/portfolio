import { getProducts } from '../lib/fourthwall';
import MerchIndex from './MerchIndex';
import { pageMeta } from '../lib/meta';

export const revalidate = 300;

export const metadata = pageMeta({
  title: 'Merch',
  description: 'Hand-designed shirts and stickers.',
  image: '/og/merch.jpg',
  path: '/merch',
});

export default async function MerchPage() {
  const products = await getProducts();
  return <MerchIndex products={products} />;
}
