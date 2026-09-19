import Link from "next/link";
export default function NotFound() {
  return (
    <main className="standalone-message" id="main-content">
      <p className="eyebrow">THE HANGOUT DINER · 404</p>
      <h1>
        Wrong turn.
        <br />
        Right appetite.
      </h1>
      <p>Let’s get you back to something good.</p>
      <Link className="button button-primary" href="/">
        Back to the diner
      </Link>
    </main>
  );
}
