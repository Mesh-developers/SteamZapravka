import Backlight from "@/components/Backlight";
import GamePage from "@/components/GamePage";
import { arcRaiders } from "@/constants";

export default function ArcRaiders() {

    return (
        <>
        <Backlight count={6} gap={50} />
        <main className="relative z-2 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <GamePage
            price={arcRaiders.price}
            mainImage={arcRaiders.mainImage}
            images={arcRaiders.images}
            video={arcRaiders.video}
            description={arcRaiders.description}
            minimal={arcRaiders.minimal}
            recommended={arcRaiders.recommended}
            platforms={arcRaiders.platforms}
            editions={[
                { id: 2373, name: "ARC Raiders ROW+RU+CIS", price: 3070, region: "США и Европа и РФ и СНГ" },
                { id: 2730, name: "ARC Raiders RU+CIS WITHOUT UA", price: 3190, region: "РФ и СНГ без Украины" },
                { id: 2731, name: "ARC Raiders ROW WITHOUT CN+SEASIA+UA+LATAM", price: 3400, region: "СНГ БЕЗ Украины" },
            ]}
            />
        </main>
        </>
    )
}