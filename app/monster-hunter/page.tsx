import Backlight from "@/components/Backlight";
import GamePage from "@/components/GamePage";
import Main from "@/components/Main";
import { monsterHunter } from "@/constants";

export default function MonsterHunter() {

    return (
        <>
        <Backlight count={6} gap={50} />
        <Main>
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
        </Main>
        </>
    )
}