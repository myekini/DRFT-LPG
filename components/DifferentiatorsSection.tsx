import { Upload, Clock3, Check, FileText, Pin, GitBranch, ArrowRight } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { SiAnthropic, SiStripe } from 'react-icons/si';
import { BrandMark } from './BrandLogo';
export function DifferentiatorsSection() {
  return <section id="why-drft" className="section page-width features" aria-labelledby="features-heading">
    <div className="section-title-row"><h2 id="features-heading" className="section-heading">Good edits.<br /><span className="serif-word">Great instincts.</span></h2><p>Everything you need to tell your story.<br />Nothing that gets in the way.</p></div>
    <div className="feature-grid">
      <article className="feature-panel memory-panel"><div className="feature-copy"><p className="feature-label">Resume memory</p><h3>Your resume lives here.<br />Not in your clipboard.</h3><p>Every role. Every bullet. Every bit of context. DRFT remembers your career, so you can pick up where you left off.</p></div>
        <div className="memory-visual"><div className="memory-file"><FileText size={24} strokeWidth={1.5} /><div><strong>Alex_Morgan_Resume.pdf</strong><span>Your experience, connected.</span></div><span className="file-check"><Check size={15} /></span></div><div className="memory-path"><span /><BrandMark /><span /></div><div className="memory-nodes"><div><Upload size={16} /><strong>First upload</strong><span>Embedded & ready</span></div><div><Clock3 size={16} /><strong>Next session</strong><span>Context in &lt; 50ms</span></div></div><p className="visual-footnote">No re-pasting. No re-explaining.</p></div>
      </article>
      <article className="feature-panel voice-panel"><div className="feature-copy"><p className="feature-label">Voice preservation</p><h3>A better version.<br />Of your words.</h3><p>DRFT learns your verb patterns, sentence length, and tone. Stronger framing, with your fingerprints still on it.</p></div>
        <div className="voice-visual"><div className="voice-before"><span>The usual AI rewrite</span><p>“Collaborated with stakeholders across teams to deliver impactful solutions.”</p></div><div className="voice-divider"><ArrowRight size={17} /><span>Less generic. More specific.</span></div><div className="voice-after"><span><BrandMark /> With DRFT</span><p>“Led a cross-functional data team to ship a real-time pipeline.”</p><small>Your voice. Stronger framing.</small></div></div>
      </article>
      <article className="feature-panel vault-panel"><div className="feature-copy"><p className="feature-label">Version vault</p><h3>One career.<br />Every possibility.</h3><p>A tailored version for every role. Compare what changed, pick up any application, and export a clean PDF.</p><div className="file-name-joke"><s>resume_FINAL_v3_REAL.docx</s><span>You can retire this one.</span></div></div>
        <div className="vault-visual"><div className="vault-heading"><span><GitBranch size={16} /> Your versions</span><span>Synced</span></div><ul>
          <li><span className="company-icon stripe"><SiStripe /></span><div><strong>Stripe</strong><span>Senior Data Engineer</span></div><time>Mar 14</time><span className="version-status ready">Ready</span></li>
          <li><span className="company-icon google"><FcGoogle /></span><div><strong>Google</strong><span>Machine Learning Engineer</span></div><time>Mar 9</time><span className="version-status">Editing</span></li>
          <li><span className="company-icon anthropic"><SiAnthropic /></span><div><strong>Anthropic</strong><span>AI Engineer</span></div><time>Mar 3</time><span className="version-status">Draft</span></li>
        </ul><div className="master-resume"><Pin size={14} /><span>Master resume</span><span>Your starting point</span></div></div>
      </article>
    </div>
  </section>;
}
