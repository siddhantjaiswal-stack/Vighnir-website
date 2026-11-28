/**
 * A real screenshot of The Club in a clean device frame.
 *
 * The files are in public/shots/ (built by scripts/make-shots.mjs from the
 * 28 Nov 2026 captures of the main build running against a private test
 * environment: fictional test accounts and sample content). Each is served as AVIF
 * or WebP at three widths. Alt text follows the captions written with the
 * captures (room/site-revamp-1128/shots/captions.md).
 */
const SHOTS = {
  "sign-in": {
    w: 1206,
    h: 2622,
    caption: "Sign in with a code, no password",
    alt: "The Club sign-in screen: phone number or email with a one-time code and no password, plus Continue with Apple and Continue with Google.",
  },
  consent: {
    w: 1206,
    h: 2622,
    caption: "What The Club keeps about you, shown at sign-up",
    alt: "The “Before you continue” sheet shown at sign-up. It says what The Club keeps about you and why, with Agree and continue and Not now.",
  },
  chat: {
    w: 1206,
    h: 2622,
    caption: "A one-to-one chat",
    alt: "A direct-message conversation between two test accounts, with voice and video call buttons in the header.",
  },
  "host-profile": {
    w: 1206,
    h: 1537,
    caption: "A host’s page, with session prices",
    alt: "A host’s profile seen by another member: Clubbed, Message, Voice and Video buttons, the host card with headline, topics, languages and bio, and session prices (Chat Rs 199 and Voice call Rs 299 per 30 minutes). The host is a test account.",
  },
  settings: {
    w: 1206,
    h: 2622,
    caption: "Settings, from Privacy to Delete account",
    alt: "The Settings list: Privacy, Notifications, Account, Contacts, Your feed, Data and Minis, The Floor, Your data and rights, Help and contact, Legal and about, Log out and Delete account.",
  },
  privacy: {
    w: 1206,
    h: 2622,
    caption: "Privacy: who can club you",
    alt: "Settings, Privacy: who can club you (ask every time, accept automatically, or accept and club back), Nearby, activity status and read receipts.",
  },
} as const;

export type ShotName = keyof typeof SHOTS;
const WIDTHS = [240, 360, 480] as const;

function set(name: string, ext: "avif" | "webp") {
  return WIDTHS.map((w) => `/shots/${name}-${w}.${ext} ${w}w`).join(", ");
}

export default function Shot({
  name,
  priority = false,
  caption,
}: {
  name: ShotName;
  /** True only for the first screen a visitor sees; everything else lazy-loads. */
  priority?: boolean;
  caption?: string;
}) {
  const s = SHOTS[name];
  const sizes = "240px";
  return (
    <figure className="ill">
      <div className="phone real">
        <div className="phone-screen" style={{ aspectRatio: `${s.w} / ${s.h}` }}>
          <picture>
            <source type="image/avif" srcSet={set(name, "avif")} sizes={sizes} />
            <source type="image/webp" srcSet={set(name, "webp")} sizes={sizes} />
            <img
              src={`/shots/${name}-360.webp`}
              width={360}
              height={Math.round((360 * s.h) / s.w)}
              alt={s.alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              {...(priority ? { fetchPriority: "high" as const } : {})}
            />
          </picture>
        </div>
      </div>
      <figcaption className="cap">{caption ?? s.caption}</figcaption>
    </figure>
  );
}

export function ShotNote() {
  return (
    <p className="muted small shot-note">
      Screens from a private test build, with test accounts and sample
      content.
    </p>
  );
}
