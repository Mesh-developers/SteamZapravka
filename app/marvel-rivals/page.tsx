import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function MarvelRivals() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <main className="relative z-1 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            prefix="Marvel Rivals"
            cover="marvel_cover.webp"
            boxes={[]}
            uniqueCard={{ title: "Marvel Rivals", text: [``,
            `Прямое пополнение Marvel Rivals — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
            ],
            image: "marvel_card.webp"
            }}
            instructions={[[],
            [
                "Введите ID от вашего аккаунта.",
                "Выберите регион.",
                "Выберите желаемый товар.",
                "Выберите способ оплаты.",
                "Примите условия  оферты и оплатить товар."
            ]]}
            products={[
                { id: 5840, name: "Marvel Rivals 100 Lattices", price: 120, region: "Любой", image: "1lattices.png" },
                { id: 5841, name: "Marvel Rivals 500 Lattices", price: 560, region: "Любой", image: "2lattices.png" },
                { id: 5842, name: "Marvel Rivals 1000 Lattices", price: 1115, region: "Любой", image: "3lattices.png" },
                { id: 5843, name: "Marvel Rivals 2180 Lattices", price: 2230, region: "Любой" },
                { id: 5844, name: "Marvel Rivals 5680 Lattices", price: 5575, region: "Любой" },
                { id: 5845, name: "Marvel Rivals 11680 Lattices", price: 11145, region: "Любой" }
            ]}
            />
        </main>
    </>
    );
}