'use client';
import { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}><nav className="nav-inner" aria-label="Main">
    <a href="#main" aria-label="DRFT home"><BrandLogo /></a>
    <div className="nav-links"><a href="#how-it-works">How it works</a><a href="#why-drft">Why DRFT</a><a href="#coming-soon">Coming soon</a></div>
    <div className="nav-actions"><ThemeToggle /><a className="ghost-button" href="#waitlist-cta">Join waitlist</a></div>
  </nav></header>;
}
