import type { Metadata } from "next";
import Link from "next/link";

/**
 * How ranking works (flow 0003, F3-P11). It describes ONLY what the feed does
 * today. Every later flow-0003 phase that changes what the feed uses adds one
 * line here and bumps UPDATED / VERSION. Two promises on this page are tied to
 * the app: "no boost button" (the promoted slot of F3-P09 must change that
 * sentence) and the reach-appeal window of 24 hours to 30 days with a 7-day
 * answer (REACH_APPEAL_* in the app).
 */
const UPDATED_ISO = "2026-11-06";
const UPDATED = "6 November 2026";
const VERSION = "1";

/** The site's --faint token is 2.58 : 1 on the page ground: too low for the
 *  date a reader relies on. This page lifts only its eyebrow and meta line to
 *  --dim (5.82 : 1); the other legal pages are a follow-up. */
const readable = { color: "var(--dim)" } as const;

export const metadata: Metadata = {
  title: "How ranking works",
  description:
    "What decides which posts you see in Home on The Club, a Vighnir product: what the feed uses, what it never looks at, what can lower a post, and what you can do about it.",
  alternates: { canonical: "/how-ranking-works" },
};

const TOC = [
  ["shows", "What Home shows you"],
  ["uses", "What it uses"],
  ["lowers", "What can lower a post"],
  ["you", "What you can do"],
  ["changes", "Changes"],
] as const;

export default function HowRankingWorks() {
  return (
    <main className="legal" id="top">
      <section className="legal-head">
        <div className="wrap">
          <p className="mono legal-eyebrow" style={readable}>
            The Club · a Vighnir product
          </p>
          <h1>How ranking works</h1>
          <p className="lede">
            What decides which posts you see in Home, what it never looks at,
            and what you can do about it. Written to match what the app does
            today.
          </p>
          <div className="legal-meta mono" style={readable}>
            <span>
              Last updated <time dateTime={UPDATED_ISO}>{UPDATED}</time>
            </span>
            <span>Version {VERSION}</span>
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
            <section id="shows">
              <h2>What Home shows you</h2>
              <p>
                Home is a feed of posts. Most of it comes from{" "}
                <strong>people you club</strong>, and the newest posts from them
                come first. Your <strong>close friends’</strong> posts stay near
                the top.
              </p>
              <p>
                Now and then Home also shows a post from someone you don’t club
                yet. Every one of those is labelled <strong>Suggested</strong>,
                so you always know which posts are from your club and which are
                not. Each visit includes only a few of them.
              </p>
            </section>

            <section id="uses">
              <h2>What it uses</h2>
              <p>To choose and order the posts in Home, the feed uses:</p>
              <ul>
                <li>
                  <strong>What you do in The Club:</strong> the posts you like,
                  comment on and save, the posts you hide, and how long a post
                  stays on your screen.
                </li>
                <li>
                  <strong>Who you club</strong>, and who you have added to Close
                  Friends.
                </li>
                <li>
                  <strong>How recent a post is</strong>, and how many people are
                  liking and commenting on it.
                </li>
              </ul>
              <p>
                It does <strong>not</strong> use your phone number, your
                messages, or anything from your contacts beyond who you have
                clubbed. There is no boost button, and nobody on our team can
                push a post further for you or for anyone else.
              </p>
            </section>

            <section id="lowers">
              <h2>What can lower a post</h2>
              <p>Two things can make a post reach fewer people:</p>
              <ul>
                <li>
                  <strong>A safety check.</strong> Every photo and caption is
                  checked before others see it. If the check thinks a post might
                  break our rules, we may show it to fewer people, and we don’t
                  suggest it to people who don’t club its author, until a person
                  has looked.
                </li>
                <li>
                  <strong>Many people saying “Stop showing me this”.</strong> If
                  several different people say it about a post that was
                  suggested to them, a person on our team looks at it and may
                  show it to fewer people who don’t club the author.
                </li>
              </ul>
            </section>

            <section id="you">
              <h2>What you can do</h2>
              <ul>
                <li>
                  <strong>Hide a post.</strong> Tap <em>…</em> on any post. It
                  leaves your Home and its author isn’t told.
                </li>
                <li>
                  <strong>Stop showing me this.</strong> On a Suggested post,{" "}
                  <em>…</em> offers this instead of Hide. It does the same, and
                  you’ll see fewer posts like it.
                </li>
                <li>
                  <strong>Why am I seeing this.</strong> Tap <em>…</em> on any
                  post for a few plain sentences about why it is in your Home.
                </li>
                <li>
                  <strong>Ask about your post’s reach.</strong> On your own
                  post, under <em>Who can see this</em>. If a post reached fewer
                  people than you expected, ask. A person looks at the real
                  numbers and writes back in the app within 7 days. You can ask
                  once for each post, from 24 hours to 30 days after you posted
                  it.
                </li>
              </ul>
              <p>
                If you disagree with a decision, or we have not answered in
                time, you can write to our Grievance Officer. We acknowledge a
                complaint within 24 hours and resolve it within 36 hours. The
                details are under{" "}
                <Link href="/terms#grievance">Reporting &amp; grievances</Link>{" "}
                in our Terms.
              </p>
            </section>

            <section id="changes">
              <h2>Changes</h2>
              <p>
                This page describes only what the feed does today. We update it
                whenever the feed starts using something new, and the date at
                the top says when it last changed.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
