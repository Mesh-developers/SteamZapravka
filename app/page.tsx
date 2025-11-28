"use client"

import Advantages from "@/components/Advantages";
import Backlight from "@/components/Backlight";
import Balance from "@/components/Balance";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import { useSiteType } from "@/components/SiteTypeContext";
import Slider from "@/components/Slider";
import SteamDrop from "@/components/SteamDrop";

export default function Home() {
  const { siteType } = useSiteType()
  return (
    <>
      <Backlight count={10} gap={68} />
      <main className="relative z-2 mt-10 max-w-[1400px] w-[75%] m-auto flex min-h-screen flex-col gap-15 items-start justify-items-start bg-transparent">
       <CTA />
       <Advantages />
       <Balance />
       <Gallery />
       <SteamDrop />
       {siteType === "game" && <Slider />}
       <FAQ />
      </main>
    </>
  );
}
