"use client"

import Image from "next/image"
import { useSiteType } from "./SiteTypeContext"
import { useEffect, useState } from "react";

export default function CTA() {
    const { siteType } = useSiteType()
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
        setIsMobile(window.outerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <section className="w-[100%] lg:h-96 md:h-75 bg-transparent flex items-start">
            <div className={`w-full flex flex-col ${siteType === "game" ? "" : "items-end"} gap-6`}>
                {siteType === "game" ?
                <>
                    <h1 className="font-(family-name:--bounded-regular) lg:w-full lg:text-6xl md:text-4xl md:w-140">
                        Заправь свой <span className="text-(--green)">STEAM</span> <br/>
                        баланс на максимум!
                    </h1>
                    <h2 className="lg:text-2xl md:text-xl">
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
                    <button className="w-96 h-20 btn !from-[#0698D6] !to-[#035070] !rounded-2xl text-xl">
                        Купить <br />
                        Telegram Stars
                    </button>
                </>
                }
            </div>
            {isMobile ? <Image width={561} height={682} src={"/images/steam_mobile.png"} alt="steam mobile" className="-left-25 -top-20 relative" /> : <></>}
        </section>
    )
}