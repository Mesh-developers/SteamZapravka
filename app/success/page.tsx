import Backlight from "@/components/Backlight";
import Gallery from "@/components/Gallery";
import Main from "@/components/Main";
import Payment from "@/components/Payment";

export default function SuccessPage() {
    return (
        <>
        <Backlight count={4} gap={100} />
        <Main classStyle="relative z-1 mt-10 max-w-[1400px] w-[75%] m-auto flex min-h-screen flex-col gap-15 items-start justify-items-start bg-transparent">
            <Payment success />
            <Gallery />
        </Main>
        </>
    )
}