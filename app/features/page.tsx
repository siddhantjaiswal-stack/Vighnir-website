import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Screens";
import CtaBand from "@/components/CtaBand";
import { FEATURES, SIGN_UP } from "@/lib/club";

export const metadata: Metadata = {
  title: "Features",
  description:
    "What you can do on The Club: My Club, Home and posts, Minis, Stories and Highlights, Daily Moment, messages and calls, The Floor live rooms, Nearby, Search, and paid one-to-one sessions with approved hosts.",
  alternates: { canonical: "/features" },
};

/** Which illustration goes with which feature (only where one says something). */
const ART: Record<string, { kind: Parameters<typeof Phone>[0]["kind"]; caption: string }> = {
  home: { kind: "feed", caption: "Home, with your Club first" },
  minis: { kind: "minis", caption: "A Mini" },
  stories: { kind: "stories", caption: "A story for Close Friends" },
  moment: { kind: "moment", caption: "Daily Moment, back and front camera" },
  messages: { kind: "messages", caption: "A one-to-one chat" },
  floor: { kind: "floor", caption: "An anonymous room on The Floor" },
  nearby: { kind: "nearby", caption: "Nearby, distance in words" },
  sessions: { kind: "host", caption: "A host’s page" },
};

export default function Features() {
  let n = 0;
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="What you can do on The Club."
        lede="Everything below is built and running for our testers today. The one thing that switches on at public launch is paying for sessions."
      >
        <nav aria-label="Features on this page" className="tags" style={{ marginTop: 28 }}>
          {FEATURES.map((f) => (
            <a key={f.id} href={`#${f.id}`} className="pill" style={{ fontSize: ".86rem", padding: "8px 14px" }}>
              {f.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="section" aria-labelledby="signup-title">
        <div className="wrap">
          <p className="eyebrow">Getting in</p>
          <h2 className="h2" id="signup-title" style={{ marginTop: 12 }}>Sign-up takes a minute, and it keeps out fakes.</h2>
          <ol className="steps" style={{ marginTop: 28, maxWidth: 820 }}>
            {SIGN_UP.map((s, i) => (
              <li key={i}><b>{["Sign in", "Date of birth", "Face check"][i]}</b><p>{s}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {FEATURES.map((f) => {
        const art = ART[f.id];
        const rev = art ? n++ % 2 === 1 : false;
        return (
          <section key={f.id} id={f.id} className="section" aria-labelledby={`${f.id}-title`}>
            <div className={`wrap${art ? ` split${rev ? " rev" : ""}` : ""}`}>
              <div>
                <p className="eyebrow">{f.name}</p>
                <h2 className="h2" id={`${f.id}-title`} style={{ marginTop: 12 }}>{f.lead}</h2>
                <div className="prose">
                  <ul>
                    {f.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {f.id === "sessions" ? (
                    <p>
                      <Link href="/how-it-works">How booking, payment and refunds work</Link> ·{" "}
                      <Link href="/hosts">Become a host</Link>
                    </p>
                  ) : null}
                  {f.id === "home" ? (
                    <p>
                      <Link href="/how-ranking-works">How ranking works</Link> explains what Home uses and what it never looks at.
                    </p>
                  ) : null}
                </div>
              </div>
              {art ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Phone kind={art.kind} caption={art.caption} />
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className="section band" aria-labelledby="controls-title">
        <div className="wrap">
          <p className="eyebrow">Your controls</p>
          <h2 className="h2" id="controls-title" style={{ marginTop: 12 }}>Settings that actually change something.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card"><h3 className="h3">Privacy</h3><p>Mute, restrict or block people, hide tags, control message requests and your activity status.</p></div>
            <div className="card"><h3 className="h3">Your feed</h3><p>Turn the personalised feed off or reset it. See why any suggested post is shown to you.</p></div>
            <div className="card"><h3 className="h3">Your data</h3><p>Download your data, use your rights under India’s data protection law, and delete your account from inside the app.</p></div>
            <div className="card"><h3 className="h3">Notifications</h3><p>Choose which push notifications you get and whether they show a preview.</p></div>
            <div className="card"><h3 className="h3">Sharing</h3><p>Share a post or profile as a link, or show your profile QR code.</p></div>
            <div className="card"><h3 className="h3">Insights</h3><p>Creators and hosts see how their posts do and, for hosts, their bookings and earnings.</p></div>
          </div>
          <p className="muted small" style={{ marginTop: 22 }}>
            Not in The Club: group chats, live video streaming, group sessions
            and in-person meetings. We have chosen to leave them out.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
