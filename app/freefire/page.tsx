import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function FreeFire() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            cover="freefire_cover.png"
            boxes={[
                {
                    coin: "100 + 10 Diamonds",
                    price: 99,
                    altPrice: 100,
                    image: "1diamonds.png",
                },
                {
                    coin: "210 + 21 Diamonds",
                    price: 99,
                    altPrice: 100,
                    image: "2diamonds.png"
                },
                {
                    coin: "530 + 53 Diamonds",
                    price: 99,
                    altPrice: 100,
                    image: "3diamonds.png"
                },
                {
                    coin: "1080 + 108 Diamonds",
                    price: 99,
                    altPrice: 100,
                    image: "4diamonds.png"
                },
                {
                    coin: "2200 + 220 Diamonds",
                    price: 99,
                    altPrice: 100,
                    image: "5diamonds.png"
                }
            ]}
            uniqueCard={{ title: "Free Fire", text: `
            Подарочная карта Free Fire — это код, который добавляет внутриигровую валюту Diamonds на ваш аккаунт. С её помощью можно приобретать скины, персонажей, боевые пропуски и другие предметы в игре.
            `,
            image: "freefire_card.png"
            }}
            instructions={[
                "Перейдите на shop2game.com.",
                "Выберите Free Fire и войдите в свой аккаунт.",
                "Выберите способ оплаты Garena Voucher.",
                "Введите код."
            ]}
            />
        </main>
    </>
    )
}