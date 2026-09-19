import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/config/site";
export default function robots(): MetadataRoute.Robots {
  return isPublicSite
    ? {
        rules: { userAgent: "*", allow: "/", disallow: "/studio" },
        sitemap: `${siteUrl}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
