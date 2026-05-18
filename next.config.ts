import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ezgievginaktas.com" }],
        destination: "https://ezgievginaktas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
