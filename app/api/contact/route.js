import { NextResponse } from 'next/server';

// Contact form → email to Abhi via Resend (https://resend.com/docs/api-reference/emails/send-email).
// Needs RESEND_API_KEY and CONTACT_TO_EMAIL; the sender address must be on the
// domain verified in Resend (abhi.work).
const FROM = process.env.CONTACT_FROM_EMAIL || 'abhi.work <contact@abhi.work>';
const LIMITS = { name: 120, email: 200, message: 5000 };

// Light per-IP rate limit. In-memory, so it resets when a serverless instance
// recycles; enough to stop someone flooding the inbox from one browser.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never fill in. Pretend it worked.
  if (body.website) return NextResponse.json({ ok: true });

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please fill in your name, email and message.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'That email address doesn’t look right.' }, { status: 400 });
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return NextResponse.json({ error: 'That message is too long.' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many messages. Please try again a little later.' }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error('[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set');
    return NextResponse.json({ error: 'The form isn’t set up yet.' }, { status: 503 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [to],
      // Hitting Reply in Gmail goes straight to the sender
      reply_to: email,
      subject: `abhi.work: message from ${name}`,
      text: `${message}\n\n${name}\n${email}`,
      html: `<p style="white-space:pre-wrap">${escapeHtml(message)}</p><p>${escapeHtml(name)}<br>${escapeHtml(email)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend error', res.status, await res.text());
    return NextResponse.json({ error: 'Something went wrong sending that.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
