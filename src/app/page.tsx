import { HeroBright } from "@/components/sections/hero-bright";
import { Stats } from "@/components/sections/stats";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { IndustriesTeaser } from "@/components/sections/industries-teaser";
import { WhyLatam } from "@/components/sections/why-latam";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { DayInLife } from "@/components/sections/day-in-life";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { AiTrained } from "@/components/sections/ai-trained";
import { ClientQuotes } from "@/components/sections/client-quotes";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

/**
 * "How it works" used to sit near the bottom of the page. Nico, on the 9/4
 * follow-up call: "that section was a little... below everything, and that
 * section should be on the top." Moved up to run right after the problem
 * it answers, ahead of the video/culture/proof content.
 *
 * Industries teaser and Day in the Life are new (2026-09-07), per the ICP
 * industries the client named for the homepage and the separate role-video
 * series Anthony described.
 */
export default function Home() {
  return (
    <>
      <HeroBright />
      <Stats />
      <LogoMarquee />
      <IndustriesTeaser />
      <WhyLatam />
      <Problem />
      <Process />
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
