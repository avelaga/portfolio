import { heroProject, PREVIEW } from '../../data/v3';
import { listHeroFiles, readPicks } from '../../lib/heroFiles';
import HeroPicker from './HeroPicker';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Hero picks', robots: { index: false } };

// Dev-only tool for choosing and ordering the hero slides. A .dev.js page, so
// only the dev server builds it (next.config.js).
export default function HeroPicksPage() {
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
