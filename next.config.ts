import type { NextConfig } from "next";

const CANONICAL_HOST = "ezgievginaktas.com";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
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
