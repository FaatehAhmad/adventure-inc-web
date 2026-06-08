-- Postgres schema for the production Adventure INC backend.
-- The MVP stores bookings in .data/bookings.json. Use this when moving to Supabase, Neon, Railway, or another Postgres host.

create table activities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  location text not null,
  rating numeric(2, 1),
  difficulty text,
  price_inr integer,
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  activity text not null,
  preferred_date date not null,
  guests integer not null check (guests > 0),
  customer_name text not null,
  customer_phone text not null,
  customer_email text not null,
  addons text[] not null default '{}',
  requirements text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table providers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
