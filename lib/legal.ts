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
 *  1. `grievanceOfficerName` is set to the founder, who is the only named,
 *     India-resident person attached to this product and already the published
 *     contact on every one of these pages. Rule 3(2)(a) of the IT Rules 2021
 *     requires an intermediary to publish "the name of the Grievance Officer
 *     and his contact details" — a role title with a bare mailbox under it does
 *     not satisfy it, which is why this can no longer be blank.
 *     CONFIRM BEFORE PUSHING: this appoints Siddhant Jaiswal to a statutory
 *     role with 24-hour acknowledgement and 15-day resolution duties. If
 *     someone else is to hold it, change this one line and both pages follow.
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
 *  4. The pages use a personal mailbox. Create `privacy@vighnir.com` and
 *     `grievance@vighnir.com`, point them at a human, then change them here —
 *     one edit updates all three pages.
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

  /** See gap 4. */
  privacyEmail: "siddhant.jaiswal@vighnir.com",
  grievanceEmail: "siddhant.jaiswal@vighnir.com",
  deletionEmail: "siddhant.jaiswal@vighnir.com",

  /** See gap 1. Named because Rule 3(2)(a) requires a name, not a role title. */
  grievanceOfficerName: "Siddhant Jaiswal",

  /** The registered office, from the certificate of incorporation (docs dropped 2026-08-03). */
  postalAddress: "Vighnir (OPC) Private Limited, 199-197 Civil Lines, Bareilly - 243001, Uttar Pradesh, India",
} as const;

/** Formatted for `<time dateTime>` and for prose, from one source. */
export const EFFECTIVE_LINE = `Effective ${LEGAL.effective} · Version ${LEGAL.version}`;
