import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { compileLabMdx } from "@/lib/mdx";
import { LabStats } from "@/components/LabStats";

type LabFrontmatter = {
  slug: string;
  title: string;
  summary: string;
  difficulty: string;
  category: string;
  timeToCompromise: string;
  tools: string[];
};

type LabPageProps = {
  params: Promise<{ slug: string }>;
};

async function loadLab(slug: string) {
  const labsDir = path.join(process.cwd(), "content", "labs");
  const filePath = path.join(labsDir, `${slug}.mdx`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const compiled = await compileLabMdx<LabFrontmatter>({ source: raw });
    return compiled;
  } catch {
    return null;
  }
}

export default async function LabPage({ params }: LabPageProps) {
  const { slug } = await params;
  const lab = await loadLab(slug);

  if (!lab || !lab.frontmatter) {
    notFound();
  }

  const { frontmatter, content } = lab;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-mono uppercase tracking-[0.22em] text-cyan-400/80">Security Lab</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {frontmatter.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-400">{frontmatter.summary}</p>

      <LabStats
        difficulty={frontmatter.difficulty}
        category={frontmatter.category}
        timeToCompromise={frontmatter.timeToCompromise}
        tools={frontmatter.tools}
      />

      <article className="prose prose-invert prose-sm max-w-none prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 prose-code:text-emerald-300">
        {content}
      </article>
    </main>
  );
}

