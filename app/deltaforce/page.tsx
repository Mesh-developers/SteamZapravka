import Backlight from "@/components/Backlight";
import Form from "@/components/Form";
import Main from "@/components/Main";

export default function DeltaForce() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <Main>
            <Form
            type="topup"
            cover="deltaforce_cover.png"
            boxes={[]}
            uniqueCard={{ title: "Delta Force", text: ["", `
            Прямое пополнение Delta Force — это самый простой, быстрый и надежный способ пополнить счет Delta Coins. Вам не нужно передавать данные от аккаунта, достаточно указать свой ID для мгновенного зачисления валюты. С её помощью игроки могут приобретать, эксклюзивный контент, скины, аксессуары, анимации, премиум подписку и другие внутриигровые предметы.
            `],
            image: "deltaforce_card.png"
            }}
            instructions={[[], [
                "Введите ID от вашего аккаунта.",
                "Выберите регион.",
                "Выберите желаемый товар.",
                "Выберите способ оплаты.",
                "Примите условия  оферты и оплатить товар."
            ]]}
            products={[
                { id: 5938, name: "Delta Force: 18 Delta Coins", price: 25, region: "Любой", image: "1delta.png" },
                { id: 5940, name: "Delta Force: 30 Delta Coins", price: 40, region: "Любой", image: "2delta.png" },
                { id: 5846, name: "Delta Force: Silent Sentinel Supplies", price: 65, region: "Любой", image: "3delta.png" },
                { id: 5942, name: "Delta Force: 60 Delta Coins", price: 80, region: "Любой" },
                { id: 5847, name: "Delta Force: Black Hawk Down - Genesis", price: 190, region: "Любой" },
                { id: 5848, name: "Delta Force: Silent Sentinel Supplies - Advanced", price: 190, region: "Любой" },
                { id: 5939, name: "Delta Force: 300 + 20 Delta Coins", price: 380, region: "Любой" },
                { id: 5849, name: "Delta Force: Black Hawk Down - Redefine", price: 380, region: "Любой" },
                { id: 5941, name: "Delta Force: 420 + 40 Delta Coins", price: 545, region: "Любой" },
                { id: 5850, name: "Delta Force: 680 + 70 Delta Coins", price: 755, region: "Любой" },
                { id: 5851, name: "Delta Force: 1280 + 200 Delta Coins", price: 1505, region: "Любой" },
                { id: 5852, name: "Delta Force: 1680 + 300 Delta Coins", price: 1885, region: "Любой" },
                { id: 5853, name: "Delta Force: 3280 + 670 Delta Coins", price: 3765, region: "Любой" },
                { id: 5854, name: "Delta Force: 6480 +1620 Delta Coins", price: 7525, region: "Любой" },
                { id: 5855, name: "Delta Force: 12960 + 3888 Delta Coins", price: 17395, region: "Любой" },
                { id: 5856, name: "Delta Force: 19440 + 5832 Delta Coins", price: 26090, region: "Любой" }
            ]}
            prefix="Delta Force"
            />
        </Main>
        </>
    )
}