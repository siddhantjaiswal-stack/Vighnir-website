/**
 * Constants shared by the legal pages (/privacy, /terms, /account-deletion).
 *
 * These pages are load-bearing for Google's OAuth consent screen, Google Play's
 * user-data and account-deletion policies, Apple's App Store review guidelines,
 * India's DPDP Act 2023 and the IT (Intermediary Guidelines) Rules 2021.
 * Keep every statement on them true of the code that actually ships.
 *
 * ── CONTACTS ────────────────────────────────────────────────────────────────
 *
 *  1. Grievance Officer: Shubham Pal, Director of Vighnir (OPC) Private Limited
 *     (owner ruling 2026-11-28). The IT Rules 2021 (rule 3(2)(a)) ask for the
 *     officer's name and contact details; both are on every page that carries a
 *     grievance contact. One edit in `grievanceOfficerLine` updates them all.
 *
 *  2. One public mailbox: hello@vighnir.com (owner ruling 2026-11-28). There are
 *     no separate role mailboxes; the constants below all point at it so a
 *     page never has to choose.
 *
 *  3. The registered entity is "Vighnir (OPC) Private Limited", confirmed from
 *     the Apple Developer organisation account (team JQHHG3FT8G). The CIN and
 *     registered office come from the certificate of incorporation. The Google
 *     Play developer account must be registered under this same name.
 */
export const LEGAL = {
  /** Corporate Identification Number, from the MCA master data. */
  cin: "U62099UP2026OPC241657",
  /** Registered name of the operator. See gap 2 above. */
  entity: "Vighnir (OPC) Private Limited",
  product: "The Club",

  effective: "3 August 2026",
  effectiveIso: "2026-08-03",
  /** The privacy page alone was revised on this date (rewritten from what the app collects, D-347; 16 Nov: edited and unsent messages kept 180 days, D-432; 28 Nov: one grievance timeline, opt-in feed, analytics and crash reports, no partner names); terms and account deletion keep the date above. */
  privacyEffective: "28 November 2026",
  privacyEffectiveIso: "2026-11-28",
  version: "1.0",
  /** The account-deletion page alone was revised on this date (in-app deletion and Sign in with Apple are live); privacy and terms keep their own dates. */
  deletionEffective: "16 November 2026",
  deletionEffectiveIso: "2026-11-16",
  deletionVersion: "1.2",

  /** The one public company mailbox (see note 2 above). */
  contactEmail: "hello@vighnir.com",
  privacyEmail: "hello@vighnir.com",
  grievanceEmail: "hello@vighnir.com",
  deletionEmail: "hello@vighnir.com",

  /** The Grievance Officer (note 1 above). Shown on every page with a grievance contact. */
  grievanceOfficerLine: "Grievance Officer: Shubham Pal, Director, Vighnir (OPC) Private Limited",

  /** The registered office, from the certificate of incorporation (docs dropped 2026-08-03). */
  postalAddress: "Vighnir (OPC) Private Limited, 199-197 Civil Lines, Bareilly - 243001, Uttar Pradesh, India",
} as const;

/** Formatted for `<time dateTime>` and for prose, from one source. */
export const EFFECTIVE_LINE = `Effective ${LEGAL.effective} · Version ${LEGAL.version}`;
