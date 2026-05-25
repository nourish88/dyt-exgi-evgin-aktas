import type { NextConfig } from "next";

const CANONICAL_HOST = "ezgievginaktas.com";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ezgievginaktas.com" }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      {
        source: "/blog/saglikli-beslenmeye-baslamak-i-cin-pazartesiyi-beklemeyin-mpcjcifj",
        destination: "/blog/saglikli-beslenmeye-baslamak-i-cin-pazartesiyi-beklemeyin-mpe87qa4",
        permanent: true,
      },
      {
        source: "/ezgi-evgin",
        destination: "/ezgi-evgin-diyetisyen",
        permanent: true,
      },
      {
        source: "/ezgi-evgin-aktas",
        destination: "/ezgi-evgin-diyetisyen",
        permanent: true,
      },
      {
        source: "/dyt-ezgi-evgin",
        destination: "/ezgi-evgin-diyetisyen",
        permanent: true,
      },
      {
        source: "/diyetisyen-ezgi-evgin",
        destination: "/ezgi-evgin-diyetisyen",
        permanent: true,
      },
      {
        source: "/diyetisyen-ezgi-evgin-aktas",
        destination: "/ezgi-evgin-diyetisyen",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
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
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
