import type { NextConfig } from "next";
const indexable =
  process.env.SITE_INDEXABLE === "true" &&
  Boolean(process.env.NEXT_PUBLIC_SITE_URL);
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
  async headers() {
    return [
      {
        source: indexable ? "/studio/:path*" : "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};
export default nextConfig;
