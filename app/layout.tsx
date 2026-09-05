import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Instrument_Serif } from 'next/font/google';
import './globals.css';

const serif = Instrument_Serif({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-instrument-serif' });
export const metadata: Metadata = {
  metadataBase: new URL('https://drft.io'),
  title: 'DRFT — AI edits. You decide.',
  description: 'Chat alongside your resume and job description. Watch targeted edits stream into the canvas. Your voice stays yours — every time.',
  openGraph: { title: 'DRFT — AI edits. You decide.', description: 'The AI resume editor that keeps your voice. Open source.', url: 'https://drft.io', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'DRFT — AI edits. You decide.', description: 'Chat alongside your resume. Watch edits stream live. Approve every change.' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}><head><script defer data-domain="drft.io" src="https://plausible.io/js/script.js" /></head><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
