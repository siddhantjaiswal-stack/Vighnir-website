import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "./legal.css";

/**
 * Chrome for the legal pages. Deliberately static: `components/Experience.tsx`
 * (GSAP, Lenis, the preloader, the custom cursor) queries homepage-only DOM and
 * must not mount here. The header is the same markup as the homepage with the
 * nav pointing back at the homepage anchors, and pinned solid because nothing
 * runs the scroll listener that would otherwise fade it in.
 */
export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="site is-solid legal-header">
        <div className="wrap nav">
          <Link href="/" className="wordmark" aria-label="Vighnir — home">
            VIGHN<i>I</i>R
          </Link>
          <nav className="nav-links mono" aria-label="Main">
            <Link href="/#brands">Brands</Link>
            <Link href="/#house">House</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/how-ranking-works" className="nav-ranking">
              How ranking works
            </Link>
          </nav>
        </div>
      </header>

      {/* A fourth nav item does not fit beside the wordmark at 360 px (it made
          the page scroll sideways), so it shows from 640 px up. Phones reach the
          page from the app's link. */}
      <style>{`@media (max-width:639px){.nav-links .nav-ranking{display:none}}`}</style>

      {children}

      <SiteFooter />
    </>
  );
}
