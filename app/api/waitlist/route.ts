import { NextRequest, NextResponse } from 'next/server';
import { submitWaitlist } from '@/lib/supabase';
import { saveWaitlistContact, sendWaitlistConfirmation } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Enter a valid email address and try again.' },
        { status: 400 }
      );
    }

    const dbResult = await submitWaitlist(email);
    let stored = dbResult.success;
    let isDuplicate = dbResult.duplicate;

    if (!stored && !isDuplicate && dbResult.error?.includes('temporarily unavailable')) {
      const contactResult = await saveWaitlistContact(email);
      stored = contactResult.success;
      isDuplicate = contactResult.duplicate;
    }

    if (!stored && !isDuplicate) {
      return NextResponse.json(
        { success: false, error: 'We couldn’t add you right now. Please try again shortly.' },
        { status: 503 }
      );
    }

    let emailResult: { sent: boolean; simulated?: boolean } = { sent: false, simulated: false };
    if (!isDuplicate) {
      emailResult = await sendWaitlistConfirmation(email);
    }

    return NextResponse.json({
      success: true,
      duplicate: isDuplicate,
      emailSent: emailResult.sent,
      simulated: emailResult.simulated ?? false,
      message: isDuplicate
        ? 'You’re already on the list. You’re all set.'
        : emailResult.sent && !emailResult.simulated
          ? 'You’re on the list. Check your inbox for a confirmation.'
          : 'You’re on the list. We’ll be in touch.',
    });
  } catch (err) {
    console.error('[Waitlist API Error]', err);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
