import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Genshin() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            prefix="Genshin Impact"
            cover="genshin_cover.webp"
            boxes={[]}
            uniqueCard={{ title: "Genshin Impact", text: [``,
            `Прямое пополнение Genshin Impact — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
            ],
            image: "genshin_card.webp"
            }}
            instructions={[[],
            [
                "Введите ID от вашего аккаунта.",
                "Выберите регион.",
                "Выберите желаемый товар.",
                "Выберите способ оплаты.",
                "Примите условия  оферты и оплатить товар."
            ]]}
            products={[
                { id: 533, name: "Genshin Impact 60 Crystals", price: 75, region: "Любой", image: "1сrystals.png" },
                { id: 6032, name: "Genshin Impact: 60 Chronal Nexus", price: 75, region: "Любой", image: "2сrystals.png" },
                { id: 1884, name: "Genshin Impact 60 Genesis Crystals Top Up", price: 80, region: "Любой", image: "3сrystals.png" },
                { id: 6033, name: "Genshin Impact: 300 + 30 Chronal Nexus", price: 380, region: "Любой" },
                { id: 6038, name: "Blessing of the Welkin Moon Bundle", price: 380, region: "Любой" },
                { id: 547, name: "Genshin Impact Blessing Welkin Moon", price: 385, region: "Любой" },
                { id: 530, name: "Genshin Impact 300+30 Crystals", price: 385, region: "Любой" },
                { id: 1870, name: "Genshin Impact 300+30 Genesis Crystals Top Up", price: 390, region: "Любой" },
                { id: 6034, name: "Genshin Impact: 980 + 110 Chronal Nexus", price: 1135, region: "Любой" },
                { id: 545, name: "Genshin Impact 980+110 Crystals", price: 1140, region: "Любой" },
                { id: 1871, name: "Genshin Impact 980+110 Genesis Crystals Top Up", price: 1160, region: "Любой" },
                { id: 528, name: "Genshin Impact 1280 + 140 Crystals", price: 1540, region: "Любой" },
                { id: 529, name: "Genshin Impact 1980+260 Crystals", price: 2445, region: "Любой" },
                { id: 6035, name: "Genshin Impact: 1980 + 260 Chronal Nexus", price: 2455, region: "Любой" },
                { id: 1872, name: "Genshin Impact 1980+260 Genesis Crystals Top Up", price: 2505, region: "Любой" },
                { id: 531, name: "Genshin Impact 3280+600 Crystals", price: 3750, region: "Любой" },
                { id: 1873, name: "Genshin Impact 3280+600 Genesis Crystals Top Up", price: 3780, region: "Любой" },
                { id: 6036, name: "Genshin Impact: 3280 + 600 Chronal Nexus", price: 3780, region: "Любой" },
                { id: 6037, name: "Genshin Impact: 6480 + 1600 Chronal Nexus", price: 7465, region: "Любой" },
                { id: 1874, name: "Genshin Impact 6480+1600 Genesis Crystals Top Up", price: 7545, region: "Любой" },
                { id: 534, name: "Genshin Impact 6480+1600 Crystals", price: 7570, region: "Любой" },
                { id: 544, name: "Genshin Impact 9760 + 2200 Crystals", price: 11515, region: "Любой" }
            ]}
            />
        </main>
    </>
    );
}