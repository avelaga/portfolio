import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadFont(family, weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  ).then(r => r.text());
  const url = css.match(/src: url\(([^)]+)\)/)?.[1];
  return url ? fetch(url).then(r => r.arrayBuffer()) : null;
}

export default async function Image() {
  const [regular, semibold] = await Promise.all([
    loadFont('Inter', 400),
    loadFont('Inter', 600),
  ]);

  const fonts = [
    regular  && { name: 'Inter', data: regular,  style: 'normal', weight: 400 },
    semibold && { name: 'Inter', data: semibold, style: 'normal', weight: 600 },
  ].filter(Boolean);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        <div style={{ fontSize: 54, color: '#3a3a3a', lineHeight: 1.4, marginBottom: 56, maxWidth: 980 }}>
          Design-minded senior frontend engineer specializing in design systems and UI architecture - with experience building team-multiplying foundations at both founding-stage startups and global enterprises.
        </div>

        <div style={{ display: 'flex', gap: 48 }}>
          {['Biorce (Series A)', 'Visa', 'Schlumberger'].map((company) => (
            <div key={company} style={{ fontSize: 34, fontWeight: 600, color: '#9a9a9a' }}>{company}</div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 80, right: 100, fontSize: 28, color: '#c0c0c0' }}>
          Austin, TX
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
