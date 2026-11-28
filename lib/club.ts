/**
 * Every product claim on the site, in one place.
 *
 * Each entry is traced to the ground-truth sheet the site was written from:
 * `room/site-revamp-1128/ground-product.md` (GP §n) in the container repo, which
 * cites the app repo (`the-club` at origin/main 6991cb3fe) by path:line, the
 * published policy pages, or an owner ruling.
 *
 * Rules this file keeps (GP §0, §12). Change a sentence here only if the app
 * changed, and change the legal pages in the same release:
 *  - no fee percentage (the fee is an owner setting with no public figure)
 *  - no launch date, no store badges or store links (no listing is live)
 *  - no "all data stays in India" (only the account database, face code and
 *    request logs are in Mumbai)
 *  - messages are not end-to-end encrypted; never say "encrypted" alone
 *  - "date of birth check", never "age verification"
 *  - DigiLocker is planned, not live; payments are not switched on yet
 *  - no video-streaming protocol names: Minis are MP4 in two sizes
 *  - no model, vendor-contract or child-safety database names in marketing copy
 *  - no user, revenue, latency or test numbers
 */

/** GP §8. */
export const STATUS = {
  short: "In closed testing in India",
  line: "The Club is built and in closed testing in India. Public launch on iPhone and Android follows; there is no date yet.",
  platforms: "iPhone and Android",
} as const;

export type Feature = {
  id: string;
  name: string;
  /** One line for cards. */
  lead: string;
  /** What a person actually does, in short points. */
  points: readonly string[];
};

/** GP §3. Only features that are built and switched on for testers. */
export const FEATURES: readonly Feature[] = [
  {
    id: "my-club",
    name: "My Club",
    lead: "A close circle of people you actually know, not a follower count.",
    points: [
      "Club someone to add them. When it is mutual, you are in each other’s Club.",
      "Keep a Close Friends list for the things you only share with a few people.",
      "Club requests let you decide who gets in. Syncing your contacts is optional.",
    ],
  },
  {
    id: "home",
    name: "Home and posts",
    lead: "Your Club’s posts, newest first, with close friends kept near the top.",
    points: [
      "Post photos with captions, choose who sees each post, save drafts and share links.",
      "Comment, like and save. A few posts from outside your Club are clearly marked “Suggested”.",
      "There is no boost button and nobody on our team can push a post. “Why am I seeing this” explains every suggestion.",
      "Turn the personalised feed off, or reset it, from settings.",
    ],
  },
  {
    id: "minis",
    name: "Minis",
    lead: "Short vertical videos, up to about a minute.",
    points: [
      "Record or pick a clip, trim it, add a caption and a sound, and upload in the background.",
      "Label a Mini as AI-made when it is. Collaborate with someone, or keep it as a draft.",
      "The Minis feed learns from what you finish and what you skip.",
      "A new Mini is shown to a small group first and reaches more people if they like it.",
    ],
  },
  {
    id: "stories",
    name: "Stories and Highlights",
    lead: "Photos and short videos that disappear after 24 hours.",
    points: [
      "Add stickers, drawing, text and music, and pick who sees each story: My Club, Close Friends or everyone.",
      "See who viewed it. Expired stories wait in a private archive for 30 days.",
      "Keep the ones you want as Highlights on your profile.",
    ],
  },
  {
    id: "moment",
    name: "Daily Moment",
    lead: "Once a day, a short window to show your Club what you are doing right now.",
    points: [
      "The time is different for each person, and the window lasts a few minutes.",
      "The photo uses the back and the front camera together.",
      "Only your Club sees it, and you see your friends’ Moments after you post yours.",
    ],
  },
  {
    id: "messages",
    name: "Messages and calls",
    lead: "One-to-one chat, voice notes, and voice and video calls with your Club.",
    points: [
      "Send text, photos, videos and voice notes, react, and send view-once photos.",
      "Edit a message for 15 minutes, or unsend it at any time. Typing and “Seen” can be switched off.",
      "People outside your Club can only send a text request, which you can accept or ignore.",
      "Voice and video calls between people in each other’s Club go phone to phone where possible and are not recorded.",
    ],
  },
  {
    id: "floor",
    name: "The Floor",
    lead: "One tap drops you into a live chat room with other people on The Club.",
    points: [
      "Choose a normal room, or an anonymous room where you appear under a fixed anonymous name.",
      "A word filter and reports keep rooms usable. A room keeps its messages for 24 hours.",
    ],
  },
  {
    id: "nearby",
    name: "Nearby",
    lead: "See people and hosts around you, only if you switch it on.",
    points: [
      "Distance is shown in words (“Very close”, “Close”, “A few km away”, “Further away”), never as a number or on a map.",
      "Your exact location is not kept: only a rough area of about 1 km, deleted when you switch Nearby off.",
      "Hide yourself at any time.",
    ],
  },
  {
    id: "search",
    name: "Search and Discover",
    lead: "Find people, hashtags and Minis.",
    points: [
      "Search people, hashtags and words, and browse Minis in Discover.",
      "“Suggested for you” helps you find people to add to your Club.",
    ],
  },
  {
    id: "sessions",
    name: "One-to-one sessions",
    lead: "Book a paid chat, voice or video session with an approved host.",
    points: [
      "Hosts teach, coach or help in ten categories, from careers and study help to music and cooking.",
      "Every session happens inside the app. There are no in-person meetings.",
      "Booking is built. Payments switch on at public launch, so no one can pay for a session yet.",
    ],
  },
] as const;

/** GP §2, app repo hosts/config.ts DEFAULT_CATEGORIES. */
export const CATEGORIES = [
  "Careers",
  "Study help",
  "Languages",
  "Fitness",
  "Cooking",
  "Music lessons",
  "Tech help",
  "Creator tips",
  "Astrology",
  "Talk and listen (non-clinical)",
] as const;

/** GP §2, app repo hosts/config.ts. */
export const LANGUAGES = [
  "English",
  "Hindi",
  "Bengali",
  "Telugu",
  "Marathi",
  "Tamil",
  "Urdu",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Odia",
  "Punjabi",
  "Assamese",
] as const;

/** GP §1, §3 (sign-up row). */
export const SIGN_UP = [
  "Sign in with a code sent to your phone or email, or with Google or Apple. There are no passwords.",
  "Give your date of birth. The Club does not create an account for anyone under 18.",
  "Take a short face video so that one person has one account. Only a face code is kept, never the video.",
] as const;

/**
 * GP §4. Values marked "by default" are admin settings and the app shows the
 * rules that apply to a booking before it is accepted (host terms §7).
 */
export const BOOKING_STEPS = [
  {
    title: "Find a host",
    body: "Browse hosts by category and language, or in Nearby. A host’s page shows their categories, languages, the price for chat, voice and video, their rating, and “Online sessions only”.",
  },
  {
    title: "Send a request",
    body: "Pick chat, voice or video, a length (30, 60 or 90 minutes) and a time. The host has 12 hours to accept.",
  },
  {
    title: "Pay one all-in price",
    body: "Once the host accepts, you pay within the time shown on Cashfree’s payment page (a licensed payment company). The Club never sees your card or UPI details. Payments switch on at public launch.",
  },
  {
    title: "Meet in the app",
    body: "The booking has its own chat with a timer, and reminders 60 and 10 minutes before. The session opens 5 minutes early. Voice and video sessions are recorded for safety, and a marker shows the whole time.",
  },
  {
    title: "Rate it",
    body: "Only the person who booked can review the session, once, within 14 days. The host can reply once.",
  },
] as const;

/** GP §4 cancellation defaults, matching host terms §7. */
export const CANCELLATION = [
  { when: "You cancel 24 hours or more before", result: "Full refund." },
  { when: "You cancel between 24 and 2 hours before", result: "Half refunded; the host keeps half." },
  { when: "You cancel under 2 hours before, or do not join", result: "No refund; the host keeps their share." },
  { when: "The host cancels, at any time", result: "Full refund, and the host gets a strike." },
  { when: "The host does not join within 10 minutes", result: "Full refund, and the host gets a strike." },
  { when: "Neither of you joins", result: "Full refund, no strike." },
] as const;

/** GP §4 host steps. */
export const HOST_STEPS = [
  {
    title: "Apply in the app",
    body: "Any adult on The Club can apply. Choose up to three categories, the languages you speak, and your prices for chat, voice and video.",
  },
  {
    title: "Verify who you are",
    body: "Give your real legal name, a photo of one government ID (PAN, driving licence, passport, voter ID or a masked Aadhaar) and a live selfie. A person on our team checks them. The ID photo and selfie are deleted 30 days after the decision.",
  },
  {
    title: "Get approved",
    body: "We aim to review an application within 48 hours. If something needs changing, we tell you what. Your host page goes live only after approval.",
  },
  {
    title: "Take bookings",
    body: "Accept the requests you want, run sessions inside the app, and see your bookings, ratings and earnings in Insights.",
  },
  {
    title: "Get paid",
    body: "Your share is held by the payment company until the session ends and the dispute window closes (72 hours by default), then paid to the account you set up with them.",
  },
] as const;

export type Faq = { q: string; a: string };

/**
 * Rendered on /faq and emitted as FAQPage JSON-LD there (the two must match).
 * The homepage shows the first four.
 */
export const FAQS: readonly Faq[] = [
  {
    q: "What is The Club?",
    a: "The Club is a social app for adults in India. You keep a close circle of friends called My Club, post photos, Minis and Stories, message and call, join live chat rooms on The Floor, and book paid one-to-one online sessions with approved hosts. It is built by Vighnir (OPC) Private Limited.",
  },
  {
    q: "Can I download it today?",
    a: "Not yet. The Club is built and in closed testing in India, with testers on iPhone and Android. It will be on the App Store and Google Play at public launch. There is no launch date yet.",
  },
  {
    q: "Is The Club free?",
    a: "Yes. Making an account, posting, messaging, calls and The Floor are free. The only thing you pay for is a one-to-one session you book with a host, at the price the host sets.",
  },
  {
    q: "Who can use The Club?",
    a: "Adults only. You must be 18 or over, and The Club does not create an account for anyone whose date of birth is under 18.",
  },
  {
    q: "Who are the hosts?",
    a: "Hosts are adults who applied in the app and were approved by a person on our team after an ID and selfie check. They offer sessions in ten categories: careers, study help, languages, fitness, cooking, music lessons, tech help, creator tips, astrology, and talk and listen. The check confirms who a host is; it is not a check of their qualifications.",
  },
  {
    q: "Do sessions ever happen in person?",
    a: "No. Every session is a chat, voice call or video call inside The Club. Hosts may not move a client to another app, phone number or platform, or arrange to meet.",
  },
  {
    q: "How do payments work?",
    a: "Payments switch on at public launch. You will pay one all-in price on the page of Cashfree, a licensed payment company. The Club never sees your card or UPI details. The host’s share is held until the session ends and the dispute window closes, then paid out.",
  },
  {
    q: "What if a session is cancelled?",
    a: "If you cancel 24 hours or more before, you get everything back; between 24 and 2 hours, half; under 2 hours, nothing. If the host cancels or does not turn up, you get everything back. These are the default rules; the app shows the rules for each booking before it is accepted.",
  },
  {
    q: "Are my messages private?",
    a: "Messages are encrypted in transit but are not end-to-end encrypted. Our team opens a private message only when it is reported or the law requires it, and every such read is logged.",
  },
  {
    q: "Are sessions recorded?",
    a: "Voice and video sessions with hosts are recorded, and both people agree before booking. Only the safety team can open a recording, only after a report or a dispute, and recordings are deleted 30 days after the session. Calls between friends are not recorded.",
  },
  {
    q: "How does The Club make money?",
    a: "From a platform fee on paid sessions, taken from the host’s earnings. There are no ads and we do not sell data. The fee is shown in the app before a host applies and before each booking.",
  },
  {
    q: "Where is my data stored?",
    a: "Your account database is in Mumbai, and so are the face code and request logs. Photos, videos and voice notes are kept in Cloudflare’s storage, and live messaging runs on Cloudflare’s network in Asia. The Privacy Policy lists every place your data goes.",
  },
  {
    q: "How do I report something or complain?",
    a: "Report any post, Mini, message, profile, host or session from inside the app. For a formal complaint, see the Grievance page; we acknowledge complaints within 24 hours.",
  },
  {
    q: "How do I delete my account?",
    a: "In the app, go to Settings, then Account, then Delete account. If you cannot open the app, the Delete your account page explains how to ask us by email.",
  },
];
