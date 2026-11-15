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
  ["consent", "Why we may use it"],
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
  ["not-yet", "Not switched on yet"],
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
            This is what The Club does with your personal data. It is written
            plainly, and it is limited to what the app actually does.
          </p>
          <div className="legal-meta mono">
            <span>
              Effective{" "}
              <time dateTime={LEGAL.privacyEffectiveIso}>{LEGAL.privacyEffective}</time>
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
                <strong>The Club</strong> is a social app for India. It is built
                and run by <strong>{LEGAL.entity}</strong>, a company with its
                registered office in Bareilly, Uttar Pradesh, India. Under India’s
                Digital Personal Data Protection Act, 2023 (“the DPDP Act”),{" "}
                {LEGAL.entity} is the <em>Data Fiduciary</em> for the personal
                data described here. You are the <em>Data Principal</em>.
              </p>
              <p>
                This policy covers the mobile app <strong>The Club</strong> and
                this website, <strong>vighnir.com</strong>. It does not cover
                Vighnir’s other brands, or anything you reach by leaving the app.
              </p>
              <div className="legal-note glass">
                <span className="mono">What this version describes</span>
                <p>
                  The Club has <strong>not yet been released</strong> on the App
                  Store or Google Play. This policy takes effect with its first
                  release. It describes the app as it is built for that release:
                  posts and Minis, messages, The Floor, Nearby, voice and video
                  calls, and paid bookings with hosts. Where something is decided
                  but not switched on, it is listed in <a href="#not-yet">§17</a>.
                  It is not written as if it were live.
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
                  We collect what the service needs: a way to sign you in (phone,
                  email, Google or Apple), the profile you fill in, a short face
                  check at sign-up, and what you choose to post, send or switch
                  on. Every item is listed in <a href="#collect">§3</a>.
                </li>
                <li>
                  <strong>We do not run ads, and we do not sell your data.</strong>{" "}
                  There is no advertising SDK and no advertising identifier in
                  the app.
                </li>
                <li>
                  <strong>Messages are not end-to-end encrypted.</strong> They are
                  stored on our servers so they can reach the other person. A
                  person on our team opens a message only when it is reported to
                  us or the law requires it. Every such read is logged.
                </li>
                <li>
                  <strong>Calls.</strong> A call goes from phone to phone where
                  possible, so{" "}
                  <strong>the other phone can see your internet (IP) address</strong>.
                  Calls between people in each other’s Club are not recorded.
                  Paid sessions with a host <strong>are recorded</strong> for
                  safety (<a href="#collect">§3</a>).
                </li>
                <li>
                  <strong>Payments.</strong> Cashfree, a licensed payment company,
                  takes the payment. We never see your card number, UPI PIN or
                  bank password.
                </li>
                <li>
                  Your account database is in <strong>India (Mumbai)</strong>.
                  Some live traffic, and the app’s usage analytics, go outside
                  India. <a href="#where">§9</a> says exactly what and where.
                </li>
                <li>
                  You can delete your account inside the app, ask for a copy of
                  your data, or ask us to correct it.{" "}
                  <Link href="/account-deletion">See how</Link>.
                </li>
              </ul>
            </section>

            {/* ── 3 ── */}
            <section id="collect">
              <h2>3. What we collect, and why</h2>
              <p>
                This list is by feature. Each item says what we collect and why.
                Nothing else is collected by the app.
              </p>

              <h3>Signing in</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Phone number</dt>
                  <dd>
                    If you sign up with a phone number. Stored in international
                    (E.164) form. Used to create and identify your account, and to
                    send you a one-time code so we can check the number is yours.
                  </dd>
                </div>
                <div>
                  <dt>Email address</dt>
                  <dd>
                    If you sign up with an email address. Same purpose: to create
                    and identify your account, and to send you a one-time code.
                  </dd>
                </div>
                <div>
                  <dt>No password</dt>
                  <dd>
                    The Club has no passwords. You sign in with a code sent to
                    your phone or email, or with Google or Apple. There is no
                    password of yours for us to hold.
                  </dd>
                </div>
                <div>
                  <dt>One-time codes</dt>
                  <dd>
                    A code is sent by SMS to a phone, or by email. (WhatsApp
                    codes are not switched on yet: <a href="#not-yet">§17</a>.)
                    For an email code we store a hash of the code, when it
                    expires and how many attempts were made. For a phone code,
                    the SMS company holds and checks the code. Either way it is
                    gone in minutes.
                  </dd>
                </div>
                <div>
                  <dt>Google account identifier</dt>
                  <dd>
                    If you use Sign in with Google. See <a href="#google">§6</a>.
                  </dd>
                </div>
                <div>
                  <dt>Apple user identifier</dt>
                  <dd>
                    If you use Sign in with Apple. See <a href="#apple">§7</a>.
                  </dd>
                </div>
                <div>
                  <dt>Genuine-app check</dt>
                  <dd>
                    When you ask for a code, the app can ask your phone to prove
                    it is a genuine copy of The Club on a real device. On iPhone
                    this is Apple App Attest. On Android it is Google Play
                    Integrity. The result only decides how many codes can be
                    requested. It never blocks a sign-in on its own.
                  </dd>
                </div>
              </dl>

              <h3>Your profile</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Name you display and username</dt>
                  <dd>
                    Shown to other people on The Club. Your username is unique
                    and public. Lowercase letters, numbers and underscores.
                  </dd>
                </div>
                <div>
                  <dt>Date of birth</dt>
                  <dd>
                    To enforce the 18+ rule. The rule is enforced by a
                    constraint in the database itself, not only by the app. See{" "}
                    <a href="#children">§14</a>.
                  </dd>
                </div>
                <div>
                  <dt>Gender</dt>
                  <dd>
                    One of male, female or other, as you select it during
                    signup. Kept with your profile.
                  </dd>
                </div>
                <div>
                  <dt>Profile photo and bio</dt>
                  <dd>
                    Optional. Chosen from your photo library or taken with your
                    camera. A new photo is checked by an automated system for
                    content that breaks our rules. The image is stored in
                    Cloudflare R2.
                  </dd>
                </div>
                <div>
                  <dt>Interests</dt>
                  <dd>Optional. A list of topic tags you pick from a fixed set.</dd>
                </div>
                <div>
                  <dt>Location you give at signup</dt>
                  <dd>
                    Optional, and only when you ask for it. You tap “use my
                    location” or search for a place. We store the{" "}
                    <strong>city and the country</strong>, and the latitude and
                    longitude <strong>rounded to two decimal places</strong>{" "}
                    (about a kilometre). We never store your phone’s exact
                    position here. Your city is used to suggest people near you.
                    You can skip this step.
                  </dd>
                </div>
              </dl>

              <h3>Face check at sign-up</h3>
              <dl className="legal-dl">
                <div>
                  <dt>What happens</dt>
                  <dd>
                    To keep The Club to one account per real person, you take a
                    short video selfie. It goes from your phone to Amazon Web
                    Services (Rekognition, in Mumbai). AWS checks that you are a
                    live person and turns your face into a code. You see a
                    consent screen first, and we record the version you agreed to.
                  </dd>
                </div>
                <div>
                  <dt>What we keep</dt>
                  <dd>
                    The face code, and a record that your face was checked. We
                    also keep a record of each attempt, with a rough score band
                    and no raw score. We do not keep your video or photo. We use
                    the code only to check that your face is not already on
                    another account. If a face looks like another account’s, we
                    record that the two accounts look alike. Attempts that never
                    produced a face code are deleted after 7 days.
                  </dd>
                </div>
                <div>
                  <dt>Why</dt>
                  <dd>
                    To stop one person running many accounts, which protects
                    everyone from fake accounts and abuse.
                  </dd>
                </div>
                <div>
                  <dt>Identity check on a look-alike</dt>
                  <dd>
                    If your face looks like another account’s, we plan to ask
                    you to confirm with a government ID through DigiLocker. That
                    step is not open yet. See <a href="#not-yet">§17</a>.
                  </dd>
                </div>
              </dl>

              <h3>Contact sync (optional)</h3>
              <dl className="legal-dl">
                <div>
                  <dt>What is sent</dt>
                  <dd>
                    If you turn on contact sync, the app reads the phone numbers
                    in your address book. It scrambles each one on your phone
                    before anything is sent. A scrambled number can be turned back
                    into the number by anyone who holds the key. So we treat what
                    is sent as phone numbers, not as anonymous data.
                  </dd>
                </div>
                <div>
                  <dt>Why, and what we keep</dt>
                  <dd>
                    To find people you already know on The Club. We keep only the
                    matches. Every number that does not belong to someone on The
                    Club is thrown away in the same request. We also keep a dated
                    record of when you agreed to contact sync and when you
                    withdrew.
                  </dd>
                </div>
                <div>
                  <dt>Turning it off</dt>
                  <dd>
                    In Settings, turn contact sync off or choose{" "}
                    <strong>Delete my contact matches</strong>. You can also take
                    back the contacts permission in your phone’s settings.
                  </dd>
                </div>
              </dl>

              <h3>What you post</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Posts, Minis, stories and comments</dt>
                  <dd>
                    The photos, short videos (Minis), captions and comments you
                    post, and what you add to them, such as a place tag or a label
                    that a Mini was made or changed with AI. They are shown to the
                    audience you choose. Location and device details inside a
                    Mini’s video are removed on your phone before upload. If a
                    video carries content credentials (a record of how it was
                    made), we keep that record with it.
                  </dd>
                </div>
                <div>
                  <dt>Automated safety checks</dt>
                  <dd>
                    A new post or Mini is checked by an automated system for
                    content that breaks our rules before other people can see it.
                    A new comment, and a caption you edit, is shown at once and
                    checked shortly after. If it breaks our rules it is taken
                    down. Something the check is unsure about may be looked at by
                    a person on our team. The checks use AI models that run on
                    Cloudflare. The photo, video or text is sent without your
                    name, username, phone number or location.
                  </dd>
                </div>
                <div>
                  <dt>Known abuse images</dt>
                  <dd>
                    For each image you upload, we make a fingerprint (a hash) on
                    our own servers. We send only that fingerprint, never the
                    image, to the Arachnid Shield service of the Canadian Centre
                    for Child Protection. It tells us whether the fingerprint
                    matches known child sexual abuse material. We do this to
                    meet our legal duty to keep that material off The Club.
                  </dd>
                </div>
              </dl>

              <h3>Messages</h3>
              <dl className="legal-dl">
                <div>
                  <dt>What is stored</dt>
                  <dd>
                    Your direct messages, including the chat that comes with a
                    paid booking: text, photos, videos, voice notes and
                    reactions. They are stored on our servers so they can be
                    delivered and shown to you and the person you are talking to.
                    Our servers can read them:{" "}
                    <strong>messages are not end-to-end encrypted</strong>.
                  </dd>
                </div>
                <div>
                  <dt>Edits and unsends</dt>
                  <dd>
                    You can edit a message for 15 minutes and unsend it. When you
                    edit or unsend, the earlier text or the unsent message is
                    kept for <strong>30 days</strong>, visible only to our safety
                    team, in case it is reported. Then it is destroyed.
                  </dd>
                </div>
                <div>
                  <dt>Photos and voice notes in chats</dt>
                  <dd>
                    Kept in private storage. The app reaches them only through
                    links that expire. In the chat of a paid booking, every photo
                    and voice note is checked by an automated system when it is
                    sent. In other chats, a photo or voice note is checked only
                    if someone reports it.
                  </dd>
                </div>
                <div>
                  <dt>When we read a message</dt>
                  <dd>
                    Only when it has been reported to us, or when the law requires
                    it. Every time a person on our team opens a message, that is
                    written to a log that cannot be changed or deleted.
                  </dd>
                </div>
              </dl>

              <h3>The Floor</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Your Floor name</dt>
                  <dd>
                    In The Floor’s anonymous rooms you appear under a Floor name
                    and picture. Other people see only that name and picture. It
                    is linked to your account on our side.{" "}
                    <strong>
                      Our safety team can see who you are if you are reported, or
                      if the law requires it.
                    </strong>{" "}
                    Your Floor name is permanent for your account.
                  </dd>
                </div>
                <div>
                  <dt>Floor messages</dt>
                  <dd>
                    The Floor is text only. Every message passes a filter before
                    anyone sees it. Links, phone numbers and a list of words are
                    refused. A room keeps its messages for{" "}
                    <strong>24 hours</strong>. A reported message is copied, with
                    a few lines before it, for our safety team. It is checked by
                    an AI model within seconds, and by a person when the model is
                    unsure.
                  </dd>
                </div>
              </dl>

              <h3>Calls</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Who can call you</dt>
                  <dd>
                    Only people who are in your Club while you are in theirs, and
                    never someone who has blocked you or whom you have blocked.
                  </dd>
                </div>
                <div>
                  <dt>How a call travels</dt>
                  <dd>
                    A voice or video call goes{" "}
                    <strong>directly from phone to phone</strong> where possible.{" "}
                    <strong>
                      The other person’s phone can then see your internet (IP)
                      address.
                    </strong>{" "}
                    Only when a direct connection fails is the call relayed
                    through Cloudflare. The sound and picture are encrypted in
                    transit either way.
                  </dd>
                </div>
                <div>
                  <dt>Calls between people in each other’s Club</dt>
                  <dd>
                    We do not record them, and nothing on our servers receives
                    their sound or picture.
                  </dd>
                </div>
                <div>
                  <dt>Paid sessions with a host</dt>
                  <dd>
                    A voice or video session you book is{" "}
                    <strong>recorded for safety</strong>. A red “Recording”
                    marker shows on the call screen while it runs. The recording
                    is kept in private storage and is not played back by default.
                    A person on our safety team can play it only for a dispute or
                    a report on that booking, and every playback is logged.
                    Screenshots of the call screen are blocked.
                  </dd>
                </div>
                <div>
                  <dt>The call record</dt>
                  <dd>
                    For each call we keep who called whom, when, whether it was
                    voice or video, how it ended, how long it lasted, and whether
                    it went directly or through the relay. We use it to show your
                    call history and to keep calls working. We never keep the
                    network details the two phones exchange to connect.
                  </dd>
                </div>
              </dl>

              <h3>Notifications</h3>
              <dl className="legal-dl">
                <div>
                  <dt>What your lock screen shows</dt>
                  <dd>
                    By default a message notification shows the sender’s name and
                    a preview. For each chat you can choose name only, hide the
                    notification’s content, or mute it.
                  </dd>
                </div>
                <div>
                  <dt>How it reaches your phone</dt>
                  <dd>
                    The notification, including any preview, passes through
                    Apple’s push service (iPhone) or Google’s Firebase Cloud
                    Messaging (Android). To send it we keep a push token for your
                    device, and a delivery record that holds a scrambled key,
                    never the message in clear.
                  </dd>
                </div>
              </dl>

              <h3>Activity status, read receipts and typing</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Activity status</dt>
                  <dd>
                    Shows people you chat with roughly when you were last active,
                    such as “Active 5m ago”, for at most 24 hours. It is your
                    choice in Settings. It works both ways: if you hide yours,
                    you cannot see anyone else’s.
                  </dd>
                </div>
                <div>
                  <dt>Read receipts</dt>
                  <dd>
                    Show the other person that you have seen their message. A
                    separate switch in Settings. It also works both ways.
                  </dd>
                </div>
                <div>
                  <dt>Typing</dt>
                  <dd>
                    “Typing…” and being online are passed to the other person
                    live and are <strong>never stored</strong>.
                  </dd>
                </div>
              </dl>

              <h3>Bookings and payments</h3>
              <dl className="legal-dl">
                <div>
                  <dt>Booking record</dt>
                  <dd>
                    Who booked whom, when, the price, the tax amounts and the
                    booking’s status. We keep it so the session can take place
                    and be paid for, cancelled or refunded. Reviews and disputes
                    are kept with it.
                  </dd>
                </div>
                <div>
                  <dt>Paying (clients)</dt>
                  <dd>
                    You pay on Cashfree’s payment page, with the method you choose there. We
                    send Cashfree the amount, an order number, and your phone
                    number. Cashfree gives us back the payment status. We keep
                    the order, the payment reference, the amount, and whether it
                    went through or was refunded.{" "}
                    <strong>
                      We never see your card number, UPI PIN or bank password.
                    </strong>
                  </dd>
                </div>
                <div>
                  <dt>Getting paid (hosts)</dt>
                  <dd>
                    To pay you out, we send Cashfree your legal name, PAN, email
                    address, phone number and your bank account number and IFSC
                    (or a UPI ID). Cashfree checks them. We keep only the last 4
                    characters of your PAN and bank account, and a masked UPI ID.
                    We also keep a record of each payout.
                  </dd>
                </div>
                <div>
                  <dt>If you apply to host</dt>
                  <dd>
                    A photo of an identity document and a live selfie, so a
                    person on our team can check that you are who you say you are.
                    Your application also carries your legal name and the date of
                    birth you gave at signup. The images are kept in private
                    storage and used only for that check.
                  </dd>
                </div>
                <div>
                  <dt>What other people see</dt>
                  <dd>
                    The name a person who books a session with you sees is your
                    display name and username.
                  </dd>
                </div>
              </dl>

              <h3>Nearby (optional)</h3>
              <dl className="legal-dl">
                <div>
                  <dt>What it uses</dt>
                  <dd>
                    <strong>Off until you switch it on.</strong> While it is on,
                    your phone sends its location when you open Nearby. Our server
                    turns it into an area about a kilometre across and{" "}
                    <strong>throws the exact point away</strong>. No coordinate is
                    stored for Nearby. Your area is shown to other Nearby users
                    for a short time and then deleted. Switching Nearby off
                    deletes it at once. To catch faked locations we keep a flag
                    for 30 days when a location looks wrong. We also keep which
                    areas you were in on a day, with no time and no count. If you
                    agree to the separate daily summaries, we keep the last day
                    you were near each person.
                  </dd>
                </div>
              </dl>

              <h3>How your feeds are ordered</h3>
              <p>
                Your Home feed and your Minis are personalised from how you use
                them. We use what you watch, for how long, and whether you finish
                or skip a Mini. We use what you like, comment on, save or hide,
                whose profiles you open, and whom you follow. We keep a short
                memory built from this. In Settings you can turn{" "}
                <strong>Personalised feed</strong> off, which deletes what was
                learned and shows a plain order, or choose{" "}
                <strong>Reset my feed</strong>.
              </p>

              <h3>Usage analytics (PostHog)</h3>
              <dl className="legal-dl">
                <div>
                  <dt>What the app sends</dt>
                  <dd>
                    The app sends product analytics to PostHog Inc. in the
                    United States. It records which screen was opened, four
                    named actions (signing up, creating a post, watching a Mini,
                    booking a session), a few plain words such as the kind of
                    post, your device type, app version and language. It
                    identifies you only by your internal account identifier.
                  </dd>
                </div>
                <div>
                  <dt>What it never gets</dt>
                  <dd>
                    Your name, phone number, email address, date of birth or
                    location. Your IP address is discarded and not used to work
                    out where you are. It is never active on the sign-in, phone,
                    code, birth-date, messaging, call or payment screens. It is
                    switched off for an account that is under 18 or held for age
                    reasons.
                  </dd>
                </div>
                <div>
                  <dt>Why</dt>
                  <dd>
                    To see whether the app works and which parts people use, so
                    we can fix and improve it.
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
                    be revoked.
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
                  <dt>Request logs</dt>
                  <dd>
                    For each request your phone makes to our servers we keep the{" "}
                    <strong>
                      IP address and port, the time, the address and path called,
                      the response code, the device’s user-agent string, the
                      country and network it came from, and a request identifier
                    </strong>
                    . We keep them for 180 days in India, because a direction of
                    CERT-In requires it. They are used for security and to answer
                    a lawful request.
                  </dd>
                </div>
                <div>
                  <dt>Crash and error reports</dt>
                  <dd>
                    When the app or our servers hit an error, a report goes first
                    to our own relay, and from there to Sentry. It identifies you
                    only by an internal account id, never your phone number,
                    email address, date of birth or location. Personal details
                    are stripped on your phone and again on our relay.
                  </dd>
                </div>
                <div>
                  <dt>Updates</dt>
                  <dd>
                    The app asks Expo whether a newer version is available. That
                    request carries the app’s build and runtime version, the
                    platform and a device-side identifier.
                  </dd>
                </div>
                <div>
                  <dt>Your consent choices</dt>
                  <dd>
                    For optional features, such as contact sync, Nearby and the
                    face check, we keep a dated record of what you agreed to or
                    withdrew.
                  </dd>
                </div>
              </dl>

              <h3>Camera, microphone and other permissions</h3>
              <p>
                The app asks for your <strong>camera and microphone</strong> only
                when you start something that needs them: a voice or video call, a
                voice note, the face check, or taking a photo or video. It asks
                for your <strong>contacts</strong> only for contact sync. It asks
                for your <strong>photos</strong> so you can choose an image. It
                asks for your <strong>location while the app is open</strong>,
                only when you use the location step or Nearby. On iPhone it uses
                motion data only to improve location accuracy when you share where
                you are, and Face ID only to unlock the sign-in on your device.
                The app never reads your location in the background. It does not
                read your calendar or your SMS inbox.
              </p>
            </section>

            {/* ── 4 ── */}
            <section id="never">
              <h2>4. What we don’t do</h2>
              <p>These are commitments about how the app works today.</p>
              <ul>
                <li>
                  <strong>No advertising.</strong> No ad network, no ad SDK, no
                  advertising identifier, no targeted advertising, no profiling
                  for advertising.
                </li>
                <li>
                  <strong>No sale of personal data</strong>, and no sharing with
                  data brokers or list buyers.
                </li>
                <li>
                  <strong>No analytics in the app except PostHog.</strong> What it
                  collects is in <a href="#collect">§3</a>. The only other
                  outside services the app reports to are Sentry, for crash
                  reports, and Expo, for update checks.
                </li>
                <li>
                  <strong>We do not record calls</strong> between people in each
                  other’s Club, and we cannot hear or see them.
                </li>
                <li>
                  <strong>
                    No person on our team opens your messages unless one is
                    reported to us or the law requires it
                  </strong>
                  , and every such read is logged.
                </li>
                <li>
                  <strong>No card, UPI PIN or bank password.</strong> Payments
                  happen on Cashfree’s page. We never see those.
                </li>
                <li>
                  <strong>No cross-app or cross-site tracking</strong>, on the app
                  or on this website.
                </li>
              </ul>
            </section>

            {/* ── 5 ── */}
            <section id="consent">
              <h2>5. Why we may use your data, and taking your consent back</h2>
              <p>
                We use your personal data on two grounds.
              </p>
              <ul>
                <li>
                  <strong>Your consent.</strong> You give it when you create an
                  account, after being shown this notice. You give it again when
                  you switch on an optional feature: contact sync, Nearby, the
                  face check, location at signup, or a call recording on a paid
                  session you book.
                </li>
                <li>
                  <strong>A legal duty.</strong> Some data we must keep because
                  the law says so. Examples are the request logs (a CERT-In
                  direction), payment and tax records, records of reports and
                  legal requests, and the check against known abuse images.
                  Withdrawing consent does not remove these.
                </li>
              </ul>
              <p>
                <strong>You can withdraw your consent at any time</strong>, and
                it is meant to be as easy to withdraw as it was to give. Delete
                your account in the app, write to{" "}
                <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>,
                or use <Link href="/account-deletion">the deletion page</Link>.
              </p>
              <p>
                Being straight with you about the consequence: your phone number
                or email address <em>is</em> your account. If you withdraw
                consent to us processing it, we cannot keep the account working.
                Withdrawal then means the account is closed and the data deleted
                as described in <a href="#retention">§10</a>. We stop processing
                within a reasonable time of your request.
              </p>
              <p>
                You can also withdraw the optional parts on their own and keep
                the account. Delete your contact matches, switch Nearby off,
                switch Personalised feed off, or ask us to remove your photo, your
                interests or your location.
              </p>
            </section>

            {/* ── 6 ── */}
            <section id="google">
              <h2>6. Google user data</h2>
              <p>
                If you tap <strong>Sign in with Google</strong>, we ask Google for
                three standard, non-sensitive permissions:{" "}
                <strong>openid</strong>, <strong>email</strong> and{" "}
                <strong>profile</strong>. Google then sends our server a signed ID
                token.
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
                    The stable account identifier, linked to your Club account, so
                    we recognise you the next time you sign in. If Google says your
                    email address is verified, we also store that address, so that
                    signing in later with the same email address reaches the same
                    account. We do not store the profile picture from that token,
                    and we do not copy your Google profile into ours.
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
                in the app. We do not transfer it to anyone except as necessary to
                provide that feature, to comply with applicable law, or as part of
                a merger or acquisition after notice to you. We do not use it for
                advertising. We do not allow humans to read it, except with your
                explicit consent, where necessary for security purposes such as
                investigating abuse, or where the law requires it.
              </p>
              <p>
                You can disconnect The Club from your Google account at any time
                in your Google account’s security settings. That stops future
                sign-ins. To remove the data we hold, use{" "}
                <Link href="/account-deletion">account deletion</Link>.
              </p>
            </section>

            {/* ── 7 ── */}
            <section id="apple">
              <h2>7. Sign in with Apple</h2>
              <p>
                If you use <strong>Sign in with Apple</strong>, Apple sends us a
                signed identity token, which our server verifies against Apple’s
                public keys. It contains a stable identifier for your account with
                us, which we store. If the token carries a verified email address
                that is not one of Apple’s private relay addresses, we store that
                address too, so the same email reaches the same account.
              </p>
              <p>
                Apple lets you <strong>hide your email address</strong> and use a
                private relay address instead. The Club works either way, because
                the identifier, not the address, is what we key your account on.
                Apple sends your name only on the very first authorisation. If you
                have not set a display name yet, we use it to fill that in. We
                never overwrite a name you chose.
              </p>
            </section>

            {/* ── 8 ── */}
            <section id="processors">
              <h2>8. Who else processes your data</h2>
              <p>
                We use a small number of service providers. Each receives only
                what it needs to do its job. This is the whole list for the app.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Cloudflare</dt>
                  <dd>
                    Runs our API and stores the photos, videos and voice notes you
                    upload (R2). Runs the servers that carry live messages, typing,
                    being online and call set-up, and the rooms of The Floor.
                    Relays a call when a direct connection fails. Runs the AI
                    models behind the automated safety checks in{" "}
                    <a href="#collect">§3</a>. Sees requests to our API and the
                    media you upload.
                  </dd>
                </div>
                <div>
                  <dt>Amazon Web Services (AWS)</dt>
                  <dd>
                    In Mumbai: hosts the database that holds your account,
                    profile, posts and messages; keeps the request logs; and runs
                    the face check (Rekognition).
                  </dd>
                </div>
                <div>
                  <dt>Cashfree</dt>
                  <dd>
                    An Indian payment company. Takes client payments and pays
                    hosts out. Receives the details in{" "}
                    <a href="#collect">§3</a> under Bookings and payments. It
                    will also run the DigiLocker ID check described in{" "}
                    <a href="#not-yet">§17</a>, when that is switched on.
                  </dd>
                </div>
                <div>
                  <dt>MSG91</dt>
                  <dd>
                    Indian SMS provider, registered under TRAI’s DLT regime.
                    Receives your phone number and the code, to deliver an SMS
                    code. Used for phone signup, sign-in and account deletion.
                  </dd>
                </div>
                <div>
                  <dt>Meta (WhatsApp)</dt>
                  <dd>
                    Once we switch on WhatsApp codes (<a href="#not-yet">§17</a>),
                    Meta’s WhatsApp Business service will receive your phone
                    number and the code. SMS stays the fallback.
                  </dd>
                </div>
                <div>
                  <dt>Zoho ZeptoMail</dt>
                  <dd>
                    Sends the code to your email address, if you sign in with
                    email. Receives your email address and the code.
                  </dd>
                </div>
                <div>
                  <dt>Google</dt>
                  <dd>
                    If you choose Sign in with Google, Google knows you signed in
                    to The Club. On Android, Firebase Cloud Messaging delivers
                    notifications to your phone, and Play Integrity checks that
                    the app is genuine.
                  </dd>
                </div>
                <div>
                  <dt>Apple</dt>
                  <dd>
                    If you choose Sign in with Apple, the same. On iPhone, Apple’s
                    push service delivers notifications and incoming calls, and
                    App Attest checks that the app is genuine.
                  </dd>
                </div>
                <div>
                  <dt>PostHog Inc. (United States)</dt>
                  <dd>
                    Product analytics, as described in <a href="#collect">§3</a>.
                    Also used on this website (<a href="#website">§16</a>).
                  </dd>
                </div>
                <div>
                  <dt>Sentry</dt>
                  <dd>
                    Receives crash and error reports, through our own relay, with
                    personal details stripped. Its servers are in the European
                    Union (Germany).
                  </dd>
                </div>
                <div>
                  <dt>Canadian Centre for Child Protection</dt>
                  <dd>
                    Its Arachnid Shield service receives the fingerprint (hash)
                    of images you upload, never the image. See{" "}
                    <a href="#collect">§3</a>.
                  </dd>
                </div>
                <div>
                  <dt>Expo</dt>
                  <dd>Receives the app’s update check. See <a href="#collect">§3</a>.</dd>
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
                We require any third party we share personal data with, including
                any parent, subsidiary or related company, to protect it to at
                least the standard set out in this policy. We do not give any of
                them permission to use your data for their own purposes.
              </p>

              <h3>Requests from the police, courts and government</h3>
              <p>
                We disclose personal data where Indian law requires it: to a
                court, or to a government agency acting under a lawful order. We
                answer such requests under Indian law and within the time the law
                sets. When a request or an order requires it, we place a{" "}
                <strong>legal hold</strong> on the content it covers. Nothing
                under a hold is deleted, not by you and not by the normal
                deletion times in <a href="#retention">§10</a>, until the hold
                ends.
              </p>
            </section>

            {/* ── 9 ── */}
            <section id="where">
              <h2>9. Where your data is stored, and transfers out of India</h2>
              <p>
                We would rather tell you an unflattering fact than a comfortable
                one.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Account database</dt>
                  <dd>
                    <strong>India: Mumbai</strong> (Amazon Web Services,
                    ap-south-1). Your profile, identifiers, posts, messages, call
                    records, booking and payment records, and session records live
                    there. The database keeps backups for 7 days.
                  </dd>
                </div>
                <div>
                  <dt>Face code</dt>
                  <dd>
                    <strong>India: Mumbai</strong> (AWS Rekognition).
                  </dd>
                </div>
                <div>
                  <dt>Request logs</dt>
                  <dd>
                    <strong>India: Mumbai</strong> (AWS), for 180 days.
                  </dd>
                </div>
                <div>
                  <dt>Photos, videos, voice notes and recordings</dt>
                  <dd>
                    Cloudflare R2, on Cloudflare’s global network. We ask for
                    storage in the Asia-Pacific region, but Cloudflare does not
                    guarantee it and cannot pin it to India. So these files may
                    sit outside India.
                  </dd>
                </div>
                <div>
                  <dt>Live messages, typing and call set-up</dt>
                  <dd>
                    Pass through a Cloudflare server on their way to the other
                    person. Cloudflare has no such servers in India, so today they
                    are in <strong>Singapore or Hong Kong</strong>. They keep no
                    message history. On our side, messages are stored only in the
                    database in Mumbai.
                  </dd>
                </div>
                <div>
                  <dt>The Floor</dt>
                  <dd>
                    A Floor room runs on a Cloudflare server outside India, today
                    in <strong>Singapore or Hong Kong</strong>. It keeps the
                    room’s messages there for up to 24 hours.
                  </dd>
                </div>
                <div>
                  <dt>Calls</dt>
                  <dd>
                    Go directly between the two phones where possible. A relayed
                    call passes through Cloudflare’s relay and nothing of it is
                    stored.
                  </dd>
                </div>
                <div>
                  <dt>API and safety-check models</dt>
                  <dd>
                    Run on Cloudflare at the location nearest to you. Cloudflare
                    does not say where its AI models run.
                  </dd>
                </div>
                <div>
                  <dt>Usage analytics</dt>
                  <dd>
                    <strong>United States</strong> (PostHog).
                  </dd>
                </div>
                <div>
                  <dt>Crash and error reports</dt>
                  <dd>
                    Kept first by our own relay on Cloudflare, then sent to Sentry
                    in the European Union (Germany).
                  </dd>
                </div>
                <div>
                  <dt>Codes, notifications, payments</dt>
                  <dd>
                    MSG91, Zoho, Cashfree and Meta each process them in their own
                    systems. Apple and Google deliver notifications through their
                    own networks, which may be outside India.
                  </dd>
                </div>
              </dl>
              <p>
                Section 16 of the DPDP Act permits personal data to be transferred
                outside India unless the Central Government notifies a particular
                country as restricted. As at the effective date of this policy, no
                such country has been notified, and none of the places above is
                restricted.
              </p>
            </section>

            {/* ── 10 ── */}
            <section id="retention">
              <h2>10. How long we keep things</h2>
              <dl className="legal-dl">
                <div>
                  <dt>Account and profile</dt>
                  <dd>
                    For as long as your account exists. When you delete it in the
                    app, you are signed out everywhere and the deletion starts
                    within about 16 minutes. See{" "}
                    <Link href="/account-deletion">account deletion</Link>.
                  </dd>
                </div>
                <div>
                  <dt>Posts, Minis and comments</dt>
                  <dd>
                    Until you delete them, or your account. Files you delete are
                    removed from storage within 30 days. A file our safety team
                    removed can be held for up to 180 days, so a decision can be
                    appealed or a legal request answered.
                  </dd>
                </div>
                <div>
                  <dt>Messages, and photos and voice notes in chats</dt>
                  <dd>
                    Until they are unsent, or your account is deleted. Deleting a
                    chat removes it from your side only. The other person keeps
                    their copy.
                  </dd>
                </div>
                <div>
                  <dt>Edited, unsent and removed messages</dt>
                  <dd>
                    The earlier text, or the unsent message, is kept for 30 days,
                    visible only to our safety team, then destroyed. A message our
                    safety team removes can be kept for up to 180 days.
                  </dd>
                </div>
                <div>
                  <dt>Floor messages</dt>
                  <dd>
                    24 hours in the room. A reported message is copied out of the
                    room and kept with the report.
                  </dd>
                </div>
                <div>
                  <dt>Call records</dt>
                  <dd>
                    For as long as the chat between the two people exists. The
                    technical events of a call, such as when it rang and when it
                    connected, are deleted after 180 days.
                  </dd>
                </div>
                <div>
                  <dt>Recordings of paid sessions</dt>
                  <dd>
                    30 days, then deleted. A recording is kept longer only while
                    a dispute, a report by one of the two people, a legal hold or
                    a report to the authorities covers it.
                  </dd>
                </div>
                <div>
                  <dt>Activity status</dt>
                  <dd>
                    Only your last active time is kept, and it is overwritten each
                    time. Others see it for at most 24 hours.
                  </dd>
                </div>
                <div>
                  <dt>Nearby</dt>
                  <dd>
                    Your live area is removed soon after it expires, within about
                    an hour. Daily summaries are removed by a daily clean-up.
                    Switching Nearby off deletes them at once.
                  </dd>
                </div>
                <div>
                  <dt>Notification delivery records</dt>
                  <dd>30 days.</dd>
                </div>
                <div>
                  <dt>Contact matches</dt>
                  <dd>
                    Until you use <strong>Delete my contact matches</strong> or
                    delete your account. Numbers that do not match are never kept.
                  </dd>
                </div>
                <div>
                  <dt>Feed memory</dt>
                  <dd>
                    While your account is active. It is deleted if it is not
                    used for 180 days, or when you turn Personalised feed off.
                  </dd>
                </div>
                <div>
                  <dt>Face code and face-check records</dt>
                  <dd>
                    While your account exists. When you delete your account we
                    delete the face code at AWS first. Attempts that never
                    produced a face code are deleted after 7 days.
                  </dd>
                </div>
                <div>
                  <dt>Identity document and selfie (hosts)</dt>
                  <dd>
                    Deleted 30 days after we decide on your application, and
                    never kept longer than 120 days.
                  </dd>
                </div>
                <div>
                  <dt>Booking, payment and payout records</dt>
                  <dd>
                    These stay after your account is deleted, with your name and
                    identifiers removed. The law requires us to keep the payment
                    record, including for tax. We have not set a fixed number of
                    years. A review’s words are removed when you delete your
                    account. Only the star rating stays.
                  </dd>
                </div>
                <div>
                  <dt>Reports, safety decisions and legal requests</dt>
                  <dd>
                    For as long as safety and legal duties require. These records
                    stay after you leave if the law requires it.
                  </dd>
                </div>
                <div>
                  <dt>One-time codes and verification records</dt>
                  <dd>
                    Minutes. They expire and are consumed on use. A sign-up that
                    was never finished, and any spent code or token, is swept
                    after 30 days.
                  </dd>
                </div>
                <div>
                  <dt>Session and refresh tokens</dt>
                  <dd>
                    Until they expire or you sign out. They rotate every time they
                    are used.
                  </dd>
                </div>
                <div>
                  <dt>Request logs</dt>
                  <dd>
                    180 days, then deleted, as CERT-In’s direction of 28 April
                    2022 requires. They survive the deletion of your account.
                  </dd>
                </div>
                <div>
                  <dt>Database backups</dt>
                  <dd>
                    7 days. A deleted account can still sit in a backup until it
                    ages out.
                  </dd>
                </div>
                <div>
                  <dt>Usage analytics and error reports</dt>
                  <dd>
                    They carry only an internal account id, with no name, phone,
                    email or location. Deleting your account does not yet remove
                    them automatically at PostHog or Sentry. Once your account is
                    gone the id no longer points to you. If you want them erased
                    too, write to{" "}
                    <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>
                    {" "}and we will delete them.
                  </dd>
                </div>
                <div>
                  <dt>Your username after you delete your account</dt>
                  <dd>
                    Reserved for 30 days so nobody can pretend to be you, then
                    free. A Floor name is never given to anyone else.
                  </dd>
                </div>
                <div>
                  <dt>Anything the law requires</dt>
                  <dd>
                    Where a law, a court order or a legal hold (
                    <a href="#processors">§8</a>) requires us to keep something
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
                  The sound and picture of a call are encrypted in transit,
                  including when the call is relayed.
                </li>
                <li>
                  One-time codes expire in minutes and allow only a small number
                  of attempts.
                </li>
                <li>
                  Refresh tokens are stored hashed and rotate on every use. If an
                  old one is replayed, the whole family is revoked.
                </li>
                <li>
                  The app never connects to the database. Every request goes
                  through our servers, which check who is asking before they read
                  or write anything.
                </li>
                <li>
                  Every rule that matters is enforced on our servers, not in the
                  app, because an app on someone else’s phone can be modified.
                  That includes the 18+ check, username uniqueness, proof that a
                  phone or email was verified, and who may call whom.
                </li>
                <li>
                  Full PAN, bank account and UPI numbers for payouts pass to
                  Cashfree in a single request. We do not store them.
                </li>
              </ul>
              <p>
                What we will not claim: The Club holds no security certification.
                We are not ISO 27001 certified and not SOC 2 audited. We do not
                describe our storage as encrypted at rest or our messages as
                end-to-end encrypted. No system is perfectly secure. If any of
                that changes, this section changes with it.
              </p>
            </section>

            {/* ── 12 ── */}
            <section id="rights">
              <h2>12. Your rights, and how to use them</h2>
              <p>
                Under the DPDP Act you have the following rights. You can use most
                of them inside the app, in{" "}
                <strong>Settings → Your data and rights</strong>. Or write to{" "}
                <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>{" "}
                from the email address registered on your account. If you signed
                up with a phone number, tell us that number and your username so
                we can identify you.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Access, and a copy (s.11)</dt>
                  <dd>
                    A summary of the personal data we hold about you, what we are
                    doing with it, and who we have shared it with. You can ask for
                    a copy in the app. A person on our team prepares it as an
                    encrypted file and you collect it in the app. The copy
                    currently leaves out the messages you sent and the media you
                    uploaded. You can already see those in the app.
                  </dd>
                </div>
                <div>
                  <dt>Correction and erasure (s.12)</dt>
                  <dd>
                    Have inaccurate data corrected, incomplete data completed,
                    outdated data updated, or your data erased. You can delete
                    your whole account yourself in the app: Settings → Account →
                    Delete account. A code is sent to your phone. Once you enter
                    it you are signed out everywhere and the deletion starts.
                    There is no undo. What deletion cannot reach, and what we must
                    keep, is on{" "}
                    <Link href="/account-deletion">the deletion page</Link>. If
                    you cannot use the app, use that page to ask by email.
                  </dd>
                </div>
                <div>
                  <dt>Withdraw consent (s.6(4))</dt>
                  <dd>
                    At any time, as easily as you gave it. See{" "}
                    <a href="#consent">§5</a>.
                  </dd>
                </div>
                <div>
                  <dt>Nominate (s.14)</dt>
                  <dd>
                    Name someone to exercise these rights on your behalf if you
                    die or become incapacitated. You can do this in the app, or
                    write to us with their name and contact details.
                  </dd>
                </div>
                <div>
                  <dt>Grievance redressal (s.13)</dt>
                  <dd>
                    Complain to us and get an answer. See{" "}
                    <a href="#grievance">§13</a>.
                  </dd>
                </div>
              </dl>
              <p>
                <strong>What deletion cannot reach:</strong> copies already on
                other people’s phones, including screenshots and anything they
                saved. People you messaged keep their own messages.
              </p>
              <p>
                <strong>We answer within 30 days</strong> of being able to
                identify you. If a request would require us to break a law, for
                instance deleting something a court has ordered us to preserve, we
                will tell you which part we could not do, and why.
              </p>
              <p>This notice, and The Club itself, are in English.</p>
            </section>

            {/* ── 13 ── */}
            <section id="grievance">
              <h2>13. Grievances, and how to escalate</h2>
              <p>
                If you are unhappy with anything we do with your personal data, or
                with how we handled a request, complain to us first.
              </p>
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
                <p>
                  We acknowledge a grievance <strong>within 24 hours</strong> and
                  resolve it <strong>within 7 days</strong>. Complaints about
                  content on The Club have shorter deadlines. Those are set out in
                  the <Link href="/terms#grievance">Terms of Service</Link>.
                </p>
              </div>
              <p>
                If we do not answer, or you are not satisfied with our answer, you
                may complain to the <strong>Data Protection Board of India</strong>.
                The DPDP Act asks you to use our grievance process first, which is
                why the contact above exists.
              </p>
            </section>

            {/* ── 14 ── */}
            <section id="children">
              <h2>14. The Club is 18 and over</h2>
              <p>
                Under the DPDP Act, a “child” is anyone under 18. The Club is not
                for children, and we do not knowingly create accounts for them.
              </p>
              <p>
                At signup you give your date of birth. A constraint in our
                database rejects it if it puts you under 18. The check lives in
                the database, not only in the app, so that a modified app cannot
                get around it. We should be clear about what this is:{" "}
                <strong>
                  it is a self-declared date of birth that we enforce, not a
                  verified age
                </strong>
                . The face check at sign-up proves a live person and one account.
                It does not estimate your age.
              </p>
              <p>
                The order matters to you. Signup verifies your phone number or
                email address first, and that step already creates an account
                record holding that number or address. Only afterwards does the
                app ask for your date of birth. So{" "}
                <strong>
                  the constraint refuses the profile, not the record that already
                  exists
                </strong>
                . Someone under 18 gets no name, no username, no date of birth
                stored and no working account. Signup cannot be completed and The
                Club cannot be used. The phone number or email address they
                verified a moment earlier stays on our servers until the
                clean-up that removes unfinished sign-ups (after 30 days). We
                delete it sooner on request.
              </p>
              <p>
                If you are turned away, the app keeps a 30-day wait on your own
                phone. Nothing about it is sent to our servers. You can also
                tick a box to be emailed when you can join. If you do, we keep
                only your email address and that date, send one email, then
                delete both.
              </p>
              <p>
                If you believe a child has signed up, write to{" "}
                <a href={`mailto:${LEGAL.grievanceEmail}`}>
                  {LEGAL.grievanceEmail}
                </a>{" "}
                and we will treat it as urgent. If we learn that a completed
                account belongs to someone under 18, we close it and delete its
                data. Analytics are switched off for an account held for age
                reasons.
              </p>
            </section>

            {/* ── 15 ── */}
            <section id="breach">
              <h2>15. If there is a data breach</h2>
              <p>
                If personal data we hold is breached, we will tell every affected
                person without delay. We will tell you what happened, what data
                was involved and what you should do. We will also inform the Data
                Protection Board of India and report to CERT-In, India’s national
                cyber-incident response team, within the times the law sets.
              </p>
            </section>

            {/* ── 16 ── */}
            <section id="website">
              <h2>16. This website</h2>
              <p>
                vighnir.com uses Vercel Web Analytics and Vercel Speed Insights in
                their default configuration, to count page views and measure how
                quickly pages load. These are cookieless and aggregate. We do not
                use advertising cookies, we do not track you across other sites,
                and we do not build a profile of you from this website.
              </p>
              <p>
                vighnir.com also sends page views to PostHog Inc. (United
                States), to show us how many people visit and which sites send
                them. This is set up without cookies: nothing is stored on your
                device, so the site cannot recognise you from one visit to the
                next, and we do not identify you. PostHog receives the page
                address, the site that referred you, and your browser and device
                type. Your IP address is discarded and not used to locate you. If
                your browser sends a “Do Not Track” signal, nothing is sent.
              </p>
              <p>
                If you email us from the address on this site, we hold that email
                in our mailbox for as long as we need it to deal with what you
                wrote about.
              </p>
            </section>

            {/* ── 17 ── */}
            <section id="not-yet">
              <h2>17. Decided, but not switched on yet</h2>
              <p>
                Written down in advance so that this page is never the last thing
                to find out. None of the following is live on the effective date.
                This policy will be updated in the same release that switches each
                one on.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>ID check through DigiLocker</dt>
                  <dd>
                    If your face looks like another account’s, we plan to ask you
                    to prove who you are with a government ID document (PAN,
                    driving licence, voter ID, passport or Aadhaar) through
                    DigiLocker, run for us by Cashfree. We would not match your
                    face to the ID photo. The app says this step “isn’t open
                    yet” and lets you skip it. When it is on, we will keep only a
                    keyed hash of the document number, to spot the same document
                    on two accounts, and a record of the check. We will not keep
                    an Aadhaar number, its last four digits, a hash of it, or the
                    photo, address, mobile number or name from DigiLocker. Until
                    it is on, a host application needs a photo of an ID and a
                    selfie, as in <a href="#collect">§3</a>. Once it is on, a host
                    whose face was already checked will only need to submit an ID
                    through DigiLocker.
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp codes</dt>
                  <dd>
                    Sending sign-in codes by WhatsApp is built but not yet in
                    use. Until it is, codes come by SMS or email.
                  </dd>
                </div>
              </dl>
            </section>

            {/* ── 18 ── */}
            <section id="changes">
              <h2>18. Changes to this policy</h2>
              <p>
                When we change what we do with personal data, we change this page
                in the same release, and we update the effective date at the top.
                If a change is significant, we will tell you in the app. At least
                every 90 days we will remind you that this policy, the Terms of
                Service and the rules for using The Club exist and where to read
                them.
              </p>
            </section>

            {/* ── 19 ── */}
            <section id="contact">
              <h2>19. Contact</h2>
              <p>
                For anything about your personal data, whether a question, a
                request or a complaint, write to the person responsible for
                answering it:
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
                  <b>Operator:</b> {LEGAL.entity} (CIN {LEGAL.cin}), Bareilly,
                  Uttar Pradesh, India
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
