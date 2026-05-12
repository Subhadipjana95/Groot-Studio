import { ImageResponse } from 'next/og';

export const alt = 'Groot Studio - High-performing, SEO friendly UI Components & Blocks';
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid lines */}
        <div style={{ position: 'absolute', top: 0, left: 100, width: 1, height: 630, backgroundColor: '#cfcfcf' }} />
        <div style={{ position: 'absolute', top: 0, right: 100, width: 1, height: 630, backgroundColor: '#cfcfcf' }} />
        <div style={{ position: 'absolute', top: 100, left: 0, width: 1200, height: 1, backgroundColor: '#cfcfcf' }} />
        <div style={{ position: 'absolute', bottom: 100, left: 0, width: 1200, height: 1, backgroundColor: '#cfcfcf' }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '0 80px',
            backgroundImage: 'linear-gradient(to bottom right, rgba(244, 244, 114, 0.05), rgba(208, 6, 107, 0.1))',
          }}
        >
          {/* Top Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 36,
              padding: '12px 24px',
              borderRadius: 50,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(208, 6, 107, 0.15)',
              boxShadow: '0 4px 20px -4px rgba(208, 6, 107, 0.15)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundImage: 'linear-gradient(135deg, #f4f472, #d0066b)',
                color: '#ffffff',
                marginRight: 12,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: '#09090b', letterSpacing: '-0.5px' }}>
              Groot Studio
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: '-2.5px',
              color: '#09090b',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            <span>Build stunning interfaces with</span>
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg, #d0066b, #f4f472)',
                backgroundClip: 'text',
                color: 'transparent',
                marginTop: 12,
              }}
            >
              Groot Studio
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#52525b',
              marginTop: 40,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Built with Next.js, Typescript, shadcn/ui, Tailwind CSS and Motion.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
