import { addressText, directionsUrl, phoneHref } from "@/config/site";
import type { BusinessInfo } from "@/sanity/lib/types";
import Hours from "./Hours";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
export default function Visit({ business }: { business: BusinessInfo }) {
  return (
    <section className="visit-section section" id="hours">
      <div className="site-container visit-grid">
        <div className="visit-copy">
          <p className="eyebrow">We’ll save you a seat</p>
          <h2>
            See you
            <br />
            on 2nd Street.
          </h2>
          <address>
            <strong>The Hangout Diner</strong>
            <br />
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state}{" "}
            {business.address.zip}
          </address>
          <div className="visit-actions">
            <a
              className="button button-primary"
              href={business.directionsUrl || directionsUrl(business.address)}
            >
              Get directions <ArrowIcon />
            </a>
            <a className="text-link" href={phoneHref(business.phone)}>
              <PhoneIcon />
              {business.phone}
            </a>
          </div>
        </div>
        <div className="hours-panel">
          <div className="hours-heading">
            <h3>Come by when we’re open.</h3>
            <span>PERRY, IA</span>
          </div>
          <Hours hours={business.hours} phone={business.phone} />
        </div>
      </div>
    </section>
  );
}
export function VisitMap({ business }: { business: BusinessInfo }) {
  return (
    <div className="visit-map">
      <iframe
        title="Map showing The Hangout Diner in Perry, Iowa"
        src={`https://www.google.com/maps?q=${encodeURIComponent(addressText(business.address))}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
