import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Business model",
  description:
    "How The Club makes money: the social app is free, and The Club takes a platform fee from hosts' earnings on paid one-to-one sessions, paid through Cashfree. No ads, no selling data.",
  alternates: { canonical: "/business-model" },
};

export default function BusinessModel() {
  return (
    <main>
      <PageHero
        eyebrow="Business model"
        title="Free to use. We earn when a host earns."
        lede="The Club makes money one way: a platform fee on paid one-to-one sessions. Everything else is free, and there are no ads."
      />

      <section className="section" aria-labelledby="how-title">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="h2" id="how-title" style={{ marginTop: 12 }}>One fee, on one thing.</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <div className="card">
              <h3 className="h3">Free for everyone</h3>
              <p>Signing up, My Club, posts, Minis, Stories, messages, calls, The Floor and Nearby cost nothing. There is no subscription and no paid tier.</p>
            </div>
            <div className="card">
              <h3 className="h3">Paid sessions</h3>
              <p>A person books a one-to-one session with a host and pays the host’s all-in price. Hosts set their own prices.</p>
            </div>
            <div className="card">
              <h3 className="h3">The platform fee</h3>
              <p>The Club keeps a platform fee from the host’s earnings when the payout is sent. The host sees the fee in the app before applying and before every booking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="flow-title">
        <div className="wrap">
          <p className="eyebrow">Where the money goes</p>
          <h2 className="h2" id="flow-title" style={{ marginTop: 12 }}>The Club never holds the money itself.</h2>
          <ol className="pipeline" style={{ marginTop: 32 }}>
            <li><b>Client pays</b><span>One all-in price on the payment page of Cashfree, a licensed payment company.</span></li>
            <li><b>Held</b><span>Cashfree holds the host’s share while the session happens.</span></li>
            <li><b>Session ends</b><span>The 72-hour dispute window opens. Refunds that are due come out of the held share.</span></li>
            <li><b>Payout</b><span>Cashfree pays the host’s share to the account the host set up with them.</span></li>
            <li><b>Fee</b><span>The Club’s platform fee is deducted when the payout is sent.</span></li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="not-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">What we do not do</p>
            <h2 className="h2" id="not-title" style={{ marginTop: 12 }}>No ads. No selling data.</h2>
            <div className="prose">
              <p>
                The Club has no advertising, no advertising SDK and no
                advertising ID, and we do not sell your data. Paid sessions are
                always one-to-one: there are no tips, gifts, paid rooms or paid
                group sessions, and no paid boost for posts.
              </p>
              <p>
                That keeps our interests simple: The Club does well when people
                find hosts worth paying for and come back to their friends.
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="h3" style={{ marginTop: 0 }}>Why this model</h3>
            <div className="prose">
              <ul>
                <li>We are starting with college students and young professionals, who often look for help from people a few steps ahead of them: placement prep, a language, a skill.</li>
                <li>Hosts get paid for an hour of what they know without building their own audience or payment setup.</li>
                <li>The social side gives people a reason to open the app every day, so hosts are found where people already are.</li>
                <li>The backend runs on serverless infrastructure, so running costs grow with use rather than ahead of it.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="stage-title">
        <div className="wrap">
          <p className="eyebrow">Where we are</p>
          <h2 className="h2" id="stage-title" style={{ marginTop: 12 }}>Built, in testing, not yet earning.</h2>
          <div className="prose">
            <p>
              The Club is in closed testing in India and has no revenue yet.
              Booking is built; payments switch on at public launch, once our
              payment setup with Cashfree is complete. The fee level will be
              shown in the app before any host applies. Our{" "}
              <Link href="/terms#payments">Terms of Service</Link> will be updated
              with the payment rules before anyone can pay.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/about#roadmap" className="btn btn-ghost">See the roadmap</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
