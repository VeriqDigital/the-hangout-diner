import Image from "next/image";

export default function LifestyleSection() {
  return (
    <section className="lifestyle-section">
      <div className="lifestyle-image">
        <Image
          src="/apartment-cleaning.png"
          alt="Inviting living room with a comfortable cream sofa, navy cushions, and afternoon light"
          fill
          sizes="100vw"
        />
      </div>
      <div className="site-container lifestyle-content">
        <h2>
          Come home
          <br />
          to <em>done.</em>
        </h2>
        <p>
          The counters are clear. The floors are finished. The bathroom is
          reset. Your evening is yours again.
        </p>
      </div>
    </section>
  );
}
