import Image from "next/image";
import Link from "next/link";

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${inverse ? "brand-inverse" : ""}`}
      aria-label="Sparkle & Shine Cleaning Co. home"
    >
      <span className="brand-mark">
        <Image
          src="/logo.png"
          width={64}
          height={64}
          sizes="(max-width: 600px) 40px, 52px"
          alt=""
        />
      </span>
      <span className="brand-type">
        Sparkle <span>&</span> Shine<small>Cleaning Co.</small>
      </span>
    </Link>
  );
}
