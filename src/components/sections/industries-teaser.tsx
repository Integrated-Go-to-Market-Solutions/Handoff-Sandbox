import Link from "next/link";
import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { Icon, type IconName } from "../icon";
import { industries } from "@/lib/content";

/**
 * Light gray, with the team's own footage in grayscale behind it. The five
 * industries the ICP names get a row so a visitor finds their room within
 * one scroll.
 *
 * No boxes, per direct feedback ("get rid of the boxes"). Each industry is
 * an element in the brand guide's own treatment: a cyan-outlined icon,
 * the name, one line on the problem it answers, and the link. Same icon
 * language as Why LATAM two sections up, so the light sections rhyme.
 */
export function IndustriesTeaser() {
  return (
    <section className="relative overflow-hidden bg-bone section-py text-ink">
      <div className="absolute inset-0 grayscale" aria-hidden="true">
        <VideoLoop
          src="/video/culture.mp4"
          poster="/video/culture.jpg"
          name=""
          caption=""
          bare
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bone via-bone/90 to-bone" />
        <div className="absolute inset-0 bg-bone/55" />
      </div>
      <div className="shell relative z-10">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-ink">
            Built for your industry
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/70">
            The roles and the pitch change by room. Find yours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 90}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col"
              >
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan text-cyan-dim shadow-[0_0_24px_-8px_rgba(61,214,189,0.55)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-cyan group-hover:text-ink group-hover:shadow-[0_0_32px_-6px_rgba(61,214,189,0.8)]">
                  <Icon
                    name={industry.icon as IconName}
                    className="h-9 w-9 transition-transform duration-500 group-hover:scale-110"
                  />
                </span>

                <span className="display mt-6 block min-h-[2.75rem] text-xl leading-tight text-ink">
                  {industry.navLabel}
                </span>
                <span className="mt-2 block min-h-[2.75rem] text-[0.95rem] leading-snug text-ink/65">
                  {industry.problemHeadline}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                  See the roles
                  <span className="text-cyan-dim transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
