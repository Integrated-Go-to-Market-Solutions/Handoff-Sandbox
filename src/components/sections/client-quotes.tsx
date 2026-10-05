"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Reveal } from "../reveal";
import { VideoModal } from "../video-modal";
import { clientQuotes } from "@/lib/content";

/**
 * Two parts: a row of three client videos on top, then the five written
 * quotes underneath in a carousel (one card on phones, two from 640px,
 * three from 1024px).
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
        {/* A blurred copy of the still fills the wide frame; the clip sits on
            top as a head-and-shoulders portrait, so the face isn't blown up
            to fill the whole card. */}
        <span
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-70 blur-xl"
          style={{ backgroundImage: `url(${CLIP_BASE}/${slug}.jpg)` }}
          aria-hidden="true"
        />
        <video
          ref={ref}
          className="absolute inset-y-0 left-1/2 aspect-[3/4] h-full -translate-x-1/2 object-cover shadow-[0_0_40px_rgba(0,0,0,0.35)]"
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

function LinkedInMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#0A66C2" />
      <circle cx="10.3" cy="11.1" r="1.6" fill="#ffffff" />
      <path d="M8.9 13.5h2.8v9.6H8.9z" fill="#ffffff" />
      <path
        d="M13.4 13.5h2.7v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5v5.3h-2.8V18.5c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.7h-2.8z"
        fill="#ffffff"
      />
    </svg>
  );
}

function Arrow({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous quote" : "Next quote"}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink/15 bg-white text-ink transition-colors duration-300 hover:border-cyan hover:bg-cyan focus-visible:border-cyan focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan/40 disabled:cursor-default disabled:opacity-40 disabled:hover:border-ink/15 disabled:hover:bg-white motion-reduce:transition-none"
    >
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${dir === "prev" ? "rotate-180" : ""}`} aria-hidden="true">
        <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/**
 * The written quotes as a scroll-snap track: swipe and trackpad scrolling
 * come from the browser; the arrows and dots just scroll it. One dot per
 * resting position (5 cards with 3 visible = 3 dots), recounted on resize.
 */
function QuoteCarousel({ reduced }: { reduced: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const slides = clientQuotes.slots;
  const [stops, setStops] = useState(slides.length);
  const [active, setActive] = useState(0);

  /** Distance between two slide starts (slide width + gap). */
  const stepOf = (el: HTMLDivElement) => {
    const first = el.children[0] as HTMLElement | undefined;
    return first ? first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : 0;
  };

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const step = stepOf(el);
    if (!step) return;
    const gap = step - (el.children[0] as HTMLElement).offsetWidth;
    const perView = Math.max(1, Math.round((el.clientWidth + gap) / step));
    const count = Math.max(1, slides.length - perView + 1);
    // The last stop is the end of the track, which can be short of a full step.
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setStops(count);
    setActive(atEnd ? count - 1 : Math.min(count - 1, Math.round(el.scrollLeft / step)));
  }, [slides.length]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sync]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: i * stepOf(el), behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Client quotes">
      <div
        ref={track}
        onScroll={sync}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slot, i) => {
          const byline = [slot.title, slot.company].filter(Boolean).join(", ");
          return (
            <div
              key={slot.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className="w-full shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
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
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-ink">{slot.name}</p>
                    {byline && <p className="mt-0.5 text-[0.8rem] text-ink/60">{byline}</p>}
                  </div>
                  {slot.linkedin && (
                    <a
                      href={slot.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${slot.name} on LinkedIn (opens in a new tab)`}
                      className="shrink-0 rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
                    >
                      <LinkedInMark />
                    </a>
                  )}
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>

      {stops > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <Arrow dir="prev" disabled={active === 0} onClick={() => go(active - 1)} />
          <div className="flex items-center">
            {Array.from({ length: stops }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to position ${i + 1} of ${stops}`}
                aria-current={i === active ? "true" : undefined}
                className="group grid h-11 w-7 place-items-center focus-visible:outline-none"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 group-focus-visible:ring-4 group-focus-visible:ring-cyan/40 motion-reduce:transition-none ${
                    i === active ? "w-6 bg-cyan-dim" : "w-2.5 bg-ink/20 group-hover:bg-ink/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <Arrow dir="next" disabled={active === stops - 1} onClick={() => go(active + 1)} />
        </div>
      )}
    </div>
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

        {/* Quotes: one reveal for the whole carousel, like the video row. */}
        <Reveal className="mt-14 md:mt-16">
          <QuoteCarousel reduced={reduced} />
        </Reveal>
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
