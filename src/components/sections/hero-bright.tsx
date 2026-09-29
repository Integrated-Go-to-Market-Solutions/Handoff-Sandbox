import { Button, Eyebrow } from "../brand";
import { VideoLoop } from "../video-loop";
import { hero } from "@/lib/content";

/**
 * Type-led hero: the three-line headline carries it. The LATAM map moved out
 * to its own interactive section (TalentMap) further down the page.
 */
export function HeroBright({ subhead }: { subhead?: string } = {}) {
  return (
    <section className="halftone relative overflow-hidden bg-ink pb-16 pt-14 md:pb-20 md:pt-20">
      {/* The team's culture footage, grayscale and heavily darkened so it only
          adds texture and motion behind the headline. */}
      <div className="absolute inset-0 grayscale" aria-hidden="true">
        <VideoLoop src="/video/culture.mp4" poster="/video/culture.jpg" name="" caption="" bare />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
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
