import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Problem } from "@/components/sections/problem";
import { Proof } from "@/components/sections/proof";
import { Process } from "@/components/sections/process";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Problem />
      <Proof />
      <Process />
      <Models />
      <Faq />
      <Cta />
    </>
  );
}
