import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { soul } from "@/lib/content";

/**
 * Stripped back per direct feedback ("way too busy... simple, minimal"):
 * one headline, one quote, one line on Alma, all centred over the team's
 * own meetup footage in grayscale. The Alma panel, the culture stat and the
 * quote's border rule are gone; the video already shows the culture.
 */
export function Soul() {
  return (
    <section className="relative overflow-hidden bg-ink section-py-hero text-bone">
      <div className="absolute inset-0 grayscale" aria-hidden="true">
        <VideoLoop
          src="/video/culture.mp4"
          poster="/video/culture.jpg"
          name=""
          caption=""
          bare
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>
      <div className="shell relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-bone">
            {soul.headline}{" "}
            <span className="text-cyan">{soul.headlineAccent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[50ch] text-lg leading-relaxed text-bone/75">
            {soul.body}
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 max-w-4xl text-center md:mt-16">
          <blockquote className="display text-[clamp(1.6rem,3.6vw,2.8rem)] leading-tight text-bone">
            &ldquo;{soul.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-cyan">{soul.attribution}</p>
          <p className="mt-1 text-sm text-bone/65">{soul.attributionRole}</p>
        </Reveal>

        <Reveal delay={220} className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
          <p className="text-[clamp(1.35rem,2.6vw,2.1rem)] font-semibold leading-snug text-bone">
            {soul.closer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
