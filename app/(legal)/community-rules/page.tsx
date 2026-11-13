import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

/*
 * flow 6 L-P07-G2 (C1, C6), branch l-p07-rules. The rules in plain words, for the app's "Community rules" links (Settings,
 * Help and contact, the paused screen and the 90-day reminder). The binding list is Terms §6: this page explains it and adds
 * nothing that is not there. Not pushed: the owner pushes the website, then sets COMMUNITY_RULES_URL in the app
 * (features/moderation/rules.ts) to https://vighnir.com/community-rules.
 */

export const metadata: Metadata = {
  title: "Community rules",
  description:
    "The rules for using The Club, in plain words: what is not allowed, how to report something, what we do about it, and how often we remind you.",
  alternates: { canonical: "/community-rules" },
};

const TOC = [
  ["respect", "Be kind and be real"],
  ["not-allowed", "What is not allowed"],
  ["report", "How to report"],
  ["what-we-do", "What we do"],
  ["reminders", "Reminders"],
  ["contact", "Contact"],
] as const;

export default function CommunityRules() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Community rules</h1>
          <p className="lede">
            The Club is for adults, and it works only if people can trust each
            other. These are the rules, in plain words. The full list is in our{" "}
            <Link href="/terms#prohibited">Terms of Service</Link>.
          </p>
          <div className="legal-meta mono">
            <span>
              Effective{" "}
              <time dateTime={LEGAL.effectiveIso}>{LEGAL.effective}</time>
            </span>
            <span>India · English</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap legal-grid">
          <nav className="legal-toc mono" aria-label="On this page">
            <b>Contents</b>
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="legal-copy">
            <section id="respect">
              <h2>Be kind and be real</h2>
              <ul>
                <li>You must be 18 or over, and you must be who you say you are.</li>
                <li>Treat people the way you would in person. Disagree without harassing.</li>
                <li>Only share what you have the right to share.</li>
              </ul>
            </section>

            <section id="not-allowed">
              <h2>What is not allowed</h2>
              <ul>
                <li>Anything involving a person under 18 in a sexual way. There are no exceptions.</li>
                <li>Sexual or nude images of anyone without their consent.</li>
                <li>Harassment, threats, hate, or content that incites violence.</li>
                <li>Pretending to be another person, or deceiving people.</li>
                <li>Other people’s private information, shared without their consent.</li>
                <li>Selling or arranging anything illegal, and spam or scams.</li>
                <li>Anything that breaks the law of India, or that harms the security or order of the country.</li>
              </ul>
              <p>
                The binding wording, with every item, is in{" "}
                <Link href="/terms#prohibited">section 6 of the Terms</Link>.
              </p>
            </section>

            <section id="report">
              <h2>How to report</h2>
              <ul>
                <li>On a post or Mini, in a chat, or on a person’s profile: use <strong>Report</strong> from the menu.</li>
                <li>On a post someone shared with you by link: open it and use <strong>Report</strong>.</li>
                <li>
                  You can block anyone at any time from the same menus.
                </li>
                <li>
                  Without the app: write to our Grievance Officer. See{" "}
                  <Link href="/terms#grievance">section 8 of the Terms</Link>{" "}
                  for the contact and the times we work to.
                </li>
              </ul>
            </section>

            <section id="what-we-do">
              <h2>What we do</h2>
              <p>
                We look at every report. If something breaks the rules we can
                remove it, limit an account, or end it, and we tell you what we
                did and why unless the law says we must not. If you think we
                got it wrong, you can appeal in the app.
              </p>
            </section>

            <section id="reminders">
              <h2>Reminders</h2>
              <p>
                <strong>At least every 90 days</strong> we remind you of these
                rules, the Terms of Service and the Privacy Policy, and of any
                change to them. We do it in the app, with a notification.
              </p>
            </section>

            <section id="contact">
              <h2>Contact</h2>
              <p>
                {LEGAL.grievanceOfficerLine}. Company contact:{" "}
                <a href={`mailto:${LEGAL.grievanceEmail}`}>
                  {LEGAL.grievanceEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
