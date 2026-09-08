import Image from "next/image";
import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { vibes } from "@/lib/content";

/**
 * The headline used to X out "We don't talk about overseas talent", erase
 * and retype. Rejected as "not good". Now one static line, "We are the
 * overseas talent.", with the same cyan swipe the Hiring Highway headline
 * uses, so the two sections read as one system. The body carries the
 * competitor contrast on its own.
 *
 * Real photo, not a flat fill: a true duotone (grayscale image, teal tint
 * via `mix-blend-mode: color` so the hue rides on the photo's own contrast
 * instead of just sitting on top of it), per Karla's own words on the call:
 * "if we were to use a picture, maybe we use it with grayscale... it's with
 * opacity or an effect of duotone... it doesn't steal the show, but it
 * gives texture on the background."
 */
export function Vibes() {
  return (
    <section className="relative overflow-hidden bg-ink section-py text-bone">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/team-group.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-cyan-dim mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>
      <div className="shell relative z-10">
        <Reveal className="max-w-4xl">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)]">
            {vibes.headline}{" "}
            <span className="swipe">{vibes.headlineAccent}</span>
            {vibes.headlineAfter}
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone/70">
            {vibes.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {vibes.clips.map((clip, i) => (
            <Reveal key={clip.slug} delay={i * 110}>
              <VideoLoop
                src={`/video/${clip.slug}.mp4`}
                poster={`/video/${clip.slug}.jpg`}
                name={clip.name}
                caption={clip.caption}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
