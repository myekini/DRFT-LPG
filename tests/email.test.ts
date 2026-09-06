import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateWaitlistEmailHtml, generateWaitlistEmailPlaintext } from '../lib/waitlist-email';
import { sendWaitlistConfirmation } from '../lib/resend';

test('email template generator includes email, brand elements and key value props', () => {
  const html = generateWaitlistEmailHtml({ email: 'builder@example.com' });
  assert.match(html, /builder@example\.com/);
  assert.match(html, /Early access, position 1200/);
  assert.match(html, /AI edits, you decide/);
  assert.match(html, /https:\/\/drft\.io/);
  assert.match(html, /<!DOCTYPE html>/);

  const text = generateWaitlistEmailPlaintext({ email: 'builder@example.com' });
  assert.match(text, /builder@example\.com/);
  assert.match(text, /DRFT: You’re on the early access list/);
  assert.match(text, /https:\/\/drft\.io/);
});

test('sendWaitlistConfirmation falls back to clean simulation when no API key is set', async () => {
  const originalKey = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;

  try {
    const result = await sendWaitlistConfirmation('test@drft.app');
    assert.equal(result.sent, true);
    assert.equal(result.simulated, true);
  } finally {
    if (originalKey) {
      process.env.RESEND_API_KEY = originalKey;
    }
  }
});
