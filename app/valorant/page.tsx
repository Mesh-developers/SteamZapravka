import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Valorant() {
    return (
        <>
        <Backlight count={4} gap={200} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            cover="valorant_cover.png"
            boxes={[
                {
                    coin: "240 VP",
                    price: 99,
                    altPrice: 100,
                    image: "1vp.png"
                },
                {
                    coin: "475 VP",
                    price: 99,
                    altPrice: 100,
                    image: "2vp.png"
                },
                {
                    coin: "1000 VP",
                    price: 99,
                    altPrice: 100,
                    image: "3vp.png"
                },
                {
                    coin: "1520 VP",
                    price: 99,
                    altPrice: 100,
                    image: "4vp.png"
                },
                {
                    coin: "2050 VP",
                    price: 99,
                    altPrice: 100,
                    image: "5vp.png"
                },
                {
                    coin: "2575 VP",
                    price: 99,
                    altPrice: 100,
                    image: "6vp.png"
                },
                {
                    coin: "3650 VP",
                    price: 99,
                    altPrice: 100,
                    image: "7vp.png"
                },
                {
                    coin: "5350 VP",
                    price: 99,
                    altPrice: 100,
                    image: "8vp.png"
                },
                {
                    coin: "8700 VP",
                    price: 99,
                    altPrice: 100,
                    image: "9vp.png"
                },
                {
                    coin: "11000 VP",
                    price: 99,
                    altPrice: 100,
                    image: "10vp.png"
                },
            ]}
            uniqueCard={{ title: "Valorant", text: `
            Подарочная карта VALORANT — это удобный способ пополнить счёт в игре без привязки банковской карты. С её помощью можно получить VALORANT Points и использовать их для покупки скинов оружия, боевых пропусков и других внутриигровых предметов в регионе Europe (EU).
            `,
            image: "valorant_card.png"
            }}
            instructions={[
                "Перейдите на сайт redeem.playvalorant.com",
                "Войдите в свою учётную запись Riot Games.",
                "Введите код с подарочной карты и подтвердите.",
                "VALORANT Points сразу будут зачислены на ваш аккаунт."
            ]}
            />
        </main>
    </>
    )
}