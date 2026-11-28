import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Screens";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { CATEGORIES, HOST_STEPS, LANGUAGES } from "@/lib/club";

export const metadata: Metadata = {
  title: "For hosts",
  description:
    "Host paid one-to-one online sessions on The Club: who can host, the ten categories, ID and selfie verification, setting your prices, how earnings are paid out, the platform fee, and the rules hosts agree to.",
  alternates: { canonical: "/hosts" },
};

export default function Hosts() {
  return (
    <main>
      <PageHero
        eyebrow="For hosts"
        title="Share what you know, one person at a time."
        lede="Hosts are adults who offer paid one-to-one sessions by chat, voice or video, inside The Club. You choose what you offer, when, and for how much."
      >
        <div className="btn-row">
          <a href="#apply" className="btn btn-primary">How to become a host</a>
          <a href="#earnings" className="btn btn-ghost">Earnings and the fee</a>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="cat-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">What you can offer</p>
            <h2 className="h2" id="cat-title" style={{ marginTop: 12 }}>Ten categories. Up to three are yours.</h2>
            <ul className="tags" aria-label="Host categories">
              {CATEGORIES.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="prose" style={{ marginTop: 22 }}>
              <p>
                A placed senior running mock interviews, a student helping with
                a subject, a musician teaching chords, a cook walking someone
                through a recipe: that is what a session on The Club is for.
              </p>
              <p>
                <strong>Talk and listen</strong> is peer conversation, always
                labelled “Peer support, not therapy or medical care”. Medical,
                legal and financial advice are not allowed, and neither are
                dating, flirting or companionship, in any category.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone kind="host" caption="A host’s page" />
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="lang-title">
        <div className="wrap">
          <p className="eyebrow">Languages</p>
          <h2 className="h2" id="lang-title" style={{ marginTop: 12 }}>Host in the language your clients speak.</h2>
          <ul className="tags" aria-label="Languages a host can list">
            {LANGUAGES.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="apply" aria-labelledby="apply-title">
        <div className="wrap">
          <p className="eyebrow">Becoming a host</p>
          <h2 className="h2" id="apply-title" style={{ marginTop: 12 }}>Apply in the app. A person checks it.</h2>
          <ol className="steps" style={{ marginTop: 28, maxWidth: 860 }}>
            {HOST_STEPS.map((s) => (
              <li key={s.title}><b>{s.title}</b><p>{s.body}</p></li>
            ))}
          </ol>
          <div className="note">
            <b>What verification means</b>
            <p>
              The ID and selfie check confirms who a host is. It is not a check
              of qualifications, skills or background. Ratings from people who completed a session help with the
              rest. One host profile per person.
            </p>
          </div>
        </div>
      </section>

      <section className="section band" id="earnings" aria-labelledby="earn-title">
        <div className="wrap">
          <p className="eyebrow">Earnings</p>
          <h2 className="h2" id="earn-title" style={{ marginTop: 12 }}>You set the price. You see the fee before you start.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card">
              <Icon name="rupee" />
              <h3 className="h3">Your prices</h3>
              <p>Set a price for each of chat, voice and video, for each length you offer. By default a price can be from ₹99 to ₹9,999 for 30 minutes.</p>
            </div>
            <div className="card">
              <Icon name="doc" />
              <h3 className="h3">The platform fee</h3>
              <p>The Club takes a platform fee from your earnings on each paid session. The app shows you the fee before you submit your application and before each booking.</p>
            </div>
            <div className="card">
              <Icon name="calendar" />
              <h3 className="h3">Payouts</h3>
              <p>Clients pay Cashfree, a licensed payment company. Your share is held until the session ends and the dispute window (72 hours by default) closes, then paid to the account you set up with Cashfree.</p>
            </div>
          </div>
          <div className="note">
            <b>Status</b>
            <p>
              Hosting and booking are built and in testing. Payments switch on
              at public launch, so no host earns money on The Club yet. You are
              responsible for your own taxes; The Club records your earnings for
              each financial year to make that easier.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="rules-title">
        <div className="wrap">
          <p className="eyebrow">The rules hosts agree to</p>
          <h2 className="h2" id="rules-title" style={{ marginTop: 12 }}>Fair to clients, fair to hosts.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card"><h3 className="h3">Online only</h3><p>Every session happens inside The Club. No meeting in person, and no moving a client to another app, number or platform.</p></div>
            <div className="card"><h3 className="h3">Recorded voice and video</h3><p>Voice and video sessions are recorded for safety and opened only on a report or dispute.</p></div>
            <div className="card"><h3 className="h3">A true listing</h3><p>Your name, categories and description must be accurate. No payment outside The Club.</p></div>
            <div className="card"><h3 className="h3">Show up</h3><p>Cancelling, or not joining within 10 minutes, refunds the client in full and gives you a strike. Three strikes in 90 days pause hosting.</p></div>
            <div className="card"><h3 className="h3">Session lengths</h3><p>30, 60 or 90 minutes. Up to 8 sessions a day by default, with a 10-minute buffer between them.</p></div>
            <div className="card"><h3 className="h3">Reviews</h3><p>Clients can rate once within 14 days. You can reply once. A review can be reported.</p></div>
          </div>
          <p className="muted small" style={{ marginTop: 22 }}>
            Read the full <Link className="text-link" href="/host-terms">host terms</Link> (a draft being finalised), the{" "}
            <Link className="text-link" href="/community-rules">Community rules</Link> and the{" "}
            <Link className="text-link" href="/refund-policy">Refund and cancellation policy</Link>.
          </p>
        </div>
      </section>

      <CtaBand title="Hosting opens with the app." />
    </main>
  );
}
