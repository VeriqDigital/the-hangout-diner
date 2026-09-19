import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";

const values = [
  {
    title: "Know what’s included.",
    text: "We confirm the rooms, tasks, and any extras with your quote. If your first visit needs more time than regular upkeep, we’ll discuss that too.",
  },
  {
    title: "Keep the same standard in view.",
    text: "An agreed checklist gives the team a clear plan for each visit, including the priorities specific to your home.",
  },
  {
    title: "Tell us what needs special care.",
    text: "Pets, delicate finishes, product preferences, and rooms you’d like left alone all belong in the conversation before we arrive.",
  },
  {
    title: "Have a plan for the next visit.",
    text: "Choose a recurring schedule that suits your household. When your routine changes, we’ll review timing and availability with you.",
  },
];

export default function AboutIntro() {
  return (
    <div className="why-layout">
      <div>
        <div className="brand-signature">
          <span aria-hidden="true">
            S<span>&</span>S
          </span>
          <p>The Sparkle & Shine approach</p>
        </div>
        <h2>You should know what to expect.</h2>
        <p className="section-description">
          Inviting a cleaning team into your home takes trust. We start with the
          practical details: what you need, what’s included, and how the visit
          will work.
        </p>
        <Link className="text-link" href="/about">
          More about our approach
          <ArrowIcon />
        </Link>
      </div>
      <ol className="why-values">
        {values.map(({ title, text }, i) => (
          <li key={title}>
            <span className="value-number" aria-hidden="true">
              0{i + 1}
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
