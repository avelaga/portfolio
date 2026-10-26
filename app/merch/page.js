import { getProducts } from '../lib/fourthwall';
import MerchIndex from './MerchIndex';
import { pageMeta } from '../lib/meta';

export const revalidate = 300;

export const metadata = pageMeta({
  title: 'Merch',
  description: 'Personal, hand-designed merch. Free shipping on 2+ items.',
  image: '/og/merch.jpg',
  path: '/merch',
});

export default async function MerchPage() {
  const products = await getProducts();
  return <MerchIndex products={products} />;
}
