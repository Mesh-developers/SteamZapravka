"use client"

import Advantages from "@/components/Advantages";
import Backlight from "@/components/Backlight";
import Balance from "@/components/Balance";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hexagon from "@/components/Hexagon";
import { useSiteType } from "@/components/SiteTypeContext";
import SteamDrop from "@/components/SteamDrop";

export default function Home() {
  const { siteType } = useSiteType()
  return (
    <>
      <Hexagon />
      <Hexagon mirror />
      <Backlight count={4} />
      <main className="relative z-2 mt-10 w-[85%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
       <CTA />
       <Advantages />
       <Balance />
       {siteType === "game" && <Gallery />}
       <SteamDrop />
       <FAQ />
      </main>
    </>
  );
}
