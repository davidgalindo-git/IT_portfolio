"use client";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/data";
//
export default function Home() {
    const devProjects = projects.filter((p) => p.category === "dev");
    const securityProjects = projects.filter((p) => p.category === "security");

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black md:pl-20">
            <main className="flex flex-col gap-6 pb-16 pt-4 px-4 sm:px-8">
                <Hero />
                <ProjectGrid id="projects" title="Featured Projects" projects={devProjects} />
                <ProjectGrid id="security-labs" title="Security Labs & Write-ups" projects={securityProjects} />
            </main>
        </div>
    );
}