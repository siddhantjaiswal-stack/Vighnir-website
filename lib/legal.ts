/**
 * Constants shared by the legal pages (/privacy, /terms, /account-deletion).
 *
 * These pages are load-bearing for Google's OAuth consent screen, Google Play's
 * user-data and account-deletion policies, Apple's App Store review guidelines,
 * India's DPDP Act 2023 and the IT (Intermediary Guidelines) Rules 2021.
 * Keep every statement on them true of the code that actually ships.
 *
 * ── OPEN GAPS (a human must fill these; do not invent values) ───────────────
 *
 *  1. NO GRIEVANCE OFFICER IS APPOINTED YET. No person is named on the public
 *     pages (decision D-223, 2026-11-11, restated 2026-11-13): the pages show
 *     `grievanceOfficerLine` below, which says the name is "to be named before
 *     launch", and the role mailboxes `grievance@vighnir.com` and
 *     `privacy@vighnir.com`. No personal name or personal mailbox may appear
 *     on any public page. Rule 3(2)(a) of the IT Rules 2021 requires the
 *     officer's NAME and contact details, and the app stores ask for them at
 *     submission, so this is a launch blocker (tracked in the app repo,
 *     PENDING.md §9.1) and not a permanent state. The production build
 *     deliberately does NOT fail on the placeholder: the site must stay
 *     deployable. When a person is appointed, replace `grievanceOfficerLine`
 *     with their name and role (one edit; both pages follow) and update the
 *     app's GRIEVANCE_OFFICER_CONTACT.
 *     BEFORE DEPLOY: `grievance@` and `privacy@` must exist and reach a human.
 *
 *  2. RESOLVED 2026-08-03: the registered entity is "Vighnir (OPC) Private
 *     Limited" — confirmed from the Apple Developer organisation account
 *     (team JQHHG3FT8G). RESOLVED FULLY 2026-08-03: CIN and registered
 *     office added from the incorporation papers. The Google Play developer
 *     account must be registered under this same name.
 *
 *  3. RESOLVED 2026-08-03: registered office is 199-197 Civil Lines,
 *     Bareilly - 243001, UP (certificate of incorporation). Gap closed.
 *
 *  4. The privacy and deletion contacts are the role mailbox `privacy@vighnir.com`
 *     (deletion requests go to the same mailbox; there is no `deletion@`). One
 *     edit here updates the pages.
 */
export const LEGAL = {
  /** Corporate Identification Number, from the MCA master data. */
  cin: "U62099UP2026OPC241657",
  /** Registered name of the operator. See gap 2 above. */
  entity: "Vighnir (OPC) Private Limited",
  product: "The Club",

  effective: "3 August 2026",
  effectiveIso: "2026-08-03",
  version: "1.0",

  /** See gap 4. Role mailboxes only; never a personal address. */
  privacyEmail: "privacy@vighnir.com",
  grievanceEmail: "grievance@vighnir.com",
  deletionEmail: "privacy@vighnir.com",

  /** See gap 1. The one neutral line the pages show until a person is appointed. */
  grievanceOfficerLine: "Grievance Officer: to be named before launch",

  /** The registered office, from the certificate of incorporation (docs dropped 2026-08-03). */
  postalAddress: "Vighnir (OPC) Private Limited, 199-197 Civil Lines, Bareilly - 243001, Uttar Pradesh, India",
} as const;

/** Formatted for `<time dateTime>` and for prose, from one source. */
export const EFFECTIVE_LINE = `Effective ${LEGAL.effective} · Version ${LEGAL.version}`;
