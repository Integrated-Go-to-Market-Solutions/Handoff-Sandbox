import Image from "next/image";
import { logos } from "@/lib/content";

/**
 * Client proof bar. Duplicated once so the CSS marquee loops seamlessly at
 * -50% translation.
 *
 * `bare` drops the section chrome so this can sit inside the hero, letting the
 * hero photograph bleed down behind it instead of stopping at a hard edge.
 */
export function LogoMarquee({ bare = false }: { bare?: boolean }) {
  const row = [...logos, ...logos];

  const track = (
    <div className="marquee-mask relative overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-20 px-10">
        {row.map((logo, i) =>
          logo.hasImage ? (
            <div
              key={`${logo.slug}-${i}`}
              className="relative h-24 w-[260px] shrink-0 transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={`/images/logos/${logo.slug}.webp`}
                alt={logo.name}
                fill
                sizes="260px"
                className="object-contain object-center"
              />
            </div>
          ) : (
            // Real client, no logo file yet (a pasted reference image can't
            // be extracted into individual files) — a clean text wordmark
            // instead of a broken image or a fabricated mark.
            <div
              key={`${logo.slug}-${i}`}
              className="grid h-24 w-[260px] shrink-0 place-items-center transition-transform duration-500 hover:scale-105"
            >
              <span className="display text-xl text-ink/70">{logo.name}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );

  if (bare) return track;

  return (
    <section className="border-y border-ink/10 bg-bone py-14" aria-label="Client logos">
      <div className="shell mb-8 flex items-center gap-4">
        <span className="h-px w-10 bg-cyan-dim" aria-hidden="true" />
        <p className="eyebrow text-base font-bold text-ink/70 md:text-lg">
          Trusted by teams that keep moving
        </p>
      </div>
      {track}
    </section>
  );
}
