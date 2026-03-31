import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

type DemoPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DemoViewerPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  if (!project.isEmbedded) {
    return (
      <main className="mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-semibold text-zinc-100">This demo opens externally</h1>
        <p className="text-sm text-zinc-400">
          The selected project is configured to run in a separate tab instead of an embedded viewer.
        </p>
        <div className="flex items-center gap-3">
          <Button asChild className="rounded-full bg-cyan-500 text-black hover:bg-cyan-400">
            <Link href={project.demoUrl} target="_blank">
              Open Live Demo
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-zinc-700 text-zinc-200">
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <header className="flex h-14 items-center justify-between border-b border-zinc-800/70 bg-zinc-950/80 px-4 sm:px-6">
        <h1 className="truncate text-sm font-medium text-zinc-100">{project.title}</h1>
        <Button asChild variant="outline" className="h-8 rounded-full border-zinc-700 text-xs text-zinc-200">
          <Link href="/">Back to Portfolio</Link>
        </Button>
      </header>
      <div className="flex-1">
        <iframe
          src={project.demoUrl}
          title={`${project.title} live demo`}
          className="h-full min-h-[calc(100vh-7.5rem)] w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="clipboard-write; encrypted-media; fullscreen"
        />
      </div>
    </main>
  );
}

