import { HeroBright } from "@/components/sections/hero-bright";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Problem } from "@/components/sections/problem";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { Process } from "@/components/sections/process";
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
      <Process />
      <Models />
      <Faq />
      <Cta />
    </>
  );
}
