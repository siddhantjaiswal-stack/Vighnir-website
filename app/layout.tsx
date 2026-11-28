import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { LEGAL } from "@/lib/legal";
import "./globals.css";

/** Inter is The Club's typeface in the app (shared/ui/typography.ts). Self-hosted at build. */
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s · The Club by Vighnir`,
  },
  description: SITE.description,
  applicationName: SITE.product,
  authors: [{ name: LEGAL.entity, url: SITE.url }],
  creator: LEGAL.entity,
  publisher: LEGAL.entity,
  keywords: [
    "The Club app",
    "The Club India",
    "social app India",
    "one-to-one sessions",
    "book a session with a host",
    "Minis short videos",
    "Vighnir",
  ],
  category: "social networking",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "The Club by Vighnir",
    title: SITE.title,
    description: SITE.description,
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Club by Vighnir: friends, Minis and one-to-one sessions. A social app for India.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07060B",
  colorScheme: "dark",
};

/**
 * Organization (the company) + WebSite + MobileApplication (the product).
 * Only true facts: no rating, no price, no download URL (no store listing is
 * live yet). Company facts are the MCA-public ones in lib/legal.ts.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Vighnir",
      legalName: LEGAL.entity,
      url: SITE.url,
      email: SITE.email,
      foundingDate: "2026-01-17",
      foundingLocation: { "@type": "Place", name: "Bareilly, Uttar Pradesh, India" },
      identifier: { "@type": "PropertyValue", propertyID: "CIN", value: LEGAL.cin },
      description:
        "Vighnir (OPC) Private Limited is an Indian technology company that builds and runs The Club, a social app for people in India.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "199-197 Civil Lines",
        addressLocality: "Bareilly",
        postalCode: "243001",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "The Club by Vighnir",
      publisher: { "@id": `${SITE.url}/#organization` },
      about: { "@id": `${SITE.url}/#app` },
      inLanguage: "en-IN",
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE.url}/#app`,
      name: "The Club",
      url: SITE.url,
      description: SITE.description,
      operatingSystem: "iOS, Android",
      applicationCategory: "SocialNetworkingApplication",
      inLanguage: "en-IN",
      countriesSupported: "IN",
      image: `${SITE.url}/og.png`,
      author: { "@id": `${SITE.url}/#organization` },
      publisher: { "@id": `${SITE.url}/#organization` },
      featureList: [
        "My Club: a close circle of friends",
        "Photo posts and a Home feed",
        "Minis: short vertical videos",
        "Stories and Highlights",
        "Daily Moment",
        "One-to-one messages, voice and video calls",
        "The Floor: live chat rooms",
        "Nearby (opt-in, distance in words)",
        "Paid one-to-one online sessions with approved hosts",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={sans.variable}>
      <body>
        <JsonLd data={jsonLd} />
        <SiteHeader />
        <div id="main" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
