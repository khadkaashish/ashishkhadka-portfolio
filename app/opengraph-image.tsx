import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ashish Khadka — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Status line */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#3f3f46', marginRight: '12px', fontSize: '18px' }}>&gt;</span>
          <span style={{ color: '#10b981', fontSize: '18px' }}>joining aws rds · aug 2026</span>
        </div>

        {/* Name */}
        <div style={{ color: '#fafafa', fontSize: '72px', fontWeight: 600, lineHeight: 1, marginBottom: '20px' }}>
          Ashish Khadka
        </div>

        {/* Tagline */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#3f3f46', marginRight: '8px', fontSize: '22px' }}>//</span>
          <span style={{ color: '#71717a', fontSize: '22px' }}>
            distributed systems · databases · infrastructure
          </span>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: '#27272a',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '80px',
            color: '#3f3f46',
            fontSize: '14px',
          }}
        >
          ashishkhadka.com
        </div>
      </div>
    ),
    { ...size }
  );
}
