import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NextRequest } from 'next/server';
import { POST } from '../app/api/waitlist/route';

test('waitlist route stores a Resend contact and sends the confirmation email', async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.RESEND_API_KEY;
  const originalUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const originalAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  process.env.RESEND_API_KEY = 're_test';
  const calls: string[] = [];

  globalThis.fetch = async (input, init) => {
    const url = String(input);
    calls.push(`${init?.method || 'GET'} ${url}`);
    if (url.includes('/contacts/') && !init?.method) return new Response('{}', { status: 404 });
    return new Response('{"id":"created"}', { status: 200, headers: { 'Content-Type': 'application/json' } });
  };

  try {
    const request = new NextRequest('http://localhost/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: ' Person@Example.com ' }),
    });
    const response = await POST(request);
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.equal(body.success, true);
    assert.equal(body.emailSent, true);
    assert.deepEqual(calls, [
      'GET https://api.resend.com/contacts/person%40example.com',
      'POST https://api.resend.com/contacts',
      'POST https://api.resend.com/emails',
    ]);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey) process.env.RESEND_API_KEY = originalKey; else delete process.env.RESEND_API_KEY;
    if (originalUrl) process.env.NEXT_PUBLIC_SUPABASE_URL = originalUrl; else delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (originalAnon) process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalAnon; else delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  }
});

test('waitlist route rejects invalid email before storage', async () => {
  const response = await POST(new NextRequest('http://localhost/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'not-an-email' }),
  }));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).success, false);
});
