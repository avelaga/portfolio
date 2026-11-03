import { notFound } from 'next/navigation';
import { heroCaptions, PREVIEW } from '../../data/v3';
import { listHeroFiles, readPicks } from '../../lib/heroFiles';
import HeroPicker from './HeroPicker';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Hero picks', robots: { index: false } };

// Dev-only tool for choosing and ordering the hero slides. Not built into the
// live site: production gets a 404.
export default function HeroPicksPage() {
  if (process.env.NODE_ENV !== 'development') notFound();
  return (
    <HeroPicker
      files={{ desktop: listHeroFiles('desktop'), mobile: listHeroFiles('mobile') }}
      initialPicks={readPicks()}
      captions={heroCaptions}
      dirs={{ desktop: PREVIEW, mobile: `${PREVIEW}/mobile` }}
    />
  );
}
