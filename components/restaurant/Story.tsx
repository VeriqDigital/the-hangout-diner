import Link from "next/link";
import Photo from "./Photo";
import { ArrowIcon } from "@/components/ui/Icons";
import type { BusinessInfo } from "@/sanity/lib/types";

export default function Story({ business }: { business: BusinessInfo }) {
  return (
    <section className="section story-section">
      <div className="site-container story-grid">
        <Photo
          image={business.storyImage}
          fallback="/images/storefront.jpg"
          alt="The Hangout Diner storefront at 1014 2nd Street with its purple sign"
          className="story-photo"
        />
        <div className="story-copy">
          <h2>
            Family-owned.
            <br />
            <em>Right here in Perry.</em>
          </h2>
          <p>
            We’re a local diner on 2nd Street, serving breakfast, burgers,
            sandwiches, and comfort food. Bring the family or meet a friend for
            a meal.
          </p>
          <Link className="text-link" href="/about">
            About us <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
