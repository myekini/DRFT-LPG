'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Shield, Terminal } from 'lucide-react';
import { BrandMark } from './BrandLogo';

export function OpenSourceSection() {
  const [copied, setCopied] = useState(false);
  const command = 'npx drft@latest init my-resume';

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="open-source" className="section page-width open-source-modern" aria-labelledby="open-heading">
      <div className="oss-content-wrapper">
        <div className="oss-text-col">
          <div className="section-pill-tag">
            <BrandMark className="tag-mark" />
            <span>Open Core Architecture</span>
          </div>

          <h2 className="section-heading" id="open-heading">
            Yours to inspect.<br />
            <span className="serif-word">Yours to build on.</span>
          </h2>

          <p className="oss-lead">
            DRFT’s AST parser, agent workflows, and prompt structures are 100% MIT licensed.
            No locked proprietary resume silos. Self-host it, run it entirely on your machine, or contribute.
          </p>

          <div className="oss-tags-row">
            <span className="oss-badge"><Shield size={12} /> MIT License</span>
            <span className="oss-badge">Local-First</span>
            <span className="oss-badge">TypeScript</span>
            <span className="oss-badge">LLM Agnostic</span>
          </div>

          <div className="oss-actions">
            <a
              className="primary-github-button"
              href="https://github.com/drft-open"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              <span>Follow the Open-Source Release</span>
              <ArrowUpRight size={15} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="oss-terminal-col">
          <div className="terminal-card">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-title">
                <Terminal size={12} />
                <span>drft-cli — zsh</span>
              </div>
              <button
                type="button"
                className="terminal-copy-btn"
                onClick={copyCommand}
                title="Copy install command"
                aria-label="Copy install command"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="terminal-body">
              <div className="terminal-line comment">
                # Initialize local DRFT agent & parser in current directory
              </div>
              <div className="terminal-line prompt-line">
                <span className="prompt-symbol">$</span>
                <span className="prompt-cmd">{command}</span>
              </div>
              <div className="terminal-output">
                <p><span className="text-mint">✔</span> Scanning resume AST structure... [Done]</p>
                <p><span className="text-mint">✔</span> Mounting local diff reviewer on localhost:3000</p>
                <p className="text-dim">→ Core engine ready. AI edits proposed; you decide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
