import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self';",
  // Added 'https://*.vercel.app' to allow scripts and connections during deployment
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vitals.vercel-insights.com https://*.vercel.app;",
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' blob: data: https://images.unsplash.com https://*.vercel.app;",
  "connect-src 'self' https://api.supabase.io https://*.supabase.co https://vitals.vercel-insights.com https://*.vercel.app;",
  "frame-ancestors 'self';",
  // Updated to be more flexible for your actual demos
  "frame-src 'self' https://*.vercel.app https://*.github.io;",
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
