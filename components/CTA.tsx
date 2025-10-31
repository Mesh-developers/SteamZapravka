export default function CTA() {
    return (
        <section className="w-[100%] h-96 bg-transparent flex items-start">
            <div className="flex flex-col gap-6">
                <h1 className="font-(family-name:--bounded-regular) text-6xl">
                    Заправь свой <span className="text-[#50EA90]">STEAM</span> <br/>
                    баланс на максимум!
                </h1>
                <h2 className="text-2xl">
                    Мгновенное пополнение, низкая комиссия <br/>
                    и 100% гарантия зачисления на ваш счет
                </h2>
                <button className="w-96 h-20 bg-radial from-[rgba(69,_196,_126,_1)] from-40% to-[rgba(45,_132,_81,_1)] rounded-2xl text-xl shadow-lg/30">
                    Пополнить
                </button>
            </div>
        </section>
    )
}