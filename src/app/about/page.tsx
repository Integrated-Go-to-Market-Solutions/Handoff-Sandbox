import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { TalentCard } from "@/components/talent-card";
import { Cta } from "@/components/sections/cta";
import { proof, socialLinks, team, soul } from "@/lib/content";

function SocialMark({ platform }: { platform: "youtube" | "linkedin" | "instagram" }) {
  if (platform === "linkedin") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#0A66C2" />
        <circle cx="10.3" cy="11.1" r="1.6" fill="#ffffff" />
        <path d="M8.9 13.5h2.8v9.6H8.9z" fill="#ffffff" />
        <path
          d="M13.4 13.5h2.7v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5v5.3h-2.8V18.5c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.7h-2.8z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <defs>
          <linearGradient id="ig" x1="0" y1="32" x2="32" y2="0">
            <stop offset="0%" stopColor="#FEDA75" />
            <stop offset="35%" stopColor="#FA7E1E" />
            <stop offset="65%" stopColor="#D62976" />
            <stop offset="100%" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="16" fill="url(#ig)" />
        <rect x="9" y="9" width="14" height="14" rx="4" fill="none" stroke="#ffffff" strokeWidth="2.2" />
        <circle cx="16" cy="16" r="3.4" fill="none" stroke="#ffffff" strokeWidth="2.2" />
        <circle cx="21.2" cy="10.8" r="1.2" fill="#ffffff" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#FF0000" />
      <path d="M12 10.3h8c2 0 3.4 1.4 3.4 3.4v4.6c0 2-1.4 3.4-3.4 3.4h-8c-2 0-3.4-1.4-3.4-3.4v-4.6c0-2 1.4-3.4 3.4-3.4z" fill="#ffffff" />
      <path d="M14.4 13.3l5.2 2.7-5.2 2.7z" fill="#FF0000" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About | Handoff",
  description:
    "Handoff is a Latin American company placing Latin American talent inside US companies. Meet the team, all hired through the same process we run for clients.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink section-py-hero">
        <div className="shell relative">
          <Reveal className="max-w-4xl">
            <h1 className="display text-[clamp(2.5rem,6vw,4.6rem)] text-bone">
              {proof.headline}
              <br />
              <span className="text-cyan">{proof.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={90} className="max-w-4xl">
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bone/70">
              {proof.body}
            </p>
          </Reveal>

          <Reveal delay={150} className="max-w-4xl">
            <nav aria-label="Handoff social media" className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="group grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full transition-transform duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal md:h-20 md:w-20"
                >
                  <span className="grid h-full w-full place-items-center">
                    <span className="scale-[1.8] md:scale-[2]">
                      <SocialMark platform={social.platform} />
                    </span>
                  </span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-16 md:pb-20">
        <div className="shell flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-4">
          {team.map((person, i) => (
            <TalentCard key={person.slug} {...person} index={i} />
          ))}
        </div>
      </section>

      {/* The culture argument, which is really a retention argument. */}
      <section className="relative overflow-hidden bg-ink section-py text-bone">
        <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.4vw,3.4rem)] text-bone">
              Everyone else sends you
              <br />
              <span className="text-cyan">a talent pool.</span>
            </h2>
            <div className="mt-8 border-l-4 border-cyan pl-6">
              <p className="display text-[clamp(1.3rem,2.4vw,1.85rem)] leading-tight text-bone">
                &ldquo;{soul.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan">
                {soul.attribution}
              </p>
              <p className="text-sm text-bone/50">{soul.attributionRole}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[var(--radius-brand)] bg-white/[0.06] p-9 backdrop-blur-sm">
              <p className="display text-5xl leading-none text-cyan">Alma</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-bone/45">
                Spanish for soul
              </p>
              <p className="mt-6 leading-relaxed text-bone/75">{soul.closer}</p>
              <div className="mt-8 pt-6">
                <p className="display text-xl text-cyan">{soul.culture.stat}</p>
                <p className="mt-2 max-w-[38ch] text-[0.95rem] leading-relaxed text-bone/65">
                  {soul.culture.label}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
