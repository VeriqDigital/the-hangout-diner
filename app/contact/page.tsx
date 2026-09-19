import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/ui/QuoteButton";
import Section from "@/components/ui/Section";
import LocationSection from "@/components/sections/LocationSection";
import {
  ArrowIcon,
  HomeIcon,
  SparkleIcon,
  MessageIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Try the three-step Sparkle & Shine quote experience. This fictional cleaning company website concept is demo-only: no information is sent or stored.",
};
export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero section">
        <div className="site-container contact-grid">
          <div>
            <p className="eyebrow">Contact & quotes</p>
            <h1>
              Let’s take cleaning
              <br />
              <span className="text-blue">off your list.</span>
            </h1>
            <p className="hero-description">
              Tell us a little about your home. We’ll help you find the right
              clean, with the details clear from the start.
            </p>
            <div className="contact-photo">
              <Image
                src="/house-cleaning.png"
                alt="Freshly cared-for kitchen with natural light and warm wood details"
                fill
                sizes="(max-width: 767px) 90vw, 47vw"
                preload
              />
            </div>
          </div>
          <div className="contact-quote-card">
            <p className="eyebrow">Your personalized estimate</p>
            <h2>
              Good things start
              <br />
              with a few details.
            </h2>
            <ol>
              <li>
                <HomeIcon />
                <div>
                  <strong>Your home</strong>
                  <span>The space, size, and neighborhood.</span>
                </div>
                <span>01</span>
              </li>
              <li>
                <SparkleIcon />
                <div>
                  <strong>Your cleaning</strong>
                  <span>The service, rhythm, and priorities.</span>
                </div>
                <span>02</span>
              </li>
              <li>
                <MessageIcon />
                <div>
                  <strong>Your contact details</strong>
                  <span>The easiest way to keep in touch.</span>
                </div>
                <span>03</span>
              </li>
            </ol>
            <QuoteButton>Start My Free Quote</QuoteButton>
            <p className="contact-demo">
              Try it with sample details. This is a concept demo; nothing is
              sent, stored, or booked.
            </p>
            <div className="contact-direct">
              <span>Prefer a conversation?</span>
              <a href={siteConfig.contact.phoneHref}>
                {siteConfig.contact.phone}
              </a>
              <a href={siteConfig.contact.smsHref} className="text-link">
                Send a text
                <ArrowIcon className="size-4" />
              </a>
              <small>Fictional contact number for this website concept.</small>
            </div>
          </div>
        </div>
      </section>
      <Section tone="white">
        <div className="contact-expectations">
          <div>
            <p className="eyebrow">A little preparation helps</p>
            <h2>
              You bring the priorities.
              <br />
              We’ll bring the plan.
            </h2>
          </div>
          <div>
            <p>
              No need to have every detail figured out. Approximate room counts
              and square footage are a useful start. Mention any particular
              surfaces, pets, preferred timing, or rooms that need extra
              attention.
            </p>
            <p>
              The next step would be a conversation to confirm scope, pricing,
              and availability. Trying this demo does not create an appointment.
            </p>
            <Link href="/services" className="text-link">
              Not sure which service you need?
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </Section>
      <Section tone="blue">
        <LocationSection />
      </Section>
    </main>
  );
}
