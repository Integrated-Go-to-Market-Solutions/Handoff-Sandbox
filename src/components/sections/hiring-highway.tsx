"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { highwayIcons } from "../highway-icons";
import { process, site } from "@/lib/content";

/**
 * The Hiring Highway as a vertical road. Six stops alternate left and right
 * of a spine that fills with cyan as the reader scrolls; each stop lights
 * up when the fill reaches it. The last stop is the wide cyan card, because
 * "we stay on" is the part nobody else does and it should read that way.
 *
 * `compact` is the homepage version: same road, no lede, no bullets, tighter
 * spacing, and the whole thing is one link through to /how-it-works where
 * the full version lives.
 *
 * The scroll-driven fill is plain DOM work in an effect, no library: the
 * fill height and each stop's `in` class are set directly so nothing
 * re-renders on scroll.
 */
export function HiringHighway({ compact = false }: { compact?: boolean }) {
  const roadRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stopRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const road = roadRef.current;
    const fill = fillRef.current;
    if (!road || !fill) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      road.style.bottom = "auto";
      fill.style.height = "100%";
      for (const stop of stopRefs.current) stop?.classList.add("in");
      const endNode = stopRefs.current[stopRefs.current.length - 1]?.querySelector<HTMLElement>(".hw-node-end");
      const wrap = road.parentElement;
      if (endNode && wrap) {
        const e = endNode.getBoundingClientRect();
        const w = wrap.getBoundingClientRect();
        road.style.height = `${e.top + e.height / 2 - w.top}px`;
      }
      return;
    }
    road.style.bottom = "auto";

    let raf = 0;
    const update = () => {
      raf = 0;
      // The road ends at the centre of the last node, not the bottom of the
      // list, so it never runs on through the closing card.
      const endNode = stopRefs.current[stopRefs.current.length - 1]?.querySelector<HTMLElement>(".hw-node-end");
      const wrap = road.parentElement;
      if (endNode && wrap) {
        const e = endNode.getBoundingClientRect();
        const w = wrap.getBoundingClientRect();
        road.style.height = `${e.top + e.height / 2 - w.top}px`;
      }
      const rect = road.getBoundingClientRect();
      const mark = window.innerHeight * 0.62;
      const px = Math.min(Math.max(mark - rect.top, 0), rect.height);
      fill.style.height = `${px}px`;
      for (const stop of stopRefs.current) {
        if (!stop) continue;
        const node = stop.querySelector<HTMLElement>(".hw-node");
        const top = (node ?? stop).getBoundingClientRect().top;
        stop.classList.toggle("in", top <= mark);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const steps = process.steps;
  const last = steps.length - 1;

  const road = (
    <div className="relative">
      {/* The spine. Left on mobile, centered on desktop. */}
      <div
        ref={roadRef}
        className="hw-road left-[11px] md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <div ref={fillRef} className="hw-road-fill" />
        <div className="hw-road-dash" />
      </div>

      <ol className={`relative ${compact ? "space-y-5 md:space-y-0" : "space-y-6 md:space-y-0"}`}>
        {steps.map((step, i) => {
          const Icon = highwayIcons[i % highwayIcons.length];
          const isEnd = i === last;
          const left = i % 2 === 0;
          // Desktop: alternating stops sit in opposite columns, so each one
          // tucks up beside the previous card instead of starting a new row.
          const tuck = i === 0 ? "" : compact ? "md:-mt-12" : "md:-mt-24";

          if (isEnd) {
            return (
              <li
                key={step.n}
                ref={(el) => {
                  stopRefs.current[i] = el;
                }}
                className="hw-stop grid grid-cols-[40px_1fr] gap-x-4 md:mt-6 md:grid-cols-[1fr_110px_1fr] md:gap-x-0"
              >
                <div className="hidden md:block" />
                <div className="flex justify-center md:pt-1">
                  <span
                    className={`hw-node hw-node-end block ${compact ? "h-6 w-6" : "h-8 w-8"}`}
                  />
                </div>
                <div className="hidden md:block" />
                <div
                  className={`hw-card col-start-2 mt-4 rounded-[var(--radius-card)] border-2 border-cyan bg-cyan text-ink md:col-span-3 md:col-start-1 md:mx-auto md:mt-6 md:w-full ${
                    compact ? "max-w-2xl p-6" : "max-w-3xl p-6 md:p-7"
                  }`}
                >
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                    <Icon
                      cut="#1f1f1f"
                      className={`shrink-0 ${compact ? "h-10 w-10" : "h-12 w-12"}`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow text-[0.75rem] tracking-[0.2em] text-ink/70">
                        {step.n} · {step.day}
                      </p>
                      <h3
                        className={`display mt-2 leading-tight ${compact ? "text-xl" : "text-xl md:text-2xl"}`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-semibold text-ink/70">
                        {step.subtitle}
                      </p>
                      {!compact && (
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className="rounded-full border-2 border-ink/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          }

          const card = (
            <div
              className="hw-card rounded-[var(--radius-card)] border-2 border-cyan/25 bg-ink-100 p-5 text-bone md:p-6"
            >
              <div className="flex items-start gap-4">
                <Icon
                  cut="#2a2a2c"
                  className={`shrink-0 ${compact ? "h-10 w-10" : "h-11 w-11"}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="eyebrow text-[0.75rem] tracking-[0.2em] text-cyan">
                    {step.n}
                  </p>
                  <h3
                    className={`display mt-1.5 leading-tight ${compact ? "text-lg" : "text-xl"}`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-bone/60">
                    {step.subtitle}
                  </p>
                  {!compact && (
                    <ul className="mt-3 space-y-1.5">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-sm leading-snug text-bone/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );

          const dayLabel = (
            <p
              className={`hw-day eyebrow text-[0.72rem] tracking-[0.2em] ${
                left ? "md:text-right" : "md:text-left"
              }`}
            >
              {step.day}
            </p>
          );

          return (
            <li
              key={step.n}
              ref={(el) => {
                stopRefs.current[i] = el;
              }}
              className={`hw-stop ${left ? "hw-stop-left" : "hw-stop-right"} grid grid-cols-[40px_1fr] gap-x-4 md:grid-cols-[1fr_110px_1fr] md:gap-x-0 ${tuck}`}
            >
              {/* Desktop left column */}
              <div className="hidden md:block">
                {left && (
                  <div className={compact ? "md:pr-6" : "md:pr-8"}>
                    {dayLabel}
                    <div className="mt-2">{card}</div>
                  </div>
                )}
              </div>

              {/* Node column */}
              <div className="flex justify-center md:pt-7">
                <span className={`hw-node block ${compact ? "h-6 w-6" : "h-8 w-8"}`} />
              </div>

              {/* Mobile: every card on the right. Desktop: only the right stops. */}
              <div className="md:hidden">
                {dayLabel}
                <div className="mt-2">{card}</div>
              </div>
              <div className="hidden md:block">
                {!left && (
                  <div className={compact ? "md:pl-6" : "md:pl-8"}>
                    {dayLabel}
                    <div className="mt-2">{card}</div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );

  return (
    <section
      id="process"
      className={`hw-dots relative overflow-hidden bg-ink text-bone ${
        compact ? "py-16 md:py-24" : "py-14 md:py-20"
      }`}
    >
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Pill>{process.eyebrow}</Pill>
          <h2
            className={`display mt-6 ${
              compact
                ? "text-[clamp(2rem,4.4vw,3.4rem)]"
                : "text-[clamp(2.1rem,4.8vw,3.8rem)]"
            }`}
          >
            {process.headlineParts.before}{" "}
            <span className="hw-swipe">{process.headlineParts.swipe}</span>
            {process.headlineParts.after}
          </h2>
          {compact ? (
            <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-bone/70 md:text-lg">
              {process.body}
            </p>
          ) : (
            <p className="mx-auto mt-5 max-w-[58ch] text-base leading-relaxed text-bone/70 md:text-lg">
              {process.lede}
            </p>
          )}
        </Reveal>

        <div className={compact ? "mt-10" : "mt-10 md:mt-12"}>
          {compact ? (
            <Link
              href="/how-it-works"
              aria-label="See every step of the Hands Off Hiring System"
              className="block rounded-[var(--radius-card)] outline-none transition-transform duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-cyan"
            >
              {road}
            </Link>
          ) : (
            road
          )}
        </div>

        {compact ? (
          <Reveal className="mt-10 text-center">
            <Button href="/how-it-works">{process.teaserCta}</Button>
          </Reveal>
        ) : (
          <Reveal className="mt-10 text-center md:mt-12">
            <p className="display text-[clamp(1.4rem,2.6vw,2rem)]">
              {process.closer.line}
            </p>
            <div className="mt-6">
              <Button href={site.bookCall} size="lg">
                {process.closer.cta}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
