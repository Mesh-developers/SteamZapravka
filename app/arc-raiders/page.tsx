import Backlight from "@/components/Backlight";
import GamePage from "@/components/GamePage";
import { arcRaiders } from "@/constants";

export default function ArcRaiders() {

    return (
        <>
        <Backlight count={5} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <GamePage
            price={arcRaiders.price}
            mainImage={arcRaiders.mainImage}
            images={arcRaiders.images}
            video={arcRaiders.video}
            description={arcRaiders.description}
            minimal={arcRaiders.minimal}
            recommended={arcRaiders.recommended}
            platforms={arcRaiders.platforms}
            />
        </main>
        </>
    )
}