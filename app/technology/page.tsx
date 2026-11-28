import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How The Club is built: one React Native and Expo app for iPhone and Android, a backend on Cloudflare Workers and Durable Objects, a container video pipeline, AI safety checks, a learned recommendation system with vector search, WebRTC calls, and a PostgreSQL database in Mumbai.",
  alternates: { canonical: "/technology" },
};

type Box = { name: string; text: string };
type Layer = { name: string; sub: string; edge?: boolean; boxes: Box[] };

/** Every box is in the app repo's backend/cloudflare wrangler.toml files or app config (ground-product §6). */
const LAYERS: Layer[] = [
  {
    name: "The app",
    sub: "On your phone",
    boxes: [
      { name: "React Native + Expo", text: "One codebase for iPhone and Android, with Expo Router for navigation." },
      { name: "On-device work", text: "Videos are trimmed and their location data stripped on the phone before upload, which runs in the background." },
    ],
  },
  {
    name: "Edge backend",
    sub: "Cloudflare’s network",
    edge: true,
    boxes: [
      { name: "Workers", text: "A set of small services for sign-in, content, bookings, Minis, links, sessions and real-time, running close to the user." },
      { name: "Durable Objects", text: "Stateful pieces: the live message inbox and presence, The Floor’s rooms and matchmaking, sign-in rate limits, and the session recorder." },
      { name: "Turnstile", text: "A privacy-friendly bot check on requests for sign-in codes." },
    ],
  },
  {
    name: "Media and AI",
    sub: "Also on Cloudflare",
    boxes: [
      { name: "R2 storage", text: "Photos, videos, voice notes and session recordings." },
      { name: "Queues and Containers", text: "Scan and encode pipelines. A container encodes every Mini; another records booked voice and video sessions." },
      { name: "Workers AI", text: "AI models on Cloudflare’s network that safety-check content and help understand videos." },
      { name: "Vectorize", text: "A vector index used to find posts and Minis similar to the ones you enjoy." },
      { name: "Workflows", text: "Runs the training of the Minis ranking model." },
    ],
  },
  {
    name: "Data",
    sub: "Mumbai, India",
    boxes: [
      { name: "Aurora PostgreSQL", text: "The account database, on Amazon Web Services in Mumbai (ap-south-1), reached from the edge through Hyperdrive connection pooling." },
      { name: "Face check", text: "Amazon Rekognition in Mumbai turns the sign-up face video into a face code, so one person has one account." },
    ],
  },
];

const PIPELINE = [
  { name: "On the phone", text: "Trim, caption, strip location data, upload in the background." },
  { name: "Store", text: "The original lands in object storage and joins a queue." },
  { name: "Encode", text: "A container encodes two sizes, 1080p and 720p, as H.264 MP4." },
  { name: "Safety check", text: "A safety model watches the whole video before anyone else can see it." },
  { name: "Understand", text: "Still frames and speech are used to understand the Mini for search and recommendations." },
] as const;

export default function Technology() {
  return (
    <main>
      <PageHero
        eyebrow="Technology"
        title="How The Club is built."
        lede="A single app for both phones, a backend that runs on a global edge network, and a database in Mumbai. This page explains each part in plain words."
      />

      <section className="section" aria-labelledby="arch-title">
        <div className="wrap">
          <p className="eyebrow">Architecture</p>
          <h2 className="h2" id="arch-title" style={{ marginTop: 12 }}>From your phone to the database.</h2>
          <p className="lede">
            The app never talks to the database directly. Every request goes
            through our services on the edge, which check who is asking before
            they read or write anything.
          </p>
          <figure style={{ marginTop: 36 }}>
            <div className="arch" role="img" aria-label="Architecture diagram: the app on your phone talks to Workers and Durable Objects on Cloudflare's edge network, which use R2 storage, Queues and Containers, Workers AI and Vectorize, and reach the Aurora PostgreSQL database and the face check in Mumbai.">
              {LAYERS.map((l, i) => (
                <div key={l.name} style={{ display: "contents" }}>
                  {i > 0 ? <div className="arch-arrow" aria-hidden="true">↓</div> : null}
                  <div className={`arch-layer${l.edge ? " edge" : ""}`}>
                    <div className="arch-name">
                      <b>{l.name}</b>
                      <span>{l.sub}</span>
                    </div>
                    <div className="arch-boxes">
                      {l.boxes.map((b) => (
                        <div key={b.name} className="arch-box">
                          <b>{b.name}</b>
                          <span>{b.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="cap" style={{ textAlign: "left" }}>
              Simplified. Calls, email, SMS and crash reporting are described below.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section band" aria-labelledby="video-title">
        <div className="wrap">
          <p className="eyebrow">Video pipeline</p>
          <h2 className="h2" id="video-title" style={{ marginTop: 12 }}>What happens to a Mini after you post it.</h2>
          <ol className="pipeline" style={{ marginTop: 32 }}>
            {PIPELINE.map((p) => (
              <li key={p.name}>
                <b>{p.name}</b>
                <span>{p.text}</span>
              </li>
            ))}
          </ol>
          <p className="muted small" style={{ marginTop: 18 }}>
            Minis are served as MP4 in the size that suits your connection.
            Photos and Stories are safety-checked before they are shown too.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="rec-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Recommendations</p>
            <h2 className="h2" id="rec-title" style={{ marginTop: 12 }}>Your Club first. Suggestions you can question.</h2>
            <div className="prose">
              <ul>
                <li><strong>Home</strong> shows posts from your Club, newest first, with close friends kept near the top, and a few posts from outside marked “Suggested”.</li>
                <li>Suggestions learn from what you like, comment on, save and hide, how long a post stays on your screen, and who you club.</li>
                <li><strong>Minis</strong> are ranked by a learned model that uses what you watch, finish or skip, and finds similar videos with vector embeddings.</li>
                <li>A new Mini is first shown to a small group of people who share its language, and reaches more people step by step if they enjoy it.</li>
                <li>Ranking never uses your phone number, your messages, or your contacts beyond the people you clubbed. There is no paid boost.</li>
                <li>“Why am I seeing this” explains a suggestion, and you can switch the personalised feed on or off, or reset it.</li>
              </ul>
              <p>
                Read the full explanation in <Link href="/how-ranking-works">How ranking works</Link>.
              </p>
            </div>
          </div>
          <div className="grid" style={{ gap: 12 }}>
            <div className="card"><h3 className="h3" style={{ marginTop: 0 }}>Signals used</h3><p>Likes, comments, saves, hides, time on screen, finishes and skips on Minis, who you club.</p></div>
            <div className="card"><h3 className="h3" style={{ marginTop: 0 }}>Never used</h3><p>Your phone number, your messages, your contact list beyond who you clubbed, money.</p></div>
            <div className="card"><h3 className="h3" style={{ marginTop: 0 }}>Your controls</h3><p>Why am I seeing this, personalised feed on or off, reset my feed, hide a post.</p></div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="rt-title">
        <div className="wrap">
          <p className="eyebrow">Real time and calls</p>
          <h2 className="h2" id="rt-title" style={{ marginTop: 12 }}>Live by default.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card"><h3 className="h3">Messaging</h3><p>Each person’s inbox and presence live in a Durable Object, connected over WebSockets, so messages, typing and “Seen” arrive as they happen.</p></div>
            <div className="card"><h3 className="h3">The Floor</h3><p>Each live room is its own Durable Object, with a matchmaker that places you in a room with one tap.</p></div>
            <div className="card"><h3 className="h3">Calls</h3><p>WebRTC voice and video, phone to phone where possible and through Cloudflare’s relay otherwise. Booked sessions go through Cloudflare’s media server so they can be recorded.</p></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sec-title">
        <div className="wrap">
          <p className="eyebrow">Security</p>
          <h2 className="h2" id="sec-title" style={{ marginTop: 12 }}>Rules are enforced on the server.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card"><h3 className="h3">Encrypted in transit</h3><p>Everything travels over HTTPS and TLS, including the sound and picture of a relayed call.</p></div>
            <div className="card"><h3 className="h3">No passwords</h3><p>One-time codes expire in minutes and allow only a few attempts. Sign-in tokens are stored hashed and rotate on every use.</p></div>
            <div className="card"><h3 className="h3">Server-side rules</h3><p>The 18+ check, who may call whom, and every other rule that matters is enforced by our servers, not the app.</p></div>
            <div className="card"><h3 className="h3">Logged access</h3><p>Staff tools sit behind Cloudflare Access, and every time staff open a private message it is written to a log that cannot be changed.</p></div>
            <div className="card"><h3 className="h3">Payment details stay with Cashfree</h3><p>Full PAN, bank account and UPI numbers for host payouts go to Cashfree in one request. We do not store them.</p></div>
            <div className="card"><h3 className="h3">What we do not claim</h3><p>We hold no security certification, and we do not describe our messages as end-to-end encrypted.</p></div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="svc-title">
        <div className="wrap">
          <p className="eyebrow">Other services we use</p>
          <h2 className="h2" id="svc-title" style={{ marginTop: 12 }}>The rest of the stack.</h2>
          <div className="table-wrap">
            <table className="rules">
              <thead><tr><th scope="col">Service</th><th scope="col">What it does for The Club</th></tr></thead>
              <tbody>
                <tr><td>MSG91</td><td>Sends sign-in codes by SMS.</td></tr>
                <tr><td>Zoho ZeptoMail</td><td>Sends sign-in codes and account emails.</td></tr>
                <tr><td>Sentry</td><td>Crash reports from the app, only if you switch them on, sent through our own relay.</td></tr>
                <tr><td>PostHog</td><td>App usage analytics, only if you switch them on, without your name, phone number, email or location.</td></tr>
                <tr><td>Cashfree</td><td>Payments and host payouts, when paid sessions open.</td></tr>
                <tr><td>Vercel</td><td>Hosts this website.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="muted small" style={{ marginTop: 18 }}>
            The full list of everyone who processes personal data for us is in
            the <Link className="text-link" href="/privacy#processors">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
