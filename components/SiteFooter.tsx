import Link from "next/link";
import ClubMark from "@/components/ClubMark";
import { LEGAL } from "@/lib/legal";
import { SITE } from "@/lib/site";

/**
 * The site footer, on every page. It carries the legal links on every route:
 * the IT Rules 2021 (rule 3(1)(a), 3(2)(a)) ask for the rules, privacy policy,
 * user agreement and grievance details to be one click from the home page, and
 * Google asks for the privacy policy to be linked from the home page.
 */
const COLS = [
  {
    title: "The Club",
    links: [
      ["/features", "Features"],
      ["/how-it-works", "How it works"],
      ["/hosts", "For hosts"],
      ["/safety", "Safety and trust"],
      ["/technology", "Technology"],
      ["/business-model", "Business model"],
      ["/faq", "FAQ"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About Vighnir"],
      ["/contact", "Contact"],
      ["/support", "Support"],
      ["/grievance", "Grievance redressal"],
      ["/get", "Get the app"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy", "Privacy Policy"],
      ["/terms", "Terms of Service"],
      ["/community-rules", "Community rules"],
      ["/refund-policy", "Refund and cancellation"],
      ["/how-ranking-works", "How ranking works"],
      ["/account-deletion", "Delete your account"],
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="ftr-about">
            <Link href="/" className="logo" aria-label="The Club by Vighnir, home">
              <ClubMark id="ftr-mark" />
              <span>
                The Club <small>by Vighnir</small>
              </span>
            </Link>
            <p>
              A social app for adults in India: friends, Minis, messages, live
              rooms and one-to-one sessions with approved hosts. In closed
              testing.
            </p>
          </div>
          {COLS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2>{c.title}</h2>
              <ul>
                {c.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="ftr-co">
          <span>© 2026 {LEGAL.entity}. The Club is a product of {LEGAL.entity}.</span>
          <address>
            Registered office: 199-197 Civil Lines, Bareilly - 243001, Uttar
            Pradesh, India · CIN {LEGAL.cin} ·{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </address>
        </div>
      </div>
    </footer>
  );
}
