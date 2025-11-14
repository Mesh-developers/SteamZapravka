import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function DeltaForce() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            cover="deltaforce_cover.png"
            boxes={[
                {
                    coin: "60 Delta Coins",
                    price: 99,
                    altPrice: 100,
                    image: "1delta.png",
                },
                {
                    coin: "120 Delta Coins",
                    price: 99,
                    altPrice: 100,
                    image: "2delta.png"
                },
                {
                    coin: "300 + 21 Delta Coins",
                    price: 99,
                    altPrice: 100,
                    image: "3delta.png"
                },
                {
                    coin: "660 + 68 Delta Coins",
                    price: 99,
                    altPrice: 100,
                    image: "4delta.png"
                },
                {
                    coin: "1320 + 27 Delta Coins",
                    price: 99,
                    altPrice: 100,
                    image: "5delta.png"
                }
            ]}
            uniqueCard={{ title: "Delta Force", text: `
            Подарочная карта Delta Force — это цифровой ключ, пополняющий ваш игровой баланс. С его помощью вы получите Delta Coins, которые можно использовать для покупки скинов, премиум-боевого пропуска и других уникальных предметов.
            `,
            image: "deltaforce_card.png"
            }}
            instructions={[
                "Войдите в аккаунт на сайте или в приложении.",
                "Перейдите в раздел Аккаунт → Активация ваучера.",
                "Введите код с подарочной карты.",
                "Подтвердите ввод подарочной карты."
            ]}
            />
        </main>
    </>
    )
}