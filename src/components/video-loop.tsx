"use client";

import { useEffect, useRef } from "react";

/**
 * Muted 9:16 loop that only plays while it is on screen. Three autoplaying
 * videos decoding at once is a real battery and jank cost, so anything
 * scrolled away from is paused.
 */
export function VideoLoop({
  src,
  poster,
  caption,
  name,
}: {
  src: string;
  poster: string;
  caption: string;
  name: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // play() rejects if the browser blocks autoplay. Poster stays up.
            void el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="group relative overflow-hidden rounded-[var(--radius-brand)] bg-ink">
      <video
        ref={ref}
        className="aspect-[9/16] w-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${name}: ${caption}`}
      >
        <source src={src} type="video/mp4" />
      </video>

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-14">
        <p className="display text-lg text-bone">{name}</p>
        <p className="mt-1 text-[0.85rem] leading-snug text-bone/70">{caption}</p>
      </figcaption>
    </figure>
  );
}
