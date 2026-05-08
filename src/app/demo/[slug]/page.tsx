import { LivePreview } from "@/components/LivePreview";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

export default function DemoPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project || !project.isEmbedded) notFound();

    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16 gap-8">
            <div className="text-center space-y-1">
                <h1 className="text-xl font-semibold text-zinc-100">{project.title}</h1>
                <p className="text-sm text-zinc-500">{project.description}</p>
            </div>

            <LivePreview
                src={project.demoUrl}
                screenshot={`/screenshots/${project.slug}.png`}
                alt={`${project.title} live preview`}
            />
        </main>
    );
}