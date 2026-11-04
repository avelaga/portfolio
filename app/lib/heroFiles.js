import fs from 'fs';
import path from 'path';

// The hero's source folders, for the dev-only pick list at /dev/hero. Clips have
// a poster frame saved next to them with the same name, which isn't a slide.
export const HERO_DIRS = {
  desktop: path.join(process.cwd(), 'public/hero-preview'),
  mobile: path.join(process.cwd(), 'public/hero-preview/mobile'),
};
export const PICKS_FILE = path.join(process.cwd(), 'app/data/hero-picks.json');

const MEDIA = /\.(mp4|png|jpe?g|webp)$/i;

export function listHeroFiles(set) {
  const files = fs.readdirSync(HERO_DIRS[set]).filter((f) => MEDIA.test(f));
  const clips = new Set(files.filter((f) => f.endsWith('.mp4')).map((f) => f.slice(0, -4)));
  return files
    .filter((f) => f.endsWith('.mp4') || !clips.has(f.replace(/\.[^.]+$/, '')))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export function readPicks() {
  return JSON.parse(fs.readFileSync(PICKS_FILE, 'utf8'));
}
