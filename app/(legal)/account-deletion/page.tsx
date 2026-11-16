import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to delete your account and its data on The Club, a Vighnir product: delete it in the app, or ask by email if you cannot open the app. What is deleted, what is kept and why, and how long each step takes.",
  alternates: { canonical: "/account-deletion" },
};

const TOC = [
  ["in-app", "Delete in the app"],
  ["request", "No app? Ask by email"],
  ["when", "How long it takes"],
  ["deleted", "What is deleted"],
  ["things", "Posts, messages, Pages, payments"],
  ["kept", "What is kept, and why"],
  ["apple", "If you use Sign in with Apple"],
  ["instead", "Alternatives to deleting"],
  ["contact", "Contact and complaints"],
] as const;

export default function AccountDeletion() {
  const subject = encodeURIComponent("Delete my account — The Club");
  const body = encodeURIComponent(
    [
      "I would like my account on The Club deleted, along with the personal data associated with it.",
      "",
      "My username: ",
      "How I sign in (phone, email, Google or Apple): ",
      "The phone number or email address on the account: ",
      "",
      "I understand my account cannot be restored once it is deleted.",
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
            attached to it — in the app in a couple of minutes, or by email if
            you no longer have the app. The Club is operated by Vighnir (OPC)
            Private Limited, Bareilly, India.
          </p>
          <div className="legal-meta mono">
            <span>
              Updated{" "}
              <time dateTime={LEGAL.deletionEffectiveIso}>
                {LEGAL.deletionEffective}
              </time>
            </span>
            <span>Version {LEGAL.deletionVersion}</span>
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
            <section id="in-app">
              <h2>1. Delete in the app</h2>
              <p>
                You can delete your account yourself inside the app. It works
                the same whether you signed in with your{" "}
                <strong>phone number</strong>, your <strong>email</strong>,
                with <strong>Google</strong> or with <strong>Apple</strong>.
              </p>
              <ol>
                <li>
                  Open <strong>The Club</strong> and go to your{" "}
                  <strong>Profile</strong>.
                </li>
                <li>
                  Tap the <strong>⋮</strong> button at the top right (the app
                  calls it <strong>More options</strong>), then{" "}
                  <strong>Settings</strong>.
                </li>
                <li>
                  Scroll to the bottom of Settings. Under{" "}
                  <strong>Log out</strong> you will find{" "}
                  <strong>Delete account</strong>, in red. Tap it.
                </li>
                <li>
                  Read the screen, then tap <strong>Send code</strong>. We send
                  a 6-digit code to the phone number on your account. It proves
                  the phone is yours.
                </li>
                <li>
                  Enter the code and tap <strong>Delete my account</strong>.
                </li>
              </ol>
              <p>
                Every account that has finished signing up has a verified phone
                number, because one is needed to finish, including when you
                sign up with your email, Google or Apple. That number is the one
                the code goes to. If you have lost the phone number or the app, use{" "}
                <a href="#request">§2</a> instead.
              </p>
              <div className="legal-note glass">
                <span className="mono">Before you tap it</span>
                <p>
                  Deleting is <strong>permanent</strong>. There is no undo and
                  no grace period in which to change your mind. Your sign-ins
                  are ended the moment you confirm. A sign-in already open on
                  another phone can keep working for up to 15 minutes, so the
                  deletion itself waits that long (<a href="#when">§3</a>).
                </p>
              </div>
            </section>

            {/* ── 2 ── */}
            <section id="request">
              <h2>2. No app, or cannot sign in? Ask by email</h2>
              <p>
                You do not need the app installed, and you do not need to be
                able to sign in. Email us and one of our team will start the
                deletion for you.
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
                with the subject <strong>“Delete my account — The Club”</strong>{" "}
                and tell us:
              </p>
              <ul>
                <li>
                  your <strong>username</strong> on The Club, if you remember it;
                </li>
                <li>
                  <strong>how you signed in</strong> — phone, email, Google or
                  Apple; and
                </li>
                <li>
                  the <strong>phone number or email address</strong> on the
                  account.
                </li>
              </ul>
              <p>
                We will not delete an account on the word of someone who cannot
                show it is theirs, because that would be a security problem of
                its own. Writing from the email address on your account is the
                simplest proof. If we need more to be sure it is you, we will
                ask you for it by reply, and we ask for nothing beyond what is
                needed. Once we are sure, we start the deletion. It then runs
                the same way as a deletion from the app (<a href="#when">§3</a>
                ).
              </p>
              <p>
                If you started signing up but never finished, there is no
                account to delete. What a half-finished sign-up left behind is
                removed by our daily clean-up, 30 days after the sign-up ended
                by default. Write to us if you want it gone sooner.
              </p>
            </section>

            {/* ── 3 ── */}
            <section id="when">
              <h2>3. How long it takes</h2>
              <dl className="legal-dl">
                <div>
                  <dt>At once</dt>
                  <dd>
                    Your sign-ins are ended and notifications stop, the moment
                    you confirm in the app or we start the deletion for you. A
                    sign-in token already issued to another phone can keep
                    working for up to 15 minutes after that, which is why the
                    deletion below waits.
                  </dd>
                </div>
                <div>
                  <dt>About 20 minutes</dt>
                  <dd>
                    The deletion itself. It starts after a short safety delay
                    of about 16 minutes, so that any sign-in token still open on
                    another phone has expired first. Your profile, posts,
                    messages and the other things in <a href="#deleted">§4</a>{" "}
                    are then removed in a few minutes. If a step has to be
                    retried it can take a little longer.
                  </dd>
                </div>
                <div>
                  <dt>Within 30 days</dt>
                  <dd>
                    Photos and videos are removed from our file storage within
                    30 days. Copies of messages you sent in the 30 days before
                    you deleted are destroyed once each is 30 days old (see{" "}
                    <a href="#things">§5</a>). Your username is held back for
                    30 days, then it is free for anyone.
                  </dd>
                </div>
                <div>
                  <dt>Up to 7 days more</dt>
                  <dd>
                    A deleted account can still sit in a database backup until
                    the backup ages out, which takes 7 days.
                  </dd>
                </div>
                <div>
                  <dt>180 days</dt>
                  <dd>
                    The two things Indian law makes us keep after an account is
                    gone — your registration details and our server logs — and
                    the earlier version of any message you edited or unsent,
                    which our safety team can see for 180 days. See{" "}
                    <a href="#kept">§6</a>.
                  </dd>
                </div>
                <div>
                  <dt>Email requests</dt>
                  <dd>
                    We answer within 30 days of being able to identify you,
                    which is the time our{" "}
                    <Link href="/privacy#rights">Privacy Policy</Link> promises
                    for every request about your data. In practice we start as
                    soon as we are sure it is you.
                  </dd>
                </div>
              </dl>
            </section>

            {/* ── 4 ── */}
            <section id="deleted">
              <h2>4. What is deleted</h2>
              <p>
                Deleting your account removes what The Club holds about you as
                an account holder, including:
              </p>
              <ul>
                <li>
                  your <strong>profile</strong> — display name, date of birth,
                  gender, bio, interests, link, and your location if you gave
                  it;
                </li>
                <li>
                  your <strong>sign-in details</strong> — phone number, email
                  address, and the Google or Apple identifier linked to you (a
                  copy of some of these is kept for 180 days, see{" "}
                  <a href="#kept">§6</a>);
                </li>
                <li>
                  your <strong>username</strong> (held back for 30 days, then
                  free);
                </li>
                <li>
                  your <strong>profile photo</strong>;
                </li>
                <li>
                  your <strong>posts and Minis</strong>, with their pictures
                  and videos, and your <strong>stories</strong> and{" "}
                  <strong>highlights</strong>;
                </li>
                <li>
                  your <strong>comments, likes, saved posts and drafts</strong>;
                </li>
                <li>
                  your <strong>club</strong> (the people connected to you), your
                  blocks, and your Close Friends list;
                </li>
                <li>
                  your <strong>messages</strong>, and the photos and voice notes
                  you sent (see <a href="#things">§5</a> for the copies that
                  stay for a time);
                </li>
                <li>
                  your <strong>Floor persona</strong> and what you posted there;
                </li>
                <li>
                  your <strong>contact matches</strong>, <strong>Nearby</strong>{" "}
                  data, notification settings and delivery records, and your
                  feed memory;
                </li>
                <li>
                  your <strong>face-check record</strong>, including the face
                  code held at AWS, and any host ID document or selfie;
                </li>
                <li>
                  every <strong>sign-in session</strong> and every pending
                  one-time code tied to your phone number or email address.
                </li>
              </ul>
              <p>
                Your account row itself is not erased from the database. It is
                emptied of every personal detail and left as a bare marker, so
                that other people’s chats with you, and the records in{" "}
                <a href="#kept">§6</a>, still have something to point at. It
                carries no name, phone, email, photo or date of birth.
              </p>
              <p>
                <strong>What deletion cannot reach:</strong> copies already on
                other people’s phones, including screenshots and anything they
                saved. People you messaged keep their own messages.
              </p>
            </section>

            {/* ── 5 ── */}
            <section id="things">
              <h2>5. Posts, Minis, stories, messages, Pages and payments</h2>
              <dl className="legal-dl">
                <div>
                  <dt>Posts, Minis and stories</dt>
                  <dd>
                    They disappear from The Club as soon as the deletion runs,
                    and their files are removed from storage within 30 days. A
                    file that is under a legal hold, or that a safety review or
                    a report about it still covers, is kept until that ends.
                    Our safety team can also hold a file it removed for up to
                    180 days, so a decision can be appealed or a legal request
                    answered.
                  </dd>
                </div>
                <div>
                  <dt>Messages</dt>
                  <dd>
                    The people you chatted with keep their own conversation, as
                    a chat with a <strong>“Deleted account”</strong>. Your
                    messages in it show as{" "}
                    <strong>“Message from a deleted account”</strong>, with no
                    words, photos or voice notes. Words and attachments from
                    messages you sent in the 30 days before you deleted are
                    copied first to a store only our safety team can open, and
                    destroyed once each message is 30 days old. Separately,
                    when you edit or unsend a message, the earlier version is
                    held in that same safety-only store for{" "}
                    <strong>180 days</strong> from the edit or unsend, in case
                    it is reported. Deleting your account does not cut that
                    short: a copy already held stays until its own time runs
                    out, then it is destroyed. A message our safety team
                    removed, or a chat under a legal hold or an open report,
                    can be kept longer, until that ends.
                  </dd>
                </div>
                <div>
                  <dt>Pages</dt>
                  <dd>
                    A Page is its own account, separate from yours. Today a
                    Page is run on a brand’s behalf by our team until the brand
                    takes it over. Deleting your personal account does not
                    delete a Page. To have a Page deleted, email{" "}
                    <a href={`mailto:${LEGAL.deletionEmail}`}>
                      {LEGAL.deletionEmail}
                    </a>{" "}
                    and we will confirm who is entitled to ask. A Page is
                    deleted like any other account: its posts, its category and
                    its contact address go.
                  </dd>
                </div>
                <div>
                  <dt>Bookings, payments and receipts</dt>
                  <dd>
                    Any booking that is still open — requested, accepted or
                    confirmed — is cancelled for both people, and anyone who had
                    already paid for it gets the money back in full. If you
                    delete while a paid session is live, that session ends under
                    its own rules instead: if you both had joined, it counts as
                    completed; if you had not joined, it counts as your no-show;
                    if you had joined and the other person had not, it is
                    cancelled and they are refunded in full. Payment
                    records (the orders, refunds and payouts that any receipt
                    or invoice is built from) are <strong>not</strong> deleted,
                    because payment and tax law makes us keep them. Your name,
                    the note you wrote, and a host’s payout account details are
                    removed from them, and the booking is kept under a random reference that no
                    longer points to you. A review you wrote loses its words and
                    your name; only its star rating stays, shown as from a
                    “Deleted account”. We have not set a fixed number of years
                    for these records; we keep them for as long as the law
                    requires. Our payment company, Cashfree, also keeps its own
                    records under its own legal duties (
                    <Link href="/privacy#processors">Privacy §8</Link>).
                  </dd>
                </div>
              </dl>
            </section>

            {/* ── 6 ── */}
            <section id="kept">
              <h2>6. What is kept, and why</h2>
              <p>
                These are the things that stay after an account is deleted,
                each for a stated reason. There is no shadow profile, and your
                data is not kept “for analytics”.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Your registration details — 180 days</dt>
                  <dd>
                    Your phone number, email address, the names of the sign-in
                    methods you used (phone, email, Google, Apple — never your
                    Google or Apple identifier) and the date you signed up. India’s
                    Information Technology (Intermediary Guidelines) Rules,
                    2021 require us to keep registration details for 180 days
                    after an account is cancelled. The copy is locked away,
                    read by nothing in the app, and used only to answer a lawful
                    request. A daily clean-up deletes it after 180 days, unless
                    a legal hold applies. 180 days is our default and the
                    shortest we allow; our officers can lengthen it if a legal
                    reason requires, and then we keep it for that longer time.
                  </dd>
                </div>
                <div>
                  <dt>Server logs — 180 days</dt>
                  <dd>
                    Request logs held in India: the IP address, the time, the
                    address called, the response code, the device’s user-agent,
                    the country and network, and a request identifier. They
                    carry no name or phone number. CERT-In’s direction of 28
                    April 2022 requires 180 days. They survive
                    the deletion of your account and are deleted when they are
                    180 days old. They are used only for security and to answer
                    a lawful request (
                    <Link href="/privacy#retention">Privacy §10</Link>).
                  </dd>
                </div>
                <div>
                  <dt>Earlier versions of edited or unsent messages — 180 days</dt>
                  <dd>
                    When you edit or unsend a message, the earlier text or file
                    is kept for 180 days from that moment, visible only to our
                    safety team, in case someone reports it. Then it is
                    destroyed. Deleting your account does not cut this short
                    or extend it.
                  </dd>
                </div>
                <div>
                  <dt>Records with no personal detail on them</dt>
                  <dd>
                    A few records stay but are kept without your name, phone,
                    email or photo, pointing only at the emptied account marker:
                    the record that a host was checked, the call history shown
                    in the other person’s chat (when it rang, how long it
                    lasted, with no address), and the credential records of a
                    Page our team ran. They are kept for as long as that
                    person’s chat or our safety and legal duties need them.
                  </dd>
                </div>
                <div>
                  <dt>Records of reports and safety decisions</dt>
                  <dd>
                    A report you made about someone else, a report about you,
                    what our team decided, and the audit trail of it, stay,
                    pointing at the emptied account marker rather than at you.
                    They are kept for as long as safety and legal duties
                    require, including statutory reports to the authorities.
                  </dd>
                </div>
                <div>
                  <dt>Anything a law, a court or a legal hold covers</dt>
                  <dd>
                    When we are under a legal order, or a legal hold is placed
                    on your account or on a conversation, whatever it covers
                    is kept until it ends, and only that. Nothing under a hold
                    is deleted, not by you and not by the times in{" "}
                    <a href="#when">§3</a>. If part of your request cannot be
                    carried out for this reason, we will tell you which part and
                    why.
                  </dd>
                </div>
                <div>
                  <dt>Payment, booking and payout records</dt>
                  <dd>
                    Kept as described in <a href="#things">§5</a>, with your
                    name and identifiers removed.
                  </dd>
                </div>
                <div>
                  <dt>A ban fingerprint, only for banned accounts</dt>
                  <dd>
                    If we banned the account for a serious breach of our rules,
                    we keep a one-way fingerprint (a keyed hash, never the phone
                    number, email or ID itself) so the ban cannot be dodged by
                    signing up again. We have not set an end date for it. It is
                    marked as lifted if the ban is lifted.
                  </dd>
                </div>
                <div>
                  <dt>Usage analytics and error reports</dt>
                  <dd>
                    They carry only an internal account id, with no name, phone,
                    email or location, and once your account is deleted the id
                    no longer points to you. Deleting your account does not yet
                    remove them automatically at PostHog or Sentry. If you want
                    them erased too, write to{" "}
                    <a href={`mailto:${LEGAL.privacyEmail}`}>
                      {LEGAL.privacyEmail}
                    </a>{" "}
                    and we will delete them.
                  </dd>
                </div>
                <div>
                  <dt>Your username and Floor name</dt>
                  <dd>
                    Your username is held back for 30 days so that nobody can
                    pretend to be you, and is then free. A Floor name is never
                    given to anyone else.
                  </dd>
                </div>
              </dl>
            </section>

            {/* ── 7 ── */}
            <section id="apple">
              <h2>7. If you use Sign in with Apple</h2>
              <p>
                Sign in with Apple is offered on iPhone. When you delete in the
                app, the app also asks Apple to confirm it is you, with
                Apple’s usual prompt. With that, we tell Apple to unlink The
                Club from your Apple Account. If you decline the prompt, or you
                delete from an Android phone where Apple’s prompt does not
                appear, your account on The Club is still deleted, but we
                cannot ask Apple to unlink it, so unlink it yourself as
                described below.
              </p>
              <p>
                If you ask us by email, or the app could not ask Apple, we
                cannot unlink The Club for you. You can always check and remove
                it yourself: on your iPhone or iPad open <strong>Settings</strong>,
                tap your name, tap <strong>Sign in with Apple</strong>, choose{" "}
                <strong>The Club</strong>, then tap <strong>Delete</strong>
                (on older versions of iOS the button may read{" "}
                <strong>Stop Using Apple ID</strong> or{" "}
                <strong>Stop Using Apple Account</strong>). This is separate from
                the deletion. Either way, once your account is deleted, we no
                longer hold your Apple identifier, and the registration copy in{" "}
                <a href="#kept">§6</a> keeps only the word “apple”.
              </p>
            </section>

            {/* ── 8 ── */}
            <section id="instead">
              <h2>8. If you do not want to delete everything</h2>
              <ul>
                <li>
                  <strong>Change or remove part of your profile.</strong> Your
                  photo, interests and location are optional. Change them in the
                  app, or ask us to remove them and keep the account.
                </li>
                <li>
                  <strong>Delete one thing.</strong> You can delete a single
                  post, Mini or story, unsend a message, or use{" "}
                  <strong>Delete my contact matches</strong> in Settings,
                  without deleting your account.
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

            {/* ── 9 ── */}
            <section id="contact">
              <h2>9. Contact and complaints</h2>
              <div className="legal-contact">
                <span>
                  <b>Deletion requests and privacy questions:</b>{" "}
                  <a href={`mailto:${LEGAL.deletionEmail}`}>
                    {LEGAL.deletionEmail}
                  </a>
                </span>
                <span>
                  <b>Complaints and grievances:</b>{" "}
                  <a href={`mailto:${LEGAL.grievanceEmail}`}>
                    {LEGAL.grievanceEmail}
                  </a>
                </span>
                <span>{LEGAL.grievanceOfficerLine}</span>
                <span>
                  <b>Post:</b> {LEGAL.postalAddress}
                </span>
                <span>
                  <b>App:</b> The Club · <b>Operator:</b> {LEGAL.entity} (CIN{" "}
                  {LEGAL.cin}), Bareilly, Uttar Pradesh, India
                </span>
              </div>
              <p>
                If you are unhappy with how we handled a deletion request, write
                to the grievance address above. We acknowledge a grievance
                within 24 hours and resolve it within 7 days. How to escalate
                further, including to the Data Protection Board of India, is in
                the <Link href="/privacy#grievance">Privacy Policy</Link>.
              </p>
              <p>
                See also: <Link href="/privacy">Privacy Policy</Link> ·{" "}
                <Link href="/terms">Terms of Service</Link> ·{" "}
                <Link href="/support">Support</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
