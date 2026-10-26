import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '../../lib/fourthwall';
import ProductPage from './ProductPage';
import { pageMeta } from '../../lib/meta';

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = await getProduct((await params).slug);
  if (!product) return {};
  // The worn/lifestyle photo previews better than the transparent cutout
  const image = product.images[1] ?? product.images[0];
  const text = product.description?.replace(/<[^>]+>/g, ' ').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
  return pageMeta({
    title: product.name,
    description: text || 'Personal, hand-designed merch.',
    image: image?.url,
    imageSize: image ? [image.width, image.height] : undefined,
    path: `/merch/${product.slug}`,
  });
}

export default async function Page({ params }) {
  const product = await getProduct((await params).slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
