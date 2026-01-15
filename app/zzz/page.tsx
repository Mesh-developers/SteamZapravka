import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function ZZZ() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <main className="relative z-2 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            prefix="Zenless Zone Zero"
            cover="zzz_cover.webp"
            boxes={[]}
            uniqueCard={{ title: "Zenless Zone Zero ", text: [``,
            `Прямое пополнение ZZZ — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
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
                { id: 1821, name: "Zenless Zone Zero 60 Monochrome", price: 70, region: "Любой", image: "1monochrome.png" },
                { id: 1819, name: "Zenless Zone Zero 300 + 30 Monochrome", price: 345, region: "Любой", image: "2monochrome.png" },
                { id: 1830, name: "Zenless Zone Zero Inter-Knot Membership", price: 400, region: "Любой", image: "3monochrome.png" },
                { id: 1828, name: "Zenless Zone Zero 980 + 110 Monochrome", price: 1035, region: "Любой" },
                { id: 1818, name: "Zenless Zone Zero 1980 + 260 Monochrome", price: 2070, region: "Любой" },
                { id: 1820, name: "Zenless Zone Zero 3280 + 600 Monochrome", price: 3435, region: "Любой" },
                { id: 1822, name: "Zenless Zone Zero 6480 + 1600 Monochrome", price: 6610, region: "Любой" }
            ]}
            />
        </main>
    </>
    );
}