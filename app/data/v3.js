// Content for the V3 draft. Copy is pulled from V3_HANDOFF.md and the V2 pages.

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

// Draft order from the handoff: car → film photo → music → LED, car clips spread out.
// `focus` is the object-position used when the viewport crops the slide.
export const heroSlides = [
  { type: 'video', src: '/videos/hero/metalwork-sparks.mp4', poster: '/videos/hero/metalwork-sparks.jpg', caption: 'Metalwork, car rebuild', project: 'youtube', focus: '40% 50%' },
  { type: 'image', src: '/images/photos/portfolio/p15.webp', caption: 'House at night, film', project: 'portfolio', focus: '70% 50%' },
  { type: 'video', src: '/videos/hero/indulgent-live.mp4', poster: '/videos/hero/indulgent-live.jpg', caption: 'Indulgent, live at Kick Butt Coffee', project: 'indulgent', focus: '60% 50%' },
  { type: 'video', src: '/videos/hero/led-installation.mp4', poster: '/videos/hero/led-installation.jpg', caption: 'The World Misses You, Dadageek', project: 'the-world-misses-you', focus: '55% 50%' },
  { type: 'image', src: '/images/photos/portfolio/p1.webp', caption: "Lord's boxing gym, film", project: 'portfolio', focus: '50% 50%' },
  { type: 'video', src: '/videos/hero/drums-slowmo.mp4', poster: '/videos/hero/drums-slowmo.jpg', caption: 'Shivering Demons, drums', project: 'live-drumming', focus: '70% 50%' },
  { type: 'video', src: '/videos/hero/carport-sparks.mp4', poster: '/videos/hero/carport-sparks.jpg', caption: 'Welding under the carport', project: 'youtube', focus: '55% 50%' },
  { type: 'image', src: '/images/photos/portfolio/p9.webp', caption: 'Miami Vice Cocaine Dream', project: 'miami-vice', focus: '60% 50%' },
];

export const projects = [
  {
    id: 'miami-vice',
    tag: 'Photo',
    year: '2018–19',
    title: 'Miami Vice Cocaine Dream',
    description: 'A conceptual series set in a house alive with constant energy, where teenagers drift from adolescence into adulthood. Empty bottles, posters and mismatched furniture, lit like film stills, with props and the occasional model, so each photograph sits between documentary and imagination.',
    link: { label: 'View', href: '/miamivice' },
    lead: '/images/photos/miami/miami5.webp',
    images: ['/images/photos/miami/miami2.webp', '/images/photos/miami/miami3.webp', '/images/photos/miami/miami13.webp'],
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
    title: 'YouTube and merch',
    description: "A channel documenting a totaled Miata's second life, from cutting the car open and pulling the engine to a supercharger build. Shot and edited myself, with a merch line to match.",
    link: { label: 'YouTube', href: 'https://www.youtube.com/@abhi.velaga/', external: true },
    lead: '/images/rebuildthumbsq.webp',
    images: ['/images/wrecked.webp', '/images/engine.webp', '/videos/hero/engine-pull.jpg'],
  },
  {
    id: 'indulgent',
    tag: 'Music',
    year: '2015–now',
    title: 'Indulgent',
    description: 'My solo project. I write and perform every part (vocals, drums, guitar and bass) and direct the album art. Two albums, Toxic (2015) and No Drive Will Take Me Home (2018), plus a run of singles.',
    link: { label: 'View', href: '/music/indulgent' },
    lead: '/images/music/indulgent/indulgentlive.webp',
    images: ['/images/music/indulgent/drums.webp', '/images/music/indulgent/guitar2.webp', '/images/music/indulgent/noDrive.webp'],
  },
  {
    id: 'editorial',
    tag: 'Photo',
    year: null,
    title: 'Editorial work',
    description: 'Fashion editorials and magazine work, including a Spark Magazine cover. Saturated color, hard light and styling built around each model.',
    link: { label: 'View', href: '/editorial' },
    lead: '/images/photos/published/2.webp',
    images: ['/images/photos/published/10.webp', '/images/photos/published/12.webp', '/images/photos/published/9.webp'],
  },
  {
    id: 'the-world-misses-you',
    tag: 'Installation',
    year: '2021',
    title: 'The World Misses You',
    description: "An LED installation that reads the weather and time through web APIs and shifts to match: raindrops when it's raining, a slow twinkle when night falls. It brings the outside in and gives the indoors a life of its own. Exhibited at Dadageek, Austin.",
    link: { label: 'View', href: '/the-world-misses-you' },
    lead: '/images/software/dadalab/dadalab2.webp',
    images: ['/images/software/dadalab/dadalab1.webp', '/images/software/dadalab/dadalab5.webp', '/images/software/dadalab/dadalab4.webp'],
  },
  {
    id: 'merry-jane',
    tag: 'Music',
    year: '2018–19',
    title: 'Merry Jane & The Fondas',
    description: 'Drums. We recorded a studio EP with guitarist and songwriter Jackie Venson and played an official SXSW showcase.',
    link: { label: 'View', href: '/music/merry-jane' },
    lead: '/images/music/mjf/mjf.webp',
    images: ['/images/music/mjf/studio.webp', '/images/music/mjf/cover.webp', '/images/home/medrums.webp'],
  },
  {
    id: 'user-void',
    tag: 'Photo',
    year: '2019',
    title: 'User Void',
    description: 'A group of computer science students through all-nighters, focused sessions and the weight of academic pressure. An intimate look at a community, and at spaces, that outsiders rarely see.',
    link: { label: 'View', href: '/uservoid' },
    lead: '/images/photos/uservoid/uservoid2.webp',
    images: ['/images/photos/uservoid/uservoid15.webp', '/images/photos/uservoid/uservoid4.webp', '/images/photos/uservoid/uservoid5.webp'],
  },
  {
    id: 'live-drumming',
    tag: 'Music',
    year: '2022–23',
    title: 'Live drumming',
    description: 'Drums for Caladan and Shivering Demons, from Hole in the Wall to house shows and a convenience store. Every show filmed from multiple cameras.',
    link: { label: 'View', href: '/music/live-drumming' },
    lead: '/images/music/caladan/caladan.webp',
    images: ['/images/music/sd/sd1.webp', '/images/music/sd/fallingKid.webp', '/images/fisheyedrums.webp'],
  },
  {
    id: 'portfolio',
    tag: 'Photo',
    year: null,
    title: 'Photo portfolio',
    description: 'My favorite film photographs across every series: people and the rooms they live in.',
    link: { label: 'View', href: '/portfolio' },
    lead: '/images/photos/portfolio/p12.webp',
    images: ['/images/photos/portfolio/p1.webp', '/images/photos/portfolio/p6.webp', '/images/photos/portfolio/p11.webp'],
  },
];
