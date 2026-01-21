import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Honkai() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            prefix="Honkai Star Rail"
            cover="honkai_cover.webp"
            boxes={[]}
            uniqueCard={{ title: "Honkai: Star Rail", text: [``,
            `Прямое пополнение Honkai: Star Rail — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
            ],
            image: "honkai_card.webp"
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
                { id: 1900, name: "Honkai: Star Rail 60 Oneiric Shard Top UP (Global)", price: 95, region: "Любой", image: "1oneric.png" },
                { id: 1899, name: "Honkai: Star Rail Express Supply Pass Top UP (Global)", price: 385, region: "Любой", image: "2oneric.png" },
                { id: 5260, name: "Honkai: Star Rail - 300 + 30 Oneiric Shard", price: 385, region: "Любой", image: "3oneric.png" },
                { id: 1901, name: "Honkai: Star Rail 980+110 Oneiric Shard Top UP(Global)", price: 1160, region: "Любой" },
                { id: 1902, name: "Honkai: Star Rail 1980+260 Oneiric Shard Top UP  (Global)", price: 2510, region: "Любой" },
                { id: 1903, name: "Honkai: Star Rail 3280+600 Oneiric Shard Top UP (Global)", price: 3865, region: "Любой" },
                { id: 1904, name: "Honkai: Star Rail 6480+1600 Oneiric Shard Top UP (Global)", price: 7725, region: "Любой" }
            ]}
            />
        </main>
    </>
    );
}