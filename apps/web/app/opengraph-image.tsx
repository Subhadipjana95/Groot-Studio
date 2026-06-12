import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata
export const alt = 'Groot Studio - UI Component Library';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  const fontDir = join(process.cwd(), 'public/font');
  const [gambarino, geist] = await Promise.all([
    readFile(join(fontDir, 'Gambarino-Regular.ttf')),
    readFile(join(fontDir, 'Geist-Regular.woff')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#09090b',
          fontFamily: 'Geist, sans-serif',
          position: 'relative',
          padding: 80
        }}
      >
        {/* Grid lines */}
        <div style={{ position: 'absolute', top: 0, left: 80, width: 1, height: 630, backgroundColor: '#36363b' }} />
        <div style={{ position: 'absolute', top: 0, right: 80, width: 1, height: 630, backgroundColor: '#36363b' }} />
        <div style={{ position: 'absolute', top: 60, left: 0, width: 1200, height: 1, backgroundColor: '#36363b' }} />
        <div style={{ position: 'absolute', bottom: 60, left: 0, width: 1200, height: 1, backgroundColor: '#36363b' }} />

        {/* Inner container — clips glows within grid boundaries */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 80,
            width: 1040,
            height: 510,
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {/* Glow blobs */}
          <div
            style={{
              position: 'absolute',
              bottom: -120,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 800,
              height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, rgba(212, 24, 71, 0.18) 0%, transparent 68%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -150,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 800,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, rgba(212, 24, 71, 0.16) 0%, transparent 68%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -90,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 750,
              height: 260,
              borderRadius: '50%',
              opacity: 0.5,
              background: 'radial-gradient(circle at center, rgba(212, 24, 71, 0.18) 0%, transparent 68%)',
            }}
          />
          {/* Bottom gradient line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 140,
              background: 'linear-gradient(to top, rgba(250, 91, 110, 0.25), transparent)',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 60,
              paddingRight: 60,
              width: '100%',
              height: '100%',
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
                padding: 8,
                paddingRight: 16,
                border: '1px solid rgba(181, 20, 60, 0.75)',
                borderRadius: 40,
                backgroundColor: 'rgba(181, 20, 60, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 22,
                  backgroundImage: 'linear-gradient(135deg, #fa5b6e, #d41847)',
                  color: '#ffffff',
                  marginRight: 12,
                  boxShadow: '0 4px 24px -4px rgba(204, 0, 102, 0.4)',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M82.7951 127.5C94.6681 127.5 103.727 123.027 109.825 115.929C115.932 108.821 119.1 99.0414 119.1 88.3916C119.1 71.1314 108.571 55.584 92.0002 50.3623C88.1376 49.1452 83.9193 49.3918 80.6935 50.9326C77.4855 52.4649 75.2761 55.2604 75.3 59.1973V59.2002L75.3009 119.224C75.301 123.455 78.6829 127.5 82.7951 127.5Z" fill="black" stroke="black" />
                  <path d="M58.6904 0.5C74.2266 0.5 87.8894 8.51789 95.7686 20.6436C97.3985 23.152 97.149 25.8417 95.7461 27.9229C94.3345 30.0165 91.7462 31.5 88.7012 31.5H87.3809C71.1992 31.5002 58.0812 44.6181 58.0811 60.7998V79.7549C58.0811 84.8273 53.9388 88.9003 49.1387 87.8428C29.3251 83.4773 14.5001 65.8152 14.5 44.6904L14.5146 43.5498C15.1102 20.051 34.0511 1.11057 57.5498 0.514648L58.6904 0.5Z" fill="black" stroke="black" />
                </svg>
              </div>
              <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.5px' }}>
                Groot Studio
              </div>
            </div>

            {/* Header */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0px 18px',
                fontSize: 80,
                fontWeight: 400,
                fontFamily: 'gambarino',
                letterSpacing: '1px',
                color: 'white',
                lineHeight: 1.1,
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#d41847', textShadow: '0 0 12px #b5143c', marginRight: 16 }}>Beautifully</span><span>Crafted</span>
              <br />
              <span style={{ marginRight: 16 }}>Blocks for</span><span style={{ color: '#d41847', textShadow: '0 0 12px #b5143c', marginRight: 16 }}>Modern</span><span>UI</span>
            </div>

            {/* Subtitle */}
            <div
              style={{
                display: 'flex',
                textWrap: 'balance',
                textAlign: 'center',
                fontSize: 32,
                color: '#a1a1aa',
                marginTop: 32,
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.5px'
              }}
            >
              <span>a set of High-Performing, SEO Optimised Components Designed for Modern Developers</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: geist,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'gambarino',
          data: gambarino,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
