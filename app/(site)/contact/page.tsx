import { pageMetadata } from "@/config/seo";
import { getRestaurantData } from "@/sanity/lib/content";
import Visit, { VisitMap } from "@/components/restaurant/Visit";
import Announcements from "@/components/restaurant/Announcements";
export const metadata = pageMetadata(
  "Visit Us & Hours",
  "Find The Hangout Diner at 1014 2nd St, Perry, IA 50220. See hours, get directions, or call (515) 979-3385.",
  "/contact",
);

export default async function ContactPage() {
  const { settings, announcements } = await getRestaurantData();
  return (
    <main id="main-content" className="visit-page">
      <div className="site-container visit-title">
        <h1>Visit & hours</h1>
      </div>
      <Announcements announcements={announcements} />
      <Visit business={settings} showSocial heading="Address & phone" />
      <div className="site-container visit-map-wrap">
        <VisitMap business={settings} />
      </div>
    </main>
  );
}
