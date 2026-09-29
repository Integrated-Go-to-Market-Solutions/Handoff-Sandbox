import Link from "next/link";
import { Icon, type IconName } from "../icon";
import { LogoMarquee } from "./logo-marquee";
import { Stats } from "./stats";
import { industries } from "@/lib/content";

/**
 * Homepage proof band: who we hire for, who trusts us, and the two numbers
 * about the talent itself, read as one block under the hero. The logo loop
 * runs ~15% slower than the shared 46s default.
 */
export function CredibilityStrip() {
  return (
    <section className="bg-bone py-14 text-ink md:py-16" aria-labelledby="credibility-heading">
      <div className="shell">
        <h2
          id="credibility-heading"
          className="eyebrow text-center text-base font-bold text-ink/70 md:text-lg"
        >
          Trusted by teams that keep moving
        </h2>

        <nav aria-label="Industries we hire for" className="mt-6">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan"
                >
                  <Icon name={industry.icon as IconName} strokeWidth={2.2} className="h-4 w-4 text-cyan-dim group-hover:text-ink" />
                  {industry.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <LogoMarquee bare durationSeconds={53} />
      </div>

      <div className="shell mt-8">
        <Stats bare include={["Saved per hire", "Client retention"]} />
      </div>
    </section>
  );
}
