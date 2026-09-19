import Hero from "@/components/restaurant/Hero";
import Announcements from "@/components/restaurant/Announcements";
import MenuPreview from "@/components/restaurant/MenuPreview";
import LocalLove from "@/components/restaurant/LocalLove";
import Story from "@/components/restaurant/Story";
import Visit from "@/components/restaurant/Visit";
import StructuredData from "@/components/restaurant/StructuredData";
import { getRestaurantData } from "@/sanity/lib/content";
import { pageMetadata } from "@/config/seo";
export const metadata = pageMetadata(
  "Family-Owned Diner in Perry, Iowa",
  "Come hungry. Stay awhile. The Hangout Diner serves comfort food in Perry, Iowa. Explore the menu, check hours, and find us on 2nd Street.",
  "/",
);
export default async function Home() {
  const data = await getRestaurantData();
  return (
    <main id="main-content">
      <StructuredData business={data.settings} />
      <Hero business={data.settings} />
      <div
        className="diner-ribbon"
        aria-label="Breakfast, lunch, dinner, and good company"
      >
        <span>BREAKFAST</span>
        <i aria-hidden="true">✳</i>
        <span>LUNCH</span>
        <i aria-hidden="true">✳</i>
        <span>DINNER</span>
        <i aria-hidden="true">✳</i>
        <span>GOOD COMPANY</span>
      </div>
      <Announcements announcements={data.announcements} />
      <MenuPreview data={data} />
      <LocalLove business={data.settings} />
      <Story business={data.settings} />
      <Visit business={data.settings} />
    </main>
  );
}
