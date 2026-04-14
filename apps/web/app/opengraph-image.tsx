import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Groot UI - Premium UI Components & Blocks';
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
          fontSize: 128,
          background: '#0a0a0a',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', color: '#f5f56b', fontWeight: 'bold' }}>
          Groot UI
        </div>
        <div style={{ display: 'flex', fontSize: 48, color: '#a1a1aa', marginTop: '20px' }}>
          Premium UI Components & Blocks
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
