'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Check, ChevronDown, FileText, GitBranch, Lightbulb, LockKeyhole, MessageSquare, MoreHorizontal, Paperclip, Pause, Play, RotateCcw } from 'lucide-react';
import { BrandMark } from './BrandLogo';
const target = 'Architected a real-time feature pipeline serving 400M events daily.';
export function HeroDemo() {
  const root = useRef<HTMLDivElement>(null);
  const typed = useRef<HTMLSpanElement>(null);
  const [paused, setPaused] = useState(false);
  const [decision, setDecision] = useState<'accepted' | 'reverted' | null>(null);
  useEffect(() => {
    const el = root.current; const text = typed.current;
    if (!el || !text) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let timers: ReturnType<typeof setTimeout>[] = [];
    let interval: ReturnType<typeof setInterval> | undefined;
    const clear = () => { timers.forEach(clearTimeout); timers = []; clearInterval(interval); };
    const after = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const run = () => {
      clear();
      if (media.matches || paused || decision) {
        el.dataset.phase = decision === 'reverted' ? 'reverted' : 'accepted';
        text.textContent = target; return;
      }
      el.dataset.phase = '0'; text.textContent = '';
      after(700, () => { el.dataset.phase = '1'; });
      after(1400, () => { el.dataset.phase = '2'; });
      after(2300, () => {
        el.dataset.phase = 'typing'; let i = 0;
        interval = setInterval(() => {
          text.textContent = target.slice(0, ++i);
          if (i >= target.length) { clearInterval(interval); el.dataset.phase = 'proposal'; }
        }, 28);
      });
      after(13500, () => { el.dataset.phase = 'accepted'; });
      after(18000, run);
    };
    run(); media.addEventListener('change', run);
    const onVisibility = () => { if (document.hidden) clear(); else run(); };
    document.addEventListener('visibilitychange', onVisibility);
    return () => { clear(); media.removeEventListener('change', run); document.removeEventListener('visibilitychange', onVisibility); };
  }, [paused, decision]);
  function togglePlayback() {
    if (decision) { setDecision(null); setPaused(false); }
    else setPaused(!paused);
  }
  return <figure className="demo-figure" id="editor-preview">
    <div className="hero-demo" ref={root} data-phase="accepted">
      <div className="demo-toolbar">
        <span className="demo-workspace"><BrandMark /> Alex’s workspace <ChevronDown size={13} /></span>
        <span className="demo-file"><FileText size={14} /> Stripe — Senior Data Engineer</span><MoreHorizontal size={18} />
      </div>
      <div className="demo-panels">
        <aside className="demo-rail" aria-hidden="true"><span className="rail-active"><FileText size={18} /></span><MessageSquare size={18} /><GitBranch size={18} /><span className="rail-avatar">A</span></aside>
        <div className="chat-panel" aria-hidden="true">
          <div className="chat-heading"><span><BrandMark /> Your editing partner</span><span className="chat-new">+</span></div>
          <div className="job-attachment"><FileText size={16} /><div><strong>Senior Data Engineer</strong><span>Stripe · Job description attached</span></div><Check size={14} /></div>
          <div className="user-bubble">Help me tailor my experience for this role. Keep it sounding like me.</div>
          <div className="ai-message"><BrandMark /><div><p>I’ve read the job description. Your experience is a strong fit. Let’s bring these forward:</p><ul><li>Real-time pipelines</li><li>Stakeholder alignment</li><li>ML feature engineering</li></ul></div></div>
          <div className="user-bubble follow-up">Yes — don’t touch the Acme Corp role.</div>
          <div className="ai-message editing"><BrandMark /><p>On it. A targeted edit to your Stripe experience. The rest stays yours.<span className="dots"><i /><i /><i /></span></p></div>
          <div className="chat-composer"><span>Ask DRFT to refine anything…</span><div><Paperclip size={15} /><span><ArrowUp size={15} /></span></div></div>
        </div>
        <div className="canvas-panel">
          <div className="canvas-heading"><span><FileText size={13} /> Resume canvas</span><span><Check size={12} /> Saved</span></div>
          <div className="resume-page">
            <div className="resume-person"><h3>Alex Morgan</h3><p>Data engineer. Systems thinker. Builder.</p><span>San Francisco, CA &nbsp; · &nbsp; alex@example.com</span></div>
            <div className="resume-label">EXPERIENCE</div>
            <div className="resume-role"><p>Senior Data Engineer <span>Stripe</span></p><span>2021 — Present</span></div>
            <p className="resume-bullet">Built batch ETL serving 400M events daily across product and analytics teams.</p>
            <div className="edit-space">
              <div className="proposal">
                <div className="proposal-label"><BrandMark /><span>Suggested edit</span><span className="edit-number">01 / 04</span></div>
                <p className="old-bullet">Built data pipelines for product teams.</p>
                <p className="proposal-title"><span ref={typed}>{target}</span><span className="typing-cursor">▌</span></p>
                <p className="proposal-reason"><Lightbulb size={13} /> This role calls for real-time pipeline experience.</p>
                <div className="proposal-actions"><button type="button" onClick={() => setDecision('accepted')}><Check size={13} /> Accept edit</button><button type="button" onClick={() => setDecision('reverted')}><RotateCcw size={12} /> Revert</button></div>
              </div>
              <div className="accepted-edit"><p>{target}</p><span><Check size={12} /> Your edit, accepted.</span></div>
              <div className="reverted-edit"><p>Built data pipelines for product teams.</p><span><RotateCcw size={12} /> Original wording restored.</span></div>
            </div>
            <div className="protected-role"><div className="resume-role"><p>Data Engineer <span>Acme Corp</span></p><span>2018 — 2021</span></div><p className="resume-bullet">Led a team of four to rebuild the analytics platform from the ground up.</p><span className="protected-label"><LockKeyhole size={11} /> Original wording preserved</span></div>
          </div>
        </div>
      </div>
      <div className="demo-status"><span><BrandMark /> Your experience. Your voice. Your call.</span></div>
    </div>
    <figcaption><span><span className="preview-dot" /> A little AI assistance. A lot of you.</span><button className="demo-toggle" type="button" onClick={togglePlayback} aria-label={decision ? 'Replay editor preview' : paused ? 'Play editor preview' : 'Pause editor preview'}>{decision ? <RotateCcw size={13} /> : paused ? <Play size={13} /> : <Pause size={13} />}{decision ? 'Replay demo' : paused ? 'Play demo' : 'Pause demo'}</button></figcaption>
    <p className="sr-only">An illustrative resume editor. DRFT proposes a real-time pipeline bullet for a Stripe application. You approve each edit while keeping your Acme Corp experience unchanged.</p>
  </figure>;
}
