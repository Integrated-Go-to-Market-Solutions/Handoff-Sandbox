import { Button } from "../brand";
import { Reveal } from "../reveal";
import { cta } from "@/lib/content";

export function Cta() {
  return (
    <section className="shell pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-brand)] bg-cyan px-8 py-20 text-center md:px-16">
          <div className="relative">
            <h2 className="display mx-auto max-w-[16ch] text-[clamp(2.2rem,5.2vw,4rem)] text-ink">
              {cta.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/75">
              {cta.body}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={cta.primary.href} variant="ink">
                {cta.primary.label}
              </Button>
              <Button href={cta.secondary.href} variant="ghost">
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
