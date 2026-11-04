// Content for the V3 draft. Copy is pulled from V3_HANDOFF.md and the V2 pages.

import heroPicks from './hero-picks.json';
import cardFocus from './card-focus.json';

export const EMAIL = 'abhinav.velaga@gmail.com';

// About page influences: bare words, no links or explanations.
// Brainstorm list, to be refined down later.
export const influences = [
  'John Frusciante',
  'Deftones',
  'Bring Me the Horizon',
  'Steve Jobs',
  'Jony Ive',
  'Joel Meyerowitz',
  'NIGHTRIDE',
  'Todd Hido',
];

export const elsewhereLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@abhi.velaga/' },
  { label: 'Instagram', href: 'https://www.instagram.com/abhi.velaga/' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg' },
  { label: 'Resume', href: '/resume', internal: true },
];

export const projects = [
  {
    id: 'miami-vice',
    tag: 'Photo',
    year: '2018–19',
    title: 'Miami Vice Cocaine Dream',
    description: 'A conceptual photo series that explores a college house and blurs the lines between reality and imagination.',
    link: { label: 'View', href: '/miamivice' },
    lead: '/images/photos/miami/miami1.webp',
    images: ['/images/photos/miami/miami3.webp', '/images/photos/miami/miami4.webp', '/images/photos/miami/miami5.webp', '/images/photos/miami/miami6.webp'],
  },
  // Hidden until the Track Dog Racing site ships
  // {
  //   id: 'track-dog-racing',
  //   tag: 'Client',
  //   year: '2026',
  //   title: 'Track Dog Racing',
  //   description: 'A website rebuild and marketing for Track Dog Racing, with design, engineering and direction under one roof. In progress.',
  //   link: null,
  //   lead: null,
  //   images: [null, null, null],
  // },
  {
    id: 'youtube',
    tag: 'Video',
    year: '2025–now',
    title: 'YouTube',
    description: 'A channel documenting the repair and modification of my supercharged Mazda Miata.',
    link: { label: 'YouTube', href: 'https://www.youtube.com/@abhi.velaga/', external: true },
    lead: '/images/youtube/welding-under-carport.webp',
    images: [
      '/images/youtube/engine-out-on-pallet.webp',
      '/images/youtube/engine-on-crane.webp',
      '/images/youtube/miata-and-me.webp',
      '/images/youtube/welding-sparks-closeup.webp',
      '/images/youtube/grinding-under-carport.webp',
      '/images/youtube/grinding-at-night.webp',
    ],
  },
  {
    id: 'indulgent',
    tag: 'Music',
    year: '2015–now',
    title: 'Indulgent',
    description: 'My solo music project in which I write and perform every part: vocals, drums, guitar, and bass.',
    link: { label: 'View', href: '/music/indulgent' },
    lead: '/images/music/indulgent/indulgentlive.webp',
    images: ['/images/music/indulgent/guitar2.webp', '/images/music/indulgent/noDrive.webp'],
  },
  {
    id: 'user-void',
    tag: 'Photo',
    year: '2019',
    title: 'User Void',
    description: 'A photo series that documents a group of computer science students, illuminating a community rarely seen by outsiders.',
    link: { label: 'View', href: '/uservoid' },
    lead: '/images/photos/uservoid/uservoid2.webp',
    images: ['/images/photos/uservoid/uservoid8.webp', '/images/photos/uservoid/uservoid9.webp', '/images/photos/uservoid/uservoid1.webp', '/images/photos/uservoid/uservoid6.webp'],
  },
  {
    id: 'portfolio',
    tag: 'Photo',
    year: null,
    title: 'Photo portfolio',
    description: 'Selected works spanning photo series, portraits, night, and architectural photography.',
    link: { label: 'View', href: '/portfolio' },
    lead: '/images/photos/portfolio/p6.webp',
    images: ['/images/photos/portfolio/p15.webp', '/images/photos/portfolio/p14.webp', '/images/photos/portfolio/p13.webp', '/images/photos/portfolio/p1.webp'],
  },
  {
    id: 'editorial',
    tag: 'Photo',
    year: null,
    title: 'Editorial work',
    description: 'Work produced for and published in Spark Magazine.',
    link: { label: 'View', href: '/editorial' },
    // The Spark shots as cropped for the hero, copied so the card keeps them if the hero changes
    lead: '/images/photos/published/hero-spark3.webp',
    images: ['/images/photos/published/hero-spark1.webp', '/images/photos/published/hero-spark-cover.webp'],
  },
  {
    id: 'the-world-misses-you',
    tag: 'Installation',
    year: '2022',
    title: 'The World Misses You',
    description: 'A weather-responsive LED installation exhibited at Dadalab, Austin, TX.',
    link: { label: 'View', href: '/the-world-misses-you' },
    lead: '/images/software/dadalab/dadalab4.webp',
    images: ['/images/software/dadalab/dadalab1.webp', '/images/software/dadalab/dadalab2.webp'],
  },
  {
    id: 'merry-jane',
    tag: 'Music',
    year: '2018–19',
    title: 'Merry Jane & The Fondas',
    description: 'As the drummer for Merry Jane & The Fondas, I recorded a studio EP with Jackie Venson and played an official SXSW showcase, along with shows across Austin.',
    link: { label: 'View', href: '/music/merry-jane' },
    lead: '/images/music/mjf/mjf.webp',
    images: ['/images/music/mjf/studio.webp', '/images/music/mjf/cover.webp'],
  },
  {
    id: 'live-drumming',
    tag: 'Music',
    year: '2022–23',
    title: 'Live drumming',
    description: 'Drummer for Caladan and Shivering Demons.',
    link: { label: 'View', href: '/music/live-drumming' },
    lead: '/images/music/sd/fallingKid.webp',
    images: ['/images/music/sd/sd1.webp', '/images/music/caladan/caladan.webp'],
  },
];

// A card's photos: the lead, then the ones its hover steps through. On phones the
// card crops to 4:5, which can cut a subject out, so each photo can have its own
// crop position, set at /dev/cards (dev server only, saves to card-focus.json)
export const cardPhotos = (project) =>
  [project.lead, ...project.images].filter(Boolean).map((src) => ({ src, phoneFocus: cardFocus[src] }));

// Hero slides. Abhi's final picks (v3-assets/hero/picks, not shipped) are copied
// uncompressed into public/hero-preview/ (gitignored), chosen and ordered at
// /dev/hero (dev server only, saves to hero-picks.json), then compressed by
// scripts/build-hero.py into public/hero/, which is what the site serves.
// Desktop (16:9, 2560×1440 photos) and phone (9:16) are separate sets: some shots
// only work in one shape. `focus` is the object-position used when the slide is
// cropped.
export const PREVIEW = '/hero-preview';
const HERO = '/hero';

// The project each shot comes from. Its caption is that project card's title and
// links where the card does. Anything not listed is from the photo portfolio.
// Phone copies are named after the same shot on desktop, where there is one.
const heroProjectIds = {
  'cutting-miata': 'youtube',
  'welding-under-carport': 'youtube',
  'engine-on-stand': 'youtube',
  'b-roll-engine-crane': 'youtube',
  'engine-pull': 'youtube',
  'pushing-miata': 'youtube',
  'miata-slo-mo': 'youtube',
  indulgent: 'indulgent',
  'indulgent-2': 'indulgent',
  'shivering-demons': 'live-drumming',
  'dadalab-1': 'the-world-misses-you',
  dadalab2: 'the-world-misses-you',
  'dadalab-3': 'the-world-misses-you',
  'laguna-house': 'miami-vice',
  'living-room': 'miami-vice',
  'user-void-1': 'user-void',
  'user-void-2': 'user-void',
  'spark-cover': 'editorial',
  spark1: 'editorial',
  spark2: 'editorial',
  spark3: 'editorial',
};
export const heroProject = (name) => projects.find((p) => p.id === (heroProjectIds[name] ?? 'portfolio'));

// Each entry is a picked file name; the compressed versions are the clip with a
// poster frame beside it, or the photo as .webp
const slide = (dir) => (file) => {
  const name = file.replace(/\.[^.]+$/, '');
  const { title, link } = heroProject(name);
  const caption = { title, href: link.href, external: !!link.external };
  return file.endsWith('.mp4')
    ? { type: 'video', src: `${dir}/${name}.mp4`, poster: `${dir}/${name}.jpg`, caption, focus: '50% 50%' }
    : { type: 'image', src: `${dir}/${name}.webp`, caption, focus: '50% 50%' };
};

export const heroSlides = heroPicks.desktop.map(slide(HERO));

// Phones held upright get their own vertical (9:16) set
export const heroSlidesMobile = heroPicks.mobile.map(slide(`${HERO}/mobile`));
