import Advantages from "@/components/Advantages";
import Balance from "@/components/Balance";
import CTA from "@/components/CTA";

export default function Home() {
  return (
      <main className="mt-10 w-[85%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
       <CTA />
       <Advantages />
       <Balance />
      </main>
  );
}
