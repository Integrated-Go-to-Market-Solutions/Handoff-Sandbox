"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Reveal } from "../reveal";
import { proofStats } from "@/lib/content";

/* Same card system as pricing, the quotes and the Hiring Highway: each
   tile its own gradient, outlined in cyan with a soft glow. Numbers
   animate count-up on entrance. Photos removed per direct instruction —
   the numbers are the primary visual focus now. */
const cardAccents = [
  { card: "bg-gradient-to-br from-royal to-azure text-bone", label: "text-bone/75" },
  { card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink", label: "text-ink/70" },
  { card: "bg-gradient-to-br from-white to-bone text-ink", label: "text-ink/65" },
  { card: "bg-gradient-to-br from-ink-300 to-ink text-bone", label: "text-bone/70" },
] as const;

function getDisplayValue(originalValue: string, current: number): string {
  // Preserve the format of the original value during count-up animation
  if (originalValue.startsWith("$")) {
    // "$50K+" format - animate the number, keep $ and K+ suffix
    const match = originalValue.match(/^(\$)(\d+)(K\+)?$/);
    if (match) {
      const prefix = match[1]; // "$"
      const hasKSuffix = !!match[3]; // true for "K+"
      // Display: $0K+, $1K+, ..., $50K+ (show whole numbers with K+ suffix)
      const displayNum = Math.floor(current);
      return `${prefix}${displayNum}${hasKSuffix ? "K+" : ""}`;
    }
  }
  if (originalValue.includes("%")) {
    // "96%+" format - animate the number, keep % and + suffix
    const match = originalValue.match(/^(\d+)(%\+)?$/);
    if (match) {
      // current ranges 0-target (e.g., 0 to 96), display as percentage directly
      const displayNum = Math.round(current);
      return `${displayNum}${match[2] || ""}`;
    }
  }
  if (originalValue.endsWith("+")) {
    // "40+" or "200+" format - animate the number, keep + suffix
    const displayNum = Math.floor(current);
    return `${displayNum}+`;
  }
  // Fallback: just show the number
  return String(Math.floor(current));
}

export function Stats({
  include,
  bare = false,
}: {
  /** Labels to show, in proofStats order. Defaults to all four. */
  include?: readonly string[];
  /** Just the tiles, no section wrapper, for embedding in another section. */
  bare?: boolean;
} = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const items = proofStats
    .map((stat, i) => ({ stat, accent: cardAccents[i % cardAccents.length] }))
    .filter(({ stat }) => !include || include.includes(stat.label));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // Initialize all stat numbers to "0" so they're visible and not the final state
    const stats = root.querySelectorAll<HTMLSpanElement>(".stat-number");
    stats.forEach((el) => {
      el.textContent = "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const numEl = entry.target as HTMLSpanElement;
          if (!numEl) continue;

          const originalValue = numEl.dataset.target || "";
          const target = Number(
            (originalValue || "").replace(/[^0-9.-]/g, "")
          );
          if (Number.isNaN(target)) continue;

          const duration = 2000;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = target * progress;
            const display = getDisplayValue(originalValue, current);
            numEl.textContent = display;

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          };

          requestAnimationFrame(update);
          observer.unobserve(numEl);
        }
      },
      { threshold: 0.5 }
    );

    stats.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const grid = (
        <div
          ref={rootRef}
          className={`grid gap-5 sm:gap-6 ${
            items.length > 2
              ? "grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-4"
              : "mx-auto max-w-3xl grid-cols-2 gap-3"
          }`}
        >
          {items.map(({ stat, accent }, i) => {
            return (
              <Reveal key={stat.label} delay={i * 100}>
                <Link
                  href="/results"
                  className={`group block h-full rounded-[var(--radius-card)] border-2 border-cyan p-5 shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)] md:p-6 ${accent.card}`}
                >
                  <p className="display text-3xl leading-none md:text-4xl">
                    <span
                      className="stat-number"
                      data-target={stat.value}
                      aria-hidden="true"
                    >
                      0
                    </span>
                  </p>
                  <p className={`mt-2 text-sm font-semibold md:text-base ${accent.label}`}>
                    {stat.label}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
  );

  if (bare) return grid;

  return (
    <section className="bg-bone py-16 md:py-20">
      <div className="shell">{grid}</div>
    </section>
  );
}
