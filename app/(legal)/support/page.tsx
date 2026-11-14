import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Support",
  description:
    "How to get help with The Club, a Vighnir product: general help, privacy questions, complaints and grievances, and deleting your account.",
  alternates: { canonical: "/support" },
};

export default function Support() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Support</h1>
          <p className="lede">
            How to get help with <strong>{LEGAL.product}</strong>.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <div className="legal-copy">
            <section id="help">
              <h2>Get help</h2>
              <p>
                For any question about {LEGAL.product}, write to{" "}
                <a href="mailto:hello@vighnir.com">hello@vighnir.com</a>.
              </p>
            </section>

            <section id="privacy">
              <h2>Privacy questions</h2>
              <p>
                For questions about your data, write to{" "}
                <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>
                . Our <Link href="/privacy">Privacy Policy</Link> explains what
                we collect and your rights.
              </p>
            </section>

            <section id="grievances">
              <h2>Complaints and grievances</h2>
              <p>
                To raise a complaint or grievance, write to{" "}
                <a href={`mailto:${LEGAL.grievanceEmail}`}>
                  {LEGAL.grievanceEmail}
                </a>
                .
              </p>
              <p>{LEGAL.grievanceOfficerLine}</p>
            </section>

            <section id="delete">
              <h2>Delete your account</h2>
              <p>
                To delete your account and its data, follow the steps on{" "}
                <Link href="/account-deletion">Delete your account</Link>.
              </p>
            </section>

            <section id="policies">
              <h2>Policies</h2>
              <p>
                <Link href="/privacy">Privacy Policy</Link> ·{" "}
                <Link href="/terms">Terms of Service</Link>
              </p>
            </section>

            <section id="company">
              <h2>Company</h2>
              <p>
                {LEGAL.product} is operated by {LEGAL.entity} (CIN {LEGAL.cin}).
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
