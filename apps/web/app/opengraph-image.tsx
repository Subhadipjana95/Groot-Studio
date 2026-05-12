import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Groot Studio - High-performing, SEO friendly UI Components & Blocks';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#09090b',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid lines */}
        <div style={{ position: 'absolute', top: 0, left: 80, width: 1, height: 630, backgroundColor: '#36363b' }} />
        <div style={{ position: 'absolute', top: 0, right: 80, width: 1, height: 630, backgroundColor: '#36363b' }} />
        <div style={{ position: 'absolute', top: 60, left: 0, width: 1200, height: 1, backgroundColor: '#36363b' }} />
        <div style={{ position: 'absolute', bottom: 60, left: 0, width: 1200, height: 1, backgroundColor: '#36363b' }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 140,
            paddingRight: 140,
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundImage: 'linear-gradient(135deg, #f5f56b, #cc0066)',
                color: '#ffffff',
                marginRight: 24,
                boxShadow: '0 4px 24px -4px rgba(204, 0, 102, 0.4)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div style={{ display: 'flex', fontSize: 36, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.5px' }}>
              Groot Studio
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: '-2px',
              color: 'white',
              lineHeight: 1.1,
            }}
          >
            <span>Premium UI Components</span>
            <span style={{ color: '#f5f56b' }}>& Blocks</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 32,
              color: '#a1a1aa',
              marginTop: 32,
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.5px'
            }}
          >
            <span>A set of beautifully designed components that you</span>
            <span>can customize, extend, and build on. Start here</span>
            <span>then make it your own. Open Source. Open Code.</span>
          </div>
        </div>

        {/* Decorative corner icon */}
        <div
          style={{
            position: 'absolute',
            bottom: 120,
            right: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d41847" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
