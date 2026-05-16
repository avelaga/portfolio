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
          padding: '80px 100px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: '-2px', lineHeight: 1, marginBottom: 32, color: '#0a0a0a' }}>
          Abhi Velaga
        </div>

        <div style={{ fontSize: 44, color: '#3a3a3a', lineHeight: 1.4, marginBottom: 64, maxWidth: 940 }}>
          Frontend engineer specializing in design systems and component architecture - with experience spanning founding-stage startups and enterprise product surfaces at scale.
        </div>

        <div style={{ display: 'flex', gap: 48 }}>
          {[['Biorce (Series A)'], ['Visa', ''], ['Schlumberger', '']].map(([company, tag]) => (
            <div key={company} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div style={{ fontSize: 28, fontWeight: 600, color: '#9a9a9a' }}>{company}</div>
              {tag && <div style={{ fontSize: 20, fontWeight: 400, color: '#c0c0c0' }}>{tag}</div>}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
