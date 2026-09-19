import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LeadProvider from "@/components/layout/LeadProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});
const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});
const defaultTitle =
  "Sparkle & Shine | A Cleaner Home. A Lighter Week. | Website Concept";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.shortName} · Website Concept`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable}`}>
      <body>
        <LeadProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
        </LeadProvider>
      </body>
    </html>
  );
}
