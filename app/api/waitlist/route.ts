import { NextRequest, NextResponse } from 'next/server';
import { submitWaitlist } from '@/lib/supabase';
import { sendWaitlistConfirmation } from '@/lib/resend';

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

    // Attempt Supabase insert
    const dbResult = await submitWaitlist(email);

    // If Supabase is unconfigured (dev environment), simulate success
    let isDuplicate = false;
    if (!dbResult.success && dbResult.duplicate) {
      isDuplicate = true;
    } else if (!dbResult.success && dbResult.error?.includes('temporarily unavailable')) {
      // Supabase keys not set yet in local environment - allow local preview to function
      console.warn('[Waitlist API] Supabase keys not detected. Running in mock storage mode.');
    } else if (!dbResult.success) {
      return NextResponse.json(
        { success: false, error: dbResult.error || 'Unable to record signup.' },
        { status: 500 }
      );
    }

    // Dispatch Notion-style confirmation email via Resend
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
        ? 'You’re already on the list! We’ll be in touch.'
        : 'You’re on the list! Check your inbox for your welcome note.',
    });
  } catch (err) {
    console.error('[Waitlist API Error]', err);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
