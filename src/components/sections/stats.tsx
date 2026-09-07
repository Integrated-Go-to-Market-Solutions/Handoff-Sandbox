import { Counter } from "../counter";
import { Reveal } from "../reveal";
import { hero, team } from "@/lib/content";

/**
 * Pulled out of the hero on Nico's feedback (9/4 follow-up call): "these
 * numbers are pretty important for us... I will put this below this section
 * and give these numbers their own section" rather than crowding them in
 * next to the hero's headline and CTAs. Light gray, the first break from
 * carbon: "we want the light gray and the dark charcoal as the backgrounds
 * for the entire website."
 */
export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-bone py-10">
      <Reveal>
        <dl className="shell grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          <div>
            <dt className="display text-4xl text-royal">
              <Counter to={300} prefix="~" />
            </dt>
            <dd className="mt-1 text-sm font-medium leading-snug text-ink/70">
              candidates reviewed per role
            </dd>
          </div>
          <div>
            <dt className="display text-4xl text-cyan-dim">
              <Counter to={90} suffix="-day" />
            </dt>
            <dd className="mt-1 text-sm font-medium leading-snug text-ink/70">
              guarantee on direct hires
            </dd>
          </div>
          <div>
            <dt className="display text-4xl text-ink">{team.length}</dt>
            <dd className="mt-1 text-sm font-medium leading-snug text-ink/70">
              {hero.teamStatLabel}
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
