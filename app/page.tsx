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
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { siteType, toggleType } = useSiteType()
  return (
    <>
      <Backlight count={6} gap={100} />
      <Main classStyle="relative z-1 lg:mt-10 md:mt-15 lg:px-0 max-w-[1400px] lg:w-[85%] lg:px-0 md:px-5 md:w-[100%] md:justify-self-center lg:m-auto flex min-h-screen flex-col gap-15 max-[481px]:gap-5 items-start justify-items-start bg-transparent">
       <CTA />
       <Advantages />
       <Balance />
       <Gallery />
       <SteamDrop />
       {siteType === "game" && <Slider />}
       {siteType === "game" && <Link href={"/#balance"} onClick={()=>toggleType("telegram")} className="relative -left-5 w-[111%] h-40 max-[481px]:block hidden"><Image fill alt="tg banner mobile" src={"/images/tg_banner_mobile.png"} /></Link>}
       <FAQ />
      </Main>
    </>
  );
}
