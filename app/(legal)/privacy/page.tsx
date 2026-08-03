import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Club, a Vighnir product, collects, uses, stores and shares personal data — written to India's DPDP Act 2023, Google Play's user data policy, Apple's App Store guidelines and Google's API Services User Data Policy.",
  alternates: { canonical: "/privacy" },
};

const TOC = [
  ["who", "Who we are"],
  ["short", "The short version"],
  ["collect", "What we collect"],
  ["never", "What we don’t do"],
  ["consent", "Consent & withdrawal"],
  ["google", "Google user data"],
  ["apple", "Sign in with Apple"],
  ["processors", "Who else sees it"],
  ["where", "Where it is stored"],
  ["retention", "How long we keep it"],
  ["security", "Security"],
  ["rights", "Your rights"],
  ["grievance", "Grievances"],
  ["children", "18 and over"],
  ["breach", "If there is a breach"],
  ["website", "This website"],
  ["not-yet", "Not in the app today"],
  ["changes", "Changes"],
  ["contact", "Contact"],
] as const;

export default function PrivacyPolicy() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Privacy Policy</h1>
          <p className="lede">
            This is the whole of what The Club does with your personal data —
            written plainly, and limited to what the app actually does today.
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
            <section id="who">
              <h2>1. Who we are, and what this covers</h2>
              <p>
                <strong>The Club</strong> is a social app for India, built and
                operated by <strong>{LEGAL.entity}</strong>, a founder-led
                business based in Noida, Uttar Pradesh, India. For the purposes
                of India’s Digital Personal Data Protection Act, 2023 (“the DPDP
                Act”), {LEGAL.entity} is the <em>Data Fiduciary</em> for the
                personal data described here, and you are the{" "}
                <em>Data Principal</em>.
              </p>
              <p>
                This policy covers the mobile app <strong>The Club</strong> and
                this website, <strong>vighnir.com</strong>. It does not cover
                Vighnir’s other brands, or anything you reach by leaving the app.
              </p>
              <div className="legal-note glass">
                <span className="mono">Status on the effective date</span>
                <p>
                  The Club has <strong>not yet been released</strong> on the App
                  Store or Google Play. This policy describes the app as it is
                  built today and takes effect for its first release. Where
                  something is decided but not yet shipped, it is listed in{" "}
                  <a href="#not-yet">§17</a> — not written as if it exists.
                </p>
              </div>
            </section>

            {/* ── 2 ── */}
            <section id="short">
              <h2>2. The short version</h2>
              <ul>
                <li>
                  You must be <strong>18 or over</strong> to have an account.
                </li>
                <li>
                  We collect what an account needs: a way to sign you in (phone,
                  email, Google or Apple), and the profile you fill in.
                </li>
                <li>
                  <strong>We do not run ads, and we do not sell your data.</strong>{" "}
                  There is no advertising SDK, no advertising identifier and no
                  data broker anywhere in this product.
                </li>
                <li>
                  <strong>The Club takes no payments today.</strong> There is no
                  card, UPI or bank information in the app or in our database.
                </li>
                <li>
                  Your account database currently sits{" "}
                  <strong>outside India, in Singapore</strong>. We say so plainly
                  in <a href="#where">§9</a> rather than leaving you to guess.
                </li>
                <li>
                  You can ask us for a copy of your data, ask us to correct it,
                  or ask us to delete your account —{" "}
                  <Link href="/account-deletion">see how</Link>.
                </li>
              </ul>
            </section>

            {/* ── 3 ── */}
            <section id="collect">
              <h2>3. What we collect, and why</h2>
              <p>
                Itemised, because the DPDP Rules require an itemised description
                rather than a category blur. Nothing else is collected by the app.
              </p>

              <h3>Signing in</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Phone number</dt>
                  <dd>
                    If you sign up with a phone number. Stored in international
                    (E.164) form. Used to create and identify your account, and
                    to send you a one-time password by SMS so we can prove the
                    number is yours.
                  </dd>
                </div>
                <div>
                  <dt>Email address</dt>
                  <dd>
                    If you sign up with an email address. Same purpose: to create
                    and identify your account, and to send you a one-time
                    password.
                  </dd>
                </div>
                <div>
                  <dt>Password</dt>
                  <dd>
                    Only if you choose email-and-password sign-in. We store a
                    salted, iterated cryptographic hash. We never store, and
                    cannot read, your actual password.
                  </dd>
                </div>
                <div>
                  <dt>One-time passwords</dt>
                  <dd>
                    We store a hash of the code you were sent, when it expires,
                    and how many attempts have been made — so a code cannot be
                    reused or guessed. Minutes, then gone.
                  </dd>
                </div>
                <div>
                  <dt>Google account identifier</dt>
                  <dd>
                    If you use Sign in with Google. See <a href="#google">§6</a>{" "}
                    for exactly what Google sends and what we keep.
                  </dd>
                </div>
                <div>
                  <dt>Apple user identifier</dt>
                  <dd>
                    If you use Sign in with Apple. See <a href="#apple">§7</a>.
                  </dd>
                </div>
              </dl>

              <h3>Your profile</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Name you display</dt>
                  <dd>Shown to other people on The Club.</dd>
                </div>
                <div>
                  <dt>Username</dt>
                  <dd>
                    Unique and public. Lowercase letters, numbers and
                    underscores.
                  </dd>
                </div>
                <div>
                  <dt>Date of birth</dt>
                  <dd>
                    To enforce the 18+ rule. The rule is enforced by a constraint
                    in the database itself, not by the app — see{" "}
                    <a href="#children">§14</a>.
                  </dd>
                </div>
                <div>
                  <dt>Gender</dt>
                  <dd>
                    One of male, female or other, as you select it during signup.
                  </dd>
                </div>
                <div>
                  <dt>Profile photo</dt>
                  <dd>
                    Optional. Chosen from your photo library — the app does not
                    request camera or microphone access. The image is stored in
                    Cloudflare R2 and the app holds only its address.
                  </dd>
                </div>
                <div>
                  <dt>Interests</dt>
                  <dd>Optional. A list of topic tags you pick from a fixed set.</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>
                    Optional, and only when you ask for it — by tapping “use my
                    location” or by searching for a place. We store the{" "}
                    <strong>city, the country, and the latitude and longitude</strong>{" "}
                    to six decimal places. Those coordinates are precise, so we
                    say so rather than calling this “city-level”. You can skip
                    this step, and the app never reads your location in the
                    background.
                  </dd>
                </div>
              </dl>

              <h3>Technical data, created by using the service</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Session records</dt>
                  <dd>
                    A hashed refresh token per signed-in device, with issue and
                    expiry times, so you stay signed in and so a stolen token can
                    be revoked. Email sign-in additionally records the IP address
                    and browser/device user-agent string of the request.
                  </dd>
                </div>
                <div>
                  <dt>Rate-limit counters</dt>
                  <dd>
                    Short-lived counts keyed to your phone number, email address
                    or account id, so nobody can spend our SMS budget or brute
                    force a code.
                  </dd>
                </div>
                <div>
                  <dt>Server request logs</dt>
                  <dd>
                    IP address, user agent, timestamp, the path called and a
                    request identifier. Kept for 180 days — see{" "}
                    <a href="#retention">§10</a>.
                  </dd>
                </div>
              </dl>

              <h3>What we do not ask for</h3>
              <p>
                The app does not read your contacts, calendar, SMS inbox,
                microphone or camera. It asks for exactly two permissions: access
                to your photos, so you can pick a profile picture, and location{" "}
                <strong>while the app is open</strong>, only if you use the
                location step. It never reads your location in the background.
              </p>
            </section>

            {/* ── 4 ── */}
            <section id="never">
              <h2>4. What we don’t do</h2>
              <p>
                These are commitments about the code as it stands, not
                aspirations:
              </p>
              <ul>
                <li>
                  <strong>No advertising.</strong> No ad network, no ad SDK, no
                  advertising identifier, no targeted advertising, no
                  profiling for advertising.
                </li>
                <li>
                  <strong>No sale of personal data</strong>, and no sharing with
                  data brokers or list buyers.
                </li>
                <li>
                  <strong>No analytics or crash-reporting SDK in the app
                  today.</strong> There is no analytics package in the app at
                  all. We intend to add crash reporting before release and have
                  described it in advance in <a href="#not-yet">§17</a>.
                </li>
                <li>
                  <strong>No payments.</strong> The Club does not process
                  payments and holds no payment data.
                </li>
                <li>
                  <strong>No cross-app or cross-site tracking</strong>, on the
                  app or on this website.
                </li>
              </ul>
            </section>

            {/* ── 5 ── */}
            <section id="consent">
              <h2>5. Your consent, and taking it back</h2>
              <p>
                We process your personal data on the basis of the{" "}
                <strong>consent</strong> you give when you create an account,
                after being shown this notice. Some processing is also necessary
                to comply with law — the server logs in{" "}
                <a href="#retention">§10</a> are kept because a CERT-In direction
                requires it, not because you agreed to it.
              </p>
              <p>
                <strong>You can withdraw your consent at any time</strong>, and
                it is meant to be as easy to withdraw as it was to give. Write to{" "}
                <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>{" "}
                or use <Link href="/account-deletion">the deletion page</Link>.
              </p>
              <p>
                Being straight with you about the consequence: your phone number
                or email address <em>is</em> your account. If you withdraw
                consent to us processing it, we cannot keep the account working,
                so withdrawal means the account is closed and the data deleted as
                described in <a href="#retention">§10</a>. The DPDP Act puts the
                consequences of a withdrawal on you, and this is that consequence.
                We stop processing within a reasonable time of your request.
              </p>
              <p>
                You can also withdraw the optional parts on their own — ask us
                to remove your photo, your interests or your location — and keep
                the account.
              </p>
            </section>

            {/* ── 6 ── */}
            <section id="google">
              <h2>6. Google user data</h2>
              <p>
                If you tap <strong>Sign in with Google</strong>, we ask Google
                for three standard, non-sensitive permissions:{" "}
                <strong>openid</strong>, <strong>email</strong> and{" "}
                <strong>profile</strong>. Google then sends our server a signed
                ID token.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>What Google sends us</dt>
                  <dd>
                    A stable identifier for your Google account, your email
                    address, whether Google has verified that address, and basic
                    profile information.
                  </dd>
                </div>
                <div>
                  <dt>What we store</dt>
                  <dd>
                    Only the stable account identifier, linked to your Club
                    account, so we recognise you the next time you sign in. We do
                    not store the email address or the profile picture from that
                    token, and we do not copy your Google profile into ours.
                  </dd>
                </div>
                <div>
                  <dt>What we do with it</dt>
                  <dd>
                    Authenticate you. Nothing else. It is not used for
                    advertising, not sold, and not shared.
                  </dd>
                </div>
              </dl>
              <p>
                <strong>Limited Use.</strong> The Club’s use of information
                received from Google APIs adheres to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google API Services User Data Policy
                </a>
                , including its Limited Use requirements. Concretely: we use
                Google user data only to provide the sign-in feature you can see
                in the app; we do not transfer it to anyone except as necessary
                to provide that feature, to comply with applicable law, or as
                part of a merger or acquisition after notice to you; we do not
                use it for advertising; and we do not allow humans to read it,
                except with your explicit consent, where necessary for security
                purposes such as investigating abuse, or where the law requires
                it.
              </p>
              <p>
                You can disconnect The Club from your Google account at any time
                in your Google account’s security settings. That stops future
                sign-ins; to remove the data we hold, use{" "}
                <Link href="/account-deletion">account deletion</Link>.
              </p>
            </section>

            {/* ── 7 ── */}
            <section id="apple">
              <h2>7. Sign in with Apple</h2>
              <p>
                If you use <strong>Sign in with Apple</strong>, Apple sends us a
                signed identity token, which our server verifies against Apple’s
                public keys. It contains a stable identifier for your account
                with us. We store that identifier and nothing else from the
                token.
              </p>
              <p>
                Apple lets you <strong>hide your email address</strong> and use a
                private relay address instead; The Club works either way, because
                the identifier — not the address — is what we key your account
                on. Apple sends your name only on the very first authorisation;
                if you have not set a display name yet, we use it to fill that in,
                and we never overwrite a name you chose.
              </p>
            </section>

            {/* ── 8 ── */}
            <section id="processors">
              <h2>8. Who else processes your data</h2>
              <p>
                We use a small number of service providers. Each receives only
                what it needs to do its job.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Cloudflare</dt>
                  <dd>
                    Runs our API at the network edge and stores profile photos
                    (Cloudflare R2). Sees requests to our API and the images you
                    upload.
                  </dd>
                </div>
                <div>
                  <dt>Neon</dt>
                  <dd>
                    Managed PostgreSQL — the database that holds your account and
                    profile. Currently hosted in Singapore; see{" "}
                    <a href="#where">§9</a>.
                  </dd>
                </div>
                <div>
                  <dt>MSG91</dt>
                  <dd>
                    Indian SMS provider, registered under TRAI’s DLT regime.
                    Receives your phone number and the one-time password text, in
                    order to deliver the SMS. Used only for phone signup and
                    sign-in.
                  </dd>
                </div>
                <div>
                  <dt>Google</dt>
                  <dd>
                    Only if you choose Sign in with Google. Google knows you
                    signed in to The Club.
                  </dd>
                </div>
                <div>
                  <dt>Apple</dt>
                  <dd>Only if you choose Sign in with Apple. Same.</dd>
                </div>
                <div>
                  <dt>Amazon Web Services</dt>
                  <dd>
                    Mumbai region (ap-south-1). Where the 180-day server log
                    archive required by CERT-In is kept.
                  </dd>
                </div>
                <div>
                  <dt>Vercel</dt>
                  <dd>
                    Hosts this website, vighnir.com. Not part of the app. See{" "}
                    <a href="#website">§16</a>.
                  </dd>
                </div>
              </dl>
              <p>
                We require any third party we share personal data with —
                including any parent, subsidiary or related company — to protect
                it to at least the standard set out in this policy. We do not
                give any of them permission to use your data for their own
                purposes.
              </p>
              <p>
                We may also disclose personal data where we are legally required
                to: to a court, or to a government agency acting under a lawful
                order.
              </p>
            </section>

            {/* ── 9 ── */}
            <section id="where">
              <h2>9. Where your data is stored, and transfers out of India</h2>
              <p>
                We would rather tell you an unflattering fact than a comfortable
                one:
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Account database</dt>
                  <dd>
                    <strong>Singapore</strong> (Neon, ap-southeast-1) today. Your
                    profile, identifiers, username and session records live
                    there. Moving it to Mumbai is planned; this page will change
                    on the day it moves, not before.
                  </dd>
                </div>
                <div>
                  <dt>Profile photos</dt>
                  <dd>Cloudflare R2, on Cloudflare’s global network.</dd>
                </div>
                <div>
                  <dt>API</dt>
                  <dd>
                    Cloudflare Workers, executed at the Cloudflare location
                    nearest to you.
                  </dd>
                </div>
                <div>
                  <dt>Server logs</dt>
                  <dd>India — AWS Mumbai (ap-south-1).</dd>
                </div>
              </dl>
              <p>
                Section 16 of the DPDP Act permits personal data to be
                transferred outside India unless the Central Government notifies
                a particular country as restricted. As at the effective date of
                this policy, no such country has been notified, and none of the
                places above is restricted.
              </p>
            </section>

            {/* ── 10 ── */}
            <section id="retention">
              <h2>10. How long we keep things</h2>
              <dl className="legal-dl">
                <div>
                  <dt>Account and profile</dt>
                  <dd>
                    For as long as your account exists. If you delete it, see{" "}
                    <Link href="/account-deletion">account deletion</Link> — the
                    data is removed within 30 days.
                  </dd>
                </div>
                <div>
                  <dt>One-time passwords and verification records</dt>
                  <dd>
                    Minutes. They expire, are consumed on use, and expired rows
                    are swept.
                  </dd>
                </div>
                <div>
                  <dt>Session and refresh tokens</dt>
                  <dd>
                    Until they expire or you sign out. They rotate every time
                    they are used.
                  </dd>
                </div>
                <div>
                  <dt>Server request logs</dt>
                  <dd>
                    <strong>180 days, then deleted.</strong> CERT-In’s direction
                    of 28 April 2022 requires providers to keep ICT system logs
                    for a rolling 180 days within Indian jurisdiction. This is
                    why some technical data about your requests survives the
                    deletion of your account.
                  </dd>
                </div>
                <div>
                  <dt>Anything the law requires</dt>
                  <dd>
                    Where a law or a court order requires us to keep something
                    for longer, we keep only that, for only as long as required.
                  </dd>
                </div>
              </dl>
              <p>
                Beyond those cases, we erase personal data once you withdraw
                consent or once it is reasonable to conclude the purpose we
                collected it for is no longer being served.
              </p>
            </section>

            {/* ── 11 ── */}
            <section id="security">
              <h2>11. Security</h2>
              <ul>
                <li>
                  Everything travels over <strong>HTTPS/TLS</strong>. All data
                  the app sends or receives is encrypted in transit.
                </li>
                <li>
                  Passwords are stored as <strong>salted, iterated hashes</strong>{" "}
                  — never in a readable form.
                </li>
                <li>
                  One-time passwords are stored as hashes, expire in minutes and
                  allow only a small number of attempts.
                </li>
                <li>
                  Refresh tokens are stored hashed and rotate on every use; if an
                  old one is replayed, the whole family is revoked.
                </li>
                <li>
                  The database enforces access with{" "}
                  <strong>row-level security</strong>: a signed-in device can
                  read and write its own row and no one else’s, and that is
                  enforced by the database rather than by the app.
                </li>
                <li>
                  Every rule that matters — the 18+ check, username uniqueness,
                  proof that a phone or email was actually verified — is enforced
                  on our servers, not in the app, because an app on someone
                  else’s phone can be modified.
                </li>
              </ul>
              <p>
                What we will not claim: The Club holds no security
                certification. We are not ISO 27001 certified, not SOC 2 audited,
                and we do not describe our storage as encrypted at rest or our
                messaging as end-to-end encrypted. No system is perfectly secure.
                If any of that changes, this section changes with it.
              </p>
            </section>

            {/* ── 12 ── */}
            <section id="rights">
              <h2>12. Your rights, and how to use them</h2>
              <p>
                Under the DPDP Act you have the following rights. To use any of
                them, write to{" "}
                <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>{" "}
                from the email address registered on your account, or — if you
                signed up with a phone number — tell us that number and your
                username so we can identify you.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Access (s.11)</dt>
                  <dd>
                    A summary of the personal data we hold about you, what we are
                    doing with it, and who we have shared it with.
                  </dd>
                </div>
                <div>
                  <dt>Correction and erasure (s.12)</dt>
                  <dd>
                    Have inaccurate data corrected, incomplete data completed,
                    outdated data updated, or your data erased. Write to us and
                    we will do it.
                  </dd>
                </div>
                <div>
                  <dt>Withdraw consent (s.6(4))</dt>
                  <dd>
                    At any time, as easily as you gave it — see{" "}
                    <a href="#consent">§5</a>.
                  </dd>
                </div>
                <div>
                  <dt>Nominate (s.14)</dt>
                  <dd>
                    Name someone to exercise these rights on your behalf if you
                    die or become incapacitated. Write to us with their name and
                    contact details.
                  </dd>
                </div>
                <div>
                  <dt>Grievance redressal (s.13)</dt>
                  <dd>
                    Complain to us and get an answer — see{" "}
                    <a href="#grievance">§13</a>.
                  </dd>
                </div>
              </dl>
              <p>
                <strong>We answer within 30 days</strong> of being able to
                identify you. If a request would require us to break a law — for
                instance, deleting a log we are required to keep for 180 days —
                we will tell you which part we could not do, and why.
              </p>
              <p>
                Today this notice is published in English. If you would prefer it
                in Hindi or another language listed in the Eighth Schedule to the
                Constitution of India, write to us and we will provide it.
              </p>
            </section>

            {/* ── 13 ── */}
            <section id="grievance">
              <h2>13. Grievances, and how to escalate</h2>
              <p>
                If you are unhappy with anything we do with your personal data,
                or with how we handled a request, complain to us first.
              </p>
              <div className="legal-note glass">
                <span className="mono">Grievance contact</span>
                {LEGAL.grievanceOfficerName ? (
                  <p>
                    <strong>{LEGAL.grievanceOfficerName}</strong> — Grievance
                    Officer, {LEGAL.entity}
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
                  We acknowledge a grievance{" "}
                  <strong>within 24 hours</strong> and resolve it{" "}
                  <strong>within 15 days</strong>. Complaints about content on
                  The Club have shorter deadlines — those are set out in the{" "}
                  <Link href="/terms#grievance">Terms of Service</Link>.
                </p>
              </div>
              <p>
                If we do not answer, or you are not satisfied with our answer,
                you may complain to the <strong>Data Protection Board of
                India</strong>. The DPDP Act asks you to exhaust our grievance
                process first, which is why the contact above exists.
              </p>
            </section>

            {/* ── 14 ── */}
            <section id="children">
              <h2>14. The Club is 18 and over</h2>
              <p>
                Under the DPDP Act, a “child” is anyone under 18. The Club is not
                for children and we do not knowingly create accounts for them.
              </p>
              <p>
                At signup you give your date of birth, and a constraint in our
                database rejects any account for someone under 18 — the check
                lives in the database rather than in the app precisely so that a
                modified app cannot get around it. We should be clear about what
                this is:{" "}
                <strong>
                  it is a self-declared date of birth that we enforce, not a
                  verified age
                </strong>
                . We do not run identity or document checks.
              </p>
              <p>
                If we learn that an account belongs to someone under 18, we close
                it and delete its data. If you believe a child has an account,
                write to{" "}
                <a href={`mailto:${LEGAL.grievanceEmail}`}>
                  {LEGAL.grievanceEmail}
                </a>
                .
              </p>
            </section>

            {/* ── 15 ── */}
            <section id="breach">
              <h2>15. If there is a data breach</h2>
              <p>
                If personal data we hold is breached, the DPDP Act requires us to
                inform the Data Protection Board of India and every affected
                person. We will do that, and we will tell you what happened, what
                data was involved and what you should do — as soon as we have
                facts worth sending rather than a placeholder. We are not going
                to promise a specific number of hours we cannot guarantee to meet.
              </p>
            </section>

            {/* ── 16 ── */}
            <section id="website">
              <h2>16. This website</h2>
              <p>
                vighnir.com uses Vercel Web Analytics and Vercel Speed Insights
                in their default configuration, to count page views and measure
                how quickly pages load. These are cookieless and aggregate. We do
                not use advertising cookies, we do not track you across other
                sites, and we do not build a profile of you from this website.
              </p>
              <p>
                If you email us from the address on this site, we hold that email
                in our mailbox for as long as we need it to deal with what you
                wrote about.
              </p>
            </section>

            {/* ── 17 ── */}
            <section id="not-yet">
              <h2>17. Decided, but not in the app today</h2>
              <p>
                Written down in advance so that this page is never the last thing
                to find out. None of the following is in the product on the
                effective date, and this policy will be updated in the same
                release that ships each one.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Crash and error reporting</dt>
                  <dd>
                    We intend to add crash and error reporting before public
                    release, using Sentry, hosted in the European Union
                    (Frankfurt). When it ships it will identify you only by an
                    internal account identifier — never a phone number, email
                    address, date of birth or location — and personal data will
                    be stripped before an error report leaves your device and
                    again on our servers.
                  </dd>
                </div>
                <div>
                  <dt>In-app account deletion</dt>
                  <dd>
                    Deleting your account from inside the app is being built and
                    will be there for the first store release. Until then, the
                    email route on{" "}
                    <Link href="/account-deletion">the deletion page</Link> is the
                    way, and it is a real process a person carries out.
                  </dd>
                </div>
                <div>
                  <dt>The India log archive</dt>
                  <dd>
                    The 180-day server-log retention described in{" "}
                    <a href="#retention">§10</a> is being set up in AWS Mumbai
                    before public release.
                  </dd>
                </div>
                <div>
                  <dt>Payments</dt>
                  <dd>
                    Paid bookings are part of the plan for The Club and would run
                    through a licensed payment aggregator. Nothing about payments
                    exists today, and we hold no payment data of any kind.
                  </dd>
                </div>
                <div>
                  <dt>Moving the database to India</dt>
                  <dd>
                    Planned. <a href="#where">§9</a> will change when it happens.
                  </dd>
                </div>
              </dl>
            </section>

            {/* ── 18 ── */}
            <section id="changes">
              <h2>18. Changes to this policy</h2>
              <p>
                When we change what we do with personal data, we change this page
                in the same release, and we update the effective date and version
                at the top. If a change is significant, we will tell you in the
                app. At least once a year we will remind you that this policy,
                the Terms of Service and the rules for using The Club exist and
                where to read them.
              </p>
            </section>

            {/* ── 19 ── */}
            <section id="contact">
              <h2>19. Contact</h2>
              <p>
                For anything about your personal data — a question, a request, a
                complaint — write to the person responsible for answering it:
              </p>
              <div className="legal-contact">
                <span>
                  <b>Privacy contact:</b>{" "}
                  <a href={`mailto:${LEGAL.privacyEmail}`}>
                    {LEGAL.privacyEmail}
                  </a>
                </span>
                <span>
                  <b>Post:</b> {LEGAL.postalAddress}
                </span>
                <span>
                  <b>Operator:</b> {LEGAL.entity}, Noida, Uttar Pradesh, India
                </span>
              </div>
              <p>
                See also: <Link href="/terms">Terms of Service</Link> ·{" "}
                <Link href="/account-deletion">Delete your account</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
