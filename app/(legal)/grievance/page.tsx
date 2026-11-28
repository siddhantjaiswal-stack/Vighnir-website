import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Grievance redressal",
  description:
    "How to make a complaint about The Club under the IT Rules 2021: the Grievance Officer's contact, what to include, our deadlines (acknowledged in 24 hours), and appeals to the Grievance Appellate Committee and the Data Protection Board of India.",
  alternates: { canonical: "/grievance" },
};

/*
 * One page for the grievance mechanism the IT Rules 2021 (rule 3(2)(a)) ask an
 * intermediary to publish prominently, linked from the footer of every page.
 * It restates, and must stay identical to, Terms of Service §8 (deadlines) and
 * Privacy Policy §13 (personal data). If either changes, change this page in
 * the same release.
 */
export default function Grievance() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Grievance redressal</h1>
          <p className="lede">
            How to complain about something on The Club, or about the service,
            and what happens next.
          </p>
          <div className="legal-meta mono">
            <span>
              Last updated <time dateTime="2026-11-28">28 November 2026</time>
            </span>
            <span>India · English</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap legal-grid">
          <nav className="legal-toc mono" aria-label="On this page">
            <b>Contents</b>
            <a href="#officer">Grievance Officer</a>
            <a href="#how">How to complain</a>
            <a href="#deadlines">Our deadlines</a>
            <a href="#appeal">If you are not satisfied</a>
            <a href="#report">Reporting in the app</a>
          </nav>

          <div className="legal-copy">
            <section id="officer">
              <h2>1. Grievance Officer</h2>
              <p>
                Complaints about The Club go to the grievance contact below. It
                is the channel the Information Technology (Intermediary
                Guidelines and Digital Media Ethics Code) Rules, 2021 require{" "}
                {LEGAL.entity} to publish.
              </p>
              {/* TODO-OWNER: the Grievance Officer block below is kept exactly as it
                  stands on the live Terms §8 and Privacy §13 (LEGAL.grievanceOfficerLine,
                  "to be named before launch"). The owner wants someone other than
                  himself as the officer; the owner decides who, and whether the
                  grievance@ mailbox is live (it is unverified; the app currently
                  sends grievances to hello@). Do not name anyone here without the
                  owner's ruling. One edit in lib/legal.ts updates every page. */}
              <div className="legal-note glass">
                <span className="mono">Grievance contact</span>
                <p>{LEGAL.grievanceOfficerLine}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${LEGAL.grievanceEmail}`}>
                    {LEGAL.grievanceEmail}
                  </a>
                  <br />
                  Post: {LEGAL.postalAddress}
                </p>
              </div>
            </section>

            <section id="how">
              <h2>2. How to complain</h2>
              <p>Write to the Grievance Officer by email or post and include:</p>
              <ul>
                <li>who you are and how we can reach you;</li>
                <li>what you are complaining about;</li>
                <li>
                  where to find it: a link, a username, or a description of the
                  post, message, profile, host or session;
                </li>
                <li>if you are complaining on behalf of someone else, say so.</li>
              </ul>
              <p>
                You do not need an account on The Club to complain. For a
                complaint about your personal data, see also{" "}
                <Link href="/privacy#grievance">§13 of the Privacy Policy</Link>.
              </p>
            </section>

            <section id="deadlines">
              <h2>3. Our deadlines</h2>
              <p>
                These are the deadlines in{" "}
                <Link href="/terms#grievance">§8 of the Terms of Service</Link>{" "}
                and, for court and government orders,{" "}
                <Link href="/terms#enforcement">§7</Link>:
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Within 2 hours</dt>
                  <dd>
                    On a complaint by or on behalf of a person, we remove or
                    disable content that exposes their private area, shows them
                    in full or partial nudity, shows or depicts them in any sexual
                    act or conduct, or impersonates them, including artificially
                    morphed images.
                  </dd>
                </div>
                <div>
                  <dt>Within 24 hours</dt>
                  <dd>We acknowledge your complaint.</dd>
                </div>
                <div>
                  <dt>Within 36 hours</dt>
                  <dd>
                    We resolve a request to remove content that breaks the rules
                    in <Link href="/terms#prohibited">§6 of the Terms</Link>,
                    other than items 1, 4 and 11 of that list.
                  </dd>
                </div>
                <div>
                  <dt>Within 36 hours</dt>
                  <dd>We resolve every other complaint, and tell you what we did.</dd>
                </div>
                <div>
                  <dt>Within 3 hours</dt>
                  <dd>
                    We remove or disable access to information a court order, or
                    a notification from an appropriate government agency, says is
                    unlawful.
                  </dd>
                </div>
              </dl>
            </section>

            <section id="appeal">
              <h2>4. If you are not satisfied</h2>
              <p>
                If you are not satisfied with the Grievance Officer’s decision,
                or we did not answer in time, you can appeal to a{" "}
                <strong>Grievance Appellate Committee</strong> constituted by the
                Central Government under the IT Rules 2021, within 30 days of
                receiving our communication.
              </p>
              <p>
                For a complaint about your personal data, you may complain to the{" "}
                <strong>Data Protection Board of India</strong> if we do not
                answer or you are not satisfied with our answer. Neither route
                takes away any other remedy you have in law.
              </p>
            </section>

            <section id="report">
              <h2>5. Reporting in the app</h2>
              <p>
                The fastest way to flag a post, Mini, story, comment, message,
                profile, Floor message, host, session or review is{" "}
                <strong>Report</strong>, inside the app. You can also block
                anyone. Our <Link href="/community-rules">Community rules</Link>{" "}
                explain what is not allowed and what we do about it.
              </p>
              <p>
                See also: <Link href="/terms">Terms of Service</Link> ·{" "}
                <Link href="/privacy">Privacy Policy</Link> ·{" "}
                <Link href="/support">Support</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
