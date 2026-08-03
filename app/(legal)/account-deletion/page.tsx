import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to delete your account and associated data on The Club, a Vighnir product — how to request it, what is deleted, how long it takes, and the little that is kept because Indian law requires it.",
  alternates: { canonical: "/account-deletion" },
};

const TOC = [
  ["request", "Request deletion"],
  ["in-app", "Deleting in the app"],
  ["identify", "How we identify you"],
  ["when", "How long it takes"],
  ["deleted", "What is deleted"],
  ["kept", "What is kept, and why"],
  ["instead", "Alternatives to deleting"],
  ["contact", "Contact"],
] as const;

export default function AccountDeletion() {
  const subject = encodeURIComponent("Delete my account — The Club");
  const body = encodeURIComponent(
    [
      "I would like my account on The Club deleted, along with the personal data associated with it.",
      "",
      "My username: ",
      "The phone number or email address I signed up with: ",
      "",
      "I understand my username will be released and that this cannot be undone.",
    ].join("\n"),
  );

  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Delete your account</h1>
          <p className="lede">
            How to delete your <strong>The Club</strong> account and the data
            attached to it — operated by Vighnir, Noida, India.
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
            <section id="request">
              <h2>1. Request deletion</h2>
              <p>
                Send us one email and we will delete your account on{" "}
                <strong>The Club</strong> and the personal data associated with
                it. You do not need the app installed, and you do not need to be
                able to sign in.
              </p>
              <a
                className="legal-action glass"
                href={`mailto:${LEGAL.deletionEmail}?subject=${subject}&body=${body}`}
              >
                Email {LEGAL.deletionEmail}
              </a>
              <p>
                If the button does not open your mail app, write to{" "}
                <a href={`mailto:${LEGAL.deletionEmail}`}>
                  {LEGAL.deletionEmail}
                </a>{" "}
                with the subject <strong>“Delete my account — The Club”</strong>,
                and include the details in <a href="#identify">§3</a>.
              </p>
              <div className="legal-note glass">
                <span className="mono">Before you send it</span>
                <p>
                  Deleting is <strong>permanent</strong>. Your account cannot be
                  restored afterwards, and your username is released so that
                  someone else can take it. If you only want to change or remove
                  part of your data, see <a href="#instead">§7</a>.
                </p>
              </div>
            </section>

            {/* ── 2 ── */}
            <section id="in-app">
              <h2>2. Deleting from inside the app</h2>
              <p>
                <strong>
                  The Club has not yet been released on the App Store or Google
                  Play.
                </strong>{" "}
                Deletion from inside the app is being built, and it will be in
                the app from its first release — you will find it in your account
                settings. Until then, and after that as well, the email route
                above works and is carried out by a person.
              </p>
              <p>
                We would rather tell you that than put a screenshot here of a
                button that does not exist yet.
              </p>
            </section>

            {/* ── 3 ── */}
            <section id="identify">
              <h2>3. What we need in order to identify you</h2>
              <p>
                We will not delete an account on the word of someone who cannot
                show it is theirs — that would be its own security problem. Send
                us:
              </p>
              <ul>
                <li>
                  your <strong>username</strong> on The Club, if you know it; and
                </li>
                <li>
                  the <strong>phone number or email address</strong> you signed
                  up with — or, if you used Sign in with Google or Sign in with
                  Apple, which of the two and the email address on that account.
                </li>
              </ul>
              <p>
                Emailing from the address registered on your account is the
                simplest proof. If you signed up with a phone number, we will
                send a one-time password to that number to confirm the request is
                really yours. We ask for nothing beyond what is needed to be sure
                it is you.
              </p>
            </section>

            {/* ── 4 ── */}
            <section id="when">
              <h2>4. How long it takes</h2>
              <dl className="legal-dl">
                <div>
                  <dt>Within 3 working days</dt>
                  <dd>
                    We acknowledge your request, and ask for anything we still
                    need to confirm it is you.
                  </dd>
                </div>
                <div>
                  <dt>Within 30 days</dt>
                  <dd>
                    Your account and the data listed in <a href="#deleted">§5</a>{" "}
                    are deleted, and we confirm it to you in writing. In practice
                    it is normally much sooner; 30 days is the outside limit,
                    including the time for the deletion to work through backups.
                  </dd>
                </div>
                <div>
                  <dt>180 days</dt>
                  <dd>
                    The maximum life of the server logs described in{" "}
                    <a href="#kept">§6</a>, which we are legally required to keep
                    for that long.
                  </dd>
                </div>
              </dl>
            </section>

            {/* ── 5 ── */}
            <section id="deleted">
              <h2>5. What gets deleted</h2>
              <p>
                Everything The Club holds about you as an account holder,
                specifically:
              </p>
              <ul>
                <li>
                  your <strong>account record</strong> — display name, date of
                  birth, gender, interests, and your location if you gave it
                  (city, country and coordinates);
                </li>
                <li>
                  your <strong>sign-in identifiers</strong> — phone number, email
                  address, and the Google or Apple account identifier linked to
                  you;
                </li>
                <li>
                  your <strong>password</strong>, if you had one (we only ever
                  held a hash of it);
                </li>
                <li>
                  your <strong>username</strong>, which is released back into
                  circulation for anyone else to claim;
                </li>
                <li>
                  your <strong>profile photo</strong>, deleted from our media
                  storage;
                </li>
                <li>
                  every <strong>session and refresh token</strong>, so every
                  device is signed out;
                </li>
                <li>
                  any <strong>pending verification records</strong> — one-time
                  passwords, verification and rate-limit rows tied to your phone
                  number or email address;
                </li>
                <li>
                  anything you have posted on The Club, once the features that
                  let you post exist.
                </li>
              </ul>
              <p>
                Where you used <strong>Sign in with Apple</strong>, breaking the
                link with your Apple ID is part of the deletion: we revoke the
                token Apple issued for The Club. Sign in with Apple is not in a
                released build yet — see <a href="#in-app">§2</a> — so this
                applies from the first release onwards.
              </p>
            </section>

            {/* ── 6 ── */}
            <section id="kept">
              <h2>6. What we keep, and for how long</h2>
              <p>
                Two narrow exceptions, both because a law requires them. We are
                listing them rather than quietly relying on them.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Server request logs — 180 days</dt>
                  <dd>
                    Records of requests made to our servers: IP address, user
                    agent, timestamp, the path called and a request identifier.
                    CERT-In’s direction of 28 April 2022 requires providers to
                    keep ICT system logs for a rolling 180 days within Indian
                    jurisdiction. These logs are not searchable by name and are
                    used only for security and to answer a lawful request. They
                    are deleted when they are 180 days old.
                  </dd>
                </div>
                <div>
                  <dt>Anything a law or a court requires</dt>
                  <dd>
                    Where we are under a legal obligation — for example, an order
                    to preserve information for an investigation — we keep only
                    what the obligation covers, for only as long as it lasts, and
                    we do not use it for anything else.
                  </dd>
                </div>
              </dl>
              <p>
                Nothing else is kept. We do not retain a shadow profile, we do
                not keep your data “for analytics”, and we do not pass anything
                to an advertiser — there are none.
              </p>
            </section>

            {/* ── 7 ── */}
            <section id="instead">
              <h2>7. If you do not want to delete everything</h2>
              <ul>
                <li>
                  <strong>Change or remove part of your profile.</strong> Your
                  photo, interests and location are optional — ask us to remove
                  them and keep the account.
                </li>
                <li>
                  <strong>Correct something that is wrong.</strong> You have the
                  right to have inaccurate data corrected and incomplete data
                  completed — see{" "}
                  <Link href="/privacy#rights">your rights</Link>.
                </li>
                <li>
                  <strong>Ask for a copy of your data</strong> before you delete
                  it. Write to{" "}
                  <a href={`mailto:${LEGAL.privacyEmail}`}>
                    {LEGAL.privacyEmail}
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* ── 8 ── */}
            <section id="contact">
              <h2>8. Contact</h2>
              <div className="legal-contact">
                <span>
                  <b>Deletion requests:</b>{" "}
                  <a href={`mailto:${LEGAL.deletionEmail}`}>
                    {LEGAL.deletionEmail}
                  </a>
                </span>
                <span>
                  <b>Post:</b> {LEGAL.postalAddress}
                </span>
                <span>
                  <b>App:</b> The Club · <b>Operator:</b> {LEGAL.entity}, Noida,
                  Uttar Pradesh, India
                </span>
              </div>
              <p>
                If you are unhappy with how we handled a deletion request, our
                grievance process and how to escalate it are in the{" "}
                <Link href="/privacy#grievance">Privacy Policy</Link>.
              </p>
              <p>
                See also: <Link href="/privacy">Privacy Policy</Link> ·{" "}
                <Link href="/terms">Terms of Service</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
