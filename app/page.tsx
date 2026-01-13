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
      <Backlight count={9} gap={100} />
      <main className="relative z-2 lg:mt-10 md:mt-15 max-w-[1400px] lg:w-[75%] lg:px-0 md:px-5 md:w-[100%] md:justify-self-center lg:m-auto flex min-h-screen flex-col gap-15 items-start justify-items-start bg-transparent">
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
