'use client';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('drft-theme', next); } catch { /* Theme still works without storage. */ }
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light and dark mode"><Moon className="light-mode-icon" size={18} /><Sun className="dark-mode-icon" size={18} /></button>;
}
