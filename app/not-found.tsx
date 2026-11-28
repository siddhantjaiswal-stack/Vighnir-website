import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="h1" style={{ marginTop: 14 }}>This page does not exist.</h1>
        <p className="lede">The link may be old, or mistyped.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">Go to the home page</Link>
          <Link href="/support" className="btn btn-ghost">Support</Link>
        </div>
      </div>
    </main>
  );
}
