import { Reveal } from "../reveal";
import { soul } from "@/lib/content";

export function Soul() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-bone md:py-32">
      {/* Slow-drifting colour fields keep the dark section from going flat. */}
      <div
        className="drift pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full opacity-25 blur-[130px]"
        style={{ background: "var(--color-royal)" }}
        aria-hidden="true"
      />
      <div
        className="drift drift-slow pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--color-cyan)" }}
        aria-hidden="true"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-bone">
            {soul.headline}
            <br />
            <span className="text-acid">{soul.headlineAccent}</span>
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-bone/70">
            {soul.body}
          </p>

          <div className="mt-10 border-l-4 border-acid pl-6">
            <p className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-bone">
              &ldquo;{soul.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-cyan">
              {soul.attribution}
            </p>
            <p className="text-sm text-bone/50">{soul.attributionRole}</p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-[var(--radius-brand)] bg-white/[0.06] p-9 backdrop-blur-sm">
            <p className="display text-6xl leading-none text-cyan">Alma</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-bone/45">
              Spanish for soul
            </p>
            <p className="mt-6 leading-relaxed text-bone/75">{soul.closer}</p>

            <div className="mt-9 border-t border-white/10 pt-7">
              <p className="display text-2xl text-acid">{soul.culture.stat}</p>
              <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-bone/65">
                {soul.culture.label}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
