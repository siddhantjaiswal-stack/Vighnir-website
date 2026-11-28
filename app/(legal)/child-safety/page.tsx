import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

/**
 * Child safety standards: the page Google Play's child-safety declaration points at.
 * Written from the owner's 14 November 2026 draft, checked against the Privacy Policy
 * and /safety on 28 November 2026. Keep every statement true of the app that ships;
 * change section 7 in the same release as any change to the checks it describes.
 */
export const metadata: Metadata = {
  title: "Child safety standards",
  description:
    "The Club is for adults only. Our standards against child sexual abuse and exploitation, how to report, what we do about a report, and who to contact.",
  alternates: { canonical: "/child-safety" },
};

const TOC = [
  ["standard", "Our standard"],
  ["adults", "Adults only"],
  ["not-allowed", "What is not allowed"],
  ["report", "How to report"],
  ["response", "What we do about a report"],
  ["law", "The law we follow"],
  ["not-yet", "Not in the app today"],
  ["contact", "Contact"],
] as const;

export default function ChildSafety() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow">The Club · a Vighnir product</p>
          <h1>Child safety standards</h1>
          <p className="lede">
            <strong>{LEGAL.product}</strong> is for adults only. This page says
            what we will not allow, how you can tell us about it, and what we do
            when you do.
          </p>
          <div className="legal-meta mono">
            <span>
              Effective{" "}
              <time dateTime="2026-11-28">28 November 2026</time>
            </span>
            <span>India · English</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap legal-grid">
          <nav className="legal-toc mono" aria-label="On this page">
            <b>Contents</b>
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="legal-copy">
            <section id="standard">
              <h2>1. Our standard</h2>
              <p>
                We have zero tolerance for child sexual abuse and exploitation
                (CSAE), in any form, anywhere in {LEGAL.product}. That covers
                child sexual abuse material (CSAM), sexualised images or talk
                about anyone under 18, grooming, and any attempt to contact,
                meet, pay or pressure someone under 18 for sexual purposes.
              </p>
              <p>
                Content or behaviour like this is removed, the account is closed,
                and it is reported to the authorities.
              </p>
            </section>

            <section id="adults">
              <h2>2. Adults only</h2>
              <ul>
                <li>
                  You must be <strong>18 or over</strong> to have an account.
                  {" "}{LEGAL.product} is not designed for, or marketed to,
                  children.
                </li>
                <li>
                  At sign-up you give your date of birth. Our servers refuse
                  one that puts you under 18, so a modified app cannot get
                  around it. We are plain about the limit: this is a{" "}
                  <strong>self-declared</strong> date of birth that we enforce,
                  not a verified age. Our{" "}
                  <Link href="/privacy#children">Privacy Policy</Link> says the
                  same.
                </li>
                <li>
                  If someone may be under 18, anyone can report their account
                  (see below). An officer can then freeze the account while the
                  officer checks. A frozen account cannot ask for or pay for a
                  session, send messages or show up on Nearby, and no stranger
                  can start a chat with it. If the person is an adult the freeze is lifted.
                  If the person is under 18 the account is closed and queued
                  for deletion, and any unfinished paid session is ended with a
                  full refund.
                </li>
              </ul>
            </section>

            <section id="not-allowed">
              <h2>3. What is not allowed</h2>
              <p>
                None of the following is allowed in a post, a Mini, a comment, a
                profile photo, a bio, a username, a message or a live session:
              </p>
              <ul>
                <li>
                  Any image, video or description that shows a person under 18
                  in a sexual way, or in a sexualised way, whether real, edited
                  or made to look real.
                </li>
                <li>
                  Asking a person who says or appears to be under 18 for
                  sexual content, a meeting, a call or money, or building their
                  trust in order to do any of these.
                </li>
                <li>
                  Threatening to share, or sharing, an intimate image of
                  anyone, including to force them to send more.
                </li>
                <li>
                  Pointing others to this kind of material, on or off{" "}
                  {LEGAL.product}.
                </li>
              </ul>
            </section>

            <section id="report">
              <h2>4. How to report</h2>
              <h3>In the app</h3>
              <ul>
                <li>
                  On a post, a comment, a message or a chat, choose{" "}
                  <strong>Report</strong>, then{" "}
                  <strong>Nudity or sexual activity</strong>, and pick the
                  reason that fits.
                </li>
                <li>
                  On a profile that looks like it belongs to someone under 18,
                  choose <strong>Report</strong>, then{" "}
                  <strong>This person looks under 18</strong>.
                </li>
                <li>
                  You can <strong>block</strong> any account yourself, at any
                  time.
                </li>
              </ul>
              <h3>Outside the app</h3>
              <p>
                Write to{" "}
                <a href={`mailto:${LEGAL.contactEmail}`}>
                  {LEGAL.contactEmail}
                </a>
                . Say what you saw and where, and, if you can, the username. You
                do not have to prove anything, and you do not have to be a user
                of {LEGAL.product}.
              </p>
              <div className="legal-note glass">
                <span className="mono">If a child is in danger now</span>
                <p>
                  Call <strong>112</strong>, India’s emergency number, or{" "}
                  <strong>1098</strong>, Childline. You can also report child
                  sexual abuse material on the national cybercrime reporting
                  portal,{" "}
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    cybercrime.gov.in
                  </a>
                  . Please do that as well as, not instead of, telling us.
                </p>
              </div>
            </section>

            <section id="response">
              <h2>5. What we do about a report</h2>
              <ul>
                <li>
                  <strong>A person reads it.</strong> A report that says a minor
                  is involved goes to its own queue and is read by a person, not
                  only by software. On a post, such a report can hide the post
                  for everyone at once, before anyone has looked.
                </li>
                <li>
                  <strong>We remove it.</strong> Content that breaks this
                  standard is removed and the account is closed.
                </li>
                <li>
                  <strong>We keep the evidence.</strong> When we report to the
                  authorities, a sealed copy of the material is set aside for
                  them. It is not deleted because the account was deleted, and
                  it is not shown to anyone else.
                </li>
                <li>
                  <strong>We report to the authorities.</strong> A person at{" "}
                  {LEGAL.entity} files the report, with the police or the
                  national cybercrime reporting portal, and records that it was
                  filed. The app does not file anything on its own.
                </li>
                <li>
                  <strong>We keep the outcome private.</strong> When an account
                  is checked because it looks under 18, the outcome is not sent
                  to the people who reported it.
                </li>
              </ul>
            </section>

            <section id="law">
              <h2>6. The law we follow</h2>
              <p>
                {LEGAL.product} is operated in India and follows the laws that
                apply here to child safety online:
              </p>
              <ul>
                <li>
                  The Protection of Children from Sexual Offences (POCSO) Act,
                  2012, including the duty to report under sections 19 and 20.
                </li>
                <li>
                  The Information Technology Act, 2000, and the Information
                  Technology (Intermediary Guidelines and Digital Media Ethics
                  Code) Rules, 2021.
                </li>
                <li>
                  The Digital Personal Data Protection Act, 2023, which treats
                  anyone under 18 as a child; see{" "}
                  <Link href="/privacy#children">our Privacy Policy</Link>.
                </li>
              </ul>
            </section>

            <section id="not-yet">
              <h2>7. How we check, and what we do not check</h2>
              <p>
                Written down so that nothing on this page promises more than the
                app does.
              </p>
              <dl className="legal-dl">
                <div>
                  <dt>Automatic matching against known abuse images</dt>
                  <dd>
                    For each image you upload, we make a digital fingerprint (a
                    hash) on our own servers and compare it, never the image,
                    with databases of known child sexual abuse material. We use
                    an industry child-safety hash-matching service for this, with
                    a second service from a child-protection organisation as a
                    backup. A person acts on anything that is reported to us,
                    whether or not it matched. The{" "}
                    <Link href="/privacy#collect">Privacy Policy</Link> has the
                    details.
                  </dd>
                </div>
                <div>
                  <dt>Checking a person’s real age</dt>
                  <dd>
                    We do not check an ID or a face to confirm age. The date of
                    birth is self-declared (section 2).
                  </dd>
                </div>
              </dl>
              <p>
                This page will be updated in the same release that changes
                either of these.
              </p>
            </section>

            <section id="contact">
              <h2>8. Contact</h2>
              <p>
                Child safety reports and complaints go to the Grievance Officer.
              </p>
              <div className="legal-note glass">
                <span className="mono">Child safety contact</span>
                <p>{LEGAL.grievanceOfficerLine}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${LEGAL.contactEmail}`}>
                    {LEGAL.contactEmail}
                  </a>
                </p>
              </div>
              <p>
                Our deadlines for acting on a complaint are on{" "}
                <Link href="/grievance">Grievance redressal</Link>. See also{" "}
                <Link href="/support">Support</Link>.
              </p>
              <p>
                {LEGAL.product} is operated by {LEGAL.entity} (CIN {LEGAL.cin}),{" "}
                {LEGAL.postalAddress.replace(`${LEGAL.entity}, `, "")}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
