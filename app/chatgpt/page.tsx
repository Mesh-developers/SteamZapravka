import Backlight from "@/components/Backlight";
import Form from "@/components/Form";

export default function ChatGPT() {
    return (
        <>
        <Backlight count={3} gap={100} />
        <main className="relative z-2 mt-10 w-[75%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent">
            <Form
            type="topup"
            cover="gpt_cover.png"
            boxes={[]}
            uniqueCard={{ title: "Chat GPT", text: ["", `
            Подарочная карта Chat GPT — это самый простой, быстрый и надежный способ пополнить счет. Вам не нужно передавать данные от аккаунта, достаточно указать свой E-mail для мгновенного получения кода активации. Вам остается лишь скопировать его и ввести.
            `],
            image: "gpt_card.png"
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
                { id: 836, name: "ChatGPT - 1 месяц Stripe", price: 2190, region: "Любой", image: "gpt_back.png" },
                { id: 172, name: "ChatGPT Plus - 1 Month", price: 2290, region: "Любой", image: "gpt_back.png" },
                { id: 1402, name: "ChatGPT Plus - 3 месяца", price: 6365, region: "Любой", image: "gpt_back.png" },
                { id: 837, name: "ChatGPT PRO - 1 месяц Stripe", price: 20090, region: "Любой" },
                { id: 786, name: "ChatGPT PRO - 1 Month", price: 20685, region: "Любой" }
            ]}
            prefix={["ChatGPT", "ChatGPT PRO", "ChatGPT Plus"]}
            isService
            />
        </main>
    </>
    )
}