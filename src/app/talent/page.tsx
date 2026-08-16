import type { Metadata } from "next";
import { Button, Pill } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { TalentCard } from "@/components/talent-card";
import { Cta } from "@/components/sections/cta";
import { talentPage, team, roleGroups, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who you could be hiring | Handoff",
  description:
    "The roles Handoff fills across operations, leadership, marketing and revenue, and the Latin American team behind the company.",
};

export default function TalentPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-14 md:pb-20 md:pt-20">
        <div
          className="pointer-events-none absolute -right-52 -top-56 h-[620px] w-[620px] rounded-full opacity-30 blur-[130px]"
          style={{ background: "var(--color-cyan)" }}
          aria-hidden="true"
        />

        <div className="shell relative max-w-4xl">
          <Reveal>
            <Pill>{talentPage.eyebrow}</Pill>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-6 text-[clamp(2.5rem,6vw,4.6rem)] text-ink">
              {talentPage.headline}{" "}
              <span className="text-royal">{talentPage.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink/70">
              {talentPage.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-14 md:pb-16">
        <div className="shell flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-4">
          {team.map((person, i) => (
            <TalentCard key={person.slug} {...person} index={i} />
          ))}

          <Reveal
            delay={team.length * 70}
            className="w-[268px] shrink-0 snap-start sm:w-auto"
          >
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-brand)] bg-ink p-7">
              <p className="display text-2xl leading-tight text-bone">
                Your next hire
                <br />
                <span className="text-cyan">goes here.</span>
              </p>
              <Button href={site.bookCall} className="mt-8 w-full">
                Book a call
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-24 md:py-28">
        <div className="tex-dots absolute inset-0 opacity-[0.12]" aria-hidden="true" />

        <div className="shell relative">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-royal">The list</p>
            <h2 className="display mt-5 text-[clamp(2.1rem,4.6vw,3.4rem)] text-ink">
              {talentPage.rolesHeadline}
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/70">
              {talentPage.rolesBody}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {roleGroups.map((group, i) => (
              <Reveal key={group.name} delay={i * 90}>
                <article className="h-full rounded-[var(--radius-card)] border border-ink/12 bg-white p-8">
                  <h3 className="display text-2xl text-ink">{group.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/60">
                    {group.blurb}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.roles.map((role) => (
                      <li
                        key={role}
                        className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[0.85rem] font-medium text-ink/80"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24 md:pt-28">
        <Cta />
      </div>
    </>
  );
}
