import { generateWaitlistEmailHtml, generateWaitlistEmailPlaintext } from './waitlist-email';

export interface SendEmailResult {
  sent: boolean;
  simulated?: boolean;
  id?: string;
  error?: string;
}

export interface SaveContactResult {
  success: boolean;
  duplicate: boolean;
  id?: string;
  error?: string;
}

export async function saveWaitlistContact(email: string): Promise<SaveContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, duplicate: false, error: 'Email storage is not configured.' };

  const headers = { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' };
  try {
    const existing = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (existing.ok) return { success: true, duplicate: true };
    if (existing.status !== 404) return { success: false, duplicate: false, error: 'Unable to check the waitlist.' };

    const created = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, unsubscribed: false }),
      signal: AbortSignal.timeout(8000),
    });
    if (!created.ok) {
      const details = await created.json().catch(() => ({})) as { message?: string };
      const duplicate = created.status === 409 || /already exists/i.test(details.message || '');
      return duplicate
        ? { success: true, duplicate: true }
        : { success: false, duplicate: false, error: 'Unable to save your email right now.' };
    }
    const data = await created.json().catch(() => ({})) as { id?: string };
    return { success: true, duplicate: false, id: data.id };
  } catch {
    return { success: false, duplicate: false, error: 'Could not connect to the waitlist service.' };
  }
}

export async function sendWaitlistConfirmation(email: string): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'DRFT <onboarding@resend.dev>';

  const html = generateWaitlistEmailHtml({ email });
  const text = generateWaitlistEmailPlaintext({ email });

  if (!apiKey) {
    // In dev or until the user supplies RESEND_API_KEY, simulate cleanly without failing signup
    console.info(`[Resend simulation] Confirmation email ready for ${email}. Set RESEND_API_KEY to send live.`);
    return {
      sent: true,
      simulated: true,
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: 'You’re on the DRFT early access list',
        html,
        text,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error('[Resend error]', errData);
      return {
        sent: false,
        error: (errData as { message?: string }).message || 'Failed to dispatch confirmation email',
      };
    }

    const data = await res.json();
    return {
      sent: true,
      id: (data as { id?: string }).id,
    };
  } catch (err) {
    console.error('[Resend fetch failure]', err);
    return {
      sent: false,
      error: 'Network timeout connecting to email provider',
    };
  }
}
