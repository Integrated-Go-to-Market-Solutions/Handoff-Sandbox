import Link from "next/link";
import { Reveal } from "../reveal";
import { Icon, type IconName } from "../icon";
import { industries } from "@/lib/content";

const cardAccents = [
  "bg-cyan text-ink",
  "bg-royal text-bone",
  "bg-white text-ink border border-ink/10 shadow-sm",
  "bg-ink-300 text-bone border-2 border-cyan",
  "bg-bone text-ink border border-ink/10",
] as const;

/**
 * The homepage stays general enough that nobody bounces, but the five
 * industries the ICP actually names — hospitality, startups, agencies,
 * e-commerce, corporate relocation — get their own row so a visitor sees
 * their room within one scroll instead of digging into a nav dropdown.
 */
export function IndustriesTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink section-py text-bone">
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-bone">
            Built for your industry
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone/70">
            The roles and the pitch change by room. Find yours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 90}>
              <Link
                href={`/industries/${industry.slug}`}
                className={`group flex h-full min-h-[13rem] flex-col justify-between rounded-[var(--radius-card)] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${cardAccents[i % cardAccents.length]}`}
              >
                <Icon
                  name={industry.icon as IconName}
                  className="h-8 w-8 transition-transform duration-500 group-hover:scale-110"
                />
                <div>
                  <span className="block text-lg font-bold leading-tight">
                    {industry.navLabel}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold opacity-80">
                    See the roles
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
