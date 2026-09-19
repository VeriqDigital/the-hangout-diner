import Link from "next/link";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";
export { viewport } from "next-sanity/studio";
export const metadata = {
  title: "The Hangout Diner · Studio",
  robots: { index: false, follow: false },
};
export default function StudioPage() {
  if (!isSanityConfigured)
    return (
      <main className="studio-setup">
        <h1>The Hangout Diner Studio</h1>
        <p>
          Connect a Sanity project to manage the menu, specials, and business
          information.
        </p>
        <p>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> in <code>.env.local</code>,
          then restart the app.
        </p>
        <Link href="/">Back to the website</Link>
      </main>
    );
  return <NextStudio config={config} />;
}
