import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { BrandMark } from './BrandLogo';

interface Milestone {
  phase: string;
  tag: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  items: string[];
}

const MILESTONES: Milestone[] = [
  {
    phase: 'Phase 01',
    tag: 'Alpha Engine',
    title: 'Precision Diff & Parsing Engine',
    status: 'completed',
    items: [
      'AST-aware PDF & DOCX resume parser',
      'Word-level granular diff generator',
      'Local-first privacy sandbox',
    ],
  },
  {
    phase: 'Phase 02',
    tag: 'Coming Soon',
    title: 'Open-Source Release & Wave 1 Invites',
    status: 'current',
    items: [
      'Public GitHub repository & MIT engine',
      'Hosted early access web platform',
      'Interactive chat & career alignment agent',
    ],
  },
  {
    phase: 'Phase 03',
    tag: 'In Roadmap',
    title: 'Cloud Sync & Career Memory Vault',
    status: 'upcoming',
    items: [
      'Multi-device encrypted resume sync',
      'Target job description match scoring',
      'Realtime conversational voice refinement',
    ],
  },
];

export function ComingSoonRoadmap() {
  return (
    <section className="section page-width coming-soon-section" aria-labelledby="roadmap-heading">
      <div className="section-title-row">
        <div>
          <div className="section-pill-tag">
            <BrandMark className="tag-mark" />
            <span>Launch Trajectory</span>
          </div>
          <h2 className="section-heading" id="roadmap-heading">
            Building in the open.<br />
            <span className="serif-word">From day zero.</span>
          </h2>
        </div>
        <p>
          We believe the tools that shape your career should be transparent and inspectable.
          Here is our path from core engine to global availability.
        </p>
      </div>

      <div className="roadmap-grid">
        {MILESTONES.map((m) => (
          <div
            key={m.phase}
            className={`roadmap-card ${m.status === 'current' ? 'is-current' : ''}`}
          >
            <div className="roadmap-card-header">
              <span className="roadmap-phase">{m.phase}</span>
              <span className={`roadmap-tag status-${m.status}`}>
                {m.status === 'completed' && <CheckCircle2 size={12} />}
                {m.status === 'current' && <Sparkles size={12} />}
                {m.status === 'upcoming' && <Clock size={12} />}
                {m.tag}
              </span>
            </div>

            <h3 className="roadmap-card-title">{m.title}</h3>

            <ul className="roadmap-card-list">
              {m.items.map((item) => (
                <li key={item}>
                  <span className="bullet-signal">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {m.status === 'current' && (
              <div className="current-badge-footer">
                <span className="pulse-indicator" />
                <span>Active Development · Early Access Wave 1 Forming</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
