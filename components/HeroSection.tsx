'use client';
import { useState } from 'react';
import { ArrowDown, Check, Sparkles } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';
import { HeroDemo } from './HeroDemo';
import { BrandMark, DraftingCrosshair } from './BrandLogo';

export function HeroSection() {
  const [decidedState, setDecidedState] = useState<'decide' | 'approved'>('decide');

  const toggleDecide = () => {
    setDecidedState((prev) => (prev === 'decide' ? 'approved' : 'decide'));
  };

  return (
    <section className="hero page-width" aria-labelledby="hero-heading">
      {/* Precision Drafting Crosshairs / Architectural Signal Markers */}
      <div className="hero-crosshairs-canvas" aria-hidden="true">
        <DraftingCrosshair x="3%" y="10%" label="01 // SPEC" delay="0s" />
        <DraftingCrosshair x="94%" y="14%" label="02 // DIFF" delay="1.8s" />
        <DraftingCrosshair x="6%" y="85%" label="03 // OSS" delay="3.2s" />
        <DraftingCrosshair x="92%" y="90%" label="04 // CORE" delay="4.6s" />
      </div>

      <div className="hero-copy">
        {/* Modern Coming Soon / Live Status Indicator */}
        <div className="hero-status-pill-wrap">
          <div className="hero-status-pill">
            <span className="status-ping-beacon">
              <span className="ping-wave" />
              <span className="ping-dot" />
            </span>
            <span className="status-label">DRFT 1.0</span>
            <span className="status-divider">·</span>
            <span className="status-desc">Public Beta Coming Soon</span>
            <span className="status-divider">·</span>
            <span className="status-highlight">
              <Sparkles size={11} className="inline-sparkle" /> Early Access Wave 1
            </span>
          </div>
        </div>

        <h1 id="hero-heading">
          AI edits.
          <br />
          You{' '}
          <button
            type="button"
            className={`headline-highlight ${decidedState === 'approved' ? 'is-approved' : ''}`}
            onClick={toggleDecide}
            title="Click to toggle decision"
            aria-label={`Current state: ${decidedState}. Click to toggle approve state.`}
          >
            <BrandMark animated className="decide-mark" />
            <span className="decide-word">
              {decidedState === 'approved' ? 'approve.' : 'decide.'}
            </span>
            <span className="decide-hint-badge" aria-hidden="true">
              {decidedState === 'approved' ? '✓ accepted' : 'click me'}
            </span>
          </button>
        </h1>

        <p className="hero-body">
          A stronger resume. Still unmistakably you.
          <br />
          Chat, refine, and approve every change — all in one place.
        </p>

        <WaitlistForm />

        <p className="trust-line">
          <Check size={13} /> Early access <span>·</span> Free tier at launch <span>·</span> Open-source core
        </p>
      </div>

      <div className="demo-intro">
        <a href="#editor-preview">
          See DRFT in action <ArrowDown size={14} />
        </a>
      </div>

      <HeroDemo />
    </section>
  );
}
