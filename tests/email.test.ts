import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateWaitlistEmailHtml, generateWaitlistEmailPlaintext } from '../lib/waitlist-email';
import { saveWaitlistContact, sendWaitlistConfirmation } from '../lib/resend';

test('email template is concise, branded and includes the confirmed address', () => {
  const html = generateWaitlistEmailHtml({ email: 'builder@example.com' });
  assert.match(html, /builder@example\.com/);
  assert.match(html, /apple-icon\.png/);
  assert.match(html, /AI edits\. You decide/);
  assert.match(html, /https:\/\/drft\.io/);
  assert.match(html, /github\.com\/drft-open/);
  assert.match(html, /You’re in\./);
  assert.doesNotMatch(html, /What to expect/);
  assert.match(html, /<!doctype html>/);

  const text = generateWaitlistEmailPlaintext({ email: 'builder@example.com' });
  assert.match(text, /builder@example\.com/);
  assert.match(text, /You’re in\./);
  assert.match(text, /https:\/\/drft\.io/);
});

test('email template escapes the recipient address in HTML', () => {
  const html = generateWaitlistEmailHtml({ email: 'name<script>@example.com' });
  assert.doesNotMatch(html, /name<script>/);
  assert.match(html, /name&lt;script&gt;@example\.com/);
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

test('Resend contact storage detects existing contacts and creates new ones', async () => {
  const originalKey = process.env.RESEND_API_KEY;
  const originalFetch = globalThis.fetch;
  process.env.RESEND_API_KEY = 're_test';
  let mode: 'existing' | 'new' = 'existing';
  let requests = 0;

  globalThis.fetch = async (_input, init) => {
    requests += 1;
    if (!init?.method) return new Response(mode === 'existing' ? '{}' : '{}', { status: mode === 'existing' ? 200 : 404 });
    return new Response('{"id":"contact_123"}', { status: 201, headers: { 'Content-Type': 'application/json' } });
  };

  try {
    const existing = await saveWaitlistContact('member@example.com');
    assert.equal(existing.success, true);
    assert.equal(existing.duplicate, true);
    assert.equal(requests, 1);

    mode = 'new';
    requests = 0;
    const created = await saveWaitlistContact('new@example.com');
    assert.equal(created.success, true);
    assert.equal(created.duplicate, false);
    assert.equal(created.id, 'contact_123');
    assert.equal(requests, 2);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey) process.env.RESEND_API_KEY = originalKey;
    else delete process.env.RESEND_API_KEY;
  }
});
