import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function FreeFire() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-2 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="all"
            cover="freefire_cover.png"
            boxes={[
                {
                    id: 120,
                    coin: "100 + 10 Diamonds",
                    price: 100,
                    image: "1diamonds.png",
                },
                {
                    id: 122,
                    coin: "210 + 21 Diamonds",
                    price: 200,
                    image: "2diamonds.png"
                },
                {
                    id: 124,
                    coin: "530 + 53 Diamonds",
                    price: 500,
                    image: "3diamonds.png"
                },
                {
                    id: 121,
                    coin: "1080 + 108 Diamonds",
                    price: 995,
                    image: "4diamonds.png"
                },
                {
                    id: 123,
                    coin: "2200 + 220 Diamonds",
                    price: 1990,
                    image: "5diamonds.png"
                }
            ]}
            uniqueCard={{ title: "Free Fire", text: [`
            Подарочная карта Free Fire — это код, который добавляет внутриигровую валюту Diamonds на ваш аккаунт. С её помощью можно приобретать скины, персонажей, боевые пропуски и другие предметы в игре.
            `,
            `Подарочная карта Free Fire — это код, который добавляет внутриигровую валюту Diamonds на ваш аккаунт. С её помощью можно приобретать скины, персонажей, боевые пропуски и другие предметы в игре.`
            ],
            image: "freefire_card.png"
            }}
            instructions={[[
                "Перейдите на shop2game.com.",
                "Выберите Free Fire и войдите в свой аккаунт.",
                "Выберите способ оплаты Garena Voucher.",
                "Введите код."
            ],
            [
                "Перейдите на shop2game.com.",
                "Выберите Free Fire и войдите в свой аккаунт.",
                "Выберите способ оплаты Garena Voucher.",
                "Введите код."
            ]]}
            prefix=""
            products={[
                { id: 5733, name: "Free Fire 100 Diamonds", price: 105, region: "Любой" },
                { id: 527, name: "Garena Free Fire / Garena Free Fire (MAX) - Weekly Membership", price: 200, region: "Любой" },
                { id: 5998, name: "Free Fire 310 Diamonds", price: 305, region: "Любой" },
                { id: 5999, name: "Free Fire 520 Diamonds", price: 470, region: "Любой" },
                { id: 526, name: "Garena Free Fire / Garena Free Fire (MAX) - Monthly Membership", price: 935, region: "Любой" },
                { id: 6000, name: "Free Fire 1060 Diamonds", price: 940, region: "Любой" },
                { id: 5738, name: "Garena Free Fire / Garena Free Fire (MAX)-  2200 Diamonds Top Up", price: 1880, region: "Любой" },
                { id: 6001, name: "Free Fire 2180 Diamonds", price: 1910, region: "Любой" },
                { id: 6002, name: "Free Fire 6160 Diamonds", price: 4365, region: "Любой" },
                { id: 6003, name: "Free Fire 5600 Diamonds", price: 4570, region: "Любой" }
            ]}
            />
        </main>
    </>
    )
}