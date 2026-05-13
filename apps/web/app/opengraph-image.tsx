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
              <svg width="36" height="36" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.7951 127.5C94.6681 127.5 103.727 123.027 109.825 115.929C115.932 108.821 119.1 99.0414 119.1 88.3916C119.1 71.1314 108.571 55.584 92.0002 50.3623C88.1376 49.1452 83.9193 49.3918 80.6935 50.9326C77.4855 52.4649 75.2761 55.2604 75.3 59.1973V59.2002L75.3009 119.224C75.301 123.455 78.6829 127.5 82.7951 127.5Z" fill="black" stroke="black"/>
                <path d="M58.6904 0.5C74.2266 0.5 87.8894 8.51789 95.7686 20.6436C97.3985 23.152 97.149 25.8417 95.7461 27.9229C94.3345 30.0165 91.7462 31.5 88.7012 31.5H87.3809C71.1992 31.5002 58.0812 44.6181 58.0811 60.7998V79.7549C58.0811 84.8273 53.9388 88.9003 49.1387 87.8428C29.3251 83.4773 14.5001 65.8152 14.5 44.6904L14.5146 43.5498C15.1102 20.051 34.0511 1.11057 57.5498 0.514648L58.6904 0.5Z" fill="black" stroke="black"/>
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
          <svg width="72" height="72" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M119.6 88.392C119.6 109.882 106.815 128 82.7952 128C78.349 128 74.8006 123.67 74.8006 119.224L74.8 59.2C74.7495 50.8731 84.2085 47.3824 92.1506 49.8851C108.945 55.1775 119.6 70.9306 119.6 88.392Z" fill="url(#paint0_linear_corner)"/>
            <path d="M82.7951 127.5C94.6681 127.5 103.727 123.027 109.825 115.929C115.932 108.821 119.1 99.0414 119.1 88.3916C119.1 71.1314 108.571 55.584 92.0002 50.3623C88.1376 49.1452 83.9193 49.3918 80.6935 50.9326C77.4855 52.4649 75.2761 55.2604 75.3 59.1973V59.2002L75.3009 119.224C75.301 123.455 78.6829 127.5 82.7951 127.5Z" stroke="#FDD3A6" strokeOpacity={0.66}/>
            <path d="M58.6906 0C74.4032 0 88.2202 8.10982 96.1877 20.3715C99.6828 25.7503 95.1158 32 88.7011 32H87.3813C71.4755 32 58.5813 44.8942 58.5813 60.8V79.7549C58.5813 85.0659 54.2178 89.4743 49.0312 88.3315C28.9932 83.4773 14.0001 66.0552 14 44.6906C14 20.0094 34.0095 0.000418936 58.6906 0Z" fill="url(#paint1_linear_corner)"/>
            <path d="M58.6904 0.5C74.2266 0.5 87.8894 8.51789 95.7686 20.6436C97.3985 23.152 97.149 25.8417 95.7461 27.9229C94.3345 30.0165 91.7462 31.5 88.7012 31.5H87.3809C71.1992 31.5002 58.0812 44.6181 58.0811 60.7998V79.7549C58.0811 84.8273 53.9388 88.9003 49.1387 87.8428C29.3251 83.4773 14.5001 65.8152 14.5 44.6904L14.5146 43.5498C15.1102 20.051 34.0511 1.11057 57.5498 0.514648L58.6904 0.5Z" stroke="#FDD3A6" strokeOpacity={0.66}/>
            <defs>
              <linearGradient id="paint0_linear_corner" x1="97.2" y1="128" x2="97.2" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC65C"/>
                <stop offset={0.605769} stopColor="#FF6984"/>
                <stop offset={1} stopColor="#EA1E4F"/>
              </linearGradient>
              <linearGradient id="paint1_linear_corner" x1="55.6985" y1="0" x2="55.6985" y2="88.5134" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EA1E4F"/>
                <stop offset={0.394231} stopColor="#FF6984"/>
                <stop offset={1} stopColor="#FFC65C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
