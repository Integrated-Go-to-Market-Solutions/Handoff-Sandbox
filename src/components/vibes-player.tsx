"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

type Clip = { slug: string; name: string; caption: string };

/**
 * Three reels where only one ever plays. Desktop: the middle slot is the
 * main video (muted loop); hovering a side reel pauses it and plays that
 * reel as a silent preview; clicking a side reel slides it into the middle
 * and plays it with sound. Phones: a swipe row where the centred reel plays.
 */
export function VibesPlayer({ clips }: { clips: Clip[] }) {
  const [active, setActive] = useState(Math.min(1, clips.length - 1));
  const [muted, setMuted] = useState(true);
  const [inView, setInView] = useState(false);
  const [preview, setPreview] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Phones: whichever reel is centred in the swipe row becomes the main one.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const mobile = window.matchMedia("(max-width: 767px)");
    const io = new IntersectionObserver(
      (entries) => {
        if (!mobile.matches) return;
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = cards.current.indexOf(e.target as HTMLElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { root: scroller, threshold: 0.7 },
    );
    for (const c of cards.current) if (c) io.observe(c);
    return () => io.disconnect();
  }, []);

  // One source of truth for who is playing.
  useEffect(() => {
    const playing = preview ?? active;
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === playing && inView && (!reduced.current || (i === active && !muted))) {
        v.muted = i === active ? muted : true;
        void v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, preview, muted, inView]);

  const choose = useCallback(
    (i: number) => {
      setPreview(null);
      if (i === active) {
        setMuted((m) => !m);
        return;
      }
      const v = videos.current[i];
      if (v) v.currentTime = 0;
      if (window.matchMedia("(max-width: 767px)").matches) {
        cards.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
      setActive(i);
      setMuted(false);
    },
    [active],
  );

  // Desktop slot order keeps the main reel in the middle.
  const n = clips.length;
  const slotOf = (i: number) => (n === 3 ? ((i - active + 1 + n) % n) : i);

  return (
    <div ref={rootRef}>
      <div
        ref={scrollerRef}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[11vw] pb-2 md:mx-0 md:grid md:grid-cols-[1fr_1.3fr_1fr] md:items-center md:gap-5 md:overflow-visible md:px-0 md:pb-0"
      >
        {clips.map((clip, i) => {
          const isMain = i === active;
          return (
            <figure
              key={clip.slug}
              ref={(el) => {
                cards.current[i] = el;
              }}
              style={{ "--slot": slotOf(i) } as CSSProperties}
              onMouseEnter={() => !isMain && window.matchMedia("(min-width: 768px)").matches && setPreview(i)}
              onMouseLeave={() => preview === i && setPreview(null)}
              className={`group relative w-[78vw] shrink-0 snap-center overflow-hidden rounded-[var(--radius-brand)] border-2 bg-ink transition-[border-color,box-shadow,opacity] duration-500 md:w-auto md:[order:var(--slot)] ${
                isMain
                  ? "border-cyan shadow-[0_0_36px_-8px_rgba(61,214,189,0.7)]"
                  : "border-cyan/30 md:opacity-80 md:hover:opacity-100"
              }`}
            >
              <button
                type="button"
                onClick={() => choose(i)}
                aria-label={
                  isMain
                    ? `${muted ? "Unmute" : "Mute"} ${clip.name}`
                    : `Play ${clip.name} with sound`
                }
                className="block w-full cursor-pointer text-left"
              >
                <video
                  ref={(el) => {
                    videos.current[i] = el;
                  }}
                  className="aspect-[9/16] w-full object-cover"
                  poster={`/videos/${clip.slug}.jpg`}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${clip.name}: ${clip.caption}`}
                >
                  <source src={`/videos/${clip.slug}.mp4`} type="video/mp4" />
                </video>

                <span
                  className={`absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full backdrop-blur-sm transition-colors ${
                    isMain ? "bg-ink/65 text-bone group-hover:bg-cyan group-hover:text-ink" : "bg-cyan text-ink"
                  }`}
                  aria-hidden="true"
                >
                  {isMain ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                      <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" />
                      {muted ? (
                        <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      ) : (
                        <path d="M15.5 8.5a5 5 0 010 7M18.5 6a8 8 0 010 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      )}
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  )}
                </span>

                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-14">
                  <p className="display text-lg text-bone">{clip.name}</p>
                  <p className="mt-1 text-[0.85rem] leading-snug text-bone/70">{clip.caption}</p>
                </figcaption>
              </button>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
