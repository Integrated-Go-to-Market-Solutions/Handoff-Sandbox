import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/brand";
import { Cta } from "@/components/sections/cta";
import { talentPage, roleGroups } from "@/lib/content";

const groupAccents = [
  "bg-cyan text-ink",
  "bg-acid text-ink",
  "bg-royal text-bone",
  "bg-ink text-bone",
] as const;

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
      <section className="relative overflow-hidden bg-white pb-16 pt-14 md:pb-20 md:pt-20">
        {/* max-w on the shell itself re-centres the block, so the top of the
            page sat ~170px right of every section below it. The cap belongs
            on an inner element, which left-aligns by default. */}
        <div className="shell relative">
          <Reveal className="max-w-4xl">
            <Eyebrow className="mb-5 md:mb-6">{talentPage.eyebrow}</Eyebrow>
            <h1 className="display text-[clamp(2.5rem,6vw,4.6rem)] text-ink">
              The roles you can
              <br />
              <span className="text-royal">actually hand off.</span>
            </h1>
          </Reveal>
          <Reveal delay={90} className="max-w-4xl">
            <p className="mt-5 max-w-[62ch] text-lg font-medium leading-relaxed text-ink/80">
              {talentPage.rolesBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone pb-20 pt-20 md:pb-24 md:pt-24">
        <div className="shell relative grid gap-5 md:grid-cols-2">
          {roleGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 90}>
              <article
                className={`group h-full rounded-[var(--radius-card)] p-7 transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8 ${groupAccents[i]}`}
              >
                <h2 className="display text-2xl">{group.name}</h2>
                <p className="mt-3 text-[0.95rem] font-medium leading-relaxed opacity-80">
                  {group.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border-current/30 bg-white/15 px-3.5 py-1.5 text-[0.85rem] font-bold"
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
