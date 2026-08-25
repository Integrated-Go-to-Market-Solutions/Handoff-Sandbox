import { Button } from "../brand";
import { Reveal } from "../reveal";
import { cta } from "@/lib/content";

/**
 * Closing section. A single cyan field gives the final CTA energy without
 * competing with the photography and typography above it.
 */
export function Cta() {
  return (
    <section className="relative overflow-hidden bg-cyan">
      <div className="shell relative py-16 text-center md:py-20">
        <Reveal>
          <h2 className="display mx-auto max-w-[16ch] text-[clamp(2.2rem,5.2vw,4rem)] text-ink">
            {cta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/85">
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
        </Reveal>
      </div>
    </section>
  );
}
