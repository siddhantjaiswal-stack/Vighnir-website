import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund and cancellation policy",
  description:
    "The Club's refund and cancellation rules for paid one-to-one sessions with hosts: cancelling 24 hours or more before, between 24 and 2 hours, under 2 hours, host cancellations and no-shows, disputes. Payments are not switched on yet.",
  alternates: { canonical: "/refund-policy" },
};

/*
 * Written from host terms §6-§7 (the defaults hosts already agree to) and Terms
 * of Service §10 (no payments today). It does not replace §10: until payments
 * open nothing here applies, and the Terms will be updated with the payment
 * rules before anyone can pay. Keep the bands identical to host terms §7 and to
 * lib/club.ts CANCELLATION.
 */
export default function RefundPolicy() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Refund and cancellation policy</h1>
          <p className="lede">
            What happens to your money when a paid session on The Club is
            cancelled, missed or disputed.
          </p>
          <div className="legal-note glass" role="note">
            <span className="mono">Not in effect yet</span>
            <p>
              <strong>The Club does not take payments today.</strong> No one can
              pay for a session yet, so nothing on this page applies yet. It sets
              out the rules that will apply when paid sessions open. Until then,{" "}
              <Link href="/terms#payments">§10 of the Terms of Service</Link>{" "}
              applies, and the Terms will be updated with the payment rules
              before anyone can pay.
            </p>
          </div>
          <div className="legal-meta mono">
            <span>
              Last updated <time dateTime="2026-11-28">28 November 2026</time>
            </span>
            <span>India · English</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap legal-grid">
          <nav className="legal-toc mono" aria-label="On this page">
            <b>Contents</b>
            <a href="#scope">What this covers</a>
            <a href="#client">If you cancel</a>
            <a href="#host">If the host cancels</a>
            <a href="#disputes">Disputes</a>
            <a href="#how">How refunds are paid</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="legal-copy">
            <section id="scope">
              <h2>1. What this covers</h2>
              <p>
                This policy covers paid one-to-one sessions (chat, voice or
                video) that you book with a host on The Club, operated by{" "}
                {LEGAL.entity}. Everything else on The Club is free, so there is
                nothing else to refund. There are no subscriptions.
              </p>
              <p>
                These are the default rules. <strong>The app shows the rules
                that apply to a booking before it is accepted</strong>, and those
                are the rules for that booking.
              </p>
            </section>

            <section id="client">
              <h2>2. If you cancel, or do not join</h2>
              <dl className="legal-dl">
                <div>
                  <dt>24 hours or more before the start</dt>
                  <dd>You get 100% back.</dd>
                </div>
                <div>
                  <dt>Between 24 and 2 hours before</dt>
                  <dd>You get 50% back. The host keeps 50%.</dd>
                </div>
                <div>
                  <dt>Under 2 hours before, or you do not join</dt>
                  <dd>Nothing back. The host keeps their share.</dd>
                </div>
              </dl>
              <p>
                Sessions are 30, 60 or 90 minutes and cannot be extended; more
                time is a new booking.
              </p>
            </section>

            <section id="host">
              <h2>3. If the host cancels, or does not join</h2>
              <dl className="legal-dl">
                <div>
                  <dt>The host cancels, at any time</dt>
                  <dd>You get 100% back. The host gets a strike.</dd>
                </div>
                <div>
                  <dt>The host does not join within 10 minutes of the start</dt>
                  <dd>You get 100% back. The host gets a strike.</dd>
                </div>
                <div>
                  <dt>Neither of you joins</dt>
                  <dd>You get 100% back. No strike.</dd>
                </div>
              </dl>
              <p>
                Three strikes in 90 days pause a host’s hosting until our team
                reviews it. We may also cancel sessions and refund you if a host
                breaks the <Link href="/host-terms">host terms</Link>.
              </p>
            </section>

            <section id="disputes">
              <h2>4. Disputes</h2>
              <p>
                If something went wrong in a session, either of you can open a
                dispute in the app <strong>within 72 hours of the scheduled
                end</strong>. We acknowledge it within 48 hours and aim to
                resolve it within a month. A person on our team decides, can
                award any amount, and records the reason. For voice and video
                sessions, the safety team may open the recording to decide.
              </p>
            </section>

            <section id="how">
              <h2>5. How refunds are paid</h2>
              <p>
                Sessions will be paid through Cashfree, a licensed payment
                company; The Club does not hold your money itself. The host’s
                share is held until the session has ended and the dispute window
                has closed, so a refund that is due comes out of that held share
                and goes back through Cashfree.
              </p>
            </section>

            <section id="contact">
              <h2>6. Contact</h2>
              <p>
                Questions about a booking: <a href="mailto:hello@vighnir.com">hello@vighnir.com</a>.
                To complain, see <Link href="/grievance">Grievance redressal</Link>.
              </p>
              <p>
                See also: <Link href="/how-it-works">How it works</Link> ·{" "}
                <Link href="/terms">Terms of Service</Link> ·{" "}
                <Link href="/host-terms">Host terms</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
