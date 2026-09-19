import Link from "next/link";
import { pageMetadata } from "@/config/seo";
import { getRestaurantData } from "@/sanity/lib/content";
import Photo from "@/components/restaurant/Photo";
import Visit from "@/components/restaurant/Visit";
import { ArrowIcon } from "@/components/ui/Icons";
export const metadata = pageMetadata(
  "Our Story",
  "Meet The Hangout Diner, a family-owned local restaurant on 2nd Street in Perry, Iowa. Comfort food and a welcoming place to gather.",
  "/about",
);
export default async function AboutPage() {
  const { settings } = await getRestaurantData();
  return (
    <main id="main-content">
      <section className="section about-intro">
        <div className="site-container about-grid">
          <div>
            <p className="eyebrow">A LOCAL PLACE, A WARM WELCOME</p>
            <h1>
              More than a meal.
              <br />
              <em>A place to hang out.</em>
            </h1>
            <p className="lead">
              We’re The Hangout Diner. A family-owned restaurant in Perry, Iowa,
              with comfort food on the menu and room at the table.
            </p>
            <Link className="button button-primary" href="/menu">
              Find something good <ArrowIcon />
            </Link>
          </div>
          <Photo
            image={settings.storyImage}
            fallback="/images/storefront.jpg"
            alt="The Hangout Diner’s purple sign above its entrance on 2nd Street in Perry"
            className="about-photo"
            preload
          />
        </div>
      </section>
      <section className="section about-story">
        <div className="site-container about-story-grid">
          <p className="eyebrow">FOOD. FAMILY. FRIENDS.</p>
          <div>
            <h2>The name says it pretty well.</h2>
            <p>
              A meal is a chance to slow down for a bit. Sit across from an old
              friend. Bring the family together. Take a break from the road.
            </p>
            <p>
              That’s the kind of place The Hangout Diner is here to be. A local
              table for breakfast, lunch, dinner, and the conversations in
              between.
            </p>
            <p>
              You’ll find us at {settings.address.street} in{" "}
              {settings.address.city}. Come as you are, and bring your appetite.
            </p>
          </div>
        </div>
      </section>
      <Visit business={settings} />
    </main>
  );
}
