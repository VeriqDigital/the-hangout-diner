import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import QuoteButton from "@/components/ui/QuoteButton";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";
import { ArrowIcon, SparkleIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Six thoughtful residential cleaning services for a fictional Des Moines metro business. Explore the Sparkle & Shine website concept by Veriq.",
};
export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="services-intro section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Six ways to lighten your list</p>
              <h1>
                Life gets busy.
                <br />
                <span className="text-blue">We get cleaning.</span>
              </h1>
            </div>
            <div>
              <p>
                Whether you need a regular rhythm or a fresh start, we’ll begin
                with your home, your priorities, and a clear quote.
              </p>
              <QuoteButton />
            </div>
          </div>
          <nav
            className="service-jump-links"
            aria-label="Find a cleaning service"
          >
            {services.map((s, i) => (
              <Link key={s.slug} href={`#${s.slug}`}>
                <span>0{i + 1}</span>
                {s.title}
                <ArrowIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <div className="service-details-list">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`service-detail section ${i === 0 ? "core-service" : i % 2 === 0 ? "section-cream" : "section-white"}`}
          >
            <div className="site-container service-detail-grid">
              <div className="service-detail-visual">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 767px) 90vw, 45vw"
                />
                <span className="detail-image-number">0{i + 1}</span>
                {i === 0 && (
                  <span className="service-tag">
                    <SparkleIcon className="size-4" />
                    Our core service
                  </span>
                )}
              </div>
              <div className="service-detail-copy">
                <p className="eyebrow">{s.shortTitle}</p>
                <h2>{s.title}</h2>
                <p className="service-detail-description">{s.description}</p>
                <div className="best-for">
                  <strong>Best for</strong>
                  <p>{s.bestFor}</p>
                </div>
                <h3>What a visit can include</h3>
                <ul className="scope-list">
                  {s.scope.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="scope-note">
                  {s.note} Exact scope confirmed with your quote.
                </p>
                <QuoteButton
                  service={s.slug}
                  variant={i === 0 ? "light" : "primary"}
                >
                  Get My Quote
                </QuoteButton>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Section tone="blue">
        <div className="pricing-note">
          <div>
            <p className="eyebrow">A quote that fits the actual work</p>
            <h2>
              Your home isn’t one-size-fits-all.
              <br />
              Your quote shouldn’t be either.
            </h2>
            <p>
              Every quote is based on home size, condition, service type, and
              frequency. We discuss extras and confirm what’s included before a
              visit is agreed.
            </p>
          </div>
          <QuoteButton />
        </div>
      </Section>
      <ContactCtaSection />
    </main>
  );
}
