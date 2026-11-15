import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

/*
 * W2-HOST-HUB (bookings G9), branch host-terms/2026-11-15. The host terms and undertaking the app's host application
 * links to (Review step, "Read the host terms"). Drafted from the published Terms (Terms of Service) and the flow-5 host
 * rules (the app repo's docs/flows/0005/host-terms-draft.md, owner draft 2026-11-07), with payment described as the
 * product ships it (Cashfree collects, D-338: no host-UPI).
 *
 * 🔴 DARK. Not on main, not in the sitemap, not in the footer. The privacy-page pattern (D-347): a reviewer checks this
 * page against the code and the published Terms, THEN the owner merges this branch to main (the site ships on push),
 * THEN the app's HOST_TERMS_PUBLISHED flag is flipped (features/hosts/applyCopy.ts) in an OTA batch.
 *
 * REVIEWER CHECKLIST (each item is something this page cannot settle by itself):
 *  1. Terms of Service section 10 says "No payments today" and "no bookings you can pay for". Hosts and paid bookings
 *     contradict that sentence, so section 10 must be revised BEFORE this page and the bookings go live (Terms section
 *     10 itself promises to be updated before anyone can pay).
 *  2. Every number below that the app shows from live settings is written as a description, not a value, EXCEPT the
 *     ones the owner's draft fixed as defaults and the app currently enforces: 3 strikes in 90 days, 10 minutes to join,
 *     72 hours to open a dispute, 30 days to delete recordings and ID images, up to 3 categories. Check each against the
 *     admin settings and the code before publishing.
 *  3. The fee is not stated as a number: the draft left the commission to the owner. The page says the fee is shown in
 *     the app before the host submits and before each booking. Confirm that is true of the Book and Review screens.
 *  4. Tax wording is left generic (the draft's "to be set after the CA's answer").
 *  5. The Grievance Officer is the neutral line from lib/legal.ts (D-223): no personal name on a public page.
 *  6. Retention of booking and payment records: the draft's "[8 years]" is not stated; the page says "as long as the
 *     law requires". Confirm with the accountant.
 */

export const metadata: Metadata = {
  title: "Host terms",
  description:
    "The terms for hosting paid online sessions on The Club: who can host, online only, recorded voice and video sessions, your listing, payment, cancellations and strikes, your ID check, reviews, and what we may do.",
  alternates: { canonical: "/host-terms" },
  robots: { index: false, follow: false },
};

const TOC = [
  ["who", "Who can host"],
  ["online", "Online only"],
  ["recording", "Recorded sessions"],
  ["listing", "Your listing"],
  ["offer", "What you may offer"],
  ["payment", "Prices and payment"],
  ["cancel", "Cancellations and strikes"],
  ["id", "Your ID check and data"],
  ["reviews", "Reviews"],
  ["conduct", "Conduct"],
  ["undertaking", "The undertaking"],
] as const;

export default function HostTerms() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Host terms</h1>
          <p className="lede">
            What you agree to when you apply to offer paid, online 1:1
            sessions on The Club. These terms sit alongside the{" "}
            <Link href="/terms">Terms of Service</Link>, the{" "}
            <Link href="/community-rules">Community rules</Link> and the{" "}
            <Link href="/privacy">Privacy Policy</Link>; where they differ for
            hosting, these host terms apply.
          </p>
          <div className="legal-meta mono">
            <span>Draft for review</span>
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
            <section id="who">
              <h2>1. Who can host</h2>
              <ul>
                <li>
                  You are <strong>18 or older</strong>, and the date of birth
                  on your Club account is yours.
                </li>
                <li>
                  You give your real legal name and one real government ID. An
                  officer checks it by eye (see section 8).
                </li>
                <li>One host profile per person.</li>
              </ul>
            </section>

            <section id="online">
              <h2>2. Online only</h2>
              <ul>
                <li>
                  Sessions happen <strong>inside The Club</strong>, as chat,
                  voice or video. <strong>No in-person meetings</strong>, and
                  no taking the person to another app, number or platform to
                  hold the session.
                </li>
                <li>
                  You do not ask for, or give, a phone number, address, social
                  handle or payment detail to move a client outside The Club.
                </li>
              </ul>
            </section>

            <section id="recording">
              <h2>3. Voice and video sessions are recorded</h2>
              <ul>
                <li>
                  Voice and video sessions are <strong>recorded for safety</strong>.
                  A recording mark shows on both phones the whole time.
                </li>
                <li>
                  Only The Club&rsquo;s safety team can open a recording, and
                  only if someone reports the session or opens a dispute. Each
                  opening is logged. Recordings are never offered for download
                  and are deleted <strong>30 days</strong> after the session,
                  unless a dispute or a legal hold keeps them.
                </li>
                <li>
                  Chat sessions are not recorded as audio or video. Photos,
                  videos and voice notes in the booking chat are scanned for
                  safety, and chat text gets a simple word check and reports.
                </li>
                <li>
                  Screenshots of booking and payment screens come out blank on
                  your phone and the client&rsquo;s.
                </li>
                <li>
                  You must not record the session yourself or share any part
                  of it.
                </li>
              </ul>
            </section>

            <section id="listing">
              <h2>4. Your listing must be true</h2>
              <ul>
                <li>
                  Everything in your listing (headline, bio, categories,
                  languages, prices, photo) is accurate and yours to say. Do not
                  claim qualifications, results or experience you do not have.
                </li>
                <li>
                  The price you set for 30 minutes is the price the client
                  pays; the client sees one all-in price. Prices stay inside
                  the limits shown in the app.
                </li>
                <li>
                  You keep your hours and time off up to date. A paused,
                  suspended or delisted host cannot be booked.
                </li>
                <li>
                  You answer a client&rsquo;s complaint, sent through our
                  Grievance Officer, within the time given to you.{" "}
                  {LEGAL.grievanceOfficerLine}. Write to{" "}
                  <a href={`mailto:${LEGAL.grievanceEmail}`}>
                    {LEGAL.grievanceEmail}
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section id="offer">
              <h2>5. What you may offer</h2>
              <p>
                You choose up to three categories from the list shown in the
                app. The list is managed by us and may change.
              </p>
              <p>
                <strong>Not allowed, in any category:</strong>
              </p>
              <ul>
                <li>
                  dating, flirting, &ldquo;girlfriend / boyfriend
                  experience&rdquo;, companionship for money, or
                  appearance-led offers;
                </li>
                <li>
                  medical, legal or financial advice, or anything presented as
                  a regulated profession&rsquo;s service;
                </li>
                <li>
                  anything unlawful, sexual, hateful or threatening, or that
                  asks the client for more than the session&rsquo;s price;
                </li>
                <li>selling something else under cover of a session.</li>
              </ul>
              <p>
                <strong>Talk and listen (non-clinical)</strong> has extra
                rules:
              </p>
              <ul>
                <li>
                  You are a friendly listener, <strong>not a therapist or
                  counsellor</strong>. The Book screen says so. Your headline
                  and bio may not claim therapy, counselling, diagnosis,
                  treatment or a clinical title.
                </li>
                <li>
                  No romance or companionship framing. A confirmed report of it
                  pauses your hosting at the first one.
                </li>
                <li>
                  If a person seems to be in crisis or at risk of harming
                  themselves, you point them to the support options shown in
                  the app and end the session. You confirm this in your
                  application.
                </li>
                <li>We can switch this category off at any time.</li>
              </ul>
            </section>

            <section id="payment">
              <h2>6. Prices, payment and our fee</h2>
              <ul>
                <li>
                  Clients pay through The Club&rsquo;s payment partner,{" "}
                  <strong>Cashfree</strong>. The Club does not ask clients to
                  pay you directly, and you must not ask for payment outside
                  The Club.
                </li>
                <li>
                  Your share is held until the session ends and the dispute
                  window closes, then paid out to the account you set up with
                  the payment partner. A refund that is due under section 7
                  comes out of that held share. The partner&rsquo;s identity and
                  account checks apply to your payouts.
                </li>
                <li>
                  The Club&rsquo;s fee is shown to you in the app before you
                  submit your application and before each booking.
                </li>
                <li>
                  You are responsible for your own taxes on what you earn. The
                  Club records each host&rsquo;s earnings per financial year,
                  and whether a PAN is on file, so these can be worked out.
                </li>
              </ul>
            </section>

            <section id="cancel">
              <h2>7. Cancellations, no-shows and strikes</h2>
              <p>
                These are the defaults. The app shows the rules that apply to
                a booking before it is accepted.
              </p>
              <ul>
                <li>
                  <strong>The client cancels</strong> at least 24 hours before:
                  the client gets 100% back. Between 24 and 2 hours before:
                  50% back and you keep 50%. Under 2 hours before, or the
                  client does not join: nothing back and you keep your share.
                </li>
                <li>
                  <strong>You cancel</strong> at any time: the client gets 100%
                  back and you get a strike.
                </li>
                <li>
                  You do not join within <strong>10 minutes</strong> of the
                  start: the client gets 100% back and you get a strike.
                  Neither of you joins: 100% back and no strike.
                </li>
                <li>
                  A dispute is decided by an officer, who can decide any
                  amount, with the reason recorded.
                </li>
                <li>
                  <strong>Three strikes in 90 days</strong> pause your hosting
                  until an officer reviews it.
                </li>
                <li>
                  Sessions are 30, 60 or 90 minutes. There are no extensions:
                  another slot is a new booking.
                </li>
                <li>
                  Disputes are opened within 72 hours of the scheduled end. We
                  acknowledge within 48 hours and aim to resolve within a
                  month.
                </li>
              </ul>
            </section>

            <section id="id">
              <h2>8. Your ID check and your data</h2>
              <ul>
                <li>
                  You upload one government ID (PAN, driving licence, passport,
                  voter ID, or a <strong>masked</strong> Aadhaar) and a live
                  selfie.
                </li>
                <li>
                  Only an officer sees them, through a short-lived link, and
                  each opening is logged. They are never shown to anyone else.
                </li>
                <li>
                  The images are deleted <strong>30 days</strong> after the
                  decision. We keep the ID type, the decision, who decided and
                  when.
                </li>
                <li>
                  Deleting your account removes your host profile, offers,
                  hours and any ID images still held. By law we must keep the
                  booking and payment records for as long as the law requires,
                  with your name removed. See the{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </li>
              </ul>
            </section>

            <section id="reviews">
              <h2>9. Reviews and ratings</h2>
              <p>
                Only the client who completed a session can review it, once,
                within 14 days. You may reply once. &ldquo;New host&rdquo;
                shows until you have three reviews. You may report a review;
                you may not ask for, buy or trade reviews.
              </p>
            </section>

            <section id="conduct">
              <h2>10. Conduct, and what we may do</h2>
              <ul>
                <li>
                  Be respectful, show up, keep to the time, and never pressure
                  a client for tips, extras or off-platform payment.
                </li>
                <li>
                  We may pause, suspend or remove your listing, cancel
                  sessions and refund clients if a rule here is broken, if a
                  report is upheld, or for safety.
                </li>
                <li>
                  You may leave at any time; sessions already booked must be
                  honoured or cancelled under section 7.
                </li>
              </ul>
            </section>

            <section id="undertaking">
              <h2>11. The undertaking</h2>
              <p>When you tick the boxes to submit your application, you confirm that:</p>
              <ol>
                <li>
                  You are 18 or older and the information and ID you gave are
                  yours and true.
                </li>
                <li>Your listing is true and you will keep it true.</li>
                <li>
                  You understand every voice and video session is recorded for
                  safety, and you agree to it.
                </li>
                <li>
                  You will not offer any service listed as not allowed in
                  section 5 and, if you host &ldquo;Talk and listen
                  (non-clinical)&rdquo;, you will not present yourself as a
                  therapist or counsellor and you will point anyone in crisis
                  to the support options in the app and end the session.
                </li>
                <li>
                  You will hold sessions only inside The Club and will not move
                  clients to other platforms or payments.
                </li>
                <li>You have read and accept these host terms.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
