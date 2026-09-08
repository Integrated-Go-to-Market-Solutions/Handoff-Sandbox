import { Button } from "../brand";
import { Reveal } from "../reveal";
import { cta } from "@/lib/content";

/**
 * A line-drawn bottle, cyan outline, sitting large and faint behind the
 * closing copy. The pun is "bottleneck"; the neck is the whole point of
 * the drawing. Drifts very slowly so the section feels alive without
 * pulling attention off the buttons.
 */
function Bottle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 600" className={className} aria-hidden="true" fill="none">
      <rect x="76" y="8" width="48" height="26" rx="7" stroke="currentColor" strokeWidth="3" />
      <path
        d="M86 34 V120 C86 152 44 172 44 218 V548 a20 20 0 0 0 20 20 H136 a20 20 0 0 0 20 -20 V218 C156 172 114 152 114 120 V34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Fill level: what's stuck behind the neck. */}
      <path
        d="M52 300 C80 288 120 312 148 300 V548 a12 12 0 0 1 -12 12 H64 a12 12 0 0 1 -12 -12 Z"
        fill="currentColor"
        opacity="0.12"
      />
    </svg>
  );
}

/**
 * Closing section, on carbon with the brand guide's wave texture so it
 * matches the rest of the site instead of switching to a flat cyan field.
 * Shared by every page.
 */
export function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      {/* Texture on its own layer: `.tex-waves > *` forces direct children
          to position: relative, which would collapse the bottle wrapper. */}
      <div className="tex-waves absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Bottle className="drift absolute -right-6 top-1/2 h-[150%] w-auto -translate-y-1/2 rotate-[14deg] text-cyan opacity-30 md:right-[6%] lg:right-[10%]" />
        <Bottle className="drift-slow absolute -left-16 top-1/2 hidden h-[120%] w-auto -translate-y-1/2 -rotate-[18deg] text-cyan opacity-15 lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/60" />
      </div>

      <div className="shell relative z-10 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="display mx-auto max-w-[16ch] text-[clamp(2.4rem,5.6vw,4.4rem)] text-bone">
            {cta.headlineParts.before}{" "}
            <span className="text-cyan">{cta.headlineParts.accent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-bone/75">
            {cta.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={cta.primary.href} size="lg">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="ghostDark" size="lg">
              {cta.secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
