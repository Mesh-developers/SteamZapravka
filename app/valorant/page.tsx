import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Valorant() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="vauchers"
            cover="valorant_cover.png"
            boxes={[
                {
                    id: 1973,
                    coin: "475 VP",
                    price: 450,
                    image: "2vp.png"
                },
                {
                    id: 1974,
                    coin: "1000 VP",
                    price: 895,
                    image: "3vp.png"
                },
                {
                    id: 1975,
                    coin: "1520 VP",
                    price: 1360,
                    image: "4vp.png"
                },
                {
                    id: 1976,
                    coin: "2575 VP",
                    price: 2240,
                    image: "6vp.png"
                },
                {
                    id: 1977,
                    coin: "5350 VP",
                    price: 4475,
                    image: "8vp.png"
                },
            ]}
            uniqueCard={{ title: "Valorant", text: [`
            Подарочная карта VALORANT — это удобный способ пополнить счёт в игре без привязки банковской карты. С её помощью можно получить VALORANT Points и использовать их для покупки скинов оружия, боевых пропусков и других внутриигровых предметов в регионе Europe (EU).
            `],
            image: "valorant_card.png"
            }}
            instructions={[[
                "Перейдите на сайт redeem.playvalorant.com",
                "Войдите в свою учётную запись Riot Games.",
                "Введите код с подарочной карты и подтвердите.",
                "VALORANT Points сразу будут зачислены на ваш аккаунт."
            ]]}
            prefix=""
            products={[]}
            />
        </main>
    </>
    )
}