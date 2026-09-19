import Link from "next/link";
import Brand from "@/components/ui/Brand";
import QuoteButton from "@/components/ui/QuoteButton";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand inverse />
            <p>
              Residential cleaning in West Des Moines and the surrounding metro.
            </p>
            <a className="footer-phone" href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phone}
            </a>
            <QuoteButton variant="light">Get a Quote</QuoteButton>
          </div>
          <nav aria-label="Cleaning services">
            <h2>Cleaning services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Service area</h2>
            <ul>
              {siteConfig.location.communities.map((city) => (
                <li key={city}>
                  <Link href="/#service-area">{city}</Link>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Useful links</h2>
            <ul>
              <li>
                <Link href="/about">Why Sparkle & Shine</Link>
              </li>
              <li>
                <Link href="/#process">How it works</Link>
              </li>
              <li>
                <Link href="/#faq">Common questions</Link>
              </li>
              <li>
                <Link href="/contact">Contact & quotes</Link>
              </li>
              <li>
                <a href={siteConfig.contact.smsHref}>Text us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            Sparkle & Shine Cleaning Co. is a fictional business created as a
            website concept by Veriq.
          </p>
          <p>
            Website designed by{" "}
            <a
              href="https://www.veriqdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veriq ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
