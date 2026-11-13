/**
 * PostHog on vighnir.com (D-241, owner 2026-11-13): page views only, no cookie, no stored identity.
 *
 * Next.js 15.3+ runs this file in the browser before the app hydrates. It does nothing when
 * NEXT_PUBLIC_POSTHOG_KEY is unset, so a preview or a local build without it sends nothing.
 *
 * What makes it cookieless, line by line:
 *   persistence 'memory'        nothing is written to a cookie, localStorage or sessionStorage. The
 *                               anonymous id lives in the page's memory and is gone on reload, so a
 *                               reload counts as a new visitor. That is the price of needing no
 *                               cookie banner, and it is the owner's choice (D-241).
 *   person_profiles identified_only, and nothing here ever calls identify, so no person profile exists.
 *
 * IP: the browser option `ip` has NO effect in posthog-js 1.448 (its own type says so). The address
 * is discarded by the PROJECT setting `anonymize_ips`, which is on for project 733685 (set
 * 2026-11-13), and the GeoIP transformation there is off.
 *
 * Everything else is off on purpose: autocapture, heatmaps, dead and rage clicks, performance,
 * exceptions, session replay, surveys, web experiments, flags, and the lazy loading of PostHog's
 * extra scripts. Only `$pageview` (and the SPA route changes) leave the page.
 */
import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: "history_change",
    capture_pageleave: false,
    autocapture: false,
    capture_heatmaps: false,
    capture_dead_clicks: false,
    rageclick: false,
    capture_performance: false,
    capture_exceptions: false,
    disable_session_recording: true,
    disable_surveys: true,
    disable_conversations: true,
    disable_product_tours: true,
    disable_web_experiments: true,
    advanced_disable_flags: true,
    advanced_disable_toolbar_metrics: true,
    disable_external_dependency_loading: true,
    mask_personal_data_properties: true,
    respect_dnt: true,
  });
}
