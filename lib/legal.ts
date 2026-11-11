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
 *  1. NO GRIEVANCE OFFICER IS APPOINTED YET (owner decision D-223, 2026-11-11).
 *     The owner ruled on 2026-11-07 that the founder is not the officer, and on
 *     2026-11-11 chose to take the name off now and leave a placeholder that
 *     blocks LAUNCH until a person is named. `grievanceOfficerLine` below is the
 *     ONE place the pages say so; the grievance email is the company contact
 *     already used elsewhere on this site (`SITE.email`), not a personal one.
 *     Rule 3(2)(a) of the IT Rules 2021 requires the officer's NAME and contact
 *     details, and the app stores ask for them at submission, so this is a
 *     launch blocker (tracked in the app repo, PENDING.md §9.1) and not a
 *     permanent state. The production build deliberately does NOT fail on the
 *     placeholder: the site must stay deployable. When a person is appointed,
 *     replace `grievanceOfficerLine` with their name and role (one edit; both
 *     pages follow) and update the app's GRIEVANCE_OFFICER_CONTACT.
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
 *  4. The privacy and deletion contacts still use a personal mailbox (they name
 *     no officer). Create `privacy@vighnir.com`, point it at a human, then change
 *     them here — one edit updates the pages. The grievance contact already uses
 *     the company mailbox (gap 1).
 */
import { SITE } from "./site";

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
  grievanceEmail: SITE.email,
  deletionEmail: "siddhant.jaiswal@vighnir.com",

  /** See gap 1. The one neutral line the pages show until a person is appointed. */
  grievanceOfficerLine: "Grievance Officer: to be named before launch",

  /** The registered office, from the certificate of incorporation (docs dropped 2026-08-03). */
  postalAddress: "Vighnir (OPC) Private Limited, 199-197 Civil Lines, Bareilly - 243001, Uttar Pradesh, India",
} as const;

/** Formatted for `<time dateTime>` and for prose, from one source. */
export const EFFECTIVE_LINE = `Effective ${LEGAL.effective} · Version ${LEGAL.version}`;
