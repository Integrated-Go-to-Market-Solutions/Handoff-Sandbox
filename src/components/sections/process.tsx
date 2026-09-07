import { Eyebrow } from "../brand";
import { Reveal } from "../reveal";
import { Icon, type IconName } from "../icon";
import { process } from "@/lib/content";

const stepAccents = [
  "bg-cyan text-ink",
  "bg-royal text-bone",
  "bg-white text-ink border border-ink/10 shadow-sm",
  "bg-ink text-bone border-2 border-cyan",
] as const;

const stepIcons: IconName[] = ["target", "search", "chat", "rocket"];

/**
 * "How it works" is the process the whole site's claims rest on, so it gets
 * more visual weight than a neighboring section, not less: the section's own
 * eyebrow and the step numbers both exist in content.ts but were never
 * rendered before, which undercut the hierarchy this section is supposed to
 * carry.
 *
 * Light gray, not carbon — the alternating rhythm both calls asked for, and
 * an informational section like this reads cleanest on the light tier.
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

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} as="li">
              <div
                className={`group flex h-full flex-col rounded-[var(--radius-card)] p-7 transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl ${stepAccents[i]}`}
              >
                <div className="flex items-center justify-between">
                  <Icon name={stepIcons[i]} className="h-7 w-7" />
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
      </div>
    </section>
  );
}
