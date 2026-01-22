import Backlight from "@/components/Backlight";
import Form from "@/components/Form";
import Main from "@/components/Main";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'State of Survival'
}


export default function StateSurvival() {

    return (
    <>
        <Backlight count={2} gap={520} />
        <Main>
            <Form
            type="topup"
            prefix="State of Survival"
            cover="state_cover.webp"
            boxes={[]}
            uniqueCard={{ title: "State of Survival ", text: [``,
            `Прямое пополнение State of Survival — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.`
            ],
            image: "state_card.webp"
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
                { id: 1413, name: "State of Survival: Zombie War 100 Diamonds", price: 100, region: "Любой", image: "1diamonds_state.png" },
                { id: 1418, name: "State of Survival: Zombie War 500 Diamonds", price: 475, region: "Любой", image: "2diamonds_state.png" },
                { id: 1412, name: "State of Survival: Zombie War 1000 Diamonds", price: 950, region: "Любой", image: "3diamonds_state.png" },
                { id: 1415, name: "State of Survival: Zombie War 2000 Diamonds", price: 1965, region: "Любой" },
                { id: 1417, name: "State of Survival: Zombie War 5000 Diamonds", price: 4765, region: "Любой" },
                { id: 1411, name: "State of Survival: Zombie War 10000 Diamonds", price: 9535, region: "Любой" },
                { id: 1414, name: "State of Survival: Zombie War 20000 Diamonds", price: 19615, region: "Любой" },
                { id: 1416, name: "State of Survival: Zombie War 50000 Diamonds", price: 47630, region: "Любой" }
            ]}
            />
        </Main>
    </>
    );
}