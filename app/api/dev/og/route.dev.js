import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const OG_DIR = path.join(process.cwd(), 'public/og');
const CROPS = path.join(process.cwd(), 'app/data/og-crops.json');

// Saves a share image from /dev/og: the cropped 1200×630 JPG into public/og/,
// and the source and crop into og-crops.json so it can be adjusted later. A
// .dev.js route, so only the dev server has it (next.config.js).
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const { file, image, crop } = body ?? {};
  // Only replace a share image that already exists
  if (!/^[\w-]+\.jpg$/.test(file ?? '') || !fs.existsSync(path.join(OG_DIR, file))) {
    return NextResponse.json({ error: 'Unknown share image.' }, { status: 400 });
  }
  const data = /^data:image\/jpeg;base64,(.+)$/.exec(image ?? '');
  if (!data) return NextResponse.json({ error: 'Expected a JPEG.' }, { status: 400 });
  fs.writeFileSync(path.join(OG_DIR, file), Buffer.from(data[1], 'base64'));

  const crops = fs.existsSync(CROPS) ? JSON.parse(fs.readFileSync(CROPS, 'utf8')) : {};
  crops[file] = crop;
  fs.writeFileSync(CROPS, `${JSON.stringify(crops, null, 2)}\n`);
  return NextResponse.json({ ok: true });
}
