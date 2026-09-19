import Link from "next/link";
import Photo from "./Photo";
import { ArrowIcon, MapPinIcon } from "@/components/ui/Icons";
import { directionsUrl } from "@/config/site";
import type { BusinessInfo } from "@/sanity/lib/types";

export default function Hero({ business }: { business: BusinessInfo }) {
  const directions = business.directionsUrl || directionsUrl(business.address);
  return (
    <section className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <h1>
            Come hungry.
            <br />
            <em>Stay awhile.</em>
          </h1>
          <p className="hero-description">
            Breakfast, burgers, and comfort food at a family-owned diner in
            Perry, Iowa.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/menu">
              View menu <ArrowIcon />
            </Link>
            <a className="text-link" href={directions}>
              Get directions <ArrowIcon />
            </a>
          </div>
          <div className="hero-details">
            <a className="hero-location" href={directions}>
              <MapPinIcon />
              <span>
                {business.address.street} · {business.address.city},{" "}
                {business.address.state}
              </span>
            </a>
            <a className="text-link" href="#hours">
              View hours
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            image={business.heroImage}
            fallback="/images/tenderloin.jpg"
            alt="The Hangout Diner’s pork tenderloin sandwich with fries and pickles"
            className="hero-photo"
            preload
            sizes="(max-width: 700px) 100vw, 52vw"
          />
          <div className="hero-stamp" aria-hidden="true">
            <strong>
              Let’s
              <br />
              hang out.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
