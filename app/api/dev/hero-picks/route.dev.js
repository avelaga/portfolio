import fs from 'fs';
import { NextResponse } from 'next/server';
import { PICKS_FILE, listHeroFiles } from '../../../lib/heroFiles';

// Saves the hero pick list from /dev/hero. A .dev.js route, so only the dev
// server has it (next.config.js) and nothing can write to the live site's files.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const picks = {};
  for (const set of ['desktop', 'mobile']) {
    const available = new Set(listHeroFiles(set));
    const list = body[set];
    if (!Array.isArray(list) || list.some((f) => !available.has(f)) || new Set(list).size !== list.length) {
      return NextResponse.json({ error: `The ${set} list has a file that isn't in the folder, or a repeat.` }, { status: 400 });
    }
    picks[set] = list;
  }
  fs.writeFileSync(PICKS_FILE, `${JSON.stringify(picks, null, 2)}\n`);
  return NextResponse.json({ ok: true });
}
