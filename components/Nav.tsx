'use client';
import { useEffect, useState } from 'react';
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 80); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}><nav className="page-width flex h-full items-center justify-between" aria-label="Main"><a href="#main" className="wordmark" aria-label="DRFT home">DRFT</a><a className="ghost-button" href="#waitlist-cta">Join waitlist</a></nav></header>;
}
