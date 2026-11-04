import { notFound } from 'next/navigation';
import { heroProject, PREVIEW } from '../../data/v3';
import { listHeroFiles, readPicks } from '../../lib/heroFiles';
import HeroPicker from './HeroPicker';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Hero picks', robots: { index: false } };

// Dev-only tool for choosing and ordering the hero slides. Not built into the
// live site: production gets a 404.
export default function HeroPicksPage() {
  if (process.env.NODE_ENV !== 'development') notFound();
  const files = { desktop: listHeroFiles('desktop'), mobile: listHeroFiles('mobile') };
  const captions = Object.fromEntries([...files.desktop, ...files.mobile].map((f) => {
    const name = f.replace(/\.[^.]+$/, '');
    return [name, heroProject(name).title];
  }));
  return (
    <HeroPicker
      files={files}
      initialPicks={readPicks()}
      captions={captions}
      dirs={{ desktop: PREVIEW, mobile: `${PREVIEW}/mobile` }}
    />
  );
}
