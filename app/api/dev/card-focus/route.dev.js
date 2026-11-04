import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { cardPhotos, projects } from '../../../data/v3';

const FOCUS_FILE = path.join(process.cwd(), 'app/data/card-focus.json');
const POSITION = /^\d{1,3}(\.\d+)?% \d{1,3}(\.\d+)?%$/;

// Saves the cards' phone crop positions from /dev/cards. A .dev.js route, so only
// the dev server has it (next.config.js) and nothing can write to the live site's
// files.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const known = new Set(projects.flatMap((p) => cardPhotos(p).map((photo) => photo.src)));
  const entries = Object.entries(body ?? {});
  if (entries.some(([src, pos]) => !known.has(src) || !POSITION.test(pos))) {
    return NextResponse.json({ error: "A photo isn't on a card, or a position isn't like '30% 50%'." }, { status: 400 });
  }
  // Centred is the default, so it isn't stored
  const focus = Object.fromEntries(entries.filter(([, pos]) => pos !== '50% 50%').sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(FOCUS_FILE, `${JSON.stringify(focus, null, 2)}\n`);
  return NextResponse.json({ ok: true });
}
