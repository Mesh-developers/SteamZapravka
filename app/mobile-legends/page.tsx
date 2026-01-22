import Backlight from "@/components/Backlight";
import Form from "@/components/Form";
import Main from "@/components/Main";

export default function MarvelRivals() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <Main>
            <Form
            type="topup"
            prefix="Mobile Legends"
            cover="legends_cover.webp"
            boxes={[]}
            uniqueCard={{ title: "Mobile Legends", text: [``,
            `Прямое пополнение Mobile Legends — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
            ],
            image: "legends_card.webp"
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
                { id: 5952, name: "Mobile Legends: Bang Bang(RU) 8 Diamonds", price: 20, region: "Любой", image: "1diamonds_legends.png" },
                { id: 5957, name: "Mobile Legends: Bang Bang(RU) 35 Diamonds", price: 65, region: "Любой", image: "2diamonds_legends.png" },
                { id: 5974, name: "Mobile Legends: Bang Bang(RU) 55 Diamonds", price: 100, region: "Любой", image: "3diamonds_legends.png" },
                { id: 5953, name: "Mobile Legends: Bang Bang(RU) 88 Diamonds", price: 185, region: "Любой" },
                { id: 5949, name: "Mobile Legends: Bang Bang(RU) Алмазный пропуск (неделя)", price: 205, region: "Любой" },
                { id: 5962, name: "Mobile Legends: Bang Bang(RU) 132 Diamonds", price: 280, region: "Любой" },
                { id: 5975, name: "Mobile Legends: Bang Bang(RU) 165 Diamonds", price: 300, region: "Любой" },
                { id: 5382, name: "Mobile Legends - 336 Diamonds", price: 480, region: "Любой" },
                { id: 5976, name: "Mobile Legends: Bang Bang(RU) 275 Diamonds", price: 500, region: "Любой" },
                { id: 5959, name: "Mobile Legends: Bang Bang(RU) 264 Diamonds", price: 555, region: "Любой" },
                { id: 5956, name: "Mobile Legends: Bang Bang(RU) 440 Diamonds", price: 925, region: "Любой" },
                { id: 5977, name: "Mobile Legends: Bang Bang(RU) 565 Diamonds", price: 1010, region: "Любой" },
                { id: 5954, name: "Mobile Legends: Bang Bang(RU) 734 Diamonds", price: 1475, region: "Любой" },
                { id: 5951, name: "Mobile Legends: Bang Bang(RU) 933 Diamonds", price: 1845, region: "Любой" },
                { id: 5978, name: "Mobile Legends: Bang Bang(RU) 1155 Diamonds", price: 2020, region: "Любой" },
                { id: 5961, name: "Mobile Legends: Bang Bang(RU) 1410 Diamonds", price: 2770, region: "Любой" },
                { id: 5979, name: "Mobile Legends: Bang Bang(RU) 1765 Diamonds", price: 3015, region: "Любой" },
                { id: 5385, name: "Mobile Legends - 2398 Diamonds", price: 3190, region: "Любой" },
                { id: 5960, name: "Mobile Legends: Bang Bang(RU) 1881 Diamonds", price: 3690, region: "Любой" },
                { id: 6018, name: "Mobile Legends: Bang Bang(RU) 2475 Diamonds", price: 5030, region: "Любой" },
                { id: 5958, name: "Mobile Legends: Bang Bang(RU) 2845 Diamonds", price: 5530, region: "Любой" },
                { id: 6019, name: "Mobile Legends: Bang Bang(RU) 6000 Diamonds", price: 10050, region: "Любой" },
                { id: 5955, name: "Mobile Legends: Bang Bang(RU) 6163 Diamonds", price: 11985, region: "Любой" },
                { id: 5932, name: "Mobile Legends (GLOBAL): 55 Diamonds", price: 90, region: "Любой" },
                { id: 5935, name: "Mobile Legends (GLOBAL): 275 Diamonds", price: 440, region: "Любой" },
                { id: 5931, name: "Mobile Legends (GLOBAL): 565 Diamonds", price: 880, region: "Любой" },
                { id: 5375, name: "Mobile Legends (GLOBAL): 1410 Diamonds", price: 1755, region: "Любой" },
                { id: 5936, name: "Mobile Legends (GLOBAL): 1770 Diamonds", price: 2630, region: "Любой" },
                { id: 5934, name: "Mobile Legends (GLOBAL): 2975 Diamonds", price: 4380, region: "Любой" },
                { id: 5933, name: "Mobile Legends (GLOBAL): 4165  Diamonds", price: 6130, region: "Любой" },
                { id: 5930, name: "Mobile Legends (GLOBAL): 6000 Diamonds", price: 8755, region: "Любой" }
            ]}
            />
        </Main>
    </>
    );
}