import {
  CalendarIcon,
  MessageIcon,
  HeartIcon,
  HomeIcon,
} from "@/components/ui/Icons";

const benefits = [
  {
    title: "Recurring schedules",
    detail: "Weekly, biweekly, or monthly",
    Icon: CalendarIcon,
  },
  {
    title: "Personalized quotes",
    detail: "Based on your home and priorities",
    Icon: MessageIcon,
  },
  {
    title: "Home care preferences",
    detail: "Discuss pets and special surfaces",
    Icon: HeartIcon,
  },
  {
    title: "An agreed checklist",
    detail: "Know what each visit includes",
    Icon: HomeIcon,
  },
];
export default function TrustStrip() {
  return (
    <section className="trust-band" aria-label="A simpler cleaning routine">
      <div className="site-container trust-grid">
        {benefits.map(({ title, detail, Icon }) => (
          <div key={title}>
            <Icon className="size-7" />
            <p>
              <strong>{title}</strong>
              <span>{detail}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
