import Link from "next/link";
import { Reveal } from "../reveal";
import { OrganicPhoto } from "../organic-photo";
import { proofStats } from "@/lib/content";

/* Same card system as pricing, the quotes and the Hiring Highway: each
   tile its own gradient, outlined in cyan with a soft glow. The fourth
   tile is the light one so the row still reads as four distinct tiles on
   the light gray section. */
const cardAccents = [
  { card: "bg-gradient-to-br from-royal to-azure text-bone", label: "text-bone/75" },
  { card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink", label: "text-ink/70" },
  { card: "bg-gradient-to-br from-white to-bone text-ink", label: "text-ink/65" },
  { card: "bg-gradient-to-br from-ink-300 to-ink text-bone", label: "text-bone/70" },
] as const;

/**
 * Stat tiles, per the sales deck's own stat-tile idea, restyled to match
 * the rest of the site: no tilt (everything symmetrical), 33px corners,
 * gradient plus cyan outline, and the team photos in grayscale with a cyan
 * outline on the organic frame. Clickable through to the full proof on
 * /results. Nico's feedback moved these out of the hero into their own
 * section.
 */
export function Stats() {
  return (
    <section className="bg-bone py-16 md:py-20">
      <div className="shell">
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {proofStats.map((stat, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <Reveal key={stat.label} delay={i * 100}>
                <Link
                  href="/results"
                  className={`group block h-full rounded-[var(--radius-card)] border-2 border-cyan p-5 shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)] md:p-6 ${accent.card}`}
                >
                  <p className="display text-3xl leading-none md:text-4xl">
                    {stat.value}
                  </p>
                  <p className={`mt-2 text-sm font-semibold md:text-base ${accent.label}`}>
                    {stat.label}
                  </p>
                  <OrganicPhoto
                    src={`/images/team/${stat.photo}.webp`}
                    alt=""
                    flip={i % 2 === 1}
                    focus={stat.photo === "jake-castro" ? "center 15%" : "center"}
                    grayscale
                    outlined
                    className="mt-5 aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
