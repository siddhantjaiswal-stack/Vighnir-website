import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The user agreement for The Club, a Vighnir product — the 18+ rule, account rules, what you may not post, how content is reported and removed, grievance redressal timelines, and governing law.",
  alternates: { canonical: "/terms" },
};

const TOC = [
  ["agreement", "This agreement"],
  ["what", "What The Club is"],
  ["age", "You must be 18"],
  ["account", "Your account"],
  ["content", "Your content"],
  ["prohibited", "What you may not post"],
  ["enforcement", "Removal & termination"],
  ["grievance", "Reporting & grievances"],
  ["privacy", "Privacy"],
  ["payments", "No payments today"],
  ["service", "Availability & liability"],
  ["changes", "Changes"],
  ["law", "Governing law"],
  ["contact", "Contact"],
] as const;

export default function TermsOfService() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Terms of Service</h1>
          <p className="lede">
            The agreement between you and Vighnir when you use The Club — and
            the rules that keep it usable for everyone else.
          </p>
          <div className="legal-meta mono">
            <span>
              Effective{" "}
              <time dateTime={LEGAL.effectiveIso}>{LEGAL.effective}</time>
            </span>
            <span>Version {LEGAL.version}</span>
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
            {/* ── 1 ── */}
            <section id="agreement">
              <h2>1. This agreement</h2>
              <p>
                These Terms of Service, together with the{" "}
                <Link href="/privacy">Privacy Policy</Link>, are the agreement
                between you and <strong>{LEGAL.entity}</strong> (CIN {LEGAL.cin}) — a
                founder-led company with its registered office at Civil Lines,
                Bareilly, Uttar Pradesh, India — for your use of{" "}
                <strong>The Club</strong>. In these terms “we”, “us” and “our”
                mean {LEGAL.entity}; “you” means the person using The Club.
              </p>
              <p>
                By creating an account you accept these terms. If you do not
                accept them, do not create an account.
              </p>
              <p>
                The Club is an <em>intermediary</em> within the meaning of the
                Information Technology Act, 2000 and the Information Technology
                (Intermediary Guidelines and Digital Media Ethics Code) Rules,
                2021. These terms, the Privacy Policy and the rules in{" "}
                <a href="#prohibited">§6</a> are the rules and regulations,
                privacy policy and user agreement those rules require us to
                publish.
              </p>
            </section>

            {/* ── 2 ── */}
            <section id="what">
              <h2>2. What The Club is</h2>
              <p>
                The Club is a social app for India. It is being built so that
                people can share things they make, message each other, and book
                time with experts and creators.
              </p>
              <div className="legal-note glass">
                <span className="mono">What exists on the effective date</span>
                <p>
                  The Club has <strong>not yet been released</strong> on the App
                  Store or Google Play. The part of it that is built is{" "}
                  <strong>creating an account and signing in</strong>. These
                  terms are written to govern the service as a whole, including
                  the parts that arrive later — but we are not going to describe
                  features as if you can use them today.
                </p>
              </div>
            </section>

            {/* ── 3 ── */}
            <section id="age">
              <h2>3. You must be 18 or over</h2>
              <p>
                <strong>
                  The Club is only for people aged 18 and over.
                </strong>{" "}
                You may not create or use an account if you are under 18, and you
                may not create an account for someone who is.
              </p>
              <p>
                We ask for your date of birth at signup and our database refuses
                to create a profile for anyone under 18, so signup cannot be
                completed and the account cannot be used. That is enforcement of
                the date you give us, not verification of your age — we do not
                check documents. The date of birth is asked for after your phone
                number or email address has been verified, so a refused signup
                leaves a record behind; what happens to it is explained in{" "}
                <Link href="/privacy#children">§14 of the Privacy Policy</Link>.
                If we find out that an account holder is under 18, we close the
                account and delete its data.
              </p>
            </section>

            {/* ── 4 ── */}
            <section id="account">
              <h2>4. Your account</h2>
              <ul>
                <li>
                  <strong>One person, one account.</strong> Your phone number,
                  email address, Google account or Apple account is what
                  identifies you, and each of those can belong to only one Club
                  account.
                </li>
                <li>
                  <strong>Give us information that is true.</strong> Your name,
                  date of birth and the rest of your profile should be accurate,
                  and you should keep them accurate.
                </li>
                <li>
                  <strong>Your username is yours while you hold it.</strong> It
                  must be lowercase letters, numbers and underscores. We may
                  reclaim a username that impersonates someone, infringes a
                  trademark, or is used to abuse other people. If you delete your
                  account, your username goes back into circulation.
                </li>
                <li>
                  <strong>Keep your account to yourself.</strong> Do not share
                  your one-time passwords, your password or your device with
                  someone you would not want posting as you. Tell us at once if
                  you think someone else has access.
                </li>
                <li>
                  <strong>Do not automate or attack the service.</strong> No
                  scraping, no bulk account creation, no attempts to get around
                  rate limits, security controls or the age check, and no
                  reverse-engineering our servers through the app.
                </li>
              </ul>
            </section>

            {/* ── 5 ── */}
            <section id="content">
              <h2>5. Your content</h2>
              <p>
                Anything you post, upload, send or share on The Club is{" "}
                <strong>yours</strong>. We do not claim ownership of it.
              </p>
              <p>
                So that we can actually run the service, you give us a
                non-exclusive, royalty-free, worldwide licence to host, store,
                copy, reformat and display your content — for the purpose of
                operating and improving The Club and showing your content to the
                people you shared it with, and for no other purpose. This licence
                lasts as long as your content is on The Club, and ends when you
                delete the content or your account, except for copies we are
                required by law to keep or that are held in ordinary backups
                until those are cycled out.
              </p>
              <p>
                You are responsible for what you post: you confirm that you have
                the right to post it, and that posting it does not break the law
                or anybody else’s rights.
              </p>
            </section>

            {/* ── 6 ── */}
            <section id="prohibited">
              <h2>6. What you may not post or share</h2>
              <p>
                As the IT Rules 2021 require us to tell you: you must not host,
                display, upload, modify, publish, transmit, store, update or
                share any information that —
              </p>
              <ol>
                <li>
                  belongs to another person and to which you do not have any
                  right;
                </li>
                <li>
                  is obscene, pornographic, paedophilic, invasive of another’s
                  privacy including their bodily privacy, insulting or harassing
                  on the basis of gender, racially or ethnically objectionable,
                  relating to or encouraging money laundering or gambling, or an
                  online game that causes user harm, or promoting enmity between
                  different groups on the grounds of religion or caste with the
                  intent to incite violence;
                </li>
                <li>is harmful to a child;</li>
                <li>
                  infringes any patent, trademark, copyright or other proprietary
                  rights;
                </li>
                <li>
                  deceives or misleads the reader about the origin of the
                  message, or knowingly and intentionally communicates any
                  misinformation, or information which is patently false and
                  untrue or misleading in nature;
                </li>
                <li>impersonates another person;</li>
                <li>
                  threatens the unity, integrity, defence, security or
                  sovereignty of India, friendly relations with foreign States,
                  or public order, or causes incitement to the commission of any
                  cognisable offence, or prevents investigation of any offence,
                  or is insulting to any other nation;
                </li>
                <li>
                  contains a software virus or any other computer code, file or
                  program designed to interrupt, destroy or limit the
                  functionality of any computer resource;
                </li>
                <li>
                  is in the nature of an online game that is not verified as a
                  permissible online game;
                </li>
                <li>
                  is an advertisement or surrogate advertisement or promotion of
                  an online game that is not a permissible online game, or of any
                  online gaming intermediary offering such a game;
                </li>
                <li>violates any law for the time being in force.</li>
              </ol>
              <p>
                Beyond that list, and in plain terms: do not harass people, do
                not post sexual images of anyone without their consent, do not
                post someone else’s private information, and do not use The Club
                to sell or arrange anything illegal.
              </p>
            </section>

            {/* ── 7 ── */}
            <section id="enforcement">
              <h2>7. Removing content, suspending accounts</h2>
              <p>
                If you do not comply with these terms, the Privacy Policy or the
                rules in <a href="#prohibited">§6</a>, we have the right to{" "}
                <strong>
                  remove the content, terminate your access to The Club, or both
                </strong>
                . We will tell you what we removed or why access ended, unless
                telling you would break a law or interfere with an investigation.
              </p>
              <p>
                On receiving a court order, or a notification from an appropriate
                government agency, that information hosted on The Club is
                unlawful, we remove or disable access to it{" "}
                <strong>as soon as possible and within 36 hours</strong>. We
                retain the information and associated records for at least 180
                days for investigation, or longer if a court or agency requires
                it.
              </p>
              <p>
                <strong>At least once every year</strong> we will remind you of
                these terms, the Privacy Policy and the rules for using The Club,
                of any change to them, and that non-compliance can cost you your
                access to the service or your content.
              </p>
              <p>
                You can stop using The Club at any time and delete your account —
                see <Link href="/account-deletion">how to delete your account</Link>.
              </p>
            </section>

            {/* ── 8 ── */}
            <section id="grievance">
              <h2>8. Reporting something, and grievance redressal</h2>
              <p>
                If something on The Club breaks these rules, or you have a
                complaint about the service, tell our Grievance Officer.
              </p>
              <div className="legal-note glass">
                <span className="mono">Grievance Officer</span>
                {LEGAL.grievanceOfficerName ? (
                  <p>
                    <strong>{LEGAL.grievanceOfficerName}</strong> —{" "}
                    {LEGAL.entity}, The Club
                  </p>
                ) : null}
                <p>
                  Email:{" "}
                  <a href={`mailto:${LEGAL.grievanceEmail}`}>
                    {LEGAL.grievanceEmail}
                  </a>
                  <br />
                  Post: {LEGAL.postalAddress}
                </p>
                <p>
                  Tell us who you are, how to reach you, what you are complaining
                  about and where to find it. If you are complaining on behalf of
                  someone else, say so.
                </p>
              </div>
              <p>These are the deadlines we work to:</p>
              <dl className="legal-dl">
                <div>
                  <dt>Within 24 hours</dt>
                  <dd>
                    We acknowledge your complaint. We also act within 24 hours,
                    on a complaint by or on behalf of a person, to remove or
                    disable content that exposes their private area, shows them
                    in full or partial nudity, shows or depicts them in any sexual
                    act or conduct, or impersonates them — including artificially
                    morphed images.
                  </dd>
                </div>
                <div>
                  <dt>Within 72 hours</dt>
                  <dd>
                    We resolve a request to remove content that breaks the rules
                    in <a href="#prohibited">§6</a>, other than items 1, 4 and 11
                    of that list.
                  </dd>
                </div>
                <div>
                  <dt>Within 15 days</dt>
                  <dd>
                    We resolve every other complaint, and tell you what we did.
                  </dd>
                </div>
              </dl>
              <p>
                <strong>If you are not satisfied</strong> with the Grievance
                Officer’s decision — or if we did not answer in time — you can
                appeal to a <strong>Grievance Appellate Committee</strong>{" "}
                constituted by the Central Government under the IT Rules 2021,
                within 30 days of receiving our communication. That does not take
                away any other remedy you have in law.
              </p>
              <p>
                For complaints specifically about your <em>personal data</em>,
                see <Link href="/privacy#grievance">the Privacy Policy</Link>,
                which also explains escalation to the Data Protection Board of
                India.
              </p>
            </section>

            {/* ── 9 ── */}
            <section id="privacy">
              <h2>9. Privacy</h2>
              <p>
                What we collect and what we do with it is set out in the{" "}
                <Link href="/privacy">Privacy Policy</Link>, which forms part of
                this agreement. In short: no advertising, no sale of your data,
                and an itemised list of everything we hold.
              </p>
            </section>

            {/* ── 10 ── */}
            <section id="payments">
              <h2>10. No payments today</h2>
              <p>
                The Club does not take payments. There are no paid features, no
                subscriptions and no bookings you can pay for today, and we hold
                no card, UPI or bank information.
              </p>
              <p>
                Paid bookings are planned. If and when they arrive they will run
                through a licensed payment provider, and these terms will be
                updated with the pricing, cancellation and refund rules{" "}
                <em>before</em> anyone can pay for anything — not afterwards.
              </p>
            </section>

            {/* ── 11 ── */}
            <section id="service">
              <h2>11. Availability, and the limits of what we promise</h2>
              <p>
                The Club is provided <strong>as it is</strong>. We work hard to
                keep it running and correct, but we do not promise it will be
                uninterrupted, error-free, or available at any particular moment.
                We may change, suspend or withdraw features, and we may stop
                offering the service — with reasonable notice where we can give
                it.
              </p>
              <p>
                We are not responsible for what other people post. We are also
                not responsible for loss you suffer because of something outside
                our reasonable control, or for indirect or consequential loss.
              </p>
              <p>
                Nothing in these terms limits any liability that cannot be
                limited under Indian law, including under consumer protection
                law, or your rights as a Data Principal under the DPDP Act.
              </p>
            </section>

            {/* ── 12 ── */}
            <section id="changes">
              <h2>12. Changes to these terms</h2>
              <p>
                We will update these terms as The Club changes, and the effective
                date and version at the top will change with them. Significant
                changes will be notified in the app, and we will remind you of
                these terms at least once a year. Continuing to use The Club after
                a change means you accept the updated terms; if you do not, you
                can delete your account.
              </p>
            </section>

            {/* ── 13 ── */}
            <section id="law">
              <h2>13. Governing law</h2>
              <p>
                These terms are governed by the laws of India. Subject to your
                right to use the grievance and appellate mechanisms described in{" "}
                <a href="#grievance">§8</a>, the courts at Bareilly,
                Uttar Pradesh, India will have jurisdiction over any
                dispute arising out of them.
              </p>
            </section>

            {/* ── 14 ── */}
            <section id="contact">
              <h2>14. Contact</h2>
              <div className="legal-contact">
                <span>
                  <b>Grievances and reports:</b>{" "}
                  <a href={`mailto:${LEGAL.grievanceEmail}`}>
                    {LEGAL.grievanceEmail}
                  </a>
                </span>
                <span>
                  <b>Post:</b> {LEGAL.postalAddress}
                </span>
                <span>
                  <b>Operator:</b> {LEGAL.entity} (CIN {LEGAL.cin}), Bareilly, Uttar Pradesh, India
                </span>
              </div>
              <p>
                See also: <Link href="/privacy">Privacy Policy</Link> ·{" "}
                <Link href="/account-deletion">Delete your account</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
