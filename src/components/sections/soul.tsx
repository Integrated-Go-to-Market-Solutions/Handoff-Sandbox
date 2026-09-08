import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { soul } from "@/lib/content";

/**
 * One statement over the team's own footage in grayscale. Stripped back in
 * three rounds of direct feedback ("way too busy... simple, minimal", then
 * remove the quote, then remove the headline) until only the Alma line is
 * left, huge, in display type, across the whole width.
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
        <Reveal className="mx-auto max-w-6xl text-center">
          <h2 className="display text-[clamp(2.2rem,5.6vw,5rem)] leading-[1.05] text-bone">
            {soul.closerParts.before}{" "}
            <span className="text-cyan">{soul.closerParts.accent}</span>
            {soul.closerParts.after}
          </h2>
          <p className="mx-auto mt-8 max-w-[44ch] font-gotham text-[clamp(1.15rem,2vw,1.6rem)] font-medium leading-snug text-bone/90">
            {soul.closerParts.sub}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
