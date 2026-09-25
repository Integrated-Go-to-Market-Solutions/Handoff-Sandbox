import type { Metadata } from "next";
import { HiringHighway } from "@/components/sections/hiring-highway";
import { PromoVideo } from "@/components/sections/promo-video";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "How it works | Handoff",
  description:
    "The Hands Off Hiring System: the four steps every Handoff hire goes through, from discovery to the guarantee.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HiringHighway />
      <PromoVideo />
      <Cta />
    </>
  );
}
