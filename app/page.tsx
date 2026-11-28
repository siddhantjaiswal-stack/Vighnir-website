import type { Metadata } from "next";
import Link from "next/link";
import Phone from "@/components/Screens";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { FAQS, STATUS } from "@/lib/club";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  alternates: { canonical: "/" },
};

const HIGHLIGHTS = [
  { icon: "users", name: "My Club", text: "Keep a close circle of people you know. Club someone; when it is mutual, you are in each other’s Club.", href: "/features#my-club" },
  { icon: "play", name: "Minis", text: "Short vertical videos, up to about a minute, with sounds, captions and an AI-made label.", href: "/features#minis" },
  { icon: "story", name: "Stories and Daily Moment", text: "Stories that last 24 hours, and one surprise window a day to show your Club what you are up to.", href: "/features#stories" },
  { icon: "chat", name: "Messages and calls", text: "One-to-one chat, voice notes, view-once photos, and voice and video calls with your Club.", href: "/features#messages" },
  { icon: "rooms", name: "The Floor", text: "One tap drops you into a live chat room. Choose a normal room or an anonymous one.", href: "/features#floor" },
  { icon: "calendar", name: "One-to-one sessions", text: "Book a paid chat, voice or video session with an approved host, inside the app.", href: "/how-it-works" },
] as const;

export default function Home() {
  return (
    <main>
      {/* ── hero ── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">The Club · by Vighnir</p>
            <h1 className="h1" id="hero-title">
              Your friends, your Minis, and <em>time with people who know their stuff.</em>
            </h1>
            <p className="lede">
              The Club is a social app for adults in India. Keep a close circle
              of friends, post photos, Minis and Stories, message and call, join
              live chat rooms, and book a paid one-to-one session with an
              approved host when you want help from someone who has done it.
            </p>
            <div className="btn-row">
              <Link href="/features" className="btn btn-primary">
                See what it does
              </Link>
              <Link href="/how-it-works" className="btn btn-ghost">
                How sessions work
              </Link>
            </div>
            <div className="hero-meta">
              <span className="chip">
                <span className="dot" aria-hidden="true" /> {STATUS.short}
              </span>
              <span className="chip">iPhone and Android</span>
              <span className="chip">Made in India</span>
            </div>
          </div>
          <div className="hero-phones">
            <Phone kind="feed" caption="Home, with your Club’s posts" />
            <Phone kind="host" caption="A host’s page" />
          </div>
        </div>
      </section>

      {/* ── what it is ── */}
      <section className="section band" aria-labelledby="what-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">What The Club is</p>
            <h2 className="h2" id="what-title">
              A social app and a place to learn from people, in one.
            </h2>
            <div className="prose">
              <p>
                Most social apps are built to keep you scrolling through
                strangers. The Club starts from the people you actually know:
                your Club. Home shows their posts first, newest first, with your
                close friends near the top, and marks the few posts from outside
                your Club as “Suggested”.
              </p>
              <p>
                The same app lets you book time with a host: a placed senior who
                can run a mock interview, someone who can help with a language
                or a subject, a cook, a musician, a fitness coach. Every session
                is a chat, voice or video call inside The Club. There are no
                in-person meetings.
              </p>
              <p>
                <strong>Who it is for:</strong> adults in India, starting with
                college students and young people early in their careers.
              </p>
            </div>
          </div>
          <dl className="facts">
            <div><dt>Product</dt><dd>The Club, a mobile app</dd></div>
            <div><dt>Platforms</dt><dd>iPhone and Android</dd></div>
            <div><dt>Country</dt><dd>India</dd></div>
            <div><dt>Who can join</dt><dd>Adults, 18 and over</dd></div>
            <div><dt>Status</dt><dd>Built, in closed testing</dd></div>
            <div><dt>Company</dt><dd>Vighnir (OPC) Private Limited</dd></div>
          </dl>
        </div>
      </section>

      {/* ── features ── */}
      <section className="section" aria-labelledby="features-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2 className="h2" id="features-title">Everything you do with friends, plus sessions with hosts.</h2>
          </div>
          <div className="grid g3">
            {HIGHLIGHTS.map((h) => (
              <Link key={h.name} href={h.href} className="card">
                <Icon name={h.icon} />
                <h3 className="h3">{h.name}</h3>
                <p>{h.text}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
          <p className="muted small" style={{ marginTop: 20 }}>
            Also: Nearby (off until you switch it on, distance shown only in
            words), Search and Discover, Highlights, saved posts and drafts,
            and Insights for creators and hosts. <Link className="text-link" href="/features">All features</Link>
          </p>
        </div>
      </section>

      {/* ── how sessions work ── */}
      <section className="section band" aria-labelledby="how-title">
        <div className="wrap split rev">
          <div>
            <p className="eyebrow">How a session works</p>
            <h2 className="h2" id="how-title">Request, pay one price, meet in the app.</h2>
            <ol className="steps" style={{ marginTop: 28 }}>
              <li><b>Find a host</b><p>By category and language, or in Nearby.</p></li>
              <li><b>Send a request</b><p>Chat, voice or video; 30, 60 or 90 minutes. The host has 12 hours to accept.</p></li>
              <li><b>Pay one all-in price</b><p>Through Cashfree, a licensed payment company. Payments switch on at public launch.</p></li>
              <li><b>Meet inside The Club</b><p>Voice and video sessions are recorded for safety, with a marker on screen the whole time.</p></li>
            </ol>
            <div className="btn-row">
              <Link href="/how-it-works" className="btn btn-ghost">The full booking and refund rules</Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone kind="session" caption="A recorded video session" />
          </div>
        </div>
      </section>

      {/* ── hosts ── */}
      <section className="section" aria-labelledby="hosts-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">For hosts</p>
            <h2 className="h2" id="hosts-title">Teach what you know. Set your own prices.</h2>
            <div className="prose">
              <p>
                Any adult on The Club can apply to host in up to three of ten
                categories: careers, study help, languages, fitness, cooking,
                music lessons, tech help, creator tips, astrology, and talk and
                listen (non-clinical).
              </p>
              <p>
                You give your legal name, a photo of one government ID and a
                live selfie, and a person on our team checks them before your
                host page goes live. You choose your prices for chat, voice and
                video. Your earnings are paid out by the payment company after
                each session and its dispute window.
              </p>
            </div>
            <div className="btn-row">
              <Link href="/hosts" className="btn btn-primary">Become a host</Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone kind="nearby" caption="Nearby, with distance in words" />
          </div>
        </div>
      </section>

      {/* ── safety ── */}
      <section className="section band" aria-labelledby="safety-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Safety and trust</p>
            <h2 className="h2" id="safety-title">Built so the right people are on it, and the wrong things are not.</h2>
          </div>
          <div className="grid g4">
            <div className="card"><Icon name="id" /><h3 className="h3">Adults only</h3><p>Your date of birth is checked at sign-up, and the database refuses an account for anyone under 18.</p></div>
            <div className="card"><Icon name="scan" /><h3 className="h3">One person, one account</h3><p>A short face check at sign-up. We keep a face code, never the video.</p></div>
            <div className="card"><Icon name="shield" /><h3 className="h3">Checked before it is seen</h3><p>Posts, Minis, Stories and profile photos pass automated safety checks before anyone else sees them.</p></div>
            <div className="card"><Icon name="flag" /><h3 className="h3">Report, block, appeal</h3><p>Report anything from inside the app, block anyone, and appeal a decision. Complaints are acknowledged within 24 hours.</p></div>
          </div>
          <div className="btn-row">
            <Link href="/safety" className="btn btn-ghost">How we keep The Club safe</Link>
            <Link href="/grievance" className="btn btn-ghost">Grievance redressal</Link>
          </div>
        </div>
      </section>

      {/* ── technology teaser ── */}
      <section className="section" aria-labelledby="tech-title">
        <div className="wrap split rev">
          <div>
            <p className="eyebrow">Technology</p>
            <h2 className="h2" id="tech-title">One app for iPhone and Android, running on a global edge network.</h2>
            <div className="prose">
              <p>
                The Club is written once in React Native and Expo for both
                phones. The backend runs on Cloudflare Workers close to users,
                with Durable Objects for live messaging and The Floor, a
                container pipeline that encodes every Mini, on-network AI
                models for safety checks, and a vector index that finds Minis
                you are likely to enjoy. Accounts live in a PostgreSQL database
                in Mumbai.
              </p>
            </div>
            <div className="btn-row">
              <Link href="/technology" className="btn btn-ghost">How it is built</Link>
            </div>
          </div>
          <ul className="grid g2" style={{ listStyle: "none" }}>
            <li className="card"><Icon name="globe" /><h3 className="h3">Edge backend</h3><p>Cloudflare Workers and Durable Objects.</p></li>
            <li className="card"><Icon name="video" /><h3 className="h3">Video pipeline</h3><p>Every Mini encoded to 1080p and 720p.</p></li>
            <li className="card"><Icon name="spark" /><h3 className="h3">Recommendations</h3><p>A learned ranker for Minis; your Club first on Home.</p></li>
            <li className="card"><Icon name="server" /><h3 className="h3">Data in Mumbai</h3><p>The account database runs in AWS Mumbai.</p></li>
          </ul>
        </div>
      </section>

      {/* ── faq teaser ── */}
      <section className="section band" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2 className="h2" id="faq-title">The short answers.</h2>
          </div>
          <div className="faq">
            {FAQS.slice(0, 5).map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="btn-row">
            <Link href="/faq" className="btn btn-ghost">All questions</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
