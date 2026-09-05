import { createClient } from '@supabase/supabase-js';
export type WaitlistResult = { success: boolean; duplicate: boolean; error?: string };
export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  const normalized = email.trim().toLowerCase();
  if (normalized.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return { success: false, duplicate: false, error: 'Enter a valid email address and try again.' };
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return { success: false, duplicate: false, error: 'Signups are temporarily unavailable. Please try again later.' };
  try {
    const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } });
    const { error } = await client.from('waitlist').insert({ email: normalized, source: 'landing', created_at: new Date().toISOString() }).abortSignal(AbortSignal.timeout(10000));
    if (!error) return { success: true, duplicate: false };
    if (error.code === '23505') return { success: false, duplicate: true };
    return { success: false, duplicate: false, error: 'We couldn’t save your email. Please try again shortly.' };
  } catch { return { success: false, duplicate: false, error: 'Could not connect. Check your connection and try again.' }; }
}
