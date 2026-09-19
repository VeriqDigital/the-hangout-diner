import Link from "next/link";
import { pageMetadata } from "@/config/seo";
import { getRestaurantData } from "@/sanity/lib/content";
import Photo from "@/components/restaurant/Photo";
import Visit from "@/components/restaurant/Visit";
import { ArrowIcon } from "@/components/ui/Icons";
export const metadata = pageMetadata(
  "About Us",
  "The Hangout Diner is a family-owned restaurant on 2nd Street in Perry, Iowa, serving breakfast, burgers, sandwiches, and comfort food.",
  "/about",
);

export default async function AboutPage() {
  const { settings } = await getRestaurantData();
  return (
    <main id="main-content">
      <section className="section about-intro">
        <div className="site-container about-grid">
          <div>
            <h1>
              A family-owned
              <br />
              <em>diner in Perry.</em>
            </h1>
            <p className="lead">
              The Hangout Diner is a local place for breakfast, burgers,
              sandwiches, and comfort food. You’ll find us on 2nd Street, with a
              welcome for neighbors and visitors alike.
            </p>
            <p className="about-copy">
              Stop in with the family or catch up with a friend over a meal.
            </p>
            <Link className="button button-primary" href="/menu">
              View menu <ArrowIcon />
            </Link>
          </div>
          <Photo
            image={settings.storyImage}
            fallback="/images/storefront.jpg"
            alt="The Hangout Diner’s entrance and purple sign on 2nd Street in Perry"
            className="about-photo"
            preload
          />
        </div>
      </section>
      <Visit business={settings} />
    </main>
  );
}
