import Backlight from "@/components/Backlight";
import GamePage from "@/components/GamePage";
import { farmingSimulator } from "@/constants";

export default function FarmingSimulator() {

    return (
        <>
        <Backlight count={6} gap={50} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <GamePage
            price={farmingSimulator.price}
            mainImage={farmingSimulator.mainImage}
            images={farmingSimulator.images}
            video={farmingSimulator.video}
            description={farmingSimulator.description}
            minimal={farmingSimulator.minimal}
            recommended={farmingSimulator.recommended}
            platforms={farmingSimulator.platforms}
            editions={[
                { id: 1006, name: "Farming Simulator 25 RU+CIS", price: 2010, region: "РФ и СНГ" },
                { id: 1007, name: "Farming Simulator 25 – Year 1 Bundle RU+CIS", price: 4175, region: "РФ и СНГ" },
                { id: 1005, name: "Farming Simulator 25 - Nexat Pack RU+CIS", price: 390, region: "РФ и СНГ" },
                { id: 1765, name: "Farming Simulator 25 - Highlands Fishing Expansion RU+CIS", price: 2300, region: "РФ и СНГ" },
                { id: 1764, name: "Farming Simulator 25 - Highlands Fishing Edition RU+CIS", price: 4255, region: "РФ и СНГ" },
            ]}
            />
        </main>
        </>
    )
}