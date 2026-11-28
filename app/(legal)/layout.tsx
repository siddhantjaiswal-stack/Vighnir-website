import "./legal.css";

/**
 * The legal pages share the root header and footer (app/layout.tsx); this
 * layout only adds the long-form stylesheet. Kept as a route group so the URLs
 * stay /privacy, /terms, /account-deletion, /support, /community-rules,
 * /how-ranking-works and /host-terms: the app and the store listings link to
 * them directly.
 */
export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
