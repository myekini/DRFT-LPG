'use client';
import { useEffect, useRef, useState } from 'react';
import { Check, Pause, Play, RotateCcw, Sparkles, Lightbulb, FileText } from 'lucide-react';
const target = 'Architected real-time feature pipeline';
export function HeroDemo() {
  const root = useRef<HTMLDivElement>(null); const typed = useRef<HTMLSpanElement>(null);
  const [paused, setPaused] = useState(false); const [decision, setDecision] = useState<'accepted' | 'reverted' | null>(null);
  useEffect(() => {
    const el = root.current; const text = typed.current; if (!el || !text) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let timers: ReturnType<typeof setTimeout>[] = []; let interval: ReturnType<typeof setInterval> | undefined;
    const clear = () => { timers.forEach(clearTimeout); timers = []; clearInterval(interval); };
    const after = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const run = () => {
      clear();
      if (media.matches || paused || decision) { el.dataset.phase = decision === 'reverted' ? 'reverted' : 'accepted'; text.textContent = target; return; }
      el.dataset.phase = '0'; text.textContent = '';
      [800,1200,2000,2800,3400].forEach((time, i) => after(time, () => { el.dataset.phase = String(i + 1); }));
      after(4200, () => { el.dataset.phase = '6'; let i = 0; interval = setInterval(() => { text.textContent = target.slice(0, ++i); if (i >= target.length) { clearInterval(interval); el.dataset.phase = '7'; } }, 35); });
      after(5800, () => { el.dataset.phase = '8'; }); after(6200, () => { el.dataset.phase = '9'; });
      after(8000, () => { el.dataset.phase = 'accepted'; }); after(8800, run);
    };
    run(); media.addEventListener('change', run);
    return () => { clear(); media.removeEventListener('change', run); };
  }, [paused, decision]);
  return <figure className="demo-figure"><div className="hero-demo" ref={root} data-phase="accepted">
    <div className="demo-toolbar"><span><FileText size={12} /> resume.drft</span><span>Editor preview</span></div>
    <div className="demo-panels"><div className="chat-panel" aria-hidden="true"><div className="chat-header">Stripe — Senior DE<span>JD attached <Check size={10} /></span></div><div className="bubble analyze">Analyzing your JD...</div><div className="dots initial-dots"><i /><i /><i /></div><div className="bubble gaps">3 gaps found: real-time pipelines, stakeholder alignment, ML feature engineering.</div><div className="bubble user-bubble">Yes — don’t touch Acme Corp role</div><div className="bubble editing">Editing 4 bullets in Stripe...<div className="dots"><i /><i /><i /></div></div></div>
    <div className="canvas-panel"><div className="resume-label">EXPERIENCE</div><p className="role-name">Senior Data Engineer · Stripe</p><p className="resume-date">2021 — Present</p><div className="resume-bullet">• Built batch ETL serving 400M events daily</div><div className="stream-bullet" aria-hidden="true">• <span ref={typed}>{target}</span><span className="typing-cursor">▌</span></div><div className="reverted-bullet">• Built data pipelines for product teams</div><div className="proposal"><p className="proposal-title"><Sparkles size={11} />{target}</p><p className="proposal-reason"><Lightbulb size={11} />JD requires real-time pipeline exp.</p><div className="proposal-actions"><button type="button" onClick={() => setDecision('accepted')}>Accept <Check size={10} /></button><button type="button" onClick={() => setDecision('reverted')}>Revert <RotateCcw size={10} /></button></div></div><div className="protected-role"><p>Data Engineer · Acme Corp</p><div className="resume-skeleton" /><div className="resume-skeleton short" /><span>Original wording preserved</span></div></div></div>
    <div className="demo-status"><span>Every change is yours to make.</span><span>DRFT</span></div>
  </div><figcaption><span>Targeted edits. Full control.</span><button className="demo-toggle" type="button" onClick={() => { if (decision) { setDecision(null); setPaused(false); } else setPaused(!paused); }} aria-label={decision ? 'Replay editor preview' : paused ? 'Play editor preview' : 'Pause editor preview'}>{decision ? <RotateCcw size={12} /> : paused ? <Play size={12} /> : <Pause size={12} />}{decision ? 'Replay' : paused ? 'Play' : 'Pause'}</button></figcaption><p className="sr-only">Editor demonstration: DRFT finds gaps in a job description and proposes a real-time pipeline bullet. You can accept or revert it while leaving your Acme Corp role unchanged.</p></figure>;
}
