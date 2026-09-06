import { ArrowRight } from 'lucide-react';
import { BrandMark } from './BrandLogo';
import { IntersectionReveal } from './IntersectionReveal';

export function OpenSourceSection() {
  return (
    <section id="coming-soon" className="section page-width coming-soon" aria-labelledby="coming-soon-heading">
      <IntersectionReveal className="coming-soon-art" delay={80}><BrandMark /><span>Soon</span></IntersectionReveal>
      <div className="coming-soon-copy">
        <p className="eyebrow">Coming soon</p>
        <h2 className="section-heading" id="coming-soon-heading">A better way to<br /><span className="serif-word">work on your resume.</span></h2>
        <p>We’re building DRFT with a small group of early users. Join the waitlist to try it first and help shape what ships.</p>
        <a href="#waitlist-cta">Get early access <ArrowRight size={15} /></a>
      </div>
    </section>
  );
}
