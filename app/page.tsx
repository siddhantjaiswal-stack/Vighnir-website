import Experience from "@/components/Experience";
import { BRANDS, FAQS, SITE } from "@/lib/site";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 13 13 3M5.5 3H13v7.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <header className="site" id="site-header">
        <div className="wrap nav">
          <a href="#top" className="wordmark" data-lenis-link aria-label="Vighnir — back to top">
            VIGHN<i>I</i>R
          </a>
          <nav className="nav-links mono" aria-label="Main">
            <a href="#brands" data-lenis-link data-spy="brands">Brands</a>
            <a href="#house" data-lenis-link data-spy="house">House</a>
            <a href="#contact" data-lenis-link data-spy="contact">Contact</a>
          </nav>
        </div>
        <span className="progress" id="scroll-progress" aria-hidden="true" />
      </header>

      <main id="top">
        {/* ── hero ── */}
        <section className="hero" aria-label="Introduction">
          <div className="wrap">
            <p className="hero-etym mono">
              from <i>vighna</i> (skt.) — obstacle · vighnir — the one who clears it
            </p>
            <h1 id="hero-title">
              One house.
              <br />
              Three ways to remove <em>friction</em>.
            </h1>
            <p className="hero-sub">
              Vighnir builds businesses that take work off people&rsquo;s plates —
              connecting, branding, and automating so teams and individuals move
              with less in the way.
            </p>
            <div className="hero-meta mono">
              <span>NCR · India</span>
              <span>Three operating brands</span>
              <span>Founder-led</span>
            </div>
          </div>
          <div className="hint mono" aria-hidden="true">
            <span>Scroll</span>
            <span className="hint-line"><i /></span>
          </div>
        </section>

        {/* ── brand index ── */}
        <section className="brands" id="brands" aria-label="The brands">
          <div className="wrap">
            <div className="brands-head">
              <h2 className="mono">The brands</h2>
              <span className="mono">MMXXVI</span>
            </div>
            <div className="index">
              <span className="index-line" aria-hidden="true" />
              {BRANDS.map((b) => (
                <a
                  key={b.id}
                  className="row"
                  href={b.href}
                  data-preview={b.id}
                  data-cursor="Visit"
                  aria-label={`Visit the ${b.name} website`}
                >
                  <span className="row-num" data-row-el>{b.num}</span>
                  <div className="row-name">
                    <h3 data-row-el>{b.name}</h3>
                    <p className="cat mono" data-row-el>{b.category}</p>
                  </div>
                  <p className="row-desc" data-row-el>
                    <strong>{b.lead}</strong> {b.desc}
                  </p>
                  <span className="row-go" aria-hidden="true" data-row-el>
                    <Arrow />
                  </span>
                  <span className="row-line" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="index-note mono">Select a brand to visit its site</p>
          </div>
        </section>

        {/* ── marquee ── */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track" id="marquee-track">
            {[0, 1, 2, 3].map((i) => (
              <span className="marquee-item" key={i}>
                eko — The Club — Aquarius — <i>Vighnir</i> —{" "}
              </span>
            ))}
          </div>
        </div>

        {/* ── house ── */}
        <section className="house" id="house" aria-label="The house">
          <div className="wrap house-grid">
            <h2 className="house-label mono">The house</h2>
            <div className="house-copy">
              <p className="lede" id="house-lede">
                Every Vighnir brand begins with the same question — what stands
                in someone&rsquo;s way, and can we take it{" "}
                <em>out of the way</em>, profitably?
              </p>
              <p className="plain">
                eko removes the friction of lead qualification. The Club removes
                the friction between wanting an expert&rsquo;s time and getting
                it. Aquarius removes the friction of hyperlocal advertising. We
                build lean, launch locally, and let paying customers decide what
                grows.
              </p>
              <div className="facts" id="facts">
                <div className="fact">
                  <span className="k mono">Seat</span>
                  <span className="v" data-scramble>Noida, NCR</span>
                </div>
                <div className="fact">
                  <span className="k mono">Brands</span>
                  <span className="v" data-scramble>Three</span>
                </div>
                <div className="fact">
                  <span className="k mono">Focus</span>
                  <span className="v" data-scramble>AI · Marketplaces · Media</span>
                </div>
                <div className="fact">
                  <span className="k mono">Stage</span>
                  <span className="v" data-scramble>Revenue-generating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── faq (visible twin of the FAQPage schema — AEO) ── */}
        <section className="faq" id="questions" aria-label="Questions">
          <div className="wrap faq-grid">
            <h2 className="faq-label mono">Questions</h2>
            <div className="faq-list">
              {FAQS.map((f, i) => (
                <div className="faq-item" key={i}>
                  <h3>
                    <button
                      className="faq-q"
                      aria-expanded="false"
                      aria-controls={`faq-a-${i}`}
                      id={`faq-q-${i}`}
                    >
                      <span>{f.q}</span>
                      <span className="faq-x" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="faq-a"
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                  >
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                  <span className="faq-line" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── contact ── */}
        <section className="contact" id="contact" aria-label="Contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="wrap">
            <p className="mono">Correspondence</p>
            <h2 id="contact-title">Partner with a Vighnir brand.</h2>
            <a
              className="mail glass"
              href={`mailto:${SITE.email}`}
              data-magnetic
              data-cursor="Write"
            >
              {SITE.email}
              <span className="sweep" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot mono">
          <span>© MMXXVI Vighnir</span>
          <span>eko · The Club · Aquarius</span>
          <address style={{ fontStyle: "normal" }}>Noida · India</address>
        </div>
      </footer>

      <Experience />
    </>
  );
}
