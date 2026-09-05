-- Run once in the Supabase SQL editor.
create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null check (char_length(email) <= 254 and email = lower(trim(email)) and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  source text not null default 'landing' check (source = 'landing'),
  created_at timestamptz not null default now()
);
alter table public.waitlist enable row level security;
revoke all on public.waitlist from anon, authenticated;
grant insert (email, source, created_at) on public.waitlist to anon, authenticated;
create policy insert_only on public.waitlist for insert to anon, authenticated with check (source = 'landing');
-- No public SELECT policy: subscriber emails remain private.
