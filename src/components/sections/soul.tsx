import { Reveal } from "../reveal";
import { VideoLoop } from "../video-loop";
import { soul } from "@/lib/content";

/**
 * Real footage, not a flat photo trick: the team's own end-of-year meetup,
 * looping muted behind the culture argument this section makes. Backs up
 * "several times a year the whole team flies to Medellín" with something
 * that actually shows it instead of just saying it.
 */
export function Soul() {
  return (
    <section className="relative overflow-hidden bg-ink section-py text-bone">
      <div className="absolute inset-0" aria-hidden="true">
        <VideoLoop
          src="/video/culture.mp4"
          poster="/video/culture.jpg"
          name=""
          caption=""
          bare
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-ink/40" />
      </div>
      <div className="shell relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-bone">
            {soul.headline}
            <br />
            <span className="text-cyan">{soul.headlineAccent}</span>
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-bone/85">
            {soul.body}
          </p>

          <div className="mt-10 border-l-4 border-cyan pl-6">
            <p className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-bone">
              &ldquo;{soul.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-cyan">
              {soul.attribution}
            </p>
            <p className="text-sm text-bone/70">{soul.attributionRole}</p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-[var(--radius-brand)] bg-cyan p-9 text-ink shadow-xl">
            <p className="display text-6xl leading-none text-ink">Alma</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ink/65">
              Spanish for soul
            </p>
            <p className="mt-6 leading-relaxed text-ink/85">{soul.closer}</p>

            <div className="mt-9 border-t border-ink/20 pt-7">
              <p className="display text-2xl text-royal">{soul.culture.stat}</p>
              <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-ink/80">
                {soul.culture.label}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
