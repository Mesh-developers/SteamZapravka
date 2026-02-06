"use client"

import Image from "next/image"
import { useSiteType } from "./SiteTypeContext"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CTA() {
    const { siteType } = useSiteType()
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.outerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <section className="w-[100%] lg:h-96 md:h-75 bg-transparent flex items-start">
            {!isMobile && siteType === "telegram" && <Image width={840} height={900} src="/images/mika_services.png" loading="eager" quality={100} alt="astronaut" className="absolute -left-[5%] top-13" />}
            {isMobile && siteType === "telegram" ? <Image width={561} height={682} src={"/images/telegram_mobile.png"} alt="telegram mobile" className="-left-3 -top-20 relative max-[481px]:-top-10 max-[481px]:w-[400px] max-[481px]:h-[280px] max-[394px]:hidden !h-100 max-[481px]:!h-78" /> : <></>}
            <div className={`w-full flex flex-col ${siteType === "game" ? "" : "items-end max-[769px]:!w-118"} gap-6`}>
                {siteType === "game" ?
                <>
                    <h1 className="font-(family-name:--bounded-regular) lg:w-full lg:text-6xl max-[769px]:text-4xl max-[769px]:w-140 max-[481px]:w-100 max-[394px]:w-[100%]">
                        Заправь свой <span className="text-(--green)">STEAM</span> <br/>
                        баланс на максимум!
                    </h1>
                    <h2 className="lg:text-2xl md:text-xl min-[481px]:block hidden">
                        Мгновенное пополнение, низкая комиссия <br/>
                        и 100% гарантия зачисления на ваш счет
                    </h2>
                    <Link href="#balance" className="w-96 h-20 font-(family-name:--manrope-semibold) btn !rounded-2xl text-xl flex items-center justify-center max-[481px]:w-60 max-[481px]:h-15">
                        Пополнить
                    </Link>
                </>
                :
                <>
                    <h1 className="font-(family-name:--bounded-regular) lg:w-fit lg:text-6xl max-[769px]:text-4xl max-[769px]:w-140 max-[481px]:w-fit max-[394px]:w-[100%] max-[769px]:text-right">
                        Доступ к <span className="text-(--blue)">сервисам</span><br/>
                        звёзд на максимум!
                    </h1>
                    <h2 className="lg:text-2xl md:text-xl min-[481px]:block hidden">
                        Мгновенное пополнение, низкая комиссия<br/>
                        и 100% гарантия зачисления на ваш счет
                    </h2>
                    <Link href="#balance" className="w-96 h-20 font-(family-name:--manrope-semibold) btn hover:!border-(--blue) !from-[#0698D6] !to-[#035070] !rounded-2xl text-xl text-center flex items-center justify-center max-[481px]:w-60 max-[481px]:h-15">
                        Купить <br />
                        Telegram Stars
                    </Link>
                </>
                }
            </div>
            {!isMobile && siteType === "game" && <Image width={840} height={900} src="/images/mika_game.png" loading="eager" quality={100} alt="astronaut" className="absolute left-[47%] top-13" />}
            {isMobile && siteType === "game" ? <Image width={561} height={682} src={"/images/steam_mobile.png"} alt="steam mobile" className="-left-25 -top-20 relative max-[481px]:-top-10 max-[481px]:-left-35 max-[481px]:w-[400px] max-[481px]:h-[280px] max-[394px]:hidden" /> : <></>}
        </section>
    )
}