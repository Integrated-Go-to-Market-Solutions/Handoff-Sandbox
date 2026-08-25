import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { vibes } from "@/lib/content";

export function Vibes() {
  return (
    <section className="relative overflow-hidden bg-bone pb-20 pt-16 sm:pt-24 md:pb-28 lg:pt-28">
      <div className="shell relative">
        <Reveal className="max-w-4xl">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-ink">
            {vibes.headline}{" "}
            <span className="text-ink/35 line-through decoration-royal decoration-[6px]">
              {vibes.headlineStrike}
            </span>
            <br />
            <span className="text-royal">{vibes.headlineAccent}</span>
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/70">
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
