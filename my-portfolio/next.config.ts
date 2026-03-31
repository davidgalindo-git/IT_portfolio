import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vitals.vercel-insights.com;",
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' blob: data: https://images.unsplash.com;",
  "connect-src 'self' https://api.supabase.io https://*.supabase.co https://vitals.vercel-insights.com;",
  "frame-ancestors 'self';",
  // Allow iframes only from specific demo domains; replace with your real demos.
  "frame-src 'self' https://demo.example.com https://*.your-demo-domain.com;",
].join(" ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
] as const;

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders as unknown as { key: string; value: string }[],
      },
    ];
  },
};

export default nextConfig;
