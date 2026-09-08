import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { soul } from "@/lib/content";

/**
 * Stripped back per direct feedback ("way too busy... simple, minimal"),
 * then rebalanced so the Alma statement is the point of the section: it
 * runs huge, in display type, across the whole width of the grayscale team
 * footage. The headline sets it up above, Ever's quote sits below it at a
 * quieter size. No panels, no stats, no border rules.
 */
export function Soul() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink section-py-hero text-bone">
      <div className="absolute inset-0 grayscale" aria-hidden="true">
        <VideoLoop
          src="/video/culture.mp4"
          poster="/video/culture.jpg"
          name=""
          caption=""
          bare
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display text-[clamp(1.5rem,2.8vw,2.2rem)] text-bone/80">
            {soul.headline}{" "}
            <span className="text-cyan">{soul.headlineAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-6xl text-center md:mt-14">
          <p className="display text-[clamp(2rem,5.2vw,4.6rem)] leading-[1.05] text-bone">
            {soul.closerParts.before}{" "}
            <span className="text-cyan">{soul.closerParts.accent}</span>
            {soul.closerParts.after}
          </p>
        </Reveal>

        <Reveal delay={240} className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <blockquote className="text-lg font-semibold leading-relaxed text-bone/85 md:text-xl">
            &ldquo;{soul.quote}&rdquo;
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-cyan">{soul.attribution}</p>
          <p className="mt-1 text-sm text-bone/65">{soul.attributionRole}</p>
        </Reveal>
      </div>
    </section>
  );
}
