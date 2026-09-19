import Link from "next/link";
import Photo from "./Photo";
import { ArrowIcon } from "@/components/ui/Icons";
import type { BusinessInfo } from "@/sanity/lib/types";
export default function Story({ business }: { business: BusinessInfo }) {
  return (
    <section className="section story-section">
      <div className="site-container story-grid">
        <div className="story-photo-wrap">
          <Photo
            image={business.storyImage}
            fallback="/images/storefront.jpg"
            alt="The Hangout Diner storefront at 1014 2nd Street with its purple sign"
            className="story-photo"
          />
          <span className="story-photo-note">A little place in Perry.</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">FOOD. FAMILY. FRIENDS.</p>
          <h2>
            A local diner.
            <br />
            <em>A familiar feeling.</em>
          </h2>
          <p>
            We’re The Hangout Diner, a family-owned restaurant on 2nd Street in
            Perry. A place to sit down, enjoy a good meal, and catch up with the
            people across the table.
          </p>
          <p>
            Whether you live around the corner or you’re just passing through,
            there’s a place for you here.
          </p>
          <Link className="text-link" href="/about">
            A little about us <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
