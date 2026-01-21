import Backlight from "@/components/Backlight";
import Gallery from "@/components/Gallery";
import Payment from "@/components/Payment";

export default function SuccessPage() {
    return (
        <>
        <Backlight count={4} gap={270} fromColor="#F94646" toColor="rgba(237,21,21,0)" marginTop={-150} />
        <main className="relative z-1 mt-10 max-w-[1400px] w-[75%] m-auto flex min-h-screen flex-col gap-15 items-start justify-items-start bg-transparent">
            <Payment />
            <Gallery />
        </main>
        </>
    )
}