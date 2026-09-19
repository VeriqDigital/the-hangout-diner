import type { Metadata } from "next";
import { siteConfig, siteUrl } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}${path}` } } : {}),
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      ...(siteUrl ? { url: `${siteUrl}${path}` } : {}),
    },
  };
}
