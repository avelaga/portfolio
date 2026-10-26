import { getProducts } from '../lib/fourthwall';
import MerchIndex from './MerchIndex';

export const revalidate = 300;

export const metadata = {
  title: 'Abhi Velaga - Merch',
  description: 'Personal, hand-designed merch.',
  openGraph: { title: 'Abhi Velaga - Merch' },
};

export default async function MerchPage() {
  const products = await getProducts();
  return <MerchIndex products={products} />;
}
