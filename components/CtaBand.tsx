import Link from "next/link";
import { STATUS } from "@/lib/club";

/** The closing call to action. States the release status plainly. */
export default function CtaBand({
  title = "Coming to iPhone and Android in India.",
}: {
  title?: string;
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta-box">
          <div>
            <p className="eyebrow">{STATUS.short}</p>
            <h2 className="h2" id="cta-title" style={{ marginTop: 12 }}>
              {title}
            </h2>
            <p className="lede">{STATUS.line}</p>
          </div>
          <div className="btn-row" style={{ marginTop: 0 }}>
            <Link href="/get" className="btn btn-primary">
              Get the app
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
