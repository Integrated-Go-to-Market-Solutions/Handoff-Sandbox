import { Button, Eyebrow } from "../brand";
import { LatamMap } from "../latam-map";
import { hero } from "@/lib/content";

/**
 * Background features the LATAM outline as a subtle but intentional
 * background graphic, reusing the existing asset from the WhyLatam section.
 * The SVG is recolored with the brand's cyan accent at low opacity so it
 * remains visible as a decorative element without competing with the headline
 * or CTAs. The brick pattern has been removed entirely.
 *
 * Per the 9/4 and follow-up calls: the hero no longer leads with Handoff's
 * own team photos; the map sits as a muted brand-accented background rather
 * than a full-bleed image.
 */
export function HeroBright({ subhead }: { subhead?: string } = {}) {
  return (
    <section className="halftone relative overflow-hidden bg-ink pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="absolute inset-0" aria-hidden="true">
        <LatamMap
          className="absolute -right-24 top-1/2 aspect-[1014/1293] h-[70%] -translate-y-1/2 sm:-right-16 md:-right-24 md:h-[90%] lg:-right-16 lg:h-[110%] xl:-right-4 xl:h-[130%]"
          baseClassName="bg-black opacity-30 md:opacity-40"
          glowClassName="opacity-45"
        />
      </div>
      <div className="shell relative z-10">
        <Eyebrow className="mb-5 md:mb-6">{hero.eyebrow}</Eyebrow>
        {/* Sized off the viewport so the longest line never wraps or overflows. */}
        <h1 className="display text-[clamp(1.5rem,calc((100vw-56px)/10.4),7rem)] text-bone [line-height:1.08]">
          {hero.headlineLines.map((line) => (
            <span
              key={line.text}
              className={`block whitespace-nowrap ${line.tone === "cyan" ? "text-cyan" : ""}`}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-full text-lg font-semibold leading-relaxed text-bone md:whitespace-nowrap md:text-xl">
          {subhead ?? hero.body}
        </p>

        <div className="mt-8">
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
        </div>
      </div>
    </section>
  );
}
