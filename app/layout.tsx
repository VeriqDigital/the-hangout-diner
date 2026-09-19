import type { Metadata } from "next";
import localFont from "next/font/local";
import { isPublicSite, siteConfig, siteUrl } from "@/config/site";
import "./globals.css";
const bodyFont = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-body",
  weight: "200 800",
  display: "swap",
});
const displayFont = localFont({
  src: "./fonts/fraunces-bold.ttf",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: {
    default: "The Hangout Diner | Family-Owned Diner in Perry, Iowa",
    template: "%s | The Hangout Diner",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: { index: isPublicSite, follow: isPublicSite },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
