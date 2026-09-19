import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { services } from "@/data/services";

const serviceNotes: Record<string, string> = {
  "deep-cleaning": "Extra time for buildup and overlooked details.",
  "move-in-move-out-cleaning":
    "Plan an empty-home clean around your move date.",
  "apartment-condo-cleaning": "Regular or one-time care for smaller homes.",
  "one-time-home-reset": "Catch up on routine cleaning in a single visit.",
  "short-term-rental-turnovers":
    "A cleaning checklist for the time between guests.",
};

export default function ServicesSection() {
  const featured = services[0];
  return (
    <div>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Cleaning services</p>
          <h2>
            Regular help, or
            <br />a one-time clean.
          </h2>
        </div>
        <div>
          <p>
            The right service depends on your home’s size, its current
            condition, and how often you’d like help.
          </p>
          <Link className="text-link" href="/services">
            Explore all services
            <ArrowIcon />
          </Link>
        </div>
      </div>
      <div className="service-showcase">
        <Link className="featured-service" href={`/services#${featured.slug}`}>
          <div className="featured-service-image">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 767px) 90vw, 50vw"
            />
            <span className="service-tag">Weekly · Biweekly · Monthly</span>
          </div>
          <div className="featured-service-copy">
            <h3>Recurring home cleaning</h3>
            <p>
              We’ll confirm the scope of your first clean, then plan the regular
              visits that follow. Kitchens, bathrooms, dusting, and floors are
              the usual starting points.
            </p>
            <span className="service-arrow">
              <ArrowIcon />
            </span>
          </div>
        </Link>
        <div className="service-list">
          {services.slice(1).map((service, i) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="service-row"
            >
              <span className="service-number">0{i + 2}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{serviceNotes[service.slug]}</p>
              </div>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
