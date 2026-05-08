export type ProjectCategory = "dev" | "security";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl?: string;
  isEmbedded: boolean;
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "0",
    slug: "emusic",
    title: "eMusic",
    description: "A full-stack music streaming app with playlists, search, and audio playback.",
    category: "dev",
    tags: ["Vue", "JavaScript"],
    imageUrl: "/previews/emusic.webp",
    isEmbedded: true,
    demoUrl: "https://emusic.davidgalindo-it.com",
    githubUrl: "https://github.com/davidgalindo-git/eMusic",
  },
  {
    id: "1",
    slug: "monitoring-dashboard",
    title: "Cloud-native Monitoring Dashboard",
    description: "Real-time observability dashboard for infrastructure and application metrics.",
    category: "dev",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    isEmbedded: false,
    demoUrl: "https://...",
    githubUrl: "https://github.com/your-handle/monitoring-dashboard",
  },
  {
    id: "2",
    slug: "purple-team-lab",
    title: "Purple Team Attack Lab",
    description: "Documented attack path with detections, alerts, and response playbooks.",
    category: "security",
    tags: ["Offensive Security", "Detection Engineering"],
    isEmbedded: false,
    demoUrl: "https://...",
    githubUrl: "https://github.com/your-handle/purple-team-lab",
  },
];