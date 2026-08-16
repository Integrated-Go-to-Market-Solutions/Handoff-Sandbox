import { Button } from "../brand";
import { Reveal } from "../reveal";
import { TalentCard } from "../talent-card";
import { proof, team, site } from "@/lib/content";

export function Proof() {
  return (
    <section id="talent" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="shell relative">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-royal">{proof.eyebrow}</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)] text-ink">
            {proof.headline}
            <br />
            <span className="text-royal">{proof.headlineAccent}</span>
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink/70">
            {proof.body}
          </p>
        </Reveal>
      </div>

      {/* Scroll-snap row on small screens, grid from sm up. */}
      <div className="relative mt-14">
        <div className="shell flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-4">
          {team.map((person, i) => (
            <TalentCard key={person.slug} {...person} index={i} />
          ))}

          <Reveal
            delay={team.length * 70}
            className="w-[268px] shrink-0 snap-start sm:w-auto"
          >
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-brand)] bg-ink p-7">
              <p className="display text-2xl leading-tight text-bone">
                Your next hire
                <br />
                <span className="text-cyan">goes here.</span>
              </p>
              <Button href={site.bookCall} className="mt-8 w-full">
                Book a call
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
