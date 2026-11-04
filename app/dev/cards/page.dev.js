import { cardPhotos, projects } from '../../data/v3';
import CardCropper from './CardCropper';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Card crops', robots: { index: false } };

// Dev-only tool for choosing what stays in frame on phones in each card photo.
// A .dev.js page, so only the dev server builds it (next.config.js).
export default function CardCropsPage() {
  const cards = projects.map((p) => ({ id: p.id, title: p.title, photos: cardPhotos(p) }));
  return <CardCropper cards={cards} />;
}
