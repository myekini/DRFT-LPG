'use client';
import { useId, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Check, LoaderCircle, Mail } from 'lucide-react';

export function WaitlistForm() {
  const id = useId();
  const busy = useRef(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || status === 'success') return;
    busy.current = true;
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        const data = await res.json();
        setDuplicate(data.duplicate ?? false);
        setStatus('success');
        setMessage(data.message || (data.duplicate ? 'You’re already on the list.' : 'You’re on the list.'));
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus('error');
        setMessage(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Could not connect. Check your connection and try again.');
    } finally {
      busy.current = false;
    }
  }

  return (
    <form
      onSubmit={submit}
      className={`waitlist-form ${status === 'success' ? 'is-success' : ''}`}
      aria-label="Join the DRFT waitlist"
      aria-busy={status === 'loading'}
    >
      <div className="form-row">
        <div className="email-wrap">
          <label className="sr-only" htmlFor={id}>Your email address</label>
          <input
            id={id}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            aria-invalid={status === 'error'}
            aria-describedby={`${id}-status`}
            tabIndex={status === 'success' ? -1 : undefined}
          />
        </div>
        <button
          className="primary-button"
          type="submit"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? (
            <>
              <LoaderCircle size={16} className="spinner" />
              <span>Joining…</span>
            </>
          ) : status === 'success' ? (
            <>
              <Check size={16} />
              <span>{duplicate ? 'Already on list' : 'You’re on the list'}</span>
            </>
          ) : (
            <>
              <span>Join waitlist</span>
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </div>
      <p
        id={`${id}-status`}
        className={`form-message ${status === 'success' ? 'form-message-success' : ''}`}
        role="status"
        aria-live="polite"
      >
        {status === 'error' ? (
          message
        ) : status === 'success' ? (
          <span className="success-note">
            <Mail size={13} className="inline-icon" /> {message}
          </span>
        ) : (
          ''
        )}
      </p>
    </form>
  );
}
