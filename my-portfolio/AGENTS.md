<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Project Overview
Build a high-performance, "Smart CV" portfolio for an IT Professional. The site must showcase Web Development projects and Cybersecurity Labs. It should feature a "Live Demo" architecture where projects are either embedded or seamlessly linked.

Tech Stack
Framework: Next.js 15+ (App Router)

Language: TypeScript

Styling: Tailwind CSS 4 + Framer Motion (for animations)

UI Components: Shadcn/UI (Radix UI)

Icons: Lucide React

Backend/Database: Supabase (PostgreSQL) for project metadata

Deployment: Vercel

Core Requirements & Structure
1. Global Layout
Navbar: Sticky, glassmorphism effect, links to: Home, Projects, Security Labs, About, Contact.

Theme: Default to Dark Mode (Cyberpunk/Minimalist professional aesthetic).

2. Hero Section
Content: Name, Professional Title (e.g., Full Stack Dev & Security Researcher).

Interactive Element: A "Terminal" component that types out your core skills (Python, React, Penetration Testing, Cloud Architecture).

CTA: "View Proof of Work" button scrolling to projects.

3. Project Grid (Dynamic)
Use Shadcn Cards.

Fields: Title, Tech Tags (Badges), Description, GitHub Link, and "Live Demo" button.

Live Demo Logic: If is_embedded is true, open in a specialized "Demo Viewer" page using an <iframe>. Otherwise, link to subdomain.

4. Security Lab Section
A separate grid specifically for documentation-heavy work.

Focus on "Write-ups" with a clean, Markdown-based layout (using next-mdx-remote or similar).

Instructions for Cursor Agent
Phase 1: Environment Setup
Initialize a new Next.js project with src/ directory, Tailwind, and App Router.

Install dependencies: lucide-react, framer-motion, clsx, tailwind-merge.

Set up Shadcn/UI and add components: Button, Card, Badge, NavigationMenu, Tabs.

Phase 2: Building Components
Navbar: Create src/components/Navbar.tsx.

Hero: Create src/components/Hero.tsx with a typing animation for the IT roles.

ProjectGrid: Create src/components/ProjectGrid.tsx. Mock the data initially in src/lib/data.ts.

Terminal: Create a Terminal.tsx component that looks like a ZSH shell for the hero section.

Phase 3: The "Live Demo" Viewer
Create a dynamic route src/app/demo/[slug]/page.tsx.

This page should feature a "Back to Portfolio" header and a full-screen iframe to display the project.

Phase 4: Supabase Integration
Configure src/lib/supabaseClient.ts.

Create a schema for projects: id, title, category (dev/security), tags, description, demo_url, github_url, image_url.

Visual Guidelines
Colors: Deep Grays (#0a0a0a), Accents in Cyber Blue (#3b82f6) or Matrix Green (#22c55e).

Typography: Sans-serif (Geist or Inter) for UI; Monospace (Fira Code) for code/terminal sections.

Phase 5: Observability & Security Hardening
Security Headers: Configure next.config.ts to implement strict Security Headers (CSP, X-Frame-Options, HSTS).

Agent Task: "Set up a Content Security Policy that allows iframes only from my specific project domains."

Dynamic OG Images: Use @vercel/og to generate dynamic social sharing cards for every project/lab slug.

Analytics Integration: Implement a privacy-focused analytics tracker (like Vercel Analytics or Umami) to see which projects recruiters are clicking most.

Phase 6: The "Cybersecurity Lab" Markdown Engine
MDX Setup: Install next-mdx-remote to render high-quality lab reports from Markdown files or Supabase text blobs.

Code Highlighting: Integrate rehype-pretty-code for professional-grade syntax highlighting in your write-ups.

Lab Metadata: Create a specific UI component for "Lab Stats" (e.g., Difficulty: Hard, Category: OSINT/Network, Time to Compromise: 4hrs).

Phase 7: The "Smart" AI Resume Assistant
RAG Integration: Use the Supabase Vector extension (pgvector).

Context Upload: Feed your full resume (PDF/Text) and project documentation into the vector store.

Chat Component: Build a floating action button (FAB) that opens a small "Ask my AI" chat window.

Agent Task: "Create a chat interface that uses an Edge Function to query my Supabase vector store about my professional experience."

Phase 8: Automation & CMS Dashboard
Admin Portal: Build a protected route /admin using Supabase Auth.

Project Uploader: Create a form to upload new projects, labs, and demo URLs directly from the browser so you never have to touch the DB console.

GitHub Sync: (Optional) Create a script that automatically updates the "last updated" date of a project on your site by fetching your GitHub repo activity via the GitHub API.
<!-- END:nextjs-agent-rules -->
