"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { vibes } from "@/lib/content";

type Stage = "idle" | "cross" | "erase" | "type";

/**
 * "We don't talk about overseas talent." gets a big X drawn across it, then
 * the whole line erases, then "We are the overseas talent." types in. Runs
 * once, the first time the headline scrolls into view.
 */
function AnimatedHeadline({ line1, line2 }: { line1: string; line2: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [stage, setStage] = useState<Stage>("idle");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setStage("type");
      setTyped(line2);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStage("cross");
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [line2]);

  useEffect(() => {
    if (stage === "cross") {
      const t = setTimeout(() => setStage("erase"), 750);
      return () => clearTimeout(t);
    }
    if (stage === "erase") {
      const t = setTimeout(() => setStage("type"), 450);
      return () => clearTimeout(t);
    }
  }, [stage]);

  useEffect(() => {
    if (stage !== "type" || typed.length >= line2.length) return;
    const t = setTimeout(() => setTyped(line2.slice(0, typed.length + 1)), 32);
    return () => clearTimeout(t);
  }, [stage, typed, line2]);

  const crossedOut = stage === "erase" || stage === "type";

  return (
    <h2 ref={ref} className="display text-[clamp(2.1rem,4.8vw,3.7rem)]">
      <span
        className={`relative inline-block text-bone transition-all duration-500 ${
          crossedOut ? "-translate-y-2 opacity-0" : "opacity-100"
        }`}
      >
        {line1}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="1" y1="8" x2="99" y2="92"
            stroke="var(--color-royal)"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={100}
            style={{
              strokeDasharray: 100,
              strokeDashoffset: stage === "idle" ? 100 : 0,
              transition: "stroke-dashoffset 550ms ease-out",
            }}
          />
          <line
            x1="99" y1="8" x2="1" y2="92"
            stroke="var(--color-royal)"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={100}
            style={{
              strokeDasharray: 100,
              strokeDashoffset: stage === "idle" ? 100 : 0,
              transition: "stroke-dashoffset 550ms ease-out 200ms",
            }}
          />
        </svg>
      </span>
      <br />
      <span className="text-cyan">
        {typed}
        {stage === "type" && typed.length < line2.length && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    </h2>
  );
}

export function Vibes() {
  return (
    <section className="relative overflow-hidden bg-ink section-py text-bone">
      <div className="shell relative">
        <Reveal className="max-w-4xl">
          <AnimatedHeadline
            line1={`${vibes.headline} ${vibes.headlineStrike}`}
            line2={vibes.headlineAccent}
          />
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone/70">
            {vibes.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {vibes.clips.map((clip, i) => (
            <Reveal key={clip.slug} delay={i * 110}>
              <VideoLoop
                src={`/video/${clip.slug}.mp4`}
                poster={`/video/${clip.slug}.jpg`}
                name={clip.name}
                caption={clip.caption}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
