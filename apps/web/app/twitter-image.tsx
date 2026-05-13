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
              gap: '6px',
              marginBottom: '36px',
              padding: '12px 16px',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(208, 6, 107, 0.15)',
              boxShadow: '0 4px 20px -4px rgba(208, 6, 107, 0.15)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M119.6 88.392C119.6 109.882 106.815 128 82.7952 128C78.349 128 74.8006 123.67 74.8006 119.224L74.8 59.2C74.7495 50.8731 84.2085 47.3824 92.1506 49.8851C108.945 55.1775 119.6 70.9306 119.6 88.392Z" fill="url(#paint0_linear_corner)" />
              <path d="M82.7951 127.5C94.6681 127.5 103.727 123.027 109.825 115.929C115.932 108.821 119.1 99.0414 119.1 88.3916C119.1 71.1314 108.571 55.584 92.0002 50.3623C88.1376 49.1452 83.9193 49.3918 80.6935 50.9326C77.4855 52.4649 75.2761 55.2604 75.3 59.1973V59.2002L75.3009 119.224C75.301 123.455 78.6829 127.5 82.7951 127.5Z" stroke="#FDD3A6" strokeOpacity={0.66} />
              <path d="M58.6906 0C74.4032 0 88.2202 8.10982 96.1877 20.3715C99.6828 25.7503 95.1158 32 88.7011 32H87.3813C71.4755 32 58.5813 44.8942 58.5813 60.8V79.7549C58.5813 85.0659 54.2178 89.4743 49.0312 88.3315C28.9932 83.4773 14.0001 66.0552 14 44.6906C14 20.0094 34.0095 0.000418936 58.6906 0Z" fill="url(#paint1_linear_corner)" />
              <path d="M58.6904 0.5C74.2266 0.5 87.8894 8.51789 95.7686 20.6436C97.3985 23.152 97.149 25.8417 95.7461 27.9229C94.3345 30.0165 91.7462 31.5 88.7012 31.5H87.3809C71.1992 31.5002 58.0812 44.6181 58.0811 60.7998V79.7549C58.0811 84.8273 53.9388 88.9003 49.1387 87.8428C29.3251 83.4773 14.5001 65.8152 14.5 44.6904L14.5146 43.5498C15.1102 20.051 34.0511 1.11057 57.5498 0.514648L58.6904 0.5Z" stroke="#FDD3A6" strokeOpacity={0.66} />
              <defs>
                <linearGradient id="paint0_linear_corner" x1="97.2" y1="128" x2="97.2" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFC65C" />
                  <stop offset={0.605769} stopColor="#FF6984" />
                  <stop offset={1} stopColor="#EA1E4F" />
                </linearGradient>
                <linearGradient id="paint1_linear_corner" x1="55.6985" y1="0" x2="55.6985" y2="88.5134" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EA1E4F" />
                  <stop offset={0.394231} stopColor="#FF6984" />
                  <stop offset={1} stopColor="#FFC65C" />
                </linearGradient>
              </defs>
            </svg>
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
