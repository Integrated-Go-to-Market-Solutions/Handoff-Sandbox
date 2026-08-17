import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";
import { talentPage, roleGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Roles we fill | Handoff",
  description:
    "The roles Handoff fills across operations, leadership, marketing and revenue, from chief of staff to media buyer.",
};

/**
 * Roles only. The team's faces live on /about now: this page answers "what can
 * I actually hire", which is what the primary CTA promises.
 */
export default function TalentPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-20 pt-14 md:pt-20">
        <div
          className="drift pointer-events-none absolute -right-52 -top-56 h-[620px] w-[620px] rounded-full opacity-28 blur-[130px]"
          style={{ background: "var(--color-cyan)" }}
          aria-hidden="true"
        />

        <div className="shell relative max-w-4xl">
          <Reveal>
            <h1 className="display text-[clamp(2.5rem,6vw,4.6rem)] text-ink">
              The roles you can
              <br />
              <span className="text-royal">actually hand off.</span>
            </h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink/70">
              {talentPage.rolesBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone pb-24 pt-20 md:pb-28">
        <div className="shell relative grid gap-5 md:grid-cols-2">
          {roleGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 90}>
              <article className="h-full rounded-[var(--radius-card)] border border-ink/12 bg-white p-8">
                <h2 className="display text-2xl text-ink">{group.name}</h2>
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
      </section>

      <div className="pt-24 md:pt-28">
        <Cta />
      </div>
    </>
  );
}
