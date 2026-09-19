import QuoteButton from "@/components/ui/QuoteButton";
import { siteConfig } from "@/config/site";

export default function ContactCtaSection() {
  return (
    <section className="closing-cta">
      <div className="site-container closing-inner">
        <h2>
          Your weekend has
          <br />
          better things to do.
        </h2>
        <div className="closing-details">
          <p>
            Tell us about your home, the service you need, and your preferred
            schedule. We’ll put together a personalized quote.
          </p>
          <div className="closing-actions">
            <QuoteButton variant="light">Get My Quote</QuoteButton>
            <a href={siteConfig.contact.phoneHref}>
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
