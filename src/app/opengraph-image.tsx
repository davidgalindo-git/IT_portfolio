import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
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
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a5b4fc" }}>
          Smart CV Portfolio
        </div>
        <div style={{ marginTop: 24, fontSize: 52, fontWeight: 700, lineHeight: 1.05 }}>
          Proof-of-Work{" "}
          <span style={{ color: "#22c55e" }}>
            Web &amp; Security
          </span>{" "}
          Projects
        </div>
        <div style={{ marginTop: 24, fontSize: 22, maxWidth: 700, color: "#9ca3af" }}>
          Live demos, security labs, and an AI assistant that understands my experience.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

