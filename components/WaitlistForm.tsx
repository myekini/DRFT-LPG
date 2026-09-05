'use client';
import { useId, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Check, LoaderCircle } from 'lucide-react';
import { submitWaitlist } from '@/lib/supabase';
export function WaitlistForm() {
  const id = useId(); const busy = useRef(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState(''); const [duplicate, setDuplicate] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (busy.current || status === 'success') return;
    busy.current = true; setStatus('loading'); setErrorMsg('');
    try { const result = await submitWaitlist(email); if (result.success || result.duplicate) { setDuplicate(result.duplicate); setStatus('success'); } else { setStatus('error'); setErrorMsg(result.error || 'Something went wrong. Please try again.'); } }
    catch { setStatus('error'); setErrorMsg('Could not connect. Check your connection and try again.'); }
    finally { busy.current = false; }
  }
  return <form onSubmit={submit} className={`waitlist-form ${status === 'success' ? 'is-success' : ''}`} aria-label="Join the DRFT waitlist" aria-busy={status === 'loading'}>
    <div className="form-row"><div className="email-wrap"><label className="sr-only" htmlFor={id}>Your email address</label><input id={id} name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} disabled={status === 'loading' || status === 'success'} aria-invalid={status === 'error'} aria-describedby={status === 'error' ? `${id}-status` : undefined} tabIndex={status === 'success' ? -1 : undefined} /></div>
    <button className="primary-button" type="submit" disabled={status === 'loading' || status === 'success'}>{status === 'loading' ? <><LoaderCircle size={16} className="spinner" />Joining…</> : status === 'success' ? <><Check size={16} />{duplicate ? 'Already on the list' : "You’re on the list"}</> : <>Join waitlist <ArrowRight size={15} /></>}</button></div>
    <p id={`${id}-status`} className="form-message" role="status" aria-live="polite">{status === 'error' ? errorMsg : status === 'success' ? duplicate ? 'Already on the list. You’re all set.' : 'You’re on the list. We’ll be in touch.' : ''}</p>
  </form>;
}
