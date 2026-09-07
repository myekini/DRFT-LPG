import { ArrowDown, Check } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';
import { HeroDemo } from './HeroDemo';
import { ScrollStage } from './ScrollStage';

export function HeroSection() {
  return (
    <section className="hero page-width" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <h1 id="hero-heading">
          AI edits.<br />
          You <span className="headline-highlight">decide.</span>
        </h1>
        <p className="hero-body">A stronger resume. Still unmistakably you.<br />Chat, refine, and approve every change in one place.</p>
        <WaitlistForm />
        <p className="trust-line"><Check size={13} /> Early access <span>·</span> Free at launch</p>
      </div>
      <div className="demo-intro"><a href="#editor-preview">See DRFT in action <ArrowDown size={14} /></a></div>
      <ScrollStage><HeroDemo /></ScrollStage>
    </section>
  );
}
