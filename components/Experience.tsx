"use client";

/**
 * Experience — the motion layer.
 * Renders the ambient/overlay DOM (preloader, aurora, grain, cursor, brand
 * previews) and choreographs everything with GSAP + ScrollTrigger + SplitText
 * over the server-rendered markup. Content works fully without this layer.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { BRANDS } from "@/lib/site";

const SCRAMBLE_POOL = "×+—·/|IVX01▪";

export default function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine =
      window.matchMedia("(pointer: fine)").matches && !reduce;
    const html = document.documentElement;
    const ac = new AbortController();
    const { signal } = ac;
    let cancelled = false;
    let lenis: Lenis | null = null;
    const tickers: Array<(t: number, dt: number) => void> = [];
    const ctx = gsap.context(() => {});

    const q = <T extends Element = HTMLElement>(sel: string) =>
      document.querySelector<T & HTMLElement>(sel);
    const qa = <T extends Element = HTMLElement>(sel: string) =>
      Array.from(document.querySelectorAll<T & HTMLElement>(sel));

    /* ── smooth scroll ─────────────────────────────────────── */
    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      tickers.push(raf);
      gsap.ticker.lagSmoothing(0);
    }
    qa("[data-lenis-link]").forEach((a) => {
      a.addEventListener(
        "click",
        (e) => {
          const hash = a.getAttribute("href") || "";
          if (!hash.startsWith("#")) return;
          const target = document.querySelector(hash);
          if (!target) return;
          e.preventDefault();
          if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.3 });
          else (target as HTMLElement).scrollIntoView({ block: "start" });
        },
        { signal }
      );
    });

    /* ── aurora canvas ─────────────────────────────────────── */
    const canvas = q<HTMLCanvasElement>("#aurora canvas");
    if (canvas) {
      const cx2d = canvas.getContext("2d");
      const orbs = [
        { ax: 0.5, ay: 0.2, rx: 0.26, ry: 0.1, r: 0.46, c: "157,123,255", a: 0.07, sp: 0.00016, ph: 0 },
        { ax: 0.84, ay: 0.58, rx: 0.11, ry: 0.16, r: 0.36, c: "99,73,190", a: 0.062, sp: 0.00011, ph: 2.1 },
        { ax: 0.14, ay: 0.8, rx: 0.13, ry: 0.1, r: 0.4, c: "157,123,255", a: 0.05, sp: 0.00013, ph: 4.2 },
      ];
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const size = () => {
        canvas.width = Math.floor(innerWidth * dpr);
        canvas.height = Math.floor(innerHeight * dpr);
      };
      size();
      window.addEventListener("resize", size, { signal });
      const draw = (t: number) => {
        if (!cx2d || document.hidden) return;
        const { width: w, height: h } = canvas;
        cx2d.clearRect(0, 0, w, h);
        cx2d.globalCompositeOperation = "lighter";
        const ms = t * 1000;
        for (const o of orbs) {
          const x = (o.ax + Math.sin(ms * o.sp + o.ph) * o.rx) * w;
          const y = (o.ay + Math.cos(ms * o.sp * 0.85 + o.ph) * o.ry) * h;
          const r = o.r * Math.max(w, h) * 0.6;
          const g = cx2d.createRadialGradient(x, y, 0, x, y, r);
          g.addColorStop(0, `rgba(${o.c},${o.a})`);
          g.addColorStop(1, `rgba(${o.c},0)`);
          cx2d.fillStyle = g;
          cx2d.fillRect(x - r, y - r, r * 2, r * 2);
        }
      };
      if (reduce) draw(0);
      else {
        gsap.ticker.add(draw);
        tickers.push(draw);
      }
    }

    /* ── custom cursor ─────────────────────────────────────── */
    if (fine) {
      html.classList.add("cursor-on");
      const dot = q(".cursor");
      const ring = q(".cursor-ring");
      const label = q(".cursor-ring span");
      if (dot && ring && label) {
        const pos = { x: innerWidth / 2, y: innerHeight / 2 };
        const target = { x: pos.x, y: pos.y };
        window.addEventListener(
          "pointermove",
          (e) => {
            html.classList.add("cursor-live");
            target.x = e.clientX;
            target.y = e.clientY;
            gsap.set(dot, { x: e.clientX, y: e.clientY });
          },
          { signal }
        );
        document.addEventListener(
          "mouseleave",
          () => html.classList.remove("cursor-live"),
          { signal }
        );
        const follow = () => {
          pos.x += (target.x - pos.x) * 0.16;
          pos.y += (target.y - pos.y) * 0.16;
          gsap.set(ring, { x: pos.x, y: pos.y });
        };
        gsap.ticker.add(follow);
        tickers.push(follow);
        document.addEventListener(
          "mouseover",
          (e) => {
            const el = (e.target as Element).closest<HTMLElement>("a,button,[data-cursor]");
            if (!el) {
              ring.classList.remove("is-label", "is-hover");
              return;
            }
            const text = el.dataset.cursor;
            if (text) {
              label.textContent = text;
              ring.classList.add("is-label");
              ring.classList.remove("is-hover");
            } else {
              ring.classList.add("is-hover");
              ring.classList.remove("is-label");
            }
          },
          { signal }
        );
        window.addEventListener("pointerdown", () => ring.classList.add("is-down"), { signal });
        window.addEventListener("pointerup", () => ring.classList.remove("is-down"), { signal });
      }
    }

    /* ── boot (after fonts, so SplitText measures correctly) ── */
    const boot = () => {
      if (cancelled) return;
      ctx.add(() => {
        /* header: glass on scroll + progress + scrollspy */
        const header = q("#site-header");
        ScrollTrigger.create({
          start: 40,
          end: "max",
          onToggle: (self) => header?.classList.toggle("is-solid", self.isActive),
        });
        gsap.to("#scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.35 },
        });
        const spyLinks = qa<HTMLAnchorElement>("[data-spy]");
        (["brands", "house", "contact"] as const).forEach((id) => {
          ScrollTrigger.create({
            trigger: `#${id}`,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) {
                spyLinks.forEach((l) =>
                  l.classList.toggle("active", l.dataset.spy === id)
                );
              } else {
                spyLinks.forEach((l) => {
                  if (l.dataset.spy === id) l.classList.remove("active");
                });
              }
            },
          });
        });

        /* hero intro */
        const h1 = q("#hero-title");
        const heroIn = () => {
          if (!h1) return;
          const split = new SplitText(h1, { type: "words", mask: "words" });
          gsap.set(split.words, { yPercent: 115, rotate: 3 });
          h1.classList.add("split-ready");
          const em = () => h1.querySelector("em");
          const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
          tl.fromTo(
            ".hero-etym",
            { autoAlpha: 0, filter: "blur(8px)" },
            { autoAlpha: 1, filter: "blur(0px)", duration: 0.9 },
            0
          )
            .to(
              split.words,
              {
                yPercent: 0,
                rotate: 0,
                duration: 1.15,
                stagger: 0.055,
                onComplete: () => {
                  split.revert();
                  /* concept beat: friction gets crossed out, then cleared away */
                  const target = em();
                  if (!target || target.querySelector(".strike")) return;
                  const s = document.createElement("span");
                  s.className = "strike";
                  s.setAttribute("aria-hidden", "true");
                  target.appendChild(s);
                  gsap
                    .timeline({ delay: 0.25 })
                    .to(s, { scaleX: 1, duration: 0.5, ease: "power3.inOut" })
                    .to(s, { autoAlpha: 0, duration: 0.55, ease: "power2.out" }, "+=0.4");
                },
              },
              0.15
            )
            .fromTo(
              ".hero-sub",
              { autoAlpha: 0, y: 26 },
              { autoAlpha: 1, y: 0, duration: 1 },
              0.75
            )
            .fromTo(
              ".hero-meta span",
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09 },
              0.95
            )
            .fromTo(".hint", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 1.3);
          return tl;
        };

        /* preloader */
        const pre = q("#preloader");
        const veil = q(".pre-veil");
        const seen = sessionStorage.getItem("vighnir_seen") === "1";
        const finishPre = () => {
          pre?.classList.add("done");
          veil?.classList.add("done");
          sessionStorage.setItem("vighnir_seen", "1");
          lenis?.start();
        };
        if (reduce || !pre || !veil) {
          heroIn();
        } else if (seen) {
          lenis?.stop();
          gsap.to(pre, {
            autoAlpha: 0,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              finishPre();
              heroIn();
            },
          });
          gsap.set(veil, { autoAlpha: 0 });
        } else {
          lenis?.stop();
          const count = { n: 0 };
          const countEl = q(".pre-count");
          const letters = qa(".pre-word b");
          gsap.set(letters, { yPercent: 120 });
          const tl = gsap.timeline();
          tl.to(letters, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.05 }, 0)
            .fromTo(".pre-etym", { autoAlpha: 0 }, { autoAlpha: 0.75, duration: 0.6 }, 0.4)
            .to(
              count,
              {
                n: 100,
                duration: 1.5,
                ease: "power2.inOut",
                onUpdate: () => {
                  if (countEl)
                    countEl.textContent = `${String(Math.round(count.n)).padStart(3, "0")} %`;
                },
              },
              0.2
            )
            .to(".pre-line i", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0.2)
            .to(letters, { yPercent: -120, duration: 0.6, ease: "power3.in", stagger: 0.035 }, "+=0.15")
            .to([".pre-line", ".pre-count", ".pre-etym"], { autoAlpha: 0, duration: 0.35 }, "<")
            .to(pre, { yPercent: -100, duration: 0.95, ease: "power4.inOut" }, "lift")
            .to(veil, { yPercent: -100, duration: 0.95, ease: "power4.inOut" }, "lift+=0.09")
            .add(() => {
              finishPre();
              heroIn();
            }, "lift+=0.45");
        }

        /* hero scroll-out */
        gsap.to(".hero .wrap", {
          yPercent: -9,
          autoAlpha: 0.25,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 25%", scrub: true },
        });
        gsap.to(".hint", {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "2% top", end: "12% top", scrub: true },
        });

        /* brand index reveals */
        const indexLine = q(".index-line");
        if (indexLine)
          gsap.to(indexLine, {
            scaleX: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: ".index", start: "top 88%", once: true },
          });
        gsap.utils.toArray<HTMLElement>(".row").forEach((row, i) => {
          const els = row.querySelectorAll("[data-row-el]");
          const line = row.querySelector(".row-line");
          gsap.set(els, { autoAlpha: 0, y: 30 });
          const tl = gsap.timeline({
            scrollTrigger: { trigger: row, start: "top 86%", once: true },
            delay: i * 0.05,
          });
          if (line) tl.to(line, { scaleX: 1, duration: 1.1, ease: "expo.out" }, 0);
          tl.to(els, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.07 }, 0.1);
        });
        gsap.utils.toArray<HTMLElement>([".brands-head", ".index-note"]).forEach((el) => {
          gsap.set(el, { autoAlpha: 0, y: 18 });
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        /* marquee — velocity-reactive */
        const track = q("#marquee-track");
        if (track && !reduce) {
          let x = 0;
          let sk = 0;
          let half = track.scrollWidth / 2;
          const ro = new ResizeObserver(() => (half = track.scrollWidth / 2));
          ro.observe(track);
          signal.addEventListener("abort", () => ro.disconnect());
          const move = (_t: number, dtms: number) => {
            const dt = dtms / 1000;
            const vel = lenis ? lenis.velocity : 0;
            x -= (70 + Math.min(Math.abs(vel) * 9, 480)) * dt;
            if (x <= -half) x += half;
            const targetSk = gsap.utils.clamp(-6, 6, vel * 0.09);
            sk += (targetSk - sk) * 0.11;
            gsap.set(track, { x, skewX: sk });
          };
          gsap.ticker.add(move);
          tickers.push(move);
        }

        /* house lede — word-by-word scrubbed fill */
        const lede = q("#house-lede");
        if (lede) {
          const words: HTMLElement[] = [];
          const splitNode = (node: Node, em: boolean) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const parts = (node.textContent || "").split(/(\s+)/);
              const frag = document.createDocumentFragment();
              parts.forEach((p) => {
                if (!p) return;
                if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(" "));
                else {
                  const s = document.createElement("span");
                  s.className = em ? "hw em" : "hw";
                  s.textContent = p;
                  words.push(s);
                  frag.appendChild(s);
                }
              });
              node.parentNode?.replaceChild(frag, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              Array.from(node.childNodes).forEach((c) =>
                splitNode(c, em || (node as Element).tagName === "EM")
              );
            }
          };
          Array.from(lede.childNodes).forEach((n) => splitNode(n, false));
          ScrollTrigger.create({
            trigger: lede,
            start: "top 80%",
            end: "top 25%",
            scrub: true,
            onUpdate: (self) => {
              const upto = Math.floor(self.progress * words.length);
              words.forEach((w, i) => w.classList.toggle("on", i < upto));
            },
          });
        }
        const plain = q(".house-copy .plain");
        if (plain) {
          gsap.set(plain, { autoAlpha: 0, y: 20 });
          gsap.to(plain, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: plain, start: "top 85%", once: true },
          });
        }
        gsap.utils.toArray<HTMLElement>([".house-label", ".faq-label"]).forEach((el) => {
          gsap.set(el, { autoAlpha: 0, y: 14 });
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        /* facts — border draw + scramble-in values */
        const facts = q("#facts");
        if (facts) {
          const values = qa("[data-scramble]");
          const kids = facts.querySelectorAll(".fact");
          gsap.set(kids, { autoAlpha: 0, y: 18 });
          ScrollTrigger.create({
            trigger: facts,
            start: "top 86%",
            once: true,
            onEnter: () => {
              facts.classList.add("in");
              gsap.to(kids, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09 });
              values.forEach((v, vi) => {
                const original = v.textContent || "";
                const start = performance.now() + vi * 110;
                const dur = 750;
                const step = (now: number) => {
                  if (cancelled) return;
                  const p = gsap.utils.clamp(0, 1, (now - start) / dur);
                  const settled = Math.floor(p * original.length);
                  let out = "";
                  for (let i = 0; i < original.length; i++) {
                    const ch = original[i];
                    out =
                      out +
                      (i < settled || ch === " "
                        ? ch
                        : SCRAMBLE_POOL[Math.floor(Math.random() * SCRAMBLE_POOL.length)]);
                  }
                  v.textContent = out;
                  if (p < 1) requestAnimationFrame(step);
                  else v.textContent = original;
                };
                requestAnimationFrame(step);
              });
            },
          });
        }

        /* faq — reveal + accordion */
        qa(".faq-item").forEach((item, i) => {
          const line = item.querySelector(".faq-line");
          const btn = item.querySelector<HTMLButtonElement>(".faq-q");
          gsap.set(item, { autoAlpha: 0, y: 22 });
          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 90%", once: true },
            delay: i * 0.07,
          });
          tl.to(item, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out" }, 0);
          if (line) tl.to(line, { scaleX: 1, duration: 1, ease: "expo.out" }, 0.05);
          btn?.addEventListener(
            "click",
            () => {
              const isOpen = item.classList.contains("open");
              qa(".faq-item").forEach((it) => {
                it.classList.remove("open");
                it.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
              });
              if (!isOpen) {
                item.classList.add("open");
                btn.setAttribute("aria-expanded", "true");
              }
            },
            { signal }
          );
        });

        /* contact */
        const contactTl = gsap.timeline({
          scrollTrigger: { trigger: "#contact", start: "top 72%", once: true },
        });
        contactTl.fromTo(
          ".contact .mono",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0
        );
        const h2 = q("#contact-title");
        if (h2) {
          const split2 = new SplitText(h2, { type: "words", mask: "words" });
          gsap.set(split2.words, { yPercent: 115 });
          gsap.set(h2, { autoAlpha: 1 });
          contactTl.to(
            split2.words,
            {
              yPercent: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.05,
              onComplete: () => split2.revert(),
            },
            0.12
          );
        }
        contactTl.fromTo(
          ".mail",
          { autoAlpha: 0, y: 22, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
          0.5
        );

        /* footer */
        gsap.set(".foot", { autoAlpha: 0, y: 14 });
        gsap.to(".foot", {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: "footer", start: "top 96%", once: true },
        });

        /* magnetic elements */
        if (fine) {
          qa("[data-magnetic]").forEach((el) => {
            const strength = 0.32;
            el.addEventListener(
              "pointermove",
              (e) => {
                const r = el.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                gsap.to(el, {
                  x: gsap.utils.clamp(-26, 26, dx * strength),
                  y: gsap.utils.clamp(-18, 18, dy * strength),
                  duration: 0.5,
                  ease: "power3.out",
                });
              },
              { signal }
            );
            el.addEventListener(
              "pointerleave",
              () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,0.45)" }),
              { signal }
            );
          });

          /* glass specular follows cursor */
          const glasses = qa(".glass");
          window.addEventListener(
            "pointermove",
            (e) => {
              for (const g of glasses) {
                const r = g.getBoundingClientRect();
                g.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                g.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
              }
            },
            { signal, passive: true }
          );

          /* brand hover preview cards */
          const cards = new Map<string, HTMLElement>();
          qa(".preview").forEach((c) => cards.set(c.dataset.brand || "", c));
          let active: HTMLElement | null = null;
          let px = 0;
          let py = 0;
          let cx = 0;
          let cy = 0;
          let rot = 0;
          window.addEventListener(
            "pointermove",
            (e) => {
              px = e.clientX;
              py = e.clientY;
            },
            { signal, passive: true }
          );
          const hideCard = (card: HTMLElement) => {
            if (active === card) active = null;
            gsap.killTweensOf(card);
            gsap.to(card, {
              autoAlpha: 0,
              scale: 0.9,
              duration: 0.3,
              ease: "power2.in",
              overwrite: "auto",
            });
          };
          const followCard = () => {
            if (!active) return;
            const w = active.offsetWidth;
            const flip = px + 36 + w > innerWidth;
            const tx = flip ? px - w - 36 : px + 36;
            const ty = py - active.offsetHeight / 2;
            const dx = tx - cx;
            cx += dx * 0.14;
            cy += (ty - cy) * 0.14;
            rot += (gsap.utils.clamp(-7, 7, dx * 0.08) - rot) * 0.12;
            gsap.set(active, { x: cx, y: cy, rotation: rot });
          };
          gsap.ticker.add(followCard);
          tickers.push(followCard);
          /* browsers don't fire pointerleave when content scrolls out from
             under a stationary cursor — re-check hover target on scroll */
          window.addEventListener(
            "scroll",
            () => {
              if (!active) return;
              const under = document.elementFromPoint(px, py);
              const row = under ? (under.closest(".row") as HTMLElement | null) : null;
              if (!row || row.dataset.preview !== active.dataset.brand) hideCard(active);
            },
            { signal, passive: true }
          );
          qa(".row").forEach((row) => {
            const id = row.dataset.preview || "";
            row.addEventListener(
              "pointerenter",
              (e) => {
                const card = cards.get(id);
                if (!card) return;
                if (active && active !== card) hideCard(active);
                active = card;
                cx = e.clientX + 36;
                cy = e.clientY - card.offsetHeight / 2;
                px = e.clientX;
                py = e.clientY;
                gsap.killTweensOf(card);
                gsap.set(card, { x: cx, y: cy });
                gsap.to(card, {
                  autoAlpha: 1,
                  scale: 1,
                  duration: 0.45,
                  ease: "power3.out",
                  overwrite: "auto",
                });
              },
              { signal }
            );
            row.addEventListener(
              "pointerleave",
              () => {
                const card = cards.get(id);
                if (card) hideCard(card);
              },
              { signal }
            );
          });
        }
      });
      ScrollTrigger.refresh();
    };

    if (reduce) {
      /* minimal, functional experience */
      const header = q("#site-header");
      const onScroll = () => {
        header?.classList.toggle("is-solid", scrollY > 40);
        const p = document.querySelector<HTMLElement>("#scroll-progress");
        const max = document.body.scrollHeight - innerHeight;
        if (p && max > 0) p.style.transform = `scaleX(${scrollY / max})`;
      };
      window.addEventListener("scroll", onScroll, { signal, passive: true });
      onScroll();
      qa(".faq-item").forEach((item) => {
        const btn = item.querySelector<HTMLButtonElement>(".faq-q");
        btn?.addEventListener(
          "click",
          () => {
            const open = item.classList.toggle("open");
            btn.setAttribute("aria-expanded", String(open));
          },
          { signal }
        );
      });
    } else {
      document.fonts.ready.then(() => boot());
    }

    return () => {
      cancelled = true;
      ac.abort();
      tickers.forEach((t) => gsap.ticker.remove(t));
      ctx.revert();
      lenis?.destroy();
      html.classList.remove("cursor-on");
    };
  }, []);

  return (
    <div ref={rootRef}>
      {/* ambient background */}
      <div id="aurora" aria-hidden="true">
        <canvas />
      </div>
      <div className="grain" aria-hidden="true" />

      {/* preloader */}
      <div className="pre-veil" aria-hidden="true" />
      <div id="preloader" aria-hidden="true">
        <div className="pre-mark">
          <div className="pre-word">
            {"VIGHNIR".split("").map((ch, i) => (
              <b key={i} className={ch === "I" && i === 5 ? "v" : undefined}>
                {ch}
              </b>
            ))}
          </div>
          <span className="pre-line"><i /></span>
        </div>
        <span className="pre-etym">vighna · obstacle — vighnir · the one who clears it</span>
        <span className="pre-count">000 %</span>
      </div>

      {/* custom cursor */}
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true"><span /></div>

      {/* brand hover previews */}
      <div className="previews" aria-hidden="true">
        {BRANDS.map((b) => (
          <div className="preview glass" data-brand={b.id} key={b.id}>
            <div className="p-head">
              <span>{b.num}</span>
              <b>{b.name}</b>
              <span className="go">Visit ↗</span>
            </div>
            <div className={`p-vis ${b.id}`}>
              {b.id === "eko" && (
                <>
                  <span className="ring" /><span className="ring" /><span className="ring" />
                  <span className="dot" />
                </>
              )}
              {b.id === "club" && (
                <>
                  <span className="c1" /><span className="c2" />
                </>
              )}
              {b.id === "aquarius" && (
                <>
                  <span className="rip" /><span className="rip" /><span className="rip" />
                  <span className="drop" />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
