"use client"

import Advantages from "@/components/Advantages";
import Backlight from "@/components/Backlight";
import Balance from "@/components/Balance";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Main from "@/components/Main";
import { useSiteType } from "@/components/SiteTypeContext";
import Slider from "@/components/Slider";
import SteamDrop from "@/components/SteamDrop";

export default function Home() {
  const { siteType } = useSiteType()
  return (
    <>
      <Backlight count={siteType === "game" ? 9 : 7} gap={100} />
      <Main classStyle="relative z-1 lg:mt-10 md:mt-15 lg:left-0 lg:-translate-x-[0%] left-[50%] -translate-x-[42%] max-w-[1400px] lg:w-[85%] lg:px-0 md:px-5 md:w-[100%] md:justify-self-center lg:m-auto flex min-h-screen flex-col gap-15 items-start justify-items-start bg-transparent">
       <CTA />
       <Advantages />
       <Balance />
       <Gallery />
       <SteamDrop />
       {siteType === "game" && <Slider />}
       <FAQ />
      </Main>
    </>
  );
}
