import QuoteButton from "@/components/ui/QuoteButton";
import { siteConfig } from "@/config/site";

export default function LocationSection() {
  return (
    <div className="location-layout">
      <div>
        <p className="section-label">Service area</p>
        <h2>Across the Des Moines metro.</h2>
        <p className="section-description">
          Based around West Des Moines, with service in the communities listed
          here. Include your location when you request a quote so we can confirm
          availability.
        </p>
        <QuoteButton variant="secondary">Check Availability</QuoteButton>
      </div>
      <div className="community-directory">
        <p>West Des Moines, Iowa & surrounding communities</p>
        <ul className="service-communities">
          {siteConfig.location.communities.map((city) => (
            <li key={city}>
              <span aria-hidden="true" />
              {city}
            </li>
          ))}
        </ul>
        <p className="scope-note">
          Visit timing and service scope are confirmed with your quote.
        </p>
      </div>
    </div>
  );
}
