"use client";

import { useCallback, useState } from "react";
import { Reveal } from "../reveal";
import { VideoModal } from "../video-modal";

/*
 * Rebuilt from design-refs/HANDOFFMAP.png (the Figma export in
 * design-refs/CODE IMAGE.txt is a fixed 7000px canvas). Everything sits in
 * the 1014x1293 space of /brand/latam-outline.svg, so pins, curves and the
 * land mask (/brand/latam-land.svg) line up at any width.
 *
 * PLACEHOLDERS: the export's photos were placehold.co URLs, so each pin uses
 * a neutral avatar, and every pin opens the brand promo video until the real
 * talent intros exist.
 */
const PLACEHOLDER_VIDEO = "/videos/handoff-promo.mp4";

const VB_W = 1014;
const VB_H = 1293;

type Talent = { role: string; x: number; y: number; side: "left" | "right" };

const talent: Talent[] = [
  { role: "Digital Marketing Manager", x: 185, y: 205, side: "right" },
  { role: "Full Stack Developer", x: 365, y: 345, side: "right" },
  { role: "AP/AR Specialist", x: 610, y: 415, side: "right" },
  { role: "AI Specialist", x: 450, y: 565, side: "left" },
  { role: "Relocation Coordinator", x: 905, y: 605, side: "left" },
  { role: "Guest Services Specialist", x: 762, y: 850, side: "right" },
  { role: "Reservations Manager", x: 615, y: 905, side: "left" },
  { role: "Sales Development Representative", x: 630, y: 1135, side: "left" },
];

const pulses = [
  { x: 490, y: 455 },
  { x: 495, y: 665 },
  { x: 865, y: 745 },
];

type Pt = { x: number; y: number };
const P = (i: number): Pt => talent[i];
const Q = (i: number): Pt => pulses[i];

/* Dashed routes between pins, drawn as gentle arcs. */
const routes: [Pt, Pt, number][] = [
  [P(0), P(1), -40],
  [P(1), Q(0), 30],
  [P(1), P(3), 25],
  [Q(0), P(2), -20],
  [P(2), P(4), -70],
  [P(2), P(6), 10],
  [Q(0), P(5), 60],
  [P(3), Q(1), 0],
  [P(4), P(6), 50],
  [P(4), Q(2), 0],
  [Q(2), P(5), -20],
  [P(6), P(7), -15],
  [P(5), P(7), 40],
];

function arc(a: Pt, b: Pt, bend: number) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const cx = mx + (-dy / len) * bend;
  const cy = my + (dx / len) * bend;
  return `M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`;
}

const pct = (p: Pt) => ({ left: `${(p.x / VB_W) * 100}%`, top: `${(p.y / VB_H) * 100}%` });

/** Neutral stand-in until real talent photos are supplied. */
function PlaceholderAvatar() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <circle cx="32" cy="24" r="11" fill="#1f1f1f" opacity="0.85" />
      <path d="M11 58c2.5-12 11-18 21-18s18.5 6 21 18" fill="#1f1f1f" opacity="0.85" />
    </svg>
  );
}

export function TalentMap() {
  const [playing, setPlaying] = useState<string | null>(null);
  const close = useCallback(() => setPlaying(null), []);

  return (
    <section
      id="meet-your-talent"
      className="relative scroll-mt-24 overflow-hidden bg-[#141414] section-py text-bone"
    >
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)]">
            Meet your <span className="text-cyan">talent</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-bone/70">
            The roles we place most, from Mexico to Patagonia. Pick a profile
            to see who you could be working with.
          </p>
        </Reveal>

        <div
          className="relative mx-auto mt-12 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-[600px]"
          style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#3d3d3d] to-[#2a2a2a]"
            style={{
              WebkitMaskImage: "url(/brand/latam-land.svg)",
              maskImage: "url(/brand/latam-land.svg)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
            aria-hidden="true"
          />

          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {routes.map(([a, b, bend], i) => (
              <path
                key={i}
                d={arc(a, b, bend)}
                fill="none"
                stroke="#3dd6bd"
                strokeOpacity="0.55"
                strokeWidth="2"
                strokeDasharray="7 9"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {pulses.map((p, i) => (
            <span
              key={i}
              className="pointer-events-none absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 md:h-8 md:w-8"
              style={pct(p)}
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full border-2 border-[#238272] motion-safe:animate-ping" />
              <span className="absolute inset-[22%] rounded-full border-2 border-[#238272]" />
              <span className="absolute inset-[40%] rounded-full bg-[#2fae98]" />
            </span>
          ))}

          {talent.map((t) => (
            <button
              key={t.role}
              type="button"
              onClick={() => setPlaying(t.role)}
              aria-label={`Play intro: ${t.role}`}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 outline-none"
              style={pct(t)}
            >
              <span className="relative block h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-cyan shadow-[0_0_0_4px_rgba(61,214,189,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_7px_rgba(61,214,189,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-cyan md:h-11 md:w-11 lg:h-12 lg:w-12">
                <PlaceholderAvatar />
              </span>
              <span
                className={`absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-white bg-[#252525] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.04em] text-white transition-colors duration-300 group-hover:border-cyan group-hover:text-cyan md:block lg:px-4 lg:text-[0.72rem] ${
                  t.side === "right" ? "left-full ml-2" : "right-full mr-2"
                }`}
              >
                {t.role}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile: labels would collide on a phone-width map, so the roles
            are listed underneath instead. */}
        <ul className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 md:hidden">
          {talent.map((t) => (
            <li key={t.role}>
              <button
                type="button"
                onClick={() => setPlaying(t.role)}
                className="flex w-full items-center gap-3 rounded-full border-2 border-white/80 bg-[#252525] py-1.5 pl-1.5 pr-4 text-left text-[0.72rem] font-medium uppercase tracking-[0.04em] text-white transition-colors hover:border-cyan hover:text-cyan"
              >
                <span className="block h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white bg-cyan">
                  <PlaceholderAvatar />
                </span>
                {t.role}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {playing && (
        <VideoModal src={PLACEHOLDER_VIDEO} label={`${playing}: intro video (placeholder)`} onClose={close} />
      )}
    </section>
  );
}
