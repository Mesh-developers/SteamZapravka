import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function PUBG() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <main className="relative z-2 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="all"
            prefix="PUBG Mobile"
            cover="pubg_cover.png"
            boxes={[
                {
                    id: 78,
                    coin: "60 UC",
                    price: 100,
                    image: "1uc.png"
                },
                {
                    id: 79,
                    coin: "300 + 25 UC",
                    price: 500,
                    image: "2uc.png"
                },
                {
                    id: 80,
                    coin: "600 + 60 UC",
                    price: 995,
                    image: "3uc.png"
                },
                {
                    id: 81,
                    coin: "1500 + 300 UC",
                    price: 2485,
                    image: "4uc.png"
                },
                {
                    id: 96,
                    coin: "3000 + 850 UC",
                    price: 4975,
                    image: "5uc.png"
                },
            ]}
            uniqueCard={{ title: "PUBG Mobile", text: [`
            Подарочная карта PUBG Mobile — цифровой код для пополнения внутриигровой валюты UC (Unknown Cash). С её помощью можно приобретать скины, боевые пропуски
            и другие внутриигровые предметы.
            `,
            `Прямое пополнение PUBG Mobile — это самый простой, быстрый и надежный способ пополнить счет Unknown Cash (UC). Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
            ],
            image: "pubg_card.png"
            }}
            instructions={[[
                "Откройте PUBG Mobile и войдите в свой аккаунт.",
                "Перейдите в раздел UC / Redeem или Пополнить UC.",
                "Выберите Использовать код и введите полученный код.",
                "Подтвердите ввод и UC будут зачислены на аккаунт."
            ],
            [
                "Введите ID от вашего аккаунта.",
                "Выберите регион.",
                "Выберите желаемый товар.",
                "Выберите способ оплаты.",
                "Примите условия  оферты и оплатить товар."
            ]]}
            products={[
            { id: 5971, name: "PUBG Mobile 10 UC", price: 20, region: "Любой" },
            { id: 5972, name: "PUBG Mobile 20 UC", price: 40, region: "Любой" },
            { id: 5973, name: "PUBG Mobile 30 UC", price: 60, region: "Любой" },
            { id: 1247, name: "PUBG Mobile: 60 UC", price: 75, region: "Любой" },
            { id: 5986, name: "PUBG Mobile Prime (1 Month)", price: 90, region: "Любой" },
            { id: 5983, name: "PUBG Mobile First Purchase Pack", price: 90, region: "Любой" },
            { id: 5996, name: "PUBG Mobile Weekly Deal Pack 1", price: 100, region: "Любой" },
            { id: 5863, name: "PUBG Mobile: 120 UC", price: 155, region: "Любой" },
            { id: 5984, name: "PUBG Mobile Upgradable Firearm Materials Pack", price: 255, region: "Любой" },
            { id: 5995, name: "PUBG Mobile Weekly Deal Pack 2", price: 275, region: "Любой" },
            { id: 5994, name: "PUBG Mobile Weekly Mythic Emblem Value Pack", price: 275, region: "Любой" },
            { id: 5987, name: "PUBG Mobile Prime (3 Months)", price: 295, region: "Любой" },
            { id: 1733, name: "PUBG Mobile: 325 UC", price: 375, region: "Любой" },
            { id: 5985, name: "PUBG Mobile Mythic Emblem Pack", price: 410, region: "Любой" },
            { id: 5963, name: "Cake 10.000", price: 455, region: "Любой" },
            { id: 5864, name: "PUBG Mobile: 385 UC", price: 460, region: "Любой" },
            { id: 5980, name: "PUBG Mobile A15 ELITE PASS (LV1-50)", price: 495, region: "Любой" },
            { id: 5988, name: "PUBG Mobile Prime (6 Months)", price: 495, region: "Любой" },
            { id: 1735, name: "PUBG Mobile: 660 UC", price: 745, region: "Любой" },
            { id: 5990, name: "PUBG Mobile Prime Plus (1 Month)", price: 765, region: "Любой" },
            { id: 5902, name: "PUBG Mobile: A14 Royale Pass", price: 885, region: "Любой" },
            { id: 5964, name: "Airplane 25.000", price: 940, region: "Любой" },
            { id: 5981, name: "PUBG Mobile ELITE PASS（LV1-100)", price: 965, region: "Любой" },
            { id: 5989, name: "PUBG Mobile Prime (12 Months)", price: 985, region: "Любой" },
            { id: 5865, name: "PUBG Mobile: 780 UC", price: 1075, region: "Любой" },
            { id: 5904, name: "PUBG Mobile: 985 UC", price: 1105, region: "Любой" },
            { id: 5911, name: "PUBG Mobile: 1320 UC", price: 1475, region: "Любой" },
            { id: 1732, name: "PUBG Mobile: 1800 UC", price: 1865, region: "Любой" },
            { id: 5982, name: "PUBG Mobile ELITE PASS PLUS（LV1-100)", price: 2265, region: "Любой" },
            { id: 5903, name: "PUBG Mobile: A14 Elite Pass", price: 2285, region: "Любой" },
            { id: 5866, name: "PUBG Mobile: 2460 UC", price: 2685, region: "Любой" },
            { id: 5991, name: "PUBG Mobile Prime Plus (3 Months)", price: 2690, region: "Любой" },
            { id: 1734, name: "PUBG Mobile: 3850 UC", price: 3725, region: "Любой" },
            { id: 5965, name: "Helicopter 125.000", price: 4515, region: "Любой" },
            { id: 5992, name: "PUBG Mobile Prime Plus (6 Months)", price: 4560, region: "Любой" },
            { id: 5906, name: "PUBG Mobile: 5650 UC", price: 5525, region: "Любой" },
            { id: 1736, name: "PUBG Mobile: 8100 UC", price: 7450, region: "Любой" },
            { id: 5966, name: "Private plane 300.000", price: 8940, region: "Любой" },
            { id: 5993, name: "PUBG Mobile Prime Plus (12 Months)", price: 9060, region: "Любой" },
            { id: 5912, name: "PUBG Mobile: 11950 UC", price: 11045, region: "Любой" },
            { id: 5910, name: "PUBG Mobile: 16200 UC", price: 14895, region: "Любой" },
            { id: 5909, name: "PUBG Mobile: 24300 UC", price: 22345, region: "Любой" },
            { id: 5908, name: "PUBG Mobile: 32400 UC", price: 29795, region: "Любой" },
            { id: 5907, name: "PUBG Mobile: 40500 UC", price: 37240, region: "Любой" },
            { id: 5905, name: "PUBG Mobile: 81000 UC", price: 73630, region: "Любой" }
        ]}
            />
        </main>
    </>
    );
}