import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '../../lib/fourthwall';
import ProductPage from './ProductPage';

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = await getProduct((await params).slug);
  return product
    ? { title: `Abhi Velaga - ${product.name}`, openGraph: { title: product.name, images: [product.images[0]?.url].filter(Boolean) } }
    : {};
}

export default async function Page({ params }) {
  const product = await getProduct((await params).slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
