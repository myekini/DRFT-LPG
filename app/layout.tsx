import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Instrument_Serif } from 'next/font/google';
import './globals.css';
const serif = Instrument_Serif({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', variable: '--font-instrument-serif' });
const themeScript = `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('drft-theme')==='dark'?'dark':'light'}catch(e){}})()`;
export const metadata: Metadata = {
  metadataBase: new URL('https://drft.io'),
  title: 'DRFT — AI edits. You decide.',
  description: 'A stronger resume. Still unmistakably you. Chat, refine, and approve every change with DRFT, the AI resume editor that keeps your voice.',
  openGraph: { title: 'DRFT — AI edits. You decide.', description: 'The AI resume editor that keeps your voice. Open source.', url: 'https://drft.io', type: 'website', images: [{ url: '/brand/og-image.png', width: 1200, height: 630, alt: 'DRFT — AI edits. You decide.' }] },
  twitter: { card: 'summary_large_image', title: 'DRFT — AI edits. You decide.', description: 'Chat alongside your resume. Watch edits stream live. Approve every change.', images: ['/brand/og-image.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="light" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
    <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /><script defer data-domain="drft.io" src="https://plausible.io/js/script.js" /></head>
    <body><a className="skip-link" href="#main">Skip to content</a>{children}</body>
  </html>;
}
