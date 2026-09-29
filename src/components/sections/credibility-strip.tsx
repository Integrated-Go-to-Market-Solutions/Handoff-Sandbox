import Link from "next/link";
import { Icon, type IconName } from "../icon";
import { VideoLoop } from "../video-loop";
import { LogoMarquee } from "./logo-marquee";
import { Stats } from "./stats";
import { industries } from "@/lib/content";

/**
 * Homepage proof band: who trusts us, the industries we hire for, and the
 * two numbers about the talent, over the team's culture footage (the video
 * the old "Built for your industry" section used). The footage sits behind
 * a dark overlay; the logos ride a light glass band because most of the
 * logo files are dark artwork. The logo loop runs ~15% slower than 46s.
 */
export function CredibilityStrip() {
  return (
    <section
      className="relative overflow-hidden bg-ink py-16 text-bone md:py-20"
      aria-labelledby="credibility-heading"
    >
      <div className="absolute inset-0 grayscale" aria-hidden="true">
        <VideoLoop src="/video/culture.mp4" poster="/video/culture.jpg" name="" caption="" bare />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/80" />
      </div>

      <div className="shell relative">
        <h2
          id="credibility-heading"
          className="display mx-auto text-center text-[clamp(1.35rem,2.9vw,2.4rem)] font-bold leading-tight text-white md:whitespace-nowrap md:text-[clamp(0.95rem,2.2vw,1.85rem)]"
        >
          <span className="block md:inline">Trusted by teams that keep moving forward</span>
          <span className="mx-4 hidden text-cyan md:inline" aria-hidden="true">
            |
          </span>
          <span className="mt-1 block text-cyan md:mt-0 md:inline md:text-white">Built for your industry</span>
        </h2>

        <nav aria-label="Industries we hire for" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry, i) => (
              <li
                key={industry.slug}
                className={`sm:basis-[calc((100%-1.5rem)/3)] md:basis-[calc((100%-2rem)/3)] lg:basis-0 lg:flex-1 ${
                  i === industries.length - 1 ? "basis-full" : "basis-[calc((100%-0.75rem)/2)]"
                }`}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col items-center gap-3 rounded-[var(--radius-card)] border-2 border-white/15 bg-white/[0.06] px-4 py-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:bg-white/[0.1] hover:shadow-[0_0_32px_-10px_rgba(61,214,189,0.8)] focus-visible:border-cyan md:py-7"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-cyan/70 text-cyan transition-colors duration-300 group-hover:bg-cyan group-hover:text-ink md:h-16 md:w-16">
                    <Icon name={industry.icon as IconName} strokeWidth={2.2} className="h-7 w-7 md:h-8 md:w-8" />
                  </span>
                  <span className="display text-base leading-tight text-white md:text-lg">{industry.navLabel}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60 transition-colors group-hover:text-cyan">
                    See roles
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative mt-12 border-y border-white/10 bg-white/[0.03] py-3">
        <LogoMarquee bare onDark durationSeconds={53} />
      </div>

      <div className="shell relative mt-12">
        <Stats bare variant="band" include={["Saved per hire", "Client retention"]} />
      </div>
    </section>
  );
}
