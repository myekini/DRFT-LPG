'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ScrollStage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stage = ref.current;
    if (!stage) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduced.matches || window.innerWidth < 901) {
        stage.style.setProperty('--story-progress', '1');
        return;
      }
      const rect = stage.getBoundingClientRect();
      const start = window.innerHeight * 0.76;
      const distance = Math.max(1, stage.offsetHeight - window.innerHeight * 0.72);
      const progress = Math.min(1, Math.max(0, (start - rect.top) / distance));
      stage.style.setProperty('--story-progress', progress.toFixed(3));
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    reduced.addEventListener('change', requestUpdate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reduced.removeEventListener('change', requestUpdate);
    };
  }, []);
  return <div ref={ref} className="hero-demo-stage">{children}</div>;
}
