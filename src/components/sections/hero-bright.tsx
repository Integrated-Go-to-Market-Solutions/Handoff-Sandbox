import Image from "next/image";
import { Button, Pill } from "../brand";
import { Counter } from "../counter";
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
  { slug: "jazmin-esparza", name: "Jazmin Esparza", role: "Chief of Staff", offset: "sm:mt-16" },
  { slug: "catalina-saldarriaga", name: "Catalina Saldarriaga", role: "Operations Manager", offset: "sm:mt-0" },
  { slug: "karla-patron", name: "Karla Patrón", role: "Marketing Specialist", offset: "sm:mt-24" },
  { slug: "jake-castro", name: "Jake Castro", role: "VP of Automation", offset: "sm:mt-6" },
  { slug: "leidy-quintero", name: "Leidy Quintero", role: "Project Manager", offset: "sm:mt-28" },
  { slug: "simon-quintero", name: "Simon Quintero", role: "Executive Assistant", offset: "sm:mt-10" },
  { slug: "shaori-velueta", name: "Shaori Velueta", role: "Digital Marketer", offset: "sm:mt-20" },
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
        <Pill>{hero.eyebrow}</Pill>
        <h1 className="display max-w-[15ch] text-[clamp(3rem,9vw,7.5rem)] text-ink">
          {hero.headline[0]}{" "}
          <span className="text-royal">{hero.headline[1]}</span>{" "}
          {hero.headline[2]}
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-[46ch] border-l-4 border-acid pl-4 text-lg font-semibold leading-relaxed text-ink md:text-xl">
              {hero.body}
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
              <dd className="mt-1 text-[0.78rem] font-medium leading-snug text-ink/75">
                candidates
                <br />
                per role
              </dd>
            </div>
            <div>
              <dt className="display text-3xl text-cyan-dim">
                <Counter to={90} suffix="-day" />
              </dt>
              <dd className="mt-1 text-[0.78rem] font-medium leading-snug text-ink/75">
                guarantee on
                <br />
                direct hires
              </dd>
            </div>
            <div>
              <dt className="display text-3xl text-ink">7</dt>
              <dd className="mt-1 text-[0.78rem] font-medium leading-snug text-ink/75">
                of us, all
                <br />
                hired this way
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Staggered strip, held inside the shell so no face is clipped. The
          editorial feel comes from the offsets, not from running off the edge. */}
      <div className="shell relative mt-12 flex gap-4 overflow-x-auto pb-12 sm:mt-8 sm:grid sm:grid-cols-7 sm:gap-3 sm:overflow-visible sm:pb-16 lg:gap-4">
        {STRIP.map((cell, i) => (
          <figure
            key={cell.slug}
            className={`group relative w-[200px] shrink-0 sm:w-auto ${cell.offset}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-brand)] bg-bone">
                <Image
                  src={`/images/team/${cell.slug}.webp`}
                  alt={`${cell.name}, ${cell.role} at Handoff`}
                  fill
                  priority={i < 4}
                  sizes="(max-width: 640px) 200px, 14vw"
                  className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale"
                />
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
