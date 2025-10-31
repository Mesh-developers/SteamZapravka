"use client"

import { useState } from "react"
import Input from "./Input"
import Chips from "./Chips"
import PaymentSystems from "./PaymentSystems"
import Icon from "./Icon"

export default function Balance() {
    const [login, setLogin] = useState("")
    const [promocode, setPromocode] = useState("")
    const [price, setPrice] = useState("1000")
    const [system, setSystem] = useState("sbp")
    return (
        <section className="w-full h-76 border-1 border-white bg-[rgba(10,15,25,0.5)] rounded-2xl px-8 py-8 flex flex-col gap-4">
            <h1 className="text-4xl">Пополни баланс <span className="text-(--blue)">STEAM</span> в СНГ</h1>
            <div className="grid grid-cols-[2fr_1fr_1fr] h-full gap-5">
                <div className="bg-linear-to-r from-[#33475D] to-[#355477] rounded-2xl px-5 py-5 grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4">
                    <Input placeholder="Ваш логин Steam" value={login} setValue={setLogin} hint="ГДЕ НАЙТИ ЛОГИН?" />
                    <Input type="number" value={price} setValue={setPrice} />
                    <Input placeholder="Промокод" value={promocode} setValue={setPromocode} />
                    <Chips value={price} values={["150", "500", "1000", "2000"]} setValue={setPrice} />
                </div>
                <div className="bg-linear-to-r from-[#33475D] to-[#355477] rounded-2xl px-5 py-5 grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4">
                    <PaymentSystems
                    system={system}
                    setSystem={setSystem}
                    systems={[
                        {
                            title: "sbp",
                            percent: 8,
                            image: <Icon type="sbp" width={80} height={50} />
                        },
                        {
                            title: "crypto",
                            percent: 5,
                            image: <Icon type="crypto" width={90} height={60} />
                        },
                        {
                            title: "sbp+",
                            percent: 10,
                            image: <Icon type="sbp" width={80} height={50} />
                        },
                        {
                            title: "sbp++",
                            percent: 15,
                            image: <Icon type="sbp" width={80} height={50} />
                        },
                    ]}
                    />
                </div>
                <button className="bg-radial from-[rgba(69,_196,_126,_1)] from-40% to-[rgba(45,_132,_81,_1)] rounded-2xl font-medium text-xl">
                    Пополнить баланс <br/> +{price} ₽
                </button>
            </div>
        </section>
    )
}