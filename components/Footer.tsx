import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="footer page-width">
      <div className="footer-main">
        <a href="#main" aria-label="DRFT home"><BrandLogo large /></a>
        <p>Write a stronger resume. Keep it yours.</p>
        <nav aria-label="Footer">
          <a href="#how-it-works">How it works</a>
          <a href="#why-drft">Why DRFT</a>
          <a href="#waitlist-cta">Join the waitlist</a>
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL && <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>Contact</a>}
        </nav>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} DRFT</span><span>Made for real careers and real people.</span></div>
    </footer>
  );
}
