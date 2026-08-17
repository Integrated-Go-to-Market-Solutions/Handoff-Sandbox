import Image from "next/image";
import { Button } from "../brand";
import { Counter } from "../counter";
import { VideoLoop } from "../video-loop";
import { hero } from "@/lib/content";

/**
 * Third hero option: keeps the bright page, gets its distinctiveness from
 * composition instead of a dark scrim.
 *
 * Type sits on white where it is unarguably legible. The team runs beneath it
 * as a staggered strip that bleeds off both edges, so the page reads as a
 * fragment of something larger rather than a centred container. Editorial
 * rather than template.
 */
const STRIP = [
  { kind: "photo", slug: "jazmin-esparza", name: "Jazmin Esparza", role: "Chief of Staff", offset: "sm:mt-16" },
  { kind: "photo", slug: "catalina-saldarriaga", name: "Catalina Saldarriaga", role: "Operations Manager", offset: "sm:mt-0" },
  { kind: "video", slug: "vibes", name: "Medellín", role: "A day at Handoff", offset: "sm:mt-24" },
  { kind: "photo", slug: "jake-castro", name: "Jake Castro", role: "VP of Automation", offset: "sm:mt-6" },
  { kind: "photo", slug: "leidy-quintero", name: "Leidy Quintero", role: "Project Manager", offset: "sm:mt-28" },
  { kind: "photo", slug: "simon-quintero", name: "Simon Quintero", role: "Executive Assistant", offset: "sm:mt-10" },
  { kind: "photo", slug: "shaori-velueta", name: "Shaori Velueta", role: "Digital Marketer", offset: "sm:mt-20" },
] as const;

export function HeroBright() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-24">
      {/* Bright colour wash rather than a dark vignette. */}
      <div
        className="drift pointer-events-none absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full opacity-30 blur-[130px]"
        style={{ background: "var(--color-cyan)" }}
        aria-hidden="true"
      />

      <div className="shell relative">
        <h1 className="display max-w-[15ch] text-[clamp(3rem,9vw,7.5rem)] text-ink">
          {hero.headline[0]}{" "}
          <span className="text-royal">{hero.headline[1]}</span>{" "}
          {hero.headline[2]}
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink/75">
              Every face below works at Handoff. Not a stock library, not a
              bench of avatars. We place the top 1% of Latin American talent
              inside US companies, and we hired ourselves the same way.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="ghost">
                {hero.secondary.label}
              </Button>
            </div>
          </div>

          <dl className="flex shrink-0 gap-10 border-t border-ink/12 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <dt className="display text-3xl text-royal">
                <Counter to={300} prefix="~" />
              </dt>
              <dd className="mt-1 text-[0.78rem] leading-snug text-ink/60">
                candidates
                <br />
                per role
              </dd>
            </div>
            <div>
              <dt className="display text-3xl text-cyan-dim">
                <Counter to={90} suffix="-day" />
              </dt>
              <dd className="mt-1 text-[0.78rem] leading-snug text-ink/60">
                guarantee on
                <br />
                direct hires
              </dd>
            </div>
            <div>
              <dt className="display text-3xl text-ink">7</dt>
              <dd className="mt-1 text-[0.78rem] leading-snug text-ink/60">
                of us, all
                <br />
                hired this way
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Staggered strip, bleeding off both edges. No shell: the row is meant
          to run past the viewport so the page feels like a crop of something
          bigger. */}
      <div className="relative mt-16 flex gap-4 overflow-x-auto px-6 pb-16 sm:mt-8 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-24">
        <div className="hidden shrink-0 sm:block sm:w-[calc((100vw-min(1240px,100%-2.5rem))/2-4rem)]" />

        {STRIP.map((cell, i) => (
          <figure
            key={cell.slug}
            className={`group relative w-[220px] shrink-0 sm:w-[clamp(150px,15vw,230px)] ${cell.offset}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-brand)] bg-bone">
              {cell.kind === "video" ? (
                <VideoLoop
                  src="/video/vibes.mp4"
                  poster="/video/vibes.jpg"
                  name=""
                  caption=""
                  bare
                />
              ) : (
                <Image
                  src={`/images/team/${cell.slug}.webp`}
                  alt={`${cell.name}, ${cell.role} at Handoff`}
                  fill
                  priority={i < 4}
                  sizes="(max-width: 640px) 220px, 15vw"
                  className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale"
                />
              )}
            </div>

            <figcaption className="mt-3">
              <p className="text-[0.8rem] font-semibold leading-tight text-ink">
                {cell.name}
              </p>
              <p className="text-[0.75rem] leading-tight text-royal">
                {cell.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
