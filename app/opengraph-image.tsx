import { ImageResponse } from 'next/og';
export const alt = 'DRFT — AI edits. You decide.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '90px', background: '#0a0a0a', color: '#f0f0f0' }}><div style={{ fontSize: 24, letterSpacing: 6, marginBottom: 40 }}>DRFT</div><div style={{ fontSize: 90, fontFamily: 'serif', lineHeight: 1.05 }}>AI edits.</div><div style={{ fontSize: 90, fontFamily: 'serif', lineHeight: 1.05 }}>You decide.</div><div style={{ fontSize: 24, color: '#a0a0a0', marginTop: 35 }}>The AI resume editor that keeps your voice.</div></div>, size);
}
