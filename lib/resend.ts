import { generateWaitlistEmailHtml, generateWaitlistEmailPlaintext } from './waitlist-email';

export interface SendEmailResult {
  sent: boolean;
  simulated?: boolean;
  id?: string;
  error?: string;
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
