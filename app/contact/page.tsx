import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { LEGAL } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Club and Vighnir (OPC) Private Limited: email hello@vighnir.com for help, feedback, hosting, partnerships and press. Registered office in Bareilly, Uttar Pradesh, India.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        lede={<>One inbox reaches the team: <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>. Tell us what it is about in the subject line and we will route it.</>}
      >
        <div className="btn-row">
          <a href={`mailto:${SITE.email}`} className="btn btn-primary">Email {SITE.email}</a>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="topics-title">
        <div className="wrap">
          <h2 className="h2" id="topics-title">What to write about</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <a className="card" href={`mailto:${SITE.email}?subject=Help%20with%20The%20Club`}>
              <Icon name="chat" /><h3 className="h3">Help with the app</h3>
              <p>Questions, problems or feedback about The Club. Testers: include your phone model and app version.</p>
            </a>
            <a className="card" href={`mailto:${SITE.email}?subject=Hosting%20on%20The%20Club`}>
              <Icon name="calendar" /><h3 className="h3">Hosting</h3>
              <p>Questions about becoming a host, your application or a booking.</p>
            </a>
            <a className="card" href={`mailto:${SITE.email}?subject=Partnership`}>
              <Icon name="users" /><h3 className="h3">Partnerships and press</h3>
              <p>Colleges, communities, companies and journalists.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="routes-title">
        <div className="wrap">
          <h2 className="h2" id="routes-title">For these, use the dedicated page</h2>
          <div className="grid g3" style={{ marginTop: 28 }}>
            <Link className="card" href="/grievance">
              <Icon name="flag" /><h3 className="h3">Complaints and grievances</h3>
              <p>A formal complaint about content or the service, under the IT Rules 2021, with our deadlines.</p>
              <span className="more">Grievance redressal →</span>
            </Link>
            <Link className="card" href="/privacy#contact">
              <Icon name="lock" /><h3 className="h3">Your personal data</h3>
              <p>Access, correct or erase your data, or take back consent.</p>
              <span className="more">Privacy contact →</span>
            </Link>
            <Link className="card" href="/account-deletion">
              <Icon name="doc" /><h3 className="h3">Delete your account</h3>
              <p>In the app, or by email if you cannot open it.</p>
              <span className="more">Delete your account →</span>
            </Link>
          </div>
          <p className="muted small" style={{ marginTop: 18 }}>
            To report a post, message, profile, host or session, use Report
            inside the app: it reaches our safety team fastest.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="post-title">
        <div className="wrap">
          <h2 className="h2" id="post-title">By post</h2>
          <address className="prose" style={{ fontStyle: "normal" }}>
            <p>
              <strong>{LEGAL.entity}</strong>
              <br />
              199-197 Civil Lines, Bareilly - 243001
              <br />
              Uttar Pradesh, India
              <br />
              CIN {LEGAL.cin}
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}
