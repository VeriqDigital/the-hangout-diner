import Hero from "@/components/restaurant/Hero";
import Announcements from "@/components/restaurant/Announcements";
import MenuPreview from "@/components/restaurant/MenuPreview";
import Reviews from "@/components/restaurant/Reviews";
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
      <Announcements announcements={data.announcements} />
      <MenuPreview data={data} />
      <Reviews business={data.settings} />
      <Story business={data.settings} />
      <Visit business={data.settings} />
    </main>
  );
}
