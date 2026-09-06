import { ArrowUpRight, Github } from 'lucide-react';
import { BrandMark } from './BrandLogo';
import { IntersectionReveal } from './IntersectionReveal';

export function OpenSourceSection() {
  return (
    <section id="open-source" className="section page-width open-source" aria-labelledby="open-heading">
      <IntersectionReveal className="open-source-art" delay={80}><span>[</span><BrandMark /><span>]</span></IntersectionReveal>
      <div className="open-source-copy">
        <h2 className="section-heading" id="open-heading">Yours to inspect.<br /><span className="serif-word">Yours to build on.</span></h2>
        <p>DRFT’s parsing, agent, and voice systems will be MIT licensed. Self-host them, inspect them, or help shape what comes next.</p>
        <p>The hosted app adds cloud sync and managed AI, with no API key required.</p>
        <a href="https://github.com/drft-open" target="_blank" rel="noopener noreferrer"><Github size={17} /> Follow the open-source release <ArrowUpRight size={14} /><span className="sr-only">(opens in a new tab)</span></a>
      </div>
    </section>
  );
}
