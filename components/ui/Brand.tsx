import Link from "next/link";
export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="The Hangout Diner home">
      <span className="brand-top">THE</span>
      <span className="brand-name">
        Hangout
        <span className="brand-star" aria-hidden="true">
          ✳
        </span>
      </span>
      <span className="brand-bottom">
        <i /> DINER <i />
      </span>
    </Link>
  );
}
