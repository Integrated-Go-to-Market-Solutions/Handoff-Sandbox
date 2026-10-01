"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { Reveal } from "../reveal";
import { VideoModal } from "../video-modal";
import { clientQuotes } from "@/lib/content";

/**
 * Two parts, read as a pyramid: a row of three client videos on top, then
 * the five written quotes underneath (three, then two centred).
 *
 * Videos: the vertical testimonials cropped into a wider 4:3 frame around
 * the face. Nothing loads until it's needed (preload="none" + poster).
 * Hovering with a mouse plays a silent preview; clicking (or tapping, or
 * Enter) opens the full-length cut with sound in the video pop-up. With
 * reduced motion there's no hover preview, only the still and the pop-up.
 */
const CLIP_BASE = "/video/testimonials-web";

const avatarTones = ["bg-cyan text-ink", "bg-royal text-white", "bg-ink text-bone"] as const;

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

function VideoCard({
  slug,
  company,
  focus,
  reduced,
  onOpen,
}: {
  slug: string;
  company: string;
  focus: string;
  reduced: boolean;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const preview = (on: boolean) => {
    const v = ref.current;
    if (!v) return;
    if (on && !reduced) {
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <figure className="group">
      <button
        type="button"
        onClick={onOpen}
        onPointerEnter={(e) => e.pointerType === "mouse" && preview(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && preview(false)}
        aria-label={`Play the ${company} client video, with sound`}
        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border-2 border-cyan/40 bg-ink text-left shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] outline-none transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_0_36px_-8px_rgba(61,214,189,0.7)] focus-visible:border-cyan focus-visible:ring-4 focus-visible:ring-cyan/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: focus }}
          poster={`${CLIP_BASE}/${slug}.jpg`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src={`${CLIP_BASE}/${slug}.mp4`} type="video/mp4" />
        </video>
        <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" aria-hidden="true" />
        {/* Play badge: says "this opens a video" at rest and while previewing. */}
        <span
          className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-ink/70 py-1.5 pl-1.5 pr-3.5 text-xs font-bold uppercase tracking-[0.12em] text-bone backdrop-blur-sm"
          aria-hidden="true"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan text-ink">
            <svg viewBox="0 0 16 16" className="ml-0.5 h-3 w-3">
              <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
            </svg>
          </span>
          Watch
        </span>
      </button>
      {/* Text wordmark until the real logo files arrive. */}
      <figcaption className="mt-4 text-center font-sans text-base font-bold uppercase tracking-[0.18em] text-ink/80 md:text-lg">
        {company}
      </figcaption>
    </figure>
  );
}

export function ClientQuotes() {
  const [playing, setPlaying] = useState<{ slug: string; company: string } | null>(null);
  const close = useCallback(() => setPlaying(null), []);
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-[72px] overflow-hidden bg-bone pb-24 pt-14 text-ink md:pb-[8.5rem] md:pt-20"
      aria-label="Client quotes"
    >
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display text-[clamp(2rem,4.6vw,3.4rem)] text-ink">{clientQuotes.headline}</h2>
        </Reveal>

        {/* Videos: a swipeable row on phones, three across from 768px. One
            reveal for the whole row, so cards swiped in later aren't left
            waiting on their own entrance. */}
        <Reveal>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-auto md:mt-12 md:grid md:max-w-5xl md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {clientQuotes.videos.map((video) => (
              <div key={video.slug} className="w-[78%] shrink-0 snap-center sm:w-[60%] md:w-auto">
                <VideoCard {...video} reduced={reduced} onOpen={() => setPlaying(video)} />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Quotes: flex-wrap rather than grid, so the short last row centres itself. */}
        <div className="mt-14 flex flex-wrap justify-center gap-5 md:mt-16">
          {clientQuotes.slots.map((slot, i) => {
            const byline = [slot.title, slot.company].filter(Boolean).join(", ");
            return (
              <Reveal
                key={slot.id}
                delay={i * 80}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <figure className="flex h-full flex-col rounded-[var(--radius-card)] border-2 border-ink/10 bg-white p-6 shadow-sm md:p-7">
                  <span className="display text-4xl leading-none text-cyan-dim" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-[0.95rem] font-medium leading-relaxed text-ink/80">
                    {slot.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold tracking-wide ${
                        avatarTones[i % avatarTones.length]
                      }`}
                      aria-hidden="true"
                    >
                      {initials(slot.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-ink">{slot.name}</p>
                      {byline && <p className="mt-0.5 text-[0.8rem] text-ink/60">{byline}</p>}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>

      {playing && (
        <VideoModal
          src={`${CLIP_BASE}/${playing.slug}-full.mp4`}
          label={`${playing.company} client video`}
          onClose={close}
          vertical
        />
      )}
    </section>
  );
}
