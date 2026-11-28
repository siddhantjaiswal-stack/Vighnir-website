import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Screens";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Safety and trust",
  description:
    "How The Club keeps people safe: adults only with a date-of-birth check, a face check for one person one account, safety checks before posts are shown, verified hosts, recorded sessions, reporting, blocking, appeals, grievance redressal and data protection.",
  alternates: { canonical: "/safety" },
};

export default function Safety() {
  return (
    <main>
      <PageHero
        eyebrow="Safety and trust"
        title="Safety is built into every part of The Club."
        lede="Here is exactly what we do, and where the limits are. We would rather tell you what a check does not do than let you assume it does more."
      />

      <section className="section" aria-labelledby="who-title">
        <div className="wrap">
          <p className="eyebrow">Who is on The Club</p>
          <h2 className="h2" id="who-title" style={{ marginTop: 12 }}>Adults, one account each.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card">
              <Icon name="id" />
              <h3 className="h3">18 and over only</h3>
              <p>You must be 18 or over to use The Club. We ask for your date of birth at sign-up and our database refuses to create an account for anyone under 18. This checks the date you give us; it does not check documents. If we find an account holder is under 18, we close the account and delete its data.</p>
            </div>
            <div className="card">
              <Icon name="scan" />
              <h3 className="h3">One person, one account</h3>
              <p>A short live face video at sign-up stops one person running many accounts. It is checked by Amazon Rekognition in Mumbai, with Amazon’s use of the data for its own AI turned off. We keep only a face code, never the video or a photo. It is not an identity or age check.</p>
            </div>
            <div className="card">
              <Icon name="shield" />
              <h3 className="h3">Verified hosts</h3>
              <p>Every host gives their legal name, a photo of one government ID and a live selfie. A person on our team checks them before the host page goes live, and the photos are deleted 30 days after the decision. Hosts agree to host terms and can be paused or removed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="mod-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Moderation</p>
            <h2 className="h2" id="mod-title" style={{ marginTop: 12 }}>Checked before anyone else sees it.</h2>
            <div className="prose">
              <ul>
                <li><strong>Posts, Minis, Stories and profile photos</strong> pass automated safety checks before other people can see them. Captions are held until they are checked.</li>
                <li><strong>Comments and edited captions</strong> are checked within seconds of being posted.</li>
                <li>When a check is unsure, a person on our safety team looks at it.</li>
                <li>Uploads are matched against databases of known child sexual abuse material run by independent child-protection organisations. Only a digital fingerprint is compared, never the image itself.</li>
                <li>The checks run on AI models on Cloudflare’s network. What is checked is sent without your name, phone number or location.</li>
                <li>The Floor’s live rooms have a word filter, and every message can be reported.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone kind="safety" caption="Reporting a post" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="report-title">
        <div className="wrap">
          <p className="eyebrow">Reporting</p>
          <h2 className="h2" id="report-title" style={{ marginTop: 12 }}>You are in control of who reaches you.</h2>
          <div className="grid g4" style={{ marginTop: 28 }}>
            <div className="card"><Icon name="flag" /><h3 className="h3">Report</h3><p>Report a post, Mini, story, comment, message, chat, profile, Floor message, host, session or review from inside the app.</p></div>
            <div className="card"><Icon name="ban" /><h3 className="h3">Block</h3><p>Blocking hides you from each other and freezes your chat, both ways.</p></div>
            <div className="card"><Icon name="lock" /><h3 className="h3">Restrict and mute</h3><p>Quietly limit someone without blocking them, or mute what they post.</p></div>
            <div className="card"><Icon name="doc" /><h3 className="h3">Appeal</h3><p>If we remove your content or limit how far a post reaches, you can appeal in the app.</p></div>
          </div>
          <div className="note">
            <b>If you are struggling</b>
            <p>
              The Club’s “Talk and listen” hosts offer peer support, not therapy
              or medical care. If you or someone you know is in crisis, call
              Tele MANAS on <strong>14416</strong>, India’s free mental health
              helpline.
            </p>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="sess-title">
        <div className="wrap">
          <p className="eyebrow">Messages, calls and sessions</p>
          <h2 className="h2" id="sess-title" style={{ marginTop: 12 }}>Clear about what is private and what is recorded.</h2>
          <div className="table-wrap">
            <table className="rules">
              <thead><tr><th scope="col">What</th><th scope="col">What we do</th></tr></thead>
              <tbody>
                <tr><td>Private messages</td><td>Encrypted in transit, not end-to-end encrypted. Our team opens one only when it is reported or the law requires it, and every such read is written to a log that cannot be changed.</td></tr>
                <tr><td>Calls between friends</td><td>Go phone to phone where possible. Not recorded and not listened to.</td></tr>
                <tr><td>Voice and video sessions with hosts</td><td>Recorded, with both people’s agreement and a marker on screen. Opened only by the safety team after a report or dispute, every opening logged, deleted after 30 days.</td></tr>
                <tr><td>Booking chats</td><td>Photos, videos and voice notes are safety-scanned when sent; text gets a word check.</td></tr>
                <tr><td>Nearby</td><td>Off until you switch it on. Only a rough area of about 1 km is kept, deleted when you switch it off. Others see distance in words, never a number or a map.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="grievance" aria-labelledby="griev-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Grievance redressal</p>
            <h2 className="h2" id="griev-title" style={{ marginTop: 12 }}>Complaints have deadlines.</h2>
            <div className="prose">
              <p>
                The Club follows India’s Information Technology (Intermediary
                Guidelines and Digital Media Ethics Code) Rules, 2021. A
                complaint to our Grievance Officer is acknowledged within 24
                hours. Content that shows a person’s private parts or sexual
                acts, or impersonates them, including morphed images, is removed
                within 2 hours of their complaint. Other complaints are resolved
                within 36 hours. You can appeal to the Grievance Appellate
                Committee within 30 days.
              </p>
            </div>
            <div className="btn-row">
              <Link href="/grievance" className="btn btn-primary">How to complain</Link>
              <Link href="/community-rules" className="btn btn-ghost">Community rules</Link>
            </div>
          </div>
          <div className="card">
            <h3 className="h3" style={{ marginTop: 0 }}>Our deadlines</h3>
            <dl className="facts" style={{ marginTop: 16 }}>
              <div><dt>Acknowledge</dt><dd>24 hours</dd></div>
              <div><dt>Intimate or morphed images</dt><dd>2 hours</dd></div>
              <div><dt>Content that breaks the rules</dt><dd>36 hours</dd></div>
              <div><dt>Court or government order</dt><dd>3 hours</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="data-title">
        <div className="wrap">
          <p className="eyebrow">Data protection</p>
          <h2 className="h2" id="data-title" style={{ marginTop: 12 }}>Your data, under India’s data protection law.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card"><h3 className="h3">No ads, no data sales</h3><p>The Club shows no ads, has no advertising SDK, does not use an advertising ID and does not sell your data.</p></div>
            <div className="card"><h3 className="h3">Your rights</h3><p>Under the Digital Personal Data Protection Act, 2023 you can access, correct and erase your data, and take back consent. Most of it is in the app’s settings.</p></div>
            <div className="card"><h3 className="h3">Delete any time</h3><p>Delete your account from Settings. Deletion starts within about 20 minutes. <Link className="text-link" href="/account-deletion">What is deleted and what is kept</Link>.</p></div>
            <div className="card"><h3 className="h3">Stored in Mumbai</h3><p>Your account database, your face code and our request logs are in Mumbai, India.</p></div>
            <div className="card"><h3 className="h3">Stored elsewhere</h3><p>Photos, videos and voice notes are kept in Cloudflare’s storage, live messaging and The Floor run on Cloudflare servers in Asia outside India, and app analytics, if you switch them on, go to PostHog in the US without your name or contact details.</p></div>
            <div className="card"><h3 className="h3">Every detail</h3><p>The <Link className="text-link" href="/privacy">Privacy Policy</Link> lists everything we collect, why, who processes it, where, and for how long.</p></div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
