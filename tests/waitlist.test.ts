import { test } from 'node:test';
import assert from 'node:assert/strict';
import { submitWaitlist } from '../lib/supabase';
test('invalid email never reaches the service', async () => {
  assert.equal((await submitWaitlist('invalid')).success, false);
  assert.match((await submitWaitlist('invalid')).error!, /valid email/);
});
test('missing configuration returns a recoverable error', async () => {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL; delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  assert.match((await submitWaitlist('person@example.com')).error!, /temporarily unavailable/);
});
test('normalizes email, handles success, duplicate and service failure', async () => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';
  const original = globalThis.fetch; let responseCode = 201; let body: Record<string, string> = {};
  globalThis.fetch = async (_input, init) => {
    body = JSON.parse(String(init?.body));
    return new Response(responseCode === 201 ? '' : JSON.stringify({ code: responseCode === 409 ? '23505' : '42501', message: 'internal detail' }), { status: responseCode, headers: { 'Content-Type': 'application/json' } });
  };
  try {
    assert.equal((await submitWaitlist(' Person@Example.com ')).success, true);
    assert.equal(body.email, 'person@example.com'); assert.equal(body.source, 'landing'); assert.ok(body.created_at);
    responseCode = 409; assert.equal((await submitWaitlist('person@example.com')).duplicate, true);
    responseCode = 403; const failure = await submitWaitlist('person@example.com'); assert.equal(failure.success, false); assert.doesNotMatch(failure.error!, /internal detail/);
    globalThis.fetch = async () => { throw new Error('offline'); };
    assert.equal((await submitWaitlist('person@example.com')).success, false);
  } finally { globalThis.fetch = original; delete process.env.NEXT_PUBLIC_SUPABASE_URL; delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; }
});
