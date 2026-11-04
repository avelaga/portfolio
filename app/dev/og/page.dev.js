import fs from 'fs';
import path from 'path';
import { heroSlides, heroSlidesMobile } from '../../data/v3';
import OgEditor from './OgEditor';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Share images', robots: { index: false } };

const APP = path.join(process.cwd(), 'app');
const CROPS = path.join(process.cwd(), 'app/data/og-crops.json');

// Every page whose page.js sets a share image from public/og/ (the resume's is
// generated, and merch products use their own photos, so neither is listed)
function ogPages() {
  const pages = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === 'page.js') {
        const match = fs.readFileSync(full, 'utf8').match(/image: '\/og\/([\w-]+\.jpg)'/);
        if (!match) continue;
        // The file's last change, so the editor's image URLs change with it (no stale cache)
        const mtime = Math.round(fs.statSync(path.join(process.cwd(), 'public/og', match[1])).mtimeMs);
        pages.push({ route: `/${path.relative(APP, dir)}`.replace(/\/$/, '') || '/', file: match[1], mtime });
      }
    }
  };
  walk(APP);
  return pages.sort((a, b) => (a.route === '/' ? -1 : b.route === '/' ? 1 : a.route.localeCompare(b.route)));
}

// Dev-only tool for choosing and cropping each page's link-preview image. A
// .dev.js page, so only the dev server builds it (next.config.js).
export default function OgPage() {
  const crops = fs.existsSync(CROPS) ? JSON.parse(fs.readFileSync(CROPS, 'utf8')) : {};
  // The hero only keeps a few slides loaded at a time, so its shots are listed here
  const heroImages = [...heroSlides, ...heroSlidesMobile].map((s) => s.poster || s.src);
  return <OgEditor pages={ogPages()} crops={crops} extra={{ '/': heroImages }} />;
}
