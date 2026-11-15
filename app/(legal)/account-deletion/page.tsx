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
            attached to it — operated by Vighnir (OPC) Private Limited, Bareilly, India.
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
                From its first release you can delete your account yourself inside the app:{" "}
                <strong>Settings → Account → Delete account</strong>. A code is
                sent to the phone number on your account, so an account with no
                verified phone number has to add one first. Once you enter the
                code you are signed out on every device and the deletion starts
                about 16 minutes later, once any sign-in already issued has
                expired. There is no undo. The email route above works as well,
                before and after the release, and is carried out by a person.
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
                    are deleted, and we confirm it to you in writing. In practice it is normally
                    much sooner; 30 days is the outside limit. Database backups are kept 7 days,
                    so a deleted account can still sit in a backup until it ages out (§6).
                  </dd>
                </div>
                <div>
                  <dt>180 days</dt>
                  <dd>
                    The life of the server-log archive described in <a href="#kept">§6</a>,
                    which Indian law requires. Those records are not removed when you delete
                    your account.
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
                  your <strong>username</strong>, which is reserved for 30 days so nobody can
                  pretend to be you, and is free after that;
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
                  your <strong>posts, Minis, stories, drafts and comments</strong>, your
                  likes, saves and hides, and the files behind them, which leave
                  storage within 30 days;
                </li>
                <li>
                  your <strong>club</strong>: who you club, your requests, blocks
                  and Close Friends, and your matches from contact sync;
                </li>
                <li>
                  your <strong>Floor</strong> identity, which is retired (the name stays
                  reserved so nobody else can take it), your face code at AWS (deleted first),
                  and your <strong>notification settings and push tokens</strong>;
                </li>
                <li>
                  your <strong>messages</strong>: each one you sent is unsent, so
                  its text is gone for the other person too. The chat stays on
                  their side and is closed to new messages. The earlier text of
                  an edited or unsent message is kept for 30 days, visible only
                  to our safety team, then destroyed. Photos and voice notes you
                  sent in chats leave storage on the same 30-day footing
                </li>
              </ul>
              <p>
                Where you used <strong>Sign in with Apple</strong>, breaking the
                link with your Apple ID is part of the deletion: we revoke the
                token Apple issued for The Club. This applies from the first release onwards
                (<a href="#in-app">§2</a>).
              </p>
            </section>

            {/* ── 6 ── */}
            <section id="kept">
              <h2>6. What we keep, and for how long</h2>
              <p>
                Narrow exceptions, listed rather than quietly relied on. The full table is
                in <Link href="/privacy#retention">Privacy §10</Link>.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Server request logs — 180 days</dt>
                  <dd>
                    CERT-In’s direction of 28 April 2022 requires providers to keep ICT
                    system logs — IP address, user agent, timestamp, the path
                    called and a request identifier — for a rolling 180 days
                    within Indian jurisdiction. We keep them in India (Mumbai).
                    Those records survive the deletion of your account and are
                    erased when they are 180 days old. They are not searchable by
                    name and are used only for security and to answer a lawful
                    request.
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
                <div>
                  <dt>A signup that never finished</dt>
                  <dd>
                    If you verified a phone number or email address and signup
                    then stopped — most often because the 18+ check refused the
                    date of birth you gave — the verification record has no
                    profile, no username and no usable account behind it. It is
                    swept after 30 days. If you want it gone sooner, email us as
                    in <a href="#request">§1</a> and a person deletes it.
                  </dd>
                </div>
                <div>
                  <dt>Database backups — 7 days</dt>
                  <dd>
                    Backups of our database are kept for 7 days and then
                    discarded. A deleted account can still sit in a backup until
                    that backup ages out. We do not restore a backup to bring a
                    deleted account back.
                  </dd>
                </div>
                <div>
                  <dt>Booking, payment and payout records</dt>
                  <dd>
                    If you booked or hosted a paid session, the payment record
                    stays, with your name and identifiers removed, because the
                    law requires us to keep it, including for tax. The words of a
                    review you wrote are removed; the star rating stays.
                  </dd>
                </div>
                <div>
                  <dt>Reports and safety decisions</dt>
                  <dd>
                    Reports about other people, and our decisions on them, stay
                    after you leave, for as long as safety and legal duties
                    require. A message or file our safety team removed can be
                    kept for up to 180 days so a decision can be appealed or a
                    legal request answered.
                  </dd>
                </div>
                <div>
                  <dt>Usage analytics and error reports</dt>
                  <dd>
                    They carry only an internal account id, with no name, phone,
                    email or location. Deleting your account does not yet remove
                    them automatically at PostHog or Sentry. If you want them
                    erased too, write to{" "}
                    <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>{" "}
                    and we will delete them.
                  </dd>
                </div>
              </dl>
              <p>
                Beyond those, nothing is kept. We do not retain a shadow profile, and we do
                not pass anything to an advertiser — there are none.
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
                  <b>App:</b> The Club · <b>Operator:</b> {LEGAL.entity} (CIN {LEGAL.cin}), Bareilly, Uttar Pradesh, India
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
