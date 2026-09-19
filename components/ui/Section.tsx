import Container from "./Container";
export default function Section({
  children,
  id,
  tone = "cream",
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  tone?: "cream" | "white" | "blue";
  className?: string;
}) {
  return (
    <section id={id} className={`section section-${tone} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
