import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { LEGAL } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Vighnir",
  description:
    "About Vighnir (OPC) Private Limited, the Indian company that builds and runs The Club: our mission, company details (CIN, registered office in Bareilly, Uttar Pradesh), the team, where The Club is today and the roadmap.",
  alternates: { canonical: "/about" },
};

const BUILT = [
  "Sign-up with a phone or email code, Google or Apple, a date-of-birth check and a face check",
  "My Club, Close Friends, Home and photo posts",
  "Minis with the video pipeline and a learned ranking model",
  "Stories, Highlights and Daily Moment",
  "One-to-one messages, voice notes, and voice and video calls",
  "The Floor live rooms and Nearby",
  "Host applications with ID checks, bookings, booking chat and recorded sessions",
  "Safety checks before content is shown, reporting, blocking and appeals",
  "Data download, privacy controls and account deletion in the app",
] as const;

const NEXT = [
  "Payments for sessions through Cashfree",
  "Listings on the App Store and Google Play",
  "Public launch in India, starting with college campuses",
] as const;

const LATER = [
  "ID proof through DigiLocker when a face looks like another account’s",
  "Sign-in codes by WhatsApp",
] as const;

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="We are Vighnir. We build The Club."
        lede="Vighnir (OPC) Private Limited is a technology company incorporated in India in January 2026. The Club is our product."
      />

      <section className="section" aria-labelledby="mission-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="h2" id="mission-title" style={{ marginTop: 12 }}>
              Help young adults in India find their people, and learn from the ones a step ahead, safely.
            </h2>
            <div className="prose">
              <p>
                In India, the most useful advice often comes from a senior who
                cracked the same interview, a friend of a friend who speaks the
                language, or someone who simply knows how. Finding that person,
                and paying them fairly for an hour of their time, is still hard.
              </p>
              <p>
                The Club puts that next to the people you already talk to every
                day: a social app built around a close circle of friends, with
                safe, paid one-to-one sessions with approved hosts inside it.
              </p>
              <div className="note">
                <b>Vision</b>
                <p>The place young India goes to be with its people, every day.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Company details</p>
            <dl className="facts" style={{ marginTop: 16 }}>
              <div><dt>Legal name</dt><dd>{LEGAL.entity}</dd></div>
              <div><dt>Type</dt><dd>One Person Company, private limited by shares</dd></div>
              <div><dt>CIN</dt><dd>{LEGAL.cin}</dd></div>
              <div><dt>Incorporated</dt><dd>17 January 2026</dd></div>
              <div><dt>Registrar</dt><dd>Registrar of Companies, Uttar Pradesh</dd></div>
              <div><dt>Registered office</dt><dd>199-197 Civil Lines, Bareilly - 243001, Uttar Pradesh, India</dd></div>
              <div><dt>Email</dt><dd><a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
              <div><dt>Product</dt><dd>The Club, for iPhone and Android</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="team-title">
        <div className="wrap">
          <p className="eyebrow">The team</p>
          <h2 className="h2" id="team-title" style={{ marginTop: 12 }}>A small, founder-led team in India.</h2>
          <div className="prose">
            <p>
              <strong>Shubham Pal</strong>, Founder and Director
            </p>
            <p>
              Vighnir is founder-led and based in India. The team designs and
              builds The Club itself: the iPhone and Android app, the backend,
              the video pipeline, the recommendation system and the safety
              tools. Host applications and unclear safety cases are reviewed by
              people on our team, not only by software.
            </p>
            <p>
              To reach the team, write to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="roadmap" aria-labelledby="road-title">
        <div className="wrap">
          <p className="eyebrow">Where The Club is today</p>
          <h2 className="h2" id="road-title" style={{ marginTop: 12 }}>Built, in closed testing, launching in India.</h2>
          <p className="lede">
            The Club’s backend runs in production and testers use the app on
            iPhone and Android. There is no public launch date yet.
          </p>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card">
              <p className="eyebrow">Built and in testing</p>
              <ul>
                {BUILT.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <p className="eyebrow">Next: public launch</p>
              <ul>
                {NEXT.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <p className="eyebrow">Decided, not switched on</p>
              <ul>
                {LATER.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="small">These are listed in our <Link className="text-link" href="/privacy#not-yet">Privacy Policy</Link> before they arrive.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
