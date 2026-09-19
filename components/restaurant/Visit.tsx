import { addressText, directionsUrl, phoneHref } from "@/config/site";
import type { BusinessInfo } from "@/sanity/lib/types";
import Hours from "./Hours";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";

export default function Visit({
  business,
  showSocial = false,
  heading = "Visit us in Perry.",
}: {
  business: BusinessInfo;
  showSocial?: boolean;
  heading?: string;
}) {
  return (
    <section className="visit-section section" id="hours">
      <div className="site-container visit-grid">
        <div className="visit-copy">
          <h2>{heading}</h2>
          <address>
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
          {showSocial && (business.facebookUrl || business.instagramUrl) && (
            <div className="visit-social">
              <p>Updates from the diner</p>
              {business.facebookUrl && (
                <a className="text-link" href={business.facebookUrl}>
                  Facebook <ArrowIcon />
                </a>
              )}
              {business.instagramUrl && (
                <a className="text-link" href={business.instagramUrl}>
                  Instagram <ArrowIcon />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="hours-panel">
          <h3 className="hours-heading">Opening hours</h3>
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
