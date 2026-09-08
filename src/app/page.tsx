import { HeroBright } from "@/components/sections/hero-bright";
import { Stats } from "@/components/sections/stats";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { IndustriesTeaser } from "@/components/sections/industries-teaser";
import { WhyLatam } from "@/components/sections/why-latam";
import { Problem } from "@/components/sections/problem";
import { HiringHighway } from "@/components/sections/hiring-highway";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { AiTrained } from "@/components/sections/ai-trained";
import { ClientQuotes } from "@/components/sections/client-quotes";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

/**
 * Order per direct instruction (2026-09-08): industries as section 2, the
 * compact Hiring Highway as section 3 (clickable through to the full
 * /how-it-works page), Why LATAM as section 4 right under the highway.
 * (Nico had already asked for the highway higher on the page on the 9/4
 * follow-up call: "that section should be on the top.")
 *
 * Industries teaser is new (2026-09-07), per the ICP industries the client
 * named for the homepage. The Day in the Life row was removed 2026-09-08
 * per direct instruction; it was four empty "coming soon" placeholders
 * with no footage behind them. The component and its content stay in the
 * repo for when the role videos exist.
 */
export default function Home() {
  return (
    <>
      <HeroBright />
      <IndustriesTeaser />
      <HiringHighway compact />
      <WhyLatam />
      <Stats />
      <LogoMarquee />
      <Problem />
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
