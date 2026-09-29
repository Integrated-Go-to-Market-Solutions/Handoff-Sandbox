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
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>
      <div className="shell relative z-10">
        <Eyebrow className="mb-5 md:mb-6">{hero.eyebrow}</Eyebrow>
        {/* Line 1 big, the two short claims together on line 2. Both sized off
            the viewport so neither line wraps or overflows. */}
        <h1 className="display text-bone [line-height:1.08]">
          <span className="hero-rise block whitespace-nowrap text-[clamp(1.5rem,calc((100vw-56px)/10.4),7rem)]">
            {hero.headlineLines[0].text}
          </span>
          <span className="mt-2 block whitespace-nowrap text-[clamp(1rem,calc((100vw-56px)/15),3.6rem)] md:mt-3">
            {hero.headlineLines.slice(1).map((line, i) => (
              <span
                key={line.text}
                className={`hero-rise inline-block ${i > 0 ? "ml-[0.35em]" : ""} ${
                  line.tone === "cyan" ? "hero-shine" : ""
                }`}
                style={{
                  animationDelay:
                    line.tone === "cyan" ? `${0.25 + i * 0.2}s, ${1.4 + i * 0.2}s` : `${0.25 + i * 0.2}s`,
                }}
              >
                {line.text}
              </span>
            ))}
          </span>
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
