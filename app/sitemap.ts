import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return isPublicSite
    ? ["", "/menu", "/about", "/contact"].map((path) => ({
        url: `${siteUrl}${path}`,
      }))
    : [];
}
