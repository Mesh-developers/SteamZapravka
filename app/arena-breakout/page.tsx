import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Valorant() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="vauchers"
            cover="arena_brt_cover.png"
            boxes={[
                {
                    id: 745,
                    coin: "60 Bonds (Global)",
                    price: 90,
                    image: "1bond.png"
                },
                {
                    id: 746,
                    coin: "310 Bonds (Global)",
                    price: 450,
                    image: "2bond.png"
                },
                {
                    id: 747,
                    coin: "630 Bonds (Global)",
                    price: 895,
                    image: "3bond.png"
                },
                {
                    id: 748,
                    coin: "1580 Bonds (Global)",
                    price: 2240,
                    image: "4bond.png"
                },
                {
                    id: 749,
                    coin: "3200 Bonds (Global)",
                    price: 4475,
                    image: "5bond.png"
                }
            ]}
            uniqueCard={{ title: "Arena Breakout", text: [`
            Подарочная карта Arena Breakout — это цифровой ключ, пополняющий ваш игровой баланс. С его помощью вы получите Bonds, которые можно использовать для покупки скинов, премиум-боевого пропуска и других уникальных предметов.
            `, ""],
            image: "arena_brt_card.png"
            }}
            instructions={[[
                "Войдите в аккаунт на сайте или в приложении.",
                "Перейдите в раздел Аккаунт → Активация ваучера.",
                "Введите код с подарочной карты.",
                "Подтвердите ввод подарочной карты."
            ]]}
            prefix=""
            products={[]}
            />
        </main>
    </>
    )
}