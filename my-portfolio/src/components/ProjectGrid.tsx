import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/data";
import Link from "next/link";

type ProjectGridProps = {
  title: string;
  projects: Project[];
  id?: string;
};

export function ProjectGrid({ title, projects, id }: ProjectGridProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group border-zinc-800/80 bg-zinc-950/80 shadow-[0_0_30px_rgba(37,99,235,0.25)] transition hover:border-cyan-500/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2 text-zinc-50">
                <span className="text-sm font-semibold">{project.title}</span>
                <span className="text-[10px] uppercase tracking-wide text-zinc-500">
                  {project.category === "dev" ? "Dev" : "Security Lab"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-zinc-400">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-cyan-500/40 bg-cyan-500/5 text-[10px] font-medium text-cyan-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-2">
              <Button
                asChild
                size="sm"
                className="h-8 rounded-full bg-cyan-500 px-3 text-xs font-semibold text-black hover:bg-cyan-400"
              >
                <Link href={project.isEmbedded ? `/demo/${project.slug}` : project.demoUrl} target={project.isEmbedded ? "_self" : "_blank"}>
                  Live Demo
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="h-8 rounded-full border-zinc-700 bg-zinc-950 text-xs font-medium text-zinc-200 hover:border-cyan-500/70 hover:text-cyan-200"
              >
                <Link href={project.githubUrl} target="_blank">
                  GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

