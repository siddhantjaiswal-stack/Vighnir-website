import Link from "next/link";

/**
 * The site footer. Shared by the homepage and the legal pages so the legal
 * links exist on every route — Google requires the privacy policy to be linked
 * from the homepage of the domain that hosts it, and the IT Rules 2021 require
 * the rules, privacy policy and user agreement to be "prominently published".
 */
export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap foot mono">
        <span>© MMXXVI Vighnir</span>
        <span>eko · The Club · Aquarius</span>
        <nav className="foot-legal" aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/account-deletion">Delete account</Link>
        </nav>
        <address style={{ fontStyle: "normal" }}>Noida · India</address>
      </div>
    </footer>
  );
}
