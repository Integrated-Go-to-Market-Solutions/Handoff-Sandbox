import { Button, Eyebrow } from "../brand";
import { Counter } from "../counter";
import { hero, team } from "@/lib/content";

/**
 * `subhead` is the one line an industry page swaps. The label, the headline
 * and the CTAs all stay identical, so the industry pages read as the same
 * site rather than as landing pages.
 *
 * Per the 9/4 client call, the hero no longer leads with Handoff's own team
 * photos — that reads as "the team at the top" instead of the talent a buyer
 * could actually hire. The team still appears, just on /about, not here.
 * The decorative blurred colour wash was also dropped: called out on the
 * same call as an "unjustified gradient shape" that reads generic/AI-made.
 */
export function HeroBright({ subhead }: { subhead?: string } = {}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="shell relative">
        <Eyebrow className="mb-5 md:mb-6">{hero.eyebrow}</Eyebrow>
        <h1 className="display max-w-[15ch] text-[clamp(3rem,9vw,7.5rem)] text-bone">
          {hero.headline.map((part) => (
            <span
              key={part.text}
              className={
                part.tone === "royal"
                  ? "text-azure"
                  : part.tone === "cyan"
                    ? "text-cyan"
                    : undefined
              }
            >
              {part.text}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-[46ch] border-l-4 border-cyan pl-4 text-lg font-semibold leading-relaxed text-bone md:text-xl">
              {subhead ?? hero.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="ghostDark">
                {hero.secondary.label}
              </Button>
            </div>
          </div>

          <dl className="flex shrink-0 gap-10 border-t border-white/12 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <dt className="display text-3xl text-azure">
                <Counter to={300} prefix="~" />
              </dt>
              <dd className="mt-1 text-[0.78rem] font-medium leading-snug text-bone/75">
                candidates
                <br />
                per role
              </dd>
            </div>
            <div>
              <dt className="display text-3xl text-cyan">
                <Counter to={90} suffix="-day" />
              </dt>
              <dd className="mt-1 text-[0.78rem] font-medium leading-snug text-bone/75">
                guarantee on
                <br />
                direct hires
              </dd>
            </div>
            <div>
              <dt className="display text-3xl text-bone">{team.length}</dt>
              <dd className="mt-1 text-[0.78rem] font-medium leading-snug text-bone/75">
                {hero.teamStatLabel}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
