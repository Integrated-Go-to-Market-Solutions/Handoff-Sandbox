import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { TalentCard } from "@/components/talent-card";
import { Cta } from "@/components/sections/cta";
import { proof, team, soul } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Handoff",
  description:
    "Handoff is a Latin American company placing Latin American talent inside US companies. Meet the team, all hired through the same process we run for clients.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-14 md:pt-20">
        <div
          className="drift pointer-events-none absolute -right-48 -top-52 h-[600px] w-[600px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "var(--color-cyan)" }}
          aria-hidden="true"
        />

        <div className="shell relative max-w-4xl">
          <Reveal>
            <h1 className="display text-[clamp(2.5rem,6vw,4.6rem)] text-ink">
              {proof.headline}
              <br />
              <span className="text-royal">{proof.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink/70">
              {proof.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-28">
        <div className="shell flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-4">
          {team.map((person, i) => (
            <TalentCard key={person.slug} {...person} index={i} />
          ))}
        </div>
      </section>

      {/* The culture argument, which is really a retention argument. */}
      <section className="relative overflow-hidden bg-ink py-24 text-bone md:py-28">
        <div
          className="drift pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "var(--color-royal)" }}
          aria-hidden="true"
        />

        <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.4vw,3.4rem)] text-bone">
              Everyone else sends you
              <br />
              <span className="text-acid">a talent pool.</span>
            </h2>
            <div className="mt-8 border-l-4 border-acid pl-6">
              <p className="display text-[clamp(1.3rem,2.4vw,1.85rem)] leading-tight text-bone">
                &ldquo;{soul.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan">
                {soul.attribution}
              </p>
              <p className="text-sm text-bone/50">{soul.attributionRole}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[var(--radius-brand)] bg-white/[0.06] p-9 backdrop-blur-sm">
              <p className="display text-5xl leading-none text-cyan">Alma</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-bone/45">
                Spanish for soul
              </p>
              <p className="mt-6 leading-relaxed text-bone/75">{soul.closer}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="display text-xl text-acid">{soul.culture.stat}</p>
                <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-bone/65">
                  {soul.culture.label}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-24 md:pt-28">
        <Cta />
      </div>
    </>
  );
}
