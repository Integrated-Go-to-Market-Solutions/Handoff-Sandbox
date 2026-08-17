import { Hero } from "@/components/sections/hero";
import { RoleTicker } from "@/components/sections/role-ticker";
import { Problem } from "@/components/sections/problem";
import { Proof } from "@/components/sections/proof";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { Process } from "@/components/sections/process";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <RoleTicker />
      <Problem />
      <Proof />
      <Vibes />
      <Soul />
      <Process />
      <Models />
      <Faq />
      <Cta />
    </>
  );
}
