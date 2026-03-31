export type ProjectCategory = "dev" | "security";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  demoUrl: string;
  githubUrl: string;
  imageUrl?: string;
  isEmbedded: boolean;
  slug: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Cloud-native Monitoring Dashboard",
    category: "dev",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    description: "Real-time observability dashboard for infrastructure and application metrics.",
    demoUrl: "https://demo.example.com/monitoring",
    githubUrl: "https://github.com/your-handle/monitoring-dashboard",
    isEmbedded: true,
    slug: "monitoring-dashboard",
  },
  {
    id: "2",
    title: "Purple Team Attack Lab",
    category: "security",
    tags: ["Offensive Security", "Detection Engineering"],
    description: "Documented attack path with detections, alerts, and response playbooks.",
    demoUrl: "https://demo.example.com/purple-team",
    githubUrl: "https://github.com/your-handle/purple-team-lab",
    isEmbedded: false,
    slug: "purple-team-lab",
  },
];

