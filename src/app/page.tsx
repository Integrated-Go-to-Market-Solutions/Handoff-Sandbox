import { HeroBright } from "@/components/sections/hero-bright";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Problem } from "@/components/sections/problem";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { Process } from "@/components/sections/process";
import { AiTrained } from "@/components/sections/ai-trained";
import { ClientQuotes } from "@/components/sections/client-quotes";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroBright />
      <LogoMarquee />
      <Problem />
      <Vibes />
      <Soul />
      <ClientQuotes />
      <Process />
      <AiTrained />
      <Models />
      <Faq />
      <Cta />
    </>
  );
}
