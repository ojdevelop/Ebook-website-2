create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 1 and 60),
  created_at timestamptz not null default now()
);

create table if not exists public.discussions (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles (id) on delete cascade,
  category text not null check (category in ('current-book', 'general', 'reading-tips')),
  title text not null check (char_length(btrim(title)) between 5 and 140),
  body text not null check (char_length(btrim(body)) between 10 and 8000),
  created_at timestamptz not null default now()
);

create table if not exists public.replies (
  id uuid primary key default gen_random_uuid(),
  discussion_id uuid not null references public.discussions (id) on delete cascade,
  author_id uuid not null references public.profiles (id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 4000),
  created_at timestamptz not null default now()
);

create index if not exists discussions_created_at_idx on public.discussions (created_at desc);
create index if not exists discussions_category_created_at_idx on public.discussions (category, created_at desc);
create index if not exists replies_discussion_created_at_idx on public.replies (discussion_id, created_at asc);

create or replace function public.create_discussion_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(
      nullif(btrim(new.raw_user_meta_data ->> 'display_name'), ''),
      'Reader-' || left(new.id::text, 8)
    )
  );
  return new;
end;
$$;

drop trigger if exists create_discussion_profile_on_signup on auth.users;
create trigger create_discussion_profile_on_signup
after insert on auth.users
for each row execute function public.create_discussion_profile();

alter table public.profiles enable row level security;
alter table public.discussions enable row level security;
alter table public.replies enable row level security;

drop policy if exists "Profiles are visible with discussion authors" on public.profiles;
create policy "Profiles are visible with discussion authors"
on public.profiles for select
to anon, authenticated
using (true);

drop policy if exists "Discussions are visible to everyone" on public.discussions;
create policy "Discussions are visible to everyone"
on public.discussions for select
to anon, authenticated
using (true);

drop policy if exists "Members can start discussions as themselves" on public.discussions;
create policy "Members can start discussions as themselves"
on public.discussions for insert
to authenticated
with check (author_id = (select auth.uid()));

drop policy if exists "Replies are visible to everyone" on public.replies;
create policy "Replies are visible to everyone"
on public.replies for select
to anon, authenticated
using (true);

drop policy if exists "Members can reply as themselves" on public.replies;
create policy "Members can reply as themselves"
on public.replies for insert
to authenticated
with check (author_id = (select auth.uid()));

grant select on public.profiles, public.discussions, public.replies to anon, authenticated;
grant insert on public.discussions, public.replies to authenticated;

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'discussions'
  ) then
    alter publication supabase_realtime add table public.discussions;
  end if;

  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'replies'
  ) then
    alter publication supabase_realtime add table public.replies;
  end if;
end;
$$;

notify pgrst, 'reload schema';
