import { Button } from "../brand";
import { Reveal } from "../reveal";
import { cta } from "@/lib/content";

/**
 * Closing section. Deliberately not a card: it is a full-bleed gradient that
 * starts as the page's white, saturates to cyan, then settles into ink so it
 * hands straight off to the footer with no seam.
 */
export function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 0%, #d8f5ee 16%, var(--color-cyan) 42%, var(--color-cyan) 64%, #1c8e7d 84%, var(--color-ink) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="shell relative py-32 text-center md:py-40">
        <Reveal>
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
        </Reveal>
      </div>
    </section>
  );
}
