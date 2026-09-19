import QuoteButton from "@/components/ui/QuoteButton";

const steps = [
  {
    title: "Tell us about your home",
    text: "Approximate square footage, room counts, and your priorities help us plan. Include your preferred schedule or move date.",
  },
  {
    title: "Get your personalized quote",
    text: "We review the details and confirm the scope, pricing, and availability with you.",
  },
  {
    title: "Confirm the visit",
    text: "We agree on timing, access, and any special care instructions before cleaning according to your checklist.",
  },
];
export default function ProcessSection() {
  return (
    <div>
      <div className="section-heading process-heading">
        <div>
          <h2>From quote to first clean</h2>
        </div>
        <QuoteButton />
      </div>
      <ol className="process-timeline">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-number">0{i + 1}</span>
            <div className="timeline-line">
              <i />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
