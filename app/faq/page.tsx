import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/lib/club";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about The Club: what it is, when you can download it, whether it is free, who can join, who the hosts are, payments, cancellations, privacy, recordings, data storage, complaints and deleting your account.",
  alternates: { canonical: "/faq" },
};

/** The visible answers and the FAQPage JSON-LD come from the same array. */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE.url}/faq#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <main>
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        lede={<>Something missing? Write to <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</>}
      />
      <section className="section" aria-label="Questions">
        <div className="wrap">
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="muted small" style={{ marginTop: 22 }}>
            The details live in the <Link className="text-link" href="/terms">Terms of Service</Link>, the{" "}
            <Link className="text-link" href="/privacy">Privacy Policy</Link> and the{" "}
            <Link className="text-link" href="/refund-policy">Refund and cancellation policy</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
