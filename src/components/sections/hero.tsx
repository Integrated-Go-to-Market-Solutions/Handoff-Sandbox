import Image from "next/image";
import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { hero } from "@/lib/content";

const facts = [
  { value: "~300", label: "candidates reviewed per role" },
  { value: "90-day", label: "guarantee on direct hires" },
  { value: "Same", label: "time zone as your team" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
      {/* Bright cyan wash rather than a dark vignette. */}
      <div
        className="pointer-events-none absolute -right-52 -top-56 h-[680px] w-[680px] rounded-full opacity-35 blur-[130px]"
        style={{ background: "var(--color-cyan)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-64 -left-56 h-[520px] w-[520px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--color-royal)" }}
        aria-hidden="true"
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <Pill>{hero.eyebrow}</Pill>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-6 text-[clamp(2.9rem,7.2vw,5.4rem)] text-ink">
              {hero.headline[0]}{" "}
              <span className="text-royal">{hero.headline[1]}</span>{" "}
              {hero.headline[2]}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink/70">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="ghost">
                {hero.secondary.label}
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink/55">{hero.note}</p>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/12 pt-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="display text-2xl text-royal">{fact.value}</dt>
                  <dd className="mt-1.5 text-[0.8rem] leading-snug text-ink/60">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-brand)] shadow-xl">
            <Image
              src="/images/team-group.webp"
              alt="Members of the Handoff team together at a company offsite"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-6 z-10 rounded-full bg-ink px-5 py-2.5 shadow-xl">
            <span className="eyebrow text-cyan">This is the team</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
