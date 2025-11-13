import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Roblox() {
    return (
        <>
        <Backlight count={4} gap={200} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            cover="roblox_cover.png"
            boxes={[
                {
                    coin: "240 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "1robux.png",
                },
                {
                    coin: "475 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "2robux.png"
                },
                {
                    coin: "1000 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "3robux.png"
                },
                {
                    coin: "1520 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "4robux.png"
                },
                {
                    coin: "2050 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "5robux.png"
                },
                {
                    coin: "2575 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "6robux.png"
                },
                {
                    coin: "3650 ROBUX",
                    price: 99,
                    altPrice: 100,
                    image: "7robux.png"
                },

            ]}
            uniqueCard={{ title: "Roblox", text: `
            Подарочные карты Roblox - это самый простой способ пополнить счет. С её помощью игроки могут приобретать внутриигровую валюту Robux, одежду, аксессуары, анимации, премиум подписку и другие предметы.
            `,
            image: "roblox_card.png"
            }}
            instructions={[
                "Перейдите по ссылке, <a href='https://roblox.com/redeem' style='text-decoration: underline'>чтобы активировать коды Roblox</a>.",
                "Войдите в систему или создайте учетную запись.",
                "Найдите свой PIN-код и введите его на веб-сайте.",
                "Потратьте свой кредит на Robux или Roblox Premium."
            ]}
            />
        </main>
    </>
    )
}