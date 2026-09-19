import Link from "next/link";
export default function NotFound() {
  return (
    <main className="standalone-message" id="main-content">
      <h1>Page not found.</h1>
      <p>The page may have moved, or the link may be incorrect.</p>
      <Link className="button button-primary" href="/">
        Back to the diner
      </Link>
    </main>
  );
}
