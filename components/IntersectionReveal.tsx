'use client';
import { useEffect, useRef, type ReactNode } from 'react';
export function IntersectionReveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = ref.current; if (!el || !('IntersectionObserver' in window)) return; const media = window.matchMedia('(prefers-reduced-motion: reduce)'); if (media.matches) return;
    el.style.transition = `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`; el.style.opacity = '0'; el.style.transform = 'translateY(12px)';
    const show = () => { el.style.opacity = '1'; el.style.transform = 'none'; };
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { show(); observer.disconnect(); } }, { threshold: .2 }); observer.observe(el);
    const change = () => { if (media.matches) { show(); observer.disconnect(); } }; media.addEventListener('change', change);
    return () => { observer.disconnect(); media.removeEventListener('change', change); show(); };
  }, [delay]); return <div ref={ref} className={className}>{children}</div>;
}
