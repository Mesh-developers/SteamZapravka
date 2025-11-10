import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function PUBG() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <main className="relative z-2 mt-10 w-[75%] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            cover="pubg_cover.png"
            boxes={[
                {
                    coin: "60 UC",
                    price: 99,
                    altPrice: 100,
                    image: "1uc.png"
                },
                {
                    coin: "325 UC",
                    price: 99,
                    altPrice: 100,
                    image: "2uc.png"
                },
                {
                    coin: "1800 UC",
                    price: 99,
                    altPrice: 100,
                    image: "3uc.png"
                },
                {
                    coin: "3850 UC",
                    price: 99,
                    altPrice: 100,
                    image: "4uc.png"
                },
                {
                    coin: "8100 UC",
                    price: 99,
                    altPrice: 100,
                    image: "5uc.png"
                },
            ]}
            uniqueCard={{ title: "PUBG Mobile", text: `
            Подарочная карта PUBG Mobile — цифровой код для пополнения внутриигровой валюты UC (Unknown Cash). С её помощью можно приобретать скины, боевые пропуски
            и другие внутриигровые предметы.
            `,
            image: "pubg_card.png"
            }}
            instructions={[
                "Откройте PUBG Mobile и войдите в свой аккаунт.",
                "Перейдите в раздел UC / Redeem или Пополнить UC.",
                "Выберите Использовать код и введите полученный код.",
                "Подтвердите ввод и UC будут зачислены на аккаунт."
            ]}
            />
        </main>
    </>
    );
}