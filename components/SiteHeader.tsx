"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ClubMark from "@/components/ClubMark";
import { NAV } from "@/lib/site";

/**
 * The one header for every page. The mobile menu is a native <details>, so it
 * works without JavaScript; the script only marks the current page and closes
 * the menu after a client-side navigation.
 */
export default function SiteHeader() {
  const path = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [path]);

  const current = (href: string) =>
    path === href || path?.startsWith(`${href}/`) ? "page" : undefined;

  return (
    <header className="hdr">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap hdr-in">
        <Link href="/" className="logo" aria-label="The Club by Vighnir, home">
          <ClubMark id="hdr-mark" />
          <span>
            The Club <small>by Vighnir</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hdr-cta">
          <Link href="/get" className="btn btn-primary btn-sm">
            Get the app
          </Link>
          <details className="menu" ref={menu}>
            <summary aria-label="Open menu">Menu</summary>
            <nav className="menu-panel" aria-label="Main (mobile)">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} aria-current={current(n.href)}>
                  {n.label}
                </Link>
              ))}
              <Link href="/business-model">Business model</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/get" className="btn btn-primary">
                Get the app
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
