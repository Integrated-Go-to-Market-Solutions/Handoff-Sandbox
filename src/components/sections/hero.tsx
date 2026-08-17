import Image from "next/image";
import { Button } from "../brand";
import { Reveal } from "../reveal";
import { hero } from "@/lib/content";

const facts = [
  { value: "~300", label: "candidates reviewed per role" },
  { value: "90-day", label: "guarantee on direct hires" },
  { value: "Same", label: "time zone as your team" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Full-bleed photograph. Anchored right so the team stays clear of the
          copy, then washed to white across the left half. */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/team-group.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          // Square source on a wide band crops hard vertically. Bias upward so
          // faces stay in frame rather than torsos.
          className="object-cover object-[64%_26%]"
        />
        {/* Horizontal wash: solid white under the text, clearing by the right edge. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #fff 0%, #fff 34%, rgba(255,255,255,0.94) 46%, rgba(255,255,255,0.55) 62%, rgba(255,255,255,0.12) 78%, rgba(255,255,255,0) 92%)",
          }}
        />
        {/* Vertical fade so the section dissolves into the page below. */}
        <div
          className="absolute inset-x-0 bottom-0 h-80"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 72%)",
          }}
        />
      </div>

      <div className="shell relative flex min-h-[clamp(560px,82vh,860px)] items-center py-20">
        <div className="max-w-[38rem]">
          <Reveal>
            <h1 className="display text-[clamp(2.9rem,7vw,5.4rem)] text-ink">
              {hero.headline[0]}{" "}
              <span className="text-royal">{hero.headline[1]}</span>{" "}
              {hero.headline[2]}
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-ink/75">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="ghost">
                {hero.secondary.label}
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink/55">{hero.note}</p>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
