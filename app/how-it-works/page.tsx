import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Phone from "@/components/Screens";
import Shot, { ShotNote } from "@/components/Shot";
import CtaBand from "@/components/CtaBand";
import { BOOKING_STEPS, CANCELLATION, HOST_STEPS } from "@/lib/club";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How The Club works for members and for hosts: signing up, your Club, booking a one-to-one session, paying one all-in price through Cashfree, recorded sessions, cancellations, refunds, disputes and ratings.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="From your first sign-in to your first session."
        lede="The social side of The Club is free. The only thing you pay for is a one-to-one session you book with a host. Here is every step, and the rules that apply."
      >
        <div className="btn-row">
          <a href="#members" className="btn btn-ghost btn-sm">For members</a>
          <a href="#booking" className="btn btn-ghost btn-sm">Booking a session</a>
          <a href="#refunds" className="btn btn-ghost btn-sm">Cancellations and refunds</a>
          <a href="#hosting" className="btn btn-ghost btn-sm">For hosts</a>
        </div>
      </PageHero>

      <section className="section" id="members" aria-labelledby="members-title">
        <div className="wrap">
          <p className="eyebrow">For members</p>
          <h2 className="h2" id="members-title" style={{ marginTop: 12 }}>Join, build your Club, share.</h2>
          <ol className="steps" style={{ marginTop: 28, maxWidth: 860 }}>
            <li><b>Sign up</b><p>Use a code sent to your phone or email, or Google or Apple. Give your date of birth, and take a short face check so one person has one account.</p></li>
            <li><b>Build your Club</b><p>Club the people you know. When they club you back, you are in each other’s Club and see each other’s posts on Home.</p></li>
            <li><b>Post and watch</b><p>Share photos, Minis and Stories with the audience you choose: My Club, Close Friends, or more people. Everything is safety-checked before others see it.</p></li>
            <li><b>Talk</b><p>Message and call people in your Club, or drop into a live room on The Floor.</p></li>
          </ol>
        </div>
      </section>

      <section className="section band" id="booking" aria-labelledby="booking-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Booking a session</p>
            <h2 className="h2" id="booking-title" style={{ marginTop: 12 }}>Five steps, all inside the app.</h2>
            <ol className="steps" style={{ marginTop: 28 }}>
              {BOOKING_STEPS.map((s) => (
                <li key={s.title}><b>{s.title}</b><p>{s.body}</p></li>
              ))}
            </ol>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Shot name="host-profile" caption="Choosing chat, voice or video" />
            <ShotNote />
          </div>
        </div>
      </section>

      <section className="section" id="payment" aria-labelledby="payment-title">
        <div className="wrap">
          <p className="eyebrow">Payment</p>
          <h2 className="h2" id="payment-title" style={{ marginTop: 12 }}>One price, paid to a licensed payment company.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card"><h3 className="h3">One all-in price</h3><p>The price you see before you pay is the whole price. The Club’s fee is included in it and is taken from the host’s share when the host is paid.</p></div>
            <div className="card"><h3 className="h3">Paid through Cashfree</h3><p>You pay on Cashfree’s payment page, with UPI, a card or another method it offers. The Club never sees your card or UPI details.</p></div>
            <div className="card"><h3 className="h3">Held until it is done</h3><p>The host’s share is held until the session has ended and the dispute window has closed, so a refund that is due can be paid.</p></div>
          </div>
          <div className="note">
            <b>Status</b>
            <p>
              Payments are not switched on yet. Today no one can pay for a
              session on The Club and we hold no card, UPI or bank details. Our{" "}
              <Link className="text-link" href="/terms#payments">Terms of Service</Link> will be updated with the
              payment rules before anyone can pay.
            </p>
          </div>
        </div>
      </section>

      <section className="section band" id="sessions" aria-labelledby="sessions-title">
        <div className="wrap split rev">
          <div>
            <p className="eyebrow">During the session</p>
            <h2 className="h2" id="sessions-title" style={{ marginTop: 12 }}>Online only, and recorded for safety.</h2>
            <div className="prose">
              <ul>
                <li>Sessions are 30, 60 or 90 minutes, by chat, voice or video. There are no extensions: more time is a new booking.</li>
                <li>By default the session opens 5 minutes before the start time. The booking chat has a timer.</li>
                <li><strong>Voice and video sessions are recorded.</strong> Both people agree to this when booking, and a “Recording” marker shows the whole time.</li>
                <li>Only our safety team can open a recording, only when someone reports the session or opens a dispute, and every opening is logged. Recordings are deleted 30 days after the session.</li>
                <li>Photos, videos and voice notes sent in a booking chat are safety-scanned. Text gets a word check, and everything can be reported.</li>
                <li>A host may not move you to another app, phone number or platform, and may not arrange to meet you.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone kind="session" caption="The Recording marker" />
          </div>
        </div>
      </section>

      <section className="section" id="refunds" aria-labelledby="refunds-title">
        <div className="wrap">
          <p className="eyebrow">Cancellations and refunds</p>
          <h2 className="h2" id="refunds-title" style={{ marginTop: 12 }}>Clear rules, shown before you book.</h2>
          <p className="lede">
            These are the default rules, as are the time limits on this page. The app shows the rules that apply to
            each booking before it is accepted.
          </p>
          <div className="table-wrap">
            <table className="rules">
              <thead><tr><th scope="col">What happens</th><th scope="col">Result for the person who booked</th></tr></thead>
              <tbody>
                {CANCELLATION.map((c) => (
                  <tr key={c.when}><td>{c.when}</td><td>{c.result}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid g3" style={{ marginTop: 22 }}>
            <div className="card"><h3 className="h3">Disputes</h3><p>Either side can open a dispute within 72 hours of the scheduled end. We acknowledge within 48 hours and aim to resolve within a month. A person on our team decides, and records the reason.</p></div>
            <div className="card"><h3 className="h3">Strikes</h3><p>A host who cancels or does not turn up gets a strike. Three strikes in 90 days pause their hosting until our team reviews it.</p></div>
            <div className="card"><h3 className="h3">Ratings</h3><p>Only the person who completed a session can rate it, once, within 14 days. “New host” shows until a host has three reviews.</p></div>
          </div>
          <p className="muted small" style={{ marginTop: 18 }}>
            Full text: <Link className="text-link" href="/refund-policy">Refund and cancellation policy</Link>.
          </p>
        </div>
      </section>

      <section className="section band" id="hosting" aria-labelledby="hosting-title">
        <div className="wrap">
          <p className="eyebrow">For hosts</p>
          <h2 className="h2" id="hosting-title" style={{ marginTop: 12 }}>From application to payout.</h2>
          <ol className="steps" style={{ marginTop: 28, maxWidth: 860 }}>
            {HOST_STEPS.map((s) => (
              <li key={s.title}><b>{s.title}</b><p>{s.body}</p></li>
            ))}
          </ol>
          <div className="btn-row">
            <Link href="/hosts" className="btn btn-primary">More for hosts</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
