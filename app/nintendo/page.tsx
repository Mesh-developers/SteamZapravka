import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function Nintendo() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            cover="nintendo_cover.png"
            boxes={[]}
            uniqueCard={{ title: "Battle.net", text: ["", `
            Подарочная карта Battle.net — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой E-mail для мгновенного получения кода активации. Вам остается лишь скопировать его и ввести.
            `],
            image: "nintendo_card.png"
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
                { id: 509, name: "Nintendo eShop Card - 50 BR", price: 975, region: "Бразилия", image: "nintendo_back.png" },
                { id: 506, name: "Nintendo eShop Card - 100 BR", price: 1855, region: "Бразилия", image: "nintendo_back.png" },
                { id: 507, name: "Nintendo eShop Card - 250 BR", price: 4890, region: "Бразилия", image: "nintendo_back.png" },
                { id: 508, name: "Nintendo eShop Card - 300 BR", price: 5860, region: "Бразилия" },
                { id: 511, name: "Nintendo Wii eShop Card UK £15", price: 1945, region: "Великобритания" },
                { id: 512, name: "Nintendo Wii eShop Card UK £25", price: 3240, region: "Великобритания" },
                { id: 513, name: "Nintendo Wii eShop Card UK £50", price: 6480, region: "Великобритания" },
                { id: 1961, name: "Nintendo Switch Online 3 Month Subscription Europe", price: 745, region: "Европа" },
                { id: 198, name: "Nintendo eShop Card 15 EUR - LIMITED PROMO", price: 1665, region: "Европа" },
                { id: 1960, name: "Nintendo Switch Online 12 Month Subscription Europe", price: 1865, region: "Европа" },
                { id: 199, name: "Nintendo eShop Card 25 EUR", price: 2775, region: "Европа" },
                { id: 1959, name: "Nintendo Switch Online 12M Family Subscription Europe", price: 3465, region: "Европа" },
                { id: 510, name: "Nintendo eShop Card 50 EUR - LIMITED PROMO", price: 5550, region: "Европа" },
                { id: 1957, name: "Nintendo eShop Card EUR 75", price: 8040, region: "Европа" },
                { id: 1958, name: "Nintendo eShop Card EUR 100", price: 10715, region: "Европа" },
                { id: 516, name: "Nintendo eShop Prepaid Card - 70 PLN", price: 1840, region: "Польша" },
                { id: 514, name: "Nintendo eShop Prepaid Card - 120 PLN", price: 3160, region: "Польша" },
                { id: 515, name: "Nintendo eShop Prepaid Card - 250 PLN", price: 6220, region: "Польша" },
                { id: 205, name: "Nintendo eShop Membership - 3 Months Russia", price: 785, region: "Россия" },
                { id: 2748, name: "Nintendo Switch Online 3 months subscription USA", price: 685, region: "США" },
                { id: 190, name: "Nintendo eShop 3 Month Membership USA", price: 795, region: "США" },
                { id: 178, name: "Nintendo eShop Card US 10usd", price: 995, region: "США" },
                { id: 2749, name: "Nintendo Switch Online 12 months subscription USA", price: 1710, region: "США" },
                { id: 191, name: "Nintendo eShop 12 Months Membership USA", price: 1990, region: "США" },
                { id: 179, name: "Nintendo eShop Card US 20usd", price: 1990, region: "США" },
                { id: 180, name: "Nintendo eShop Card US 35usd", price: 3485, region: "США" },
                { id: 181, name: "Nintendo eShop Card US 50usd", price: 4975, region: "США" },
                { id: 192, name: "Nintendo eShop Card 500 Yen", price: 380, region: "Япония" },
                { id: 193, name: "Nintendo eShop Card 1000 Yen", price: 760, region: "Япония" },
                { id: 194, name: "Nintendo eShop Card 2000 Yen", price: 1520, region: "Япония" },
                { id: 195, name: "Nintendo eShop Card 3000 Yen", price: 2280, region: "Япония" },
                { id: 196, name: "Nintendo eShop Card 5000 Yen", price: 3795, region: "Япония" },
                { id: 197, name: "Nintendo eShop Card 9000 Yen", price: 6835, region: "Япония" }
            ]}
            prefix={["Nintendo", "Nintendo Switch"]}
            isService
            />
        </main>
    </>
    )
}