import Link from "next/link";
import Brand from "@/components/ui/Brand";
import {
  navigation,
  phoneHref,
  addressText,
  directionsUrl,
} from "@/config/site";
import type { BusinessInfo } from "@/sanity/lib/types";
import { ArrowIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
export default function Footer({ business }: { business: BusinessInfo }) {
  const directions = business.directionsUrl || directionsUrl(business.address);
  return (
    <>
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-main">
            <div>
              <Brand />
              <p>
                Food. Family. Friends.
                <br />
                Your local hangout in Perry, Iowa.
              </p>
            </div>
            <div>
              <h2>Come on over</h2>
              <a href={directions}>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </a>
              <a className="footer-phone" href={phoneHref(business.phone)}>
                {business.phone}
              </a>
            </div>
            <nav aria-label="Footer navigation">
              <h2>Pull up a chair</h2>
              {navigation
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              <Link href="/contact#hours">Hours</Link>
            </nav>
            <div>
              <h2>Keep in touch</h2>
              {business.facebookUrl && (
                <a href={business.facebookUrl}>
                  Facebook <ArrowIcon />
                </a>
              )}
              {business.instagramUrl && (
                <a href={business.instagramUrl}>
                  Instagram <ArrowIcon />
                </a>
              )}
              <p>Find the latest from the diner.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} The Hangout Diner</p>
            <span>
              Website concept by{" "}
              <a href="https://www.veriqdigital.com/">Veriq ↗</a>
            </span>
          </div>
        </div>
      </footer>
      <nav className="mobile-actions" aria-label="Quick restaurant actions">
        <a href={phoneHref(business.phone)}>
          <PhoneIcon />
          Call
        </a>
        <Link href="/menu">
          View menu
          <ArrowIcon />
        </Link>
        <a
          href={directions}
          aria-label={`Directions to ${addressText(business.address)}`}
        >
          <MapPinIcon />
          Directions
        </a>
      </nav>
    </>
  );
}
