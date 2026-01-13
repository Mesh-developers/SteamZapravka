import Backlight from "@/components/Backlight";
import GamePage from "@/components/GamePage";
import { monsterHunter } from "@/constants";

export default function MonsterHunter() {

    return (
        <>
        <Backlight count={6} gap={50} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <GamePage
            price={monsterHunter.price}
            mainImage={monsterHunter.mainImage}
            images={monsterHunter.images}
            video={monsterHunter.video}
            description={monsterHunter.description}
            minimal={monsterHunter.minimal}
            recommended={monsterHunter.recommended}
            platforms={monsterHunter.platforms}
            editions={[
                { id: 1065, name: "MONSTER HUNTER WORLD RU+CIS", price: 630, region: "РФ и СНГ" },
            ]}
            />
        </main>
        </>
    )
}