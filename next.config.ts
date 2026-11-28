import type { NextConfig } from "next";

/**
 * Friendly aliases for pages people (and store reviewers) guess. Each is a
 * permanent redirect to the one canonical path. The canonical paths the app and
 * the store listings use (/privacy, /terms, /account-deletion, /support,
 * /community-rules, /how-ranking-works, /host-terms, /get) are never redirected.
 * Nothing under /.well-known is touched: app links live on link.vighnir.com.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/the-club", destination: "/", permanent: true },
      { source: "/delete-account", destination: "/account-deletion", permanent: true },
      { source: "/community-guidelines", destination: "/community-rules", permanent: true },
      { source: "/guidelines", destination: "/community-rules", permanent: true },
      { source: "/refund", destination: "/refund-policy", permanent: true },
      { source: "/refunds", destination: "/refund-policy", permanent: true },
      { source: "/cancellation-policy", destination: "/refund-policy", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/grievance-officer", destination: "/grievance", permanent: true },
      { source: "/help", destination: "/support", permanent: true },
      { source: "/host", destination: "/hosts", permanent: true },
    ];
  },
};

export default nextConfig;
