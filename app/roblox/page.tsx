import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Roblox() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="all"
            cover="roblox_cover.png"
            boxes={[
                {
                    id: 452,
                    coin: "400 ROBUX (Бразилия)",
                    price: 535,
                    image: "1robux_brazil.png",
                },
                {
                    id: 2084,
                    coin: "800 ROBUX",
                    price: 930,
                    image: "4robux.png"
                },
                {
                    id: 2085,
                    coin: "2000 ROBUX",
                    price: 2220,
                    image: "5robux.png"
                },
                {
                    id: 2083,
                    coin: "4500 ROBUX",
                    price: 4435,
                    image: "6robux.png"
                },
                {
                    id: 2086,
                    coin: "10000 ROBUX",
                    price: 8865,
                    image: "7robux.png"
                }
            ]}
            uniqueCard={{ title: "Roblox", text: [`
            Подарочные карты Roblox - это самый простой способ пополнить счет. С её помощью игроки могут приобретать внутриигровую валюту Robux, одежду, аксессуары, анимации, премиум подписку и другие предметы.
            `, `Прямое пополнение Roblox - это самый простой способ пополнить счет. С её помощью игроки могут приобретать внутриигровую валюту Robux, одежду, аксессуары, анимации, премиум подписку и другие предметы.`],
            image: "roblox_card.png"
            }}
            instructions={[[
                "Перейдите по ссылке, <a href='https://roblox.com/redeem' style='text-decoration: underline'>чтобы активировать коды Roblox</a>.",
                "Войдите в систему или создайте учетную запись.",
                "Найдите свой PIN-код и введите его на веб-сайте.",
                "Потратьте свой кредит на Robux или Roblox Premium."
            ],
            [
                "Введите почту или логин от аккаунта.",
                "Введите пароль от аккаунта.",
                "Введите игровой никнейм от аккаунта.",
                "Введите бэкап код, который еще не использовали.",
                "Выберите регион вашего акаунта.",
                "Выберите жилаймый товар.",
                "Выберите удобный способ оплаты.",
                "Примите условия оферты.",
                "Оплатите выбранный товар."
            ]
            ]}
            products={[
                { id: 5828, name: "1700 ROBUX", price: 1860, region: "Любой", image: "4robux.png" },
                { id: 5833, name: "4500 ROBUX", price: 4680, region: "Любой", image: "6robux.png" },
                { id: 5829, name: "10000 ROBUX", price: 9295, region: "Любой", image: "7robux.png" }
            ]}
            prefix=""
            />
        </main>
    </>
    )
}