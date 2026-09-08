import { Eyebrow } from "../brand";
import { Reveal } from "../reveal";
import { Icon, type IconName } from "../icon";
import { process, hiringHighwayVideo } from "@/lib/content";

const stepAccents = [
  "bg-cyan text-ink",
  "bg-royal text-bone",
  "bg-white text-ink border border-ink/10 shadow-sm",
  "bg-ink text-bone border-2 border-cyan",
] as const;

const stepIcons: IconName[] = [
  "target",
  "search",
  "clipboard",
  "chat",
  "envelope",
  "rocket",
];

/**
 * "The Hiring Highway" is the proprietary six-step system the whole site's
 * claims rest on, so it gets more visual weight than a neighboring section,
 * not less. Light gray, not carbon — the alternating rhythm both calls
 * asked for, and an informational section like this reads cleanest there.
 */
export function Process() {
  return (
    <section
      id="process"
      className="tex-waves relative overflow-hidden bg-bone section-py-hero text-ink"
    >
      <div className="shell relative">
        <Reveal className="max-w-4xl">
          <Eyebrow tone="royal" className="mb-5">{process.eyebrow}</Eyebrow>
          <h2 className="display max-w-[18ch] text-[clamp(2.4rem,5.6vw,4.4rem)] text-ink">
            {process.headline}
          </h2>
          <p className="mt-5 max-w-[54ch] text-base font-medium leading-relaxed text-ink/75 md:text-lg">
            {process.body}
          </p>
        </Reveal>

        {/* The literal highway: a car drives past six mile markers, one per
            step, looping continuously. */}
        <Reveal delay={80} className="mt-10">
          <div className="relative h-14 overflow-hidden rounded-full bg-ink md:h-16">
            <div className="highway-dashes absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-70" />
            <div className="absolute inset-0 flex items-center justify-between px-3 md:px-5">
              {process.steps.map((step) => (
                <span
                  key={step.n}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan text-[0.7rem] font-bold text-ink ring-4 ring-ink md:h-8 md:w-8 md:text-xs"
                >
                  {step.n}
                </span>
              ))}
            </div>
            <div className="highway-car pointer-events-none absolute top-1/2 -translate-y-1/2">
              <Icon name="car" className="h-8 w-8 text-cyan md:h-9 md:w-9" />
            </div>
          </div>
        </Reveal>

        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80} as="li">
              <div
                className={`group flex h-full flex-col rounded-[var(--radius-card)] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${stepAccents[i % stepAccents.length]}`}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    name={stepIcons[i]}
                    className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="display text-3xl leading-none opacity-40">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9rem] font-medium leading-relaxed opacity-80">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={process.steps.length * 80} className="mt-6">
          <div className="flex aspect-[21/9] items-center justify-center rounded-[var(--radius-brand)] border-2 border-dashed border-ink/20 bg-ink/[0.03]">
            <div className="text-center">
              <span className="display text-lg text-ink/50 md:text-xl">
                {hiringHighwayVideo.label}
              </span>
              <p className="mt-2 text-sm text-ink/40">
                {hiringHighwayVideo.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
