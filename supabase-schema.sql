-- ═══════════════════════════════════════════════════
--  AIXORA ACADEMY — Supabase Database Schema
--  Run this in Supabase SQL Editor
-- ═══════════════════════════════════════════════════

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── PROFILES (extends Supabase auth.users) ────────────────
create table public.profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  full_name     text not null,
  avatar_url    text,
  role          text not null default 'student' check (role in ('student', 'instructor', 'admin')),
  bio           text,
  linkedin_url  text,
  created_at    timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'AIXORA Student'),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── COURSES ───────────────────────────────────────────────
create table public.courses (
  id              uuid default uuid_generate_v4() primary key,
  title           text not null,
  slug            text not null unique,
  description     text,
  thumbnail_url   text,
  instructor_id   uuid references public.profiles(id) on delete set null,
  category        text not null check (category in ('ai-ml','web-development','mobile','design','career')),
  level           text not null default 'beginner' check (level in ('beginner','intermediate','advanced')),
  duration_hours  numeric(5,1) default 0,
  total_lessons   int default 0,
  price           numeric(10,2) default 0,
  is_published    boolean default false,
  tags            text[] default '{}',
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ── LESSONS ───────────────────────────────────────────────
create table public.lessons (
  id                  uuid default uuid_generate_v4() primary key,
  course_id           uuid references public.courses(id) on delete cascade not null,
  title               text not null,
  description         text,
  youtube_video_id    text not null,
  duration_minutes    int default 0,
  order_index         int not null,
  resource_urls       text[] default '{}',
  is_preview          boolean default false,
  created_at          timestamptz default now()
);

-- ── ENROLLMENTS ───────────────────────────────────────────
create table public.enrollments (
  id                uuid default uuid_generate_v4() primary key,
  user_id           uuid references public.profiles(id) on delete cascade not null,
  course_id         uuid references public.courses(id) on delete cascade not null,
  enrolled_at       timestamptz default now(),
  completed_at      timestamptz,
  progress_percent  int default 0 check (progress_percent between 0 and 100),
  unique(user_id, course_id)
);

-- ── LESSON PROGRESS ───────────────────────────────────────
create table public.lesson_progress (
  id            uuid default uuid_generate_v4() primary key,
  user_id       uuid references public.profiles(id) on delete cascade not null,
  lesson_id     uuid references public.lessons(id) on delete cascade not null,
  is_completed  boolean default false,
  completed_at  timestamptz,
  unique(user_id, lesson_id)
);

-- ── EVENTS ────────────────────────────────────────────────
create table public.events (
  id            uuid default uuid_generate_v4() primary key,
  title         text not null,
  slug          text not null unique,
  description   text,
  event_type    text not null check (event_type in ('workshop','webinar','bootcamp','meetup','competition')),
  thumbnail_url text,
  start_date    timestamptz not null,
  end_date      timestamptz not null,
  is_online     boolean default true,
  location      text,
  meeting_link  text,
  is_free       boolean default true,
  max_capacity  int,
  created_at    timestamptz default now()
);

-- ── EVENT REGISTRATIONS ───────────────────────────────────
create table public.event_registrations (
  id           uuid default uuid_generate_v4() primary key,
  user_id      uuid references public.profiles(id) on delete cascade not null,
  event_id     uuid references public.events(id) on delete cascade not null,
  registered_at timestamptz default now(),
  unique(user_id, event_id)
);

-- ── CERTIFICATES ──────────────────────────────────────────
create table public.certificates (
  id           uuid default uuid_generate_v4() primary key,
  user_id      uuid references public.profiles(id) on delete cascade not null,
  course_id    uuid references public.courses(id) on delete cascade not null,
  issued_at    timestamptz default now(),
  verify_code  uuid default uuid_generate_v4() unique not null,
  unique(user_id, course_id)
);

-- ── BLOG POSTS ────────────────────────────────────────────
create table public.blog_posts (
  id             uuid default uuid_generate_v4() primary key,
  title          text not null,
  slug           text not null unique,
  excerpt        text,
  content        text,
  thumbnail_url  text,
  author_id      uuid references public.profiles(id) on delete set null,
  category       text check (category in ('ai','tech','career','tutorial','news')),
  tags           text[] default '{}',
  is_published   boolean default false,
  published_at   timestamptz,
  created_at     timestamptz default now()
);

-- ═══════════════════════════════════════════════════
--  ROW LEVEL SECURITY (RLS)
-- ═══════════════════════════════════════════════════

-- Enable RLS on all tables
alter table public.profiles          enable row level security;
alter table public.courses           enable row level security;
alter table public.lessons           enable row level security;
alter table public.enrollments       enable row level security;
alter table public.lesson_progress   enable row level security;
alter table public.events            enable row level security;
alter table public.event_registrations enable row level security;
alter table public.certificates      enable row level security;
alter table public.blog_posts        enable row level security;

-- PROFILES: public read, own write
create policy "Profiles are publicly readable" on public.profiles for select using (true);
create policy "Users can update own profile"   on public.profiles for update using (auth.uid() = id);

-- COURSES: published = public, admin/instructor = all
create policy "Published courses are public"   on public.courses for select using (is_published = true or auth.uid() in (select id from public.profiles where role in ('admin','instructor')));
create policy "Instructors can manage courses" on public.courses for all using (auth.uid() = instructor_id or auth.uid() in (select id from public.profiles where role = 'admin'));

-- LESSONS: readable if enrolled or preview
create policy "Lessons readable if enrolled"   on public.lessons for select using (
  is_preview = true
  or exists (select 1 from public.enrollments e where e.user_id = auth.uid() and e.course_id = lessons.course_id)
  or auth.uid() in (select id from public.profiles where role in ('admin','instructor'))
);

-- ENROLLMENTS: own records
create policy "Users see own enrollments"      on public.enrollments for select using (auth.uid() = user_id);
create policy "Users can enroll"               on public.enrollments for insert with check (auth.uid() = user_id);

-- LESSON PROGRESS: own records
create policy "Users manage own progress"      on public.lesson_progress for all using (auth.uid() = user_id);

-- EVENTS: public read
create policy "Events are public"              on public.events for select using (true);
create policy "Admin manages events"           on public.events for all using (auth.uid() in (select id from public.profiles where role = 'admin'));

-- EVENT REGISTRATIONS: own records
create policy "Users see own registrations"    on public.event_registrations for select using (auth.uid() = user_id);
create policy "Users can register"             on public.event_registrations for insert with check (auth.uid() = user_id);

-- CERTIFICATES: own + public verify
create policy "Own certificates visible"       on public.certificates for select using (auth.uid() = user_id);
create policy "Certs verifiable by code"       on public.certificates for select using (true);

-- BLOG: published = public
create policy "Published posts are public"     on public.blog_posts for select using (is_published = true);
create policy "Admin manages blog"             on public.blog_posts for all using (auth.uid() in (select id from public.profiles where role in ('admin','instructor')));
