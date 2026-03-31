# Smart CV Portfolio

Production-oriented portfolio site for an IT professional focused on **web engineering + cybersecurity labs**.

This codebase is designed to demonstrate both software delivery skills (typed frontend architecture, component systems, deployment automation) and security mindset (structured lab documentation, proof-of-work, demo isolation strategy).

## What Employers Can Evaluate Here

- **Frontend architecture**: Next.js App Router, typed components, modular sections.
- **Design system discipline**: Shadcn/UI + Tailwind utility patterns.
- **Security-aware UX decisions**: embedded vs external demo handling.
- **Operational maturity**: CI/CD deployment pipeline to Vercel via GitHub Actions.
- **Data readiness**: typed Supabase client and production-oriented schema.

## Tech Stack

- `Next.js` (App Router) + `TypeScript`
- `Tailwind CSS v4` + `Shadcn/UI` (Radix primitives)
- `Framer Motion` (animation support)
- `Lucide React` (icons)
- `Supabase` (PostgreSQL backend for project metadata)
- `Vercel` (hosting) + GitHub Actions (automated deploy)

## Smart CV Architecture

### 1) Presentation Layer (Portfolio UI)

- `src/app/layout.tsx`: global shell and sticky navigation.
- `src/app/page.tsx`: composes hero and project sections.
- `src/components/Navbar.tsx`: glass-style top nav with section anchors.
- `src/components/Hero.tsx`: personal positioning + primary CTA.
- `src/components/Terminal.tsx`: terminal-inspired skills panel.
- `src/components/ProjectGrid.tsx`: reusable card grid for dev and security work.

### 2) Demo Delivery Layer

- `src/app/demo/[slug]/page.tsx` routes to project demos by slug.
- If `isEmbedded = true`, the project is loaded in a full-viewport iframe viewer.
- If `isEmbedded = false`, the page safely redirects intent to an external demo.
- This split models a real-world constraint: not every system can be iframed.

### 3) Data Layer

- `src/lib/data.ts` currently holds typed mock data for fast iteration.
- `src/lib/supabaseClient.ts` contains:
  - typed `projects` table contract (`ProjectRow`/`Database`)
  - Supabase client initialization via environment variables
  - SQL bootstrap snippet for the `projects` table schema

## Project Schema (Supabase/Postgres)

The `projects` table is designed for portfolio and lab metadata:

- `id`
- `title`
- `category` (`dev` | `security`)
- `tags` (`text[]`)
- `description`
- `demo_url`
- `github_url`
- `image_url`
- `is_embedded`
- `slug`

## Local Development

```bash
npm install
npm run dev
```

App runs on [http://localhost:3000](http://localhost:3000).

### Quality Check

```bash
npm run lint
```

## Deployment (GitHub Actions -> Vercel)

Workflow file: `.github/workflows/deploy-vercel.yml`

It runs on pushes to `main` (and manual dispatch), then:

1. installs dependencies
2. lints and builds
3. pulls Vercel project settings
4. builds with Vercel CLI
5. deploys production artifacts

### Required GitHub Secrets

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Why This Portfolio Format

Recruiters and engineering teams can inspect:

- how UI concerns are separated from data concerns
- how delivery pipelines are automated
- how security-oriented projects are documented and presented
- how typed contracts support scaling from mocks to real backend data

This repository is intentionally structured as a small production system, not only a visual resume.
