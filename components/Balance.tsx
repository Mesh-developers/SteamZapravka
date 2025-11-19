"use client"

import { useState } from "react"
import Input from "./Input"
import Chips from "./Chips"
import PaymentSystems from "./PaymentSystems"
import Icon from "./Icon"
import Checkbox from "./Checkbox"
import Link from "next/link"
import { useSiteType } from "./SiteTypeContext"

export default function Balance() {
    const [login, setLogin] = useState("")
    const [promocode, setPromocode] = useState("")
    const [price, setPrice] = useState("1000")
    const [system, setSystem] = useState("sbp")
    const [isAgree, setIsAgree] = useState(false)
    const { siteType } = useSiteType()

    return (
        <section className="w-full h-84 border-1 border-(--border) bg-(--section-back) rounded-2xl px-8 py-8 flex flex-col gap-4">
            <div className="flex justify-between">
                <h1 className="text-4xl">Пополни {siteType === "game" ? <>баланс <span className="text-(--blue)">STEAM</span></> : <><span className="text-(--blue)">TELEGRAM STARS</span></>} в СНГ</h1>
                <button className="w-48 h-9 rounded-full border-2 border-[#3EAFF7]">
                    <span className="p-2 flex items-center justify-center gap-1 w-full h-full rounded-full text-sm">
                        <svg width="10" height="16" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.5625C1.23478 0.5625 0.98043 0.681026 0.792893 0.892005C0.605357 1.10298 0.5 1.38913 0.5 1.6875C0.5 2.84906 0.873 4.45219 1.092 5.28919C1.1184 5.3875 1.17255 5.47346 1.24626 5.53406C1.31997 5.59465 1.40922 5.62658 1.5005 5.625C1.59157 5.62652 1.68061 5.5947 1.7542 5.53434C1.82779 5.47397 1.88195 5.38832 1.9085 5.29031C2.1275 4.45781 2.5 2.86312 2.5 1.6875C2.5 1.38913 2.39464 1.10298 2.20711 0.892005C2.01957 0.681026 1.76522 0.5625 1.5 0.5625ZM0 1.6875C0 1.23995 0.158035 0.810725 0.43934 0.494257C0.720644 0.17779 1.10218 0 1.5 0C1.89782 0 2.27936 0.17779 2.56066 0.494257C2.84196 0.810725 3 1.23995 3 1.6875C3 2.95312 2.606 4.62038 2.388 5.45062C2.3307 5.66495 2.2132 5.8526 2.0531 5.98546C1.893 6.11831 1.69893 6.1892 1.5 6.1875C1.0945 6.1875 0.729 5.895 0.612 5.44781C0.3945 4.61475 0 2.94019 0 1.6875ZM1.5 7.3125C1.36739 7.3125 1.24021 7.37176 1.14645 7.47725C1.05268 7.58274 1 7.72582 1 7.875C1 8.02418 1.05268 8.16726 1.14645 8.27275C1.24021 8.37824 1.36739 8.4375 1.5 8.4375C1.63261 8.4375 1.75979 8.37824 1.85355 8.27275C1.94732 8.16726 2 8.02418 2 7.875C2 7.72582 1.94732 7.58274 1.85355 7.47725C1.75979 7.37176 1.63261 7.3125 1.5 7.3125ZM0.5 7.875C0.5 7.57663 0.605357 7.29048 0.792893 7.0795C0.98043 6.86853 1.23478 6.75 1.5 6.75C1.76522 6.75 2.01957 6.86853 2.20711 7.0795C2.39464 7.29048 2.5 7.57663 2.5 7.875C2.5 8.17337 2.39464 8.45952 2.20711 8.6705C2.01957 8.88147 1.76522 9 1.5 9C1.23478 9 0.98043 8.88147 0.792893 8.6705C0.605357 8.45952 0.5 8.17337 0.5 7.875Z" fill="#EEEEEE"/>
                        </svg>
                        Важная информация
                    </span>
                </button>
            </div>
            <div className="grid grid-cols-[60%_19%_18%] grid-rows-[160px] h-full gap-5">
                <div className="bg-linear-to-r from-[#33475D] to-[#355477] rounded-2xl px-5 py-5 grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4">
                    <Input placeholder="Ваш логин Steam" value={login} setValue={setLogin} hintWrap hint={siteType === "game" ? "ГДЕ НАЙТИ ЛОГИН?" : "ГДЕ НАЙТИ?"} />
                    <Input type="number" value={price} setValue={setPrice} hint={siteType === "game" ? "~12.24 $ / 8728.42 ₸" : "~12.24 TON / 1728.42 ₽"} />
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
                    ]}
                    />
                </div>
                <button className={`bg-radial from-[${siteType === "game" ? "#45C47E" : "#0698D6"}] from-40% to-[${siteType === "game" ? "#2D8451" : "#035070"}] rounded-2xl font-medium text-xl`}>
                    Пополнить баланс <br/> +{price} ₽
                </button>
            </div>
            <Checkbox checked={isAgree} setChecked={setIsAgree}>
                <span>
                    Я согласен с условиями <Link href={""} className="underline">Пользовательского соглашения</Link> и <Link href={""} className="underline">Политики конфиденциальности</Link>.
                </span>
            </Checkbox>
        </section>
    )
}