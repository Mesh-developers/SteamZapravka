import Advantages from "@/components/Advantages";
import Backlight from "@/components/Backlight";
import Balance from "@/components/Balance";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hexagon from "@/components/Hexagon";
import SteamDrop from "@/components/SteamDrop";

export default function Home() {
  return (
    <>
      <Hexagon />
      <Hexagon mirror />
      <Backlight count={4} />
      <main className="relative z-2 mt-10 w-[85%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
       <CTA />
       <Advantages />
       <Balance />
       <SteamDrop />
       <FAQ />
      </main>
    </>
  );
}
