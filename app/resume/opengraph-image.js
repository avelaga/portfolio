import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
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
        <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: '-1.5px', lineHeight: 1, marginBottom: 14, color: '#0a0a0a' }}>
          Abhi Velaga
        </div>

        <div style={{ fontSize: 18, color: '#5a5a5a', marginBottom: 52, display: 'flex' }}>
          abhinav.velaga@gmail.com · abhi.work · github.com/avelaga · linkedin.com/in/abhivelaga
        </div>

        <div style={{ fontSize: 28, color: '#0a0a0a', lineHeight: 1.45, marginBottom: 52, maxWidth: 860 }}>
          Frontend engineer specializing in design systems and component architecture - with experience spanning founding-stage startups and enterprise product surfaces at scale.
        </div>

        <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#9a9a9a', paddingBottom: 12, borderBottom: '1px solid #e8e8e8', marginBottom: 24 }}>
          Experience
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Biorce',       'Senior Frontend Developer',  'April 2026 – Present'],
            ['Visa',         'Senior Software Engineer',   'March 2023 – April 2026'],
            ['Schlumberger', 'Software Engineer Intern',   'Summer 2019'],
          ].map(([company, role, dates]) => (
            <div key={company} style={{ display: 'flex', gap: 16, fontSize: 20, alignItems: 'baseline' }}>
              <div style={{ fontWeight: 600, color: '#0a0a0a', width: 180 }}>{company}</div>
              <div style={{ color: '#5a5a5a', flex: 1 }}>{role}</div>
              <div style={{ color: '#9a9a9a', fontSize: 16 }}>{dates}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
