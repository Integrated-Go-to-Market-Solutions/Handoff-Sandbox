import { HeroBright } from "@/components/sections/hero-bright";
import { Stats } from "@/components/sections/stats";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { IndustriesTeaser } from "@/components/sections/industries-teaser";
import { WhyLatam } from "@/components/sections/why-latam";
import { Problem } from "@/components/sections/problem";
import { HiringHighway } from "@/components/sections/hiring-highway";
import { DayInLife } from "@/components/sections/day-in-life";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { AiTrained } from "@/components/sections/ai-trained";
import { ClientQuotes } from "@/components/sections/client-quotes";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

/**
 * The Hiring Highway is section 3, per direct instruction: a compact version
 * of the vertical road right after Why LATAM, clickable through to the full
 * /how-it-works page. (Nico had already asked for it higher on the page on
 * the 9/4 follow-up call: "that section should be on the top.")
 *
 * Industries teaser and Day in the Life are new (2026-09-07), per the ICP
 * industries the client named for the homepage and the separate role-video
 * series Anthony described.
 */
export default function Home() {
  return (
    <>
      <HeroBright />
      <WhyLatam />
      <HiringHighway compact />
      <Stats />
      <LogoMarquee />
      <IndustriesTeaser />
      <Problem />
      <DayInLife />
      <Vibes />
      <Soul />
      <ClientQuotes />
      <AiTrained />
      <Models />
      <Faq />
      <Cta />
    </>
  );
}
