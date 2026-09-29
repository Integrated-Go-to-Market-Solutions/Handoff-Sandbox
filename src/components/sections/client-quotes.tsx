"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Reveal } from "../reveal";
import { clientQuotes } from "@/lib/content";

/**
 * Client quote cards over testimonial footage. At rest a card shows the
 * person over a dimmed, paused clip; hovering (or tapping, on touch
 * screens) brightens and plays the clip and slides the quote up in a glass
 * panel. Clips load nothing until opened (preload="none" + poster) and only
 * play while the section is on screen.
 *
 * PLACEHOLDER footage: the three clips are Handoff client testimonials, but
 * only Lynn Greenberg's card shows the actual person (PIVT). The others are
 * stand-ins until each client's own video exists.
 */
const CLIP_BASE = "/video/testimonials-web";
const clipForCard = ["quest", "rincon-rehab", "pivt", "quest", "rincon-rehab"];

const avatarTones = ["bg-cyan text-ink", "bg-royal text-white", "bg-bone text-ink"] as const;

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export function ClientQuotes() {
  const [open, setOpen] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const lastPointer = useRef<string>("mouse");
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === open && inView && !reduced) void v.play().catch(() => {});
      else v.pause();
    });
  }, [open, inView, reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bone section-py text-ink"
      aria-label="Client quotes"
    >
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2rem,4.6vw,3.4rem)] text-ink">{clientQuotes.headline}</h2>
        </Reveal>

        {/* Flex-wrap rather than grid so a short last row centres itself. */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {clientQuotes.slots.map((slot, i) => {
            const isOpen = open === i;
            const byline = [slot.title, slot.company].filter(Boolean).join(", ");
            const clip = clipForCard[i % clipForCard.length];
            return (
              <Reveal
                key={slot.id}
                delay={i * 100}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <figure
                  onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(i)}
                  onPointerLeave={(e) => e.pointerType === "mouse" && setOpen((o) => (o === i ? null : o))}
                  className={`relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] border-2 bg-ink sm:aspect-[4/5] transition-[border-color,box-shadow] duration-500 motion-reduce:transition-none ${
                    isOpen
                      ? "border-cyan shadow-[0_0_40px_-8px_rgba(61,214,189,0.75)]"
                      : "border-cyan/40 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  <video
                    ref={(el) => {
                      videos.current[i] = el;
                    }}
                    className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ease-out motion-reduce:transition-none ${
                      isOpen ? "scale-[1.03] brightness-95 saturate-100" : "brightness-[0.5] saturate-[0.6]"
                    }`}
                    poster={`${CLIP_BASE}/${clip}.jpg`}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                  >
                    <source src={`${CLIP_BASE}/${clip}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" aria-hidden="true" />

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Hide" : "Read"} the quote from ${slot.name}`}
                    onPointerDown={(e) => {
                      lastPointer.current = e.pointerType;
                    }}
                    onClick={() => {
                      // Mouse users already opened it on hover; taps and keys toggle.
                      if (lastPointer.current === "mouse" && isOpen) return;
                      setOpen((o) => (o === i ? null : i));
                    }}
                    className="absolute inset-0 z-10 cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-cyan"
                  />

                  <span
                    className={`pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-ink/60 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cyan backdrop-blur-sm transition-opacity duration-300 [@media(hover:hover)]:hidden ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                    aria-hidden="true"
                  >
                    Tap to read
                  </span>

                  <div
                    className={`pointer-events-none absolute inset-x-3 bottom-3 z-20 rounded-[calc(var(--radius-card)-6px)] p-4 text-bone sm:p-5 transition-[background-color,backdrop-filter] duration-500 motion-reduce:transition-none ${
                      isOpen ? "bg-ink/70 backdrop-blur-md" : "bg-transparent"
                    }`}
                  >
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <blockquote
                          className={`pb-4 text-sm font-semibold leading-relaxed sm:text-[0.95rem] transition-transform duration-500 motion-reduce:transition-none ${
                            isOpen ? "translate-y-0" : "translate-y-3"
                          }`}
                        >
                          <span className="display mr-1 text-2xl leading-none text-cyan" aria-hidden="true">
                            &ldquo;
                          </span>
                          {slot.quote}
                        </blockquote>
                      </div>
                    </div>
                    <figcaption className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold tracking-wide ${
                          avatarTones[i % avatarTones.length]
                        }`}
                        aria-hidden="true"
                      >
                        {initials(slot.name)}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white">{slot.name}</p>
                        {byline && <p className="mt-0.5 text-[0.8rem] text-bone/75">{byline}</p>}
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
