import Image from "next/image";
import { Button, Eyebrow } from "../brand";
import { hero } from "@/lib/content";

/**
 * `subhead` is the one line an industry page swaps. The label, the headline
 * and the CTAs all stay identical, so the industry pages read as the same
 * site rather than as landing pages.
 *
 * Per the 9/4 and follow-up calls: the hero no longer leads with Handoff's
 * own team photos ("instead of the team on the top... a sampling that
 * focuses on talent... not from our team"); the decorative blurred colour
 * wash was dropped as an "unjustified gradient shape"; the stat numbers move
 * to their own section below instead of crowding the hero ("give these
 * numbers their own section... there's a lot to look at [here]"); and the
 * subhead no longer carries a left border/padding that offset it from the
 * headline's edge — flagged as the sections not sharing the same margin.
 *
 * Background is a real black-brick photo (per direct reference), with the
 * brand guide's actual "Screen effect" halftone dot screen laid over it —
 * a drawn CSS brick pattern read as fake; this is the real thing.
 */
export function HeroBright({ subhead }: { subhead?: string } = {}) {
  return (
    <section className="halftone relative overflow-hidden bg-ink pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/textures/brick.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="shell relative z-10">
        <Eyebrow className="mb-5 md:mb-6">{hero.eyebrow}</Eyebrow>
        <h1 className="display max-w-[15ch] text-[clamp(3rem,9vw,7.5rem)] text-bone [line-height:1.08]">
          {hero.headline.map((part) => (
            <span
              key={part.text}
              className={
                part.tone === "cyan"
                  ? "text-cyan"
                  : undefined
              }
            >
              {part.text}{" "}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-full text-lg font-semibold leading-relaxed text-bone md:whitespace-nowrap md:text-xl">
          {subhead ?? hero.body}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <Button href={hero.secondary.href} variant="ghostDark">
            {hero.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
