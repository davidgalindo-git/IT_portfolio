import { ImageResponse } from "next/og";
import { projects } from "@/lib/data";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type OgProps = {
  params: Promise<{ slug: string }>;
};

export default async function OgImage({ params }: OgProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const title = project?.title ?? "Smart CV Project";
  const category = project?.category === "security" ? "Security Lab" : "Web Project";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "radial-gradient(circle at top, #22c55e 0, transparent 55%), radial-gradient(circle at bottom, #3b82f6 0, #020617 60%)",
          color: "#e5e7eb",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#a5b4fc",
          }}
        >
          {category}
        </div>
        <div style={{ marginTop: 24, fontSize: 46, fontWeight: 700, lineHeight: 1.1, maxWidth: 800 }}>
          {title}
        </div>
        <div style={{ marginTop: 24, fontSize: 20, maxWidth: 700, color: "#9ca3af" }}>
          From the Smart CV portfolio — live demos and security labs.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

