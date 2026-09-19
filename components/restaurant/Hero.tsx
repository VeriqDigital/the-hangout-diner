import Link from "next/link";
import Photo from "./Photo";
import { ArrowIcon, MapPinIcon } from "@/components/ui/Icons";
import { directionsUrl } from "@/config/site";
import type { BusinessInfo } from "@/sanity/lib/types";
export default function Hero({ business }: { business: BusinessInfo }) {
  return (
    <section className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-star" aria-hidden="true">
              ✳
            </span>{" "}
            A LITTLE LOCAL. A LOT TO LOVE.
          </p>
          <h1>
            Come hungry.
            <br />
            <em>Stay awhile.</em>
          </h1>
          <p className="hero-description">
            Your neighborhood table for comfort food
            <br className="desktop-break" /> and good company. Family-owned,
            right here
            <br className="desktop-break" /> in Perry, Iowa.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/menu">
              Take a look at the menu <ArrowIcon />
            </Link>
            <a
              className="text-link"
              href={business.directionsUrl || directionsUrl(business.address)}
            >
              Get directions <ArrowIcon />
            </a>
          </div>
          <div className="hero-location">
            <MapPinIcon />
            <span>
              {business.address.street} · {business.address.city},{" "}
              {business.address.state}
              <br />
              <small>Good food is closer than you think.</small>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            image={business.heroImage}
            fallback="/images/tenderloin.jpg"
            alt="The Hangout Diner’s pork tenderloin sandwich with fries and pickles on a diner plate"
            className="hero-photo"
            preload
            sizes="(max-width: 700px) 100vw, 52vw"
          />
          <div className="hero-stamp" aria-label="Food, family, friends">
            <span>FOOD · FAMILY</span>
            <strong>
              Let’s
              <br />
              hang out.
            </strong>
            <span>FRIENDS · PERRY, IA</span>
          </div>
          <div className="photo-caption">
            <span>THE HANGOUT DINER</span>
            <span>Pull up a chair. ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
