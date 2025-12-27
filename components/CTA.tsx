"use client"

import { useSiteType } from "./SiteTypeContext"

export default function CTA() {
    const { siteType } = useSiteType()
    return (
        <section className="w-[100%] h-96 bg-transparent flex items-start">
            <div className={`w-full flex flex-col ${siteType === "game" ? "" : "items-end"} gap-6`}>
                {siteType === "game" ?
                <>
                    <h1 className="font-(family-name:--bounded-regular) text-6xl">
                        Заправь свой <span className="text-(--green)">STEAM</span> <br/>
                        баланс на максимум!
                    </h1>
                    <h2 className="text-2xl">
                        Мгновенное пополнение, низкая комиссия <br/>
                        и 100% гарантия зачисления на ваш счет
                    </h2>
                    <button className="w-96 h-20 btn !rounded-2xl text-xl">
                        Пополнить
                    </button>
                </>
                :
                <>
                    <h1 className="font-(family-name:--bounded-regular) text-6xl">
                        Доступ к <span className="text-(--blue)">сервисам</span><br/>
                        звёзд на максимум!
                    </h1>
                    <h2 className="text-2xl">
                        Мгновенное пополнение, низкая комиссия<br/>
                        и 100% гарантия зачисления на ваш счет
                    </h2>
                    <button className="w-96 h-20 btn !rounded-2xl text-xl">
                        Купить <br />
                        Telegram Stars
                    </button>
                </>
                }
            </div>
        </section>
    )
}