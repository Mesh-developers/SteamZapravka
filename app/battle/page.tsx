import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function BattleNet() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-2 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            cover="battle_cover.png"
            boxes={[]}
            uniqueCard={{ title: "Battle.net", text: ["", `
            Подарочная карта Battle.net — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой E-mail для мгновенного получения кода активации. Вам остается лишь скопировать его и ввести.
            `],
            image: "battle_card.png"
            }}
            instructions={[[], [
                "Введите E-mail.",
                "Выберите регион.",
                "Выберите желаемый товар.",
                "Выберите способ оплаты.",
                "Примите условия  оферты.",
                "Оплатить товар."
            ]]}
            products={[
                { id: 97, name: "Battlenet Gift Card 20 EUR", price: 2355, region: "Европа", image: "battle_back.png" },
                { id: 92, name: "Battlenet Gift Card 50 EUR", price: 5890, region: "Европа", image: "battle_back.png" },
                { id: 1935, name: "Battlenet Gift Card US Balance usd10", price: 895, region: "США", image: "battle_back.png" },
                { id: 307, name: "Battlenet Gift Card US Balance usd20", price: 1990, region: "США" },
                { id: 308, name: "Battlenet Gift Card US Balance usd50", price: 4975, region: "США" }
            ]}
            prefix={["Battle"]}
            isService
            />
        </main>
    </>
    )
}