import { createClient } from "@supabase/supabase-js";

export type ProjectRow = {
  id: string;
  title: string;
  category: "dev" | "security";
  tags: string[]; // text[] in Postgres
  description: string;
  demo_url: string;
  github_url: string;
  image_url: string | null;
  is_embedded: boolean;
  slug: string;
};

type Database = {
  public: {
    Tables: {
      projects: {
        Row: ProjectRow;
        Insert: Omit<ProjectRow, "id"> & { id?: string };
        Update: Partial<ProjectRow>;
      };
    };
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseKey ? createClient<Database>(supabaseUrl, supabaseKey) : null;

export const PROJECTS_TABLE_SCHEMA_SQL = `
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('dev', 'security')),
  tags text[] not null default '{}',
  description text not null,
  demo_url text not null,
  github_url text not null,
  image_url text,
  is_embedded boolean not null default false,
  slug text not null unique
);
`;

