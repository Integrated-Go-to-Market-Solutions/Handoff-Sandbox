import Link from "next/link";
import { Reveal } from "../reveal";
import { OrganicPhoto } from "../organic-photo";
import { proofStats } from "@/lib/content";

const cardAccents = [
  "bg-royal text-bone",
  "bg-cyan text-ink",
  "bg-white text-ink border border-ink/10",
  "bg-ink text-bone",
] as const;

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"] as const;

/**
 * Tilted stat cards, real photos in organic-blob frames, light gray
 * background — direct reference to the sales deck's own stat-tile design.
 * Clickable through to the full proof on /results, same numbers reused
 * there in the case studies. Nico's feedback moved these out of the hero
 * into their own section; this is that section, restyled to the reference.
 */
export function Stats() {
  return (
    <section className="bg-bone py-16 md:py-20">
      <div className="shell">
        <Reveal>
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {proofStats.map((stat, i) => (
              <Link
                key={stat.label}
                href="/results"
                className={`group block rounded-[var(--radius-brand)] p-5 shadow-md transition-all duration-500 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-xl md:p-6 ${cardAccents[i % cardAccents.length]} ${rotations[i % rotations.length]}`}
              >
                <p className="display text-2xl leading-none md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold md:text-base">
                  {stat.label}
                </p>
                <OrganicPhoto
                  src={`/images/team/${stat.photo}.webp`}
                  alt=""
                  flip={i % 2 === 1}
                  focus={stat.photo === "jake-castro" ? "center 15%" : "center"}
                  className="mt-4 aspect-[4/3] w-full"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
