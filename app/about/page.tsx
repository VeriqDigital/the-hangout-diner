import type { Metadata } from "next";
import Image from "next/image";
import QuoteButton from "@/components/ui/QuoteButton";
import Section from "@/components/ui/Section";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import { ArrowIcon } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Cleaning built around consistency. Explore the team philosophy behind Sparkle & Shine, a fictional Des Moines cleaning company concept by Veriq.",
};

const standards = [
  {
    title: "Start with the conversation.",
    text: "Before the first visit, we talk through your space, the surfaces that need special care, and what matters most. The quote sets out the plan so you can make a clear decision.",
  },
  {
    title: "Give the team a shared standard.",
    text: "A consistent checklist keeps the work organized. Room by room, it gives every visit a clear scope while leaving space for the priorities agreed for your home.",
  },
  {
    title: "Keep the small details in mind.",
    text: "A pet that needs a closed door. A countertop that needs a particular product. A room that is off limits. Your home comes with its own instructions, and those details belong in the plan.",
  },
  {
    title: "Make the next visit easier.",
    text: "Your schedule will change. So will your home. Clear communication helps us review your priorities, discuss adjustments, and keep the next visit aligned with what you need.",
  },
];
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero section">
        <div className="site-container about-hero-grid">
          <div>
            <p className="eyebrow">About Sparkle & Shine</p>
            <h1>
              Cleaning built
              <br />
              around
              <br />
              consistency.
            </h1>
            <p className="hero-description">
              A clean home is the result. A clear plan, a thoughtful team, and a
              dependable routine are how we get there.
            </p>
            <QuoteButton />
          </div>
          <div className="about-hero-image">
            <Image
              src="/home-care.png"
              alt="Cleaner carefully wiping a kitchen counter"
              fill
              sizes="(max-width: 767px) 90vw, 44vw"
              preload
            />
            <div className="about-image-note">
              <span>
                Good people.
                <br />
                Thoughtful home care.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Section tone="white">
        <div className="mission-layout">
          <p className="eyebrow">Our philosophy</p>
          <div>
            <h2>
              Home should be the place
              <br />
              you can switch off.
            </h2>
            <p>
              But when the cleaning list follows you from room to room, that’s
              easier said than done. Sparkle & Shine is built around a simple
              idea: reliable help should give you breathing room.
            </p>
            <p>
              Our approach pairs practical cleaning standards with the kind of
              communication that makes life easier. You know what’s included,
              how the visit is planned, and where to turn with a question. No
              guessing. Just a little less to manage.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="blue">
        <div className="section-heading">
          <div>
            <h2>
              Care is a process.
              <br />
              Here’s ours.
            </h2>
          </div>
          <p>
            A professional standard doesn’t need to feel impersonal. It should
            make room for the way you live.
          </p>
        </div>
        <div className="standards-list">
          {standards.map((s, i) => (
            <article key={s.title}>
              <span>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="cream">
        <div className="respect-layout">
          <div className="respect-image">
            <Image
              src="/apartment-cleaning.png"
              alt="Personal living space with wood furniture, houseplants, and soft furnishings"
              fill
              sizes="(max-width: 767px) 90vw, 48vw"
            />
          </div>
          <div>
            <h2>
              A home to care for.
              <br />
              Not just a list
              <br />
              to finish.
            </h2>
            <p className="section-description">
              Let us know about special finishes, product preferences, pets, and
              any areas you’d like left alone. We confirm the details before
              cleaning begins and revisit them when your needs change.
            </p>
            <Link href="/services" className="text-link">
              Find the service that fits
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </Section>
      <ContactCtaSection />
    </main>
  );
}
