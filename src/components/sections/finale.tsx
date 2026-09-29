"use client";

import { useEffect, useRef } from "react";
import { cta } from "@/lib/content";

/*
 * The closing scene. An upside-down bottle fills with the visitor's work,
 * the pile jams at the narrow neck, then the neck opens, everything streams
 * through, and the headline resolves in the space the jam leaves behind.
 *
 * One progress value (0 to 1) drives every frame. Desktop: it follows the
 * scroll while the section is pinned. Tablet and phone: it plays once over
 * ~5s when the section comes into view, with fewer items. Reduced motion:
 * the final frame only. Frames are written straight to the DOM (transform,
 * opacity and one SVG path), so nothing re-renders while it runs.
 */

const STAGE = 1000; // SVG and layout units; the stage is square.
const NECK_TOP = 690;
const NECK_BOTTOM = 790;

type Pt = { x: number; y: number; r: number };

/** Where each item rests in the jam, a tapered pile sitting on the neck. */
const PILE: Pt[] = [
  { x: 500, y: 640, r: -4 },
  { x: 410, y: 575, r: 6 },
  { x: 590, y: 575, r: -7 },
  { x: 320, y: 505, r: -3 },
  { x: 500, y: 505, r: 3 },
  { x: 680, y: 505, r: 8 },
  { x: 380, y: 430, r: 5 },
  { x: 620, y: 430, r: -5 },
  { x: 290, y: 355, r: -8 },
  { x: 500, y: 355, r: 2 },
];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutBack = (t: number) => {
  const c = 1.4;
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
};

function bottlePath(neck: number) {
  const l = 500 - neck / 2;
  const r = 500 + neck / 2;
  return `M190 130 Q190 90 230 90 H770 Q810 90 810 130 V520 C810 620 ${r} 610 ${r} ${NECK_TOP} V${NECK_BOTTOM} H${l} V${NECK_TOP} C${l} 610 190 620 190 520 Z`;
}

export function Finale() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const bottleRef = useRef<SVGSVGElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const render = (p: number) => {
      const size = stage.clientWidth;
      const k = size / STAGE;
      const chips = chipRefs.current.filter(Boolean) as HTMLSpanElement[];

      // Neck opens between 0.36 and 0.48.
      const open = easeInOut(clamp((p - 0.36) / 0.12));
      pathRef.current?.setAttribute("d", bottlePath(lerp(64, 330, open)));

      chips.forEach((chip, i) => {
        const pile = PILE[i % PILE.length];
        const startX = lerp(240, 760, ((i * 37) % 10) / 9);
        // Fall in, bottom of the pile first, with a little overshoot.
        const fall = easeOutBack(clamp((p - i * 0.022) / 0.16));
        // Stream out through the neck once it opens, bottom of the pile first.
        const flow = clamp((p - 0.42 - i * 0.014) / 0.14);
        let x = lerp(startX, pile.x, clamp(fall));
        let y = lerp(-120, pile.y, fall);
        let rot = lerp(pile.r * 3, pile.r, clamp(fall));
        let scale = 1;
        let alpha = clamp(fall * 3);
        if (flow > 0) {
          const toNeck = easeInOut(clamp(flow / 0.45));
          const down = easeOut(clamp((flow - 0.35) / 0.65));
          x = lerp(pile.x, 500, toNeck);
          y = lerp(pile.y, NECK_TOP + 30, toNeck) + down * 420;
          rot = lerp(pile.r, 0, toNeck);
          scale = lerp(1, 0.8, down);
          alpha = 1 - clamp((down - 0.55) / 0.45);
        }
        chip.style.transform = `translate3d(${x * k}px, ${y * k}px, 0) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;
        chip.style.opacity = String(alpha);
      });

      // The bottle recedes into a faint backdrop once it has emptied.
      const recede = easeInOut(clamp((p - 0.6) / 0.16));
      if (bottleRef.current) {
        bottleRef.current.style.opacity = String(lerp(1, 0.22, recede));
        bottleRef.current.style.transform = `scale(${lerp(1, 1.08, recede)})`;
      }

      wordRefs.current.forEach((word, i) => {
        if (!word) return;
        const t = easeOut(clamp((p - 0.62 - i * 0.045) / 0.12));
        word.style.opacity = String(t);
        word.style.transform = `translate3d(0, ${lerp(28, 0, t)}px, 0)`;
        word.style.filter = t < 1 ? `blur(${lerp(8, 0, t)}px)` : "none";
      });
      if (lineRef.current) {
        const t = easeOut(clamp((p - 0.84) / 0.1));
        lineRef.current.style.opacity = String(t);
        lineRef.current.style.transform = `translate3d(0, ${lerp(16, 0, t)}px, 0)`;
      }
    };

    let raf = 0;
    let playStart = 0;
    let played = false;

    const scrollProgress = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      return clamp(-rect.top / travel / 0.92);
    };

    const tick = (now: number) => {
      raf = 0;
      if (reduced.matches) return render(1);
      if (desktop.matches) return render(scrollProgress());
      if (!played) return;
      const p = clamp((now - playStart) / 5200);
      render(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    // Only listen while the finale is near the viewport.
    let near = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        near = entry.isIntersecting;
        if (near && !desktop.matches && !played && !reduced.matches && entry.intersectionRatio > 0.35) {
          played = true;
          playStart = performance.now();
        }
        schedule();
      },
      { threshold: [0, 0.35, 0.6] },
    );
    io.observe(section);
    const onScroll = () => near && schedule();
    const onChange = () => {
      played = false;
      render(reduced.matches ? 1 : 0);
      schedule();
    };

    render(reduced.matches ? 1 : 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", onChange);
    reduced.addEventListener("change", onChange);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", onChange);
      reduced.removeEventListener("change", onChange);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const words = [...cta.headlineParts.before.split(" "), cta.headlineParts.accent];

  return (
    <section
      ref={sectionRef}
      aria-label="Closing"
      className="relative bg-ink text-bone lg:h-[230vh] motion-reduce:lg:h-auto"
    >
      <div className="tex-waves pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden py-16 lg:sticky lg:top-0 lg:h-screen lg:py-0 motion-reduce:lg:static">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[110px]"
          aria-hidden="true"
        />

        <div
          ref={stageRef}
          className="relative aspect-square w-[min(92vw,440px)] md:w-[min(80vw,600px)] lg:w-auto lg:h-[min(84vh,820px)]"
        >
          <svg
            ref={bottleRef}
            viewBox={`0 0 ${STAGE} ${STAGE}`}
            className="absolute inset-0 h-full w-full origin-center will-change-transform"
            aria-hidden="true"
            fill="none"
          >
            <defs>
              <linearGradient id="finale-glass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3dd6bd" stopOpacity="0.02" />
                <stop offset="70%" stopColor="#3dd6bd" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#2d42b9" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path ref={pathRef} d={bottlePath(330)} fill="url(#finale-glass)" stroke="#3dd6bd" strokeWidth="5" strokeLinejoin="round" />
            <rect x="440" y="40" width="120" height="34" rx="10" stroke="#3dd6bd" strokeOpacity="0.5" strokeWidth="4" />
          </svg>

          {cta.jam.map((item, i) => (
            <span
              key={item}
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              className={`pointer-events-none absolute left-0 top-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-cyan/50 bg-ink-100/90 px-2.5 py-1 text-[0.62rem] font-semibold text-bone opacity-0 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.8)] will-change-transform md:px-3.5 md:py-1.5 md:text-sm ${
                i >= 6 ? "hidden lg:inline-flex" : "inline-flex"
              }`}
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {item}
            </span>
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="display text-[clamp(2.2rem,7.4vw,5.6rem)] leading-[0.98] text-bone">
              {words.map((w, i) => (
                <span key={`${w}-${i}`}>
                  {i > 0 && " "}
                  <span
                    ref={(el) => {
                      wordRefs.current[i] = el;
                    }}
                    className={`inline-block will-change-transform ${i === words.length - 1 ? "text-cyan" : ""}`}
                  >
                    {w}
                  </span>
                </span>
              ))}
            </h2>
            <p
              ref={lineRef}
              className="mt-6 text-[clamp(1.05rem,2vw,1.5rem)] font-semibold text-bone/85 will-change-transform"
            >
              {cta.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
