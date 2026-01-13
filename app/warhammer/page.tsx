import Backlight from "@/components/Backlight";
import GamePage from "@/components/GamePage";
import { warhammer } from "@/constants";

export default function Warhammer() {

    return (
        <>
        <Backlight count={6} gap={30} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <GamePage
            price={warhammer.price}
            mainImage={warhammer.mainImage}
            images={warhammer.images}
            video={warhammer.video}
            description={warhammer.description}
            minimal={warhammer.minimal}
            recommended={warhammer.recommended}
            platforms={warhammer.platforms}
            editions={[
                { id: 2556, name: "Warhammer 40,000 Space Marine 2 Season Pass", price: 2960, region: "Любой" },
                { id: 2729, name: "Warhammer 40000 Space Marine 2 Standard Edition", price: 2395, region: "Любой" },
                { id: 1760, name: "Warhammer 40,000: Space Marine 2 RU+CIS", price: 2850, region: "РФ и СНГ" },
                { id: 1761, name: "Warhammer 40,000: Space Marine 2 EU", price: 7700, region: "Европа" }
            ]}
            />
        </main>
        </>
    )
}