"use client"

import Icon from "./Icon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSiteType } from "./SiteTypeContext";

export default function Gallery() {
    const { siteType } = useSiteType()
    const [current, setCurrent] = useState(0)
    const [cardCount, setCardCount] = useState(6)


    useEffect(() => {
        const checkScreenSize = () => {
            if (window.outerWidth <= 768) {
                setCardCount(3)
            }

            if (window.outerWidth <= 480) {
                setCardCount(2)
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const paths = siteType === "game" ? [
        "pubg.png",
        "genshin.png",
        "honkai.png",
        "zzz.png",
        "state_survival.png",
        "roblox.png",
        "marvel_rivals.png",
        "deltaforce.png",
        "mobile_legends.png",
        "valorant.png",
        "freefire.png",
        "arena_brt.png",
    ]
    :
    [
        "chatGPT.png",
        "playStation.png",
        "apple.png",
        "steam.png",
        "battle.png",
        "nintendo.png",
    ]
    const links = siteType === "game" ? [
        "/pubg",
        "/genshin",
        "/honkai",
        "/zzz",
        "/state-survival",
        "/roblox",
        "/marvel-rivals",
        "/deltaforce",
        "/mobile-legends",
        "/valorant",
        "/freefire",
        "/arena-breakout",
    ]
    :
    [
        "/chatgpt",
        "/playstation",
        "/apple",
        "/steam",
        "/battle",
        "/nintendo",
    ]
    return (
        <section className="w-full h-95 max-[481px]:h-fit border-1 border-(--border) bg-(--section-back) rounded-3xl lg:p-8 p-4 flex flex-col gap-8">
            <div className="flex gap-2 items-center">
                <Icon type="grid" />
                <h1 className="lg:text-4xl text-2xl">{siteType === "game" ? "Все игры" : "Все сервисы"}</h1>
            </div>
            <div className="flex gap-4 justify-between items-center h-full">
                <div className="cursor-pointer select-none" onClick={()=>setCurrent(state=>state-1 < 0 ? paths.length-cardCount : state-cardCount)}>
                    <Icon type="arrow" />
                </div>
                <div className="flex lg:gap-2 max-[768px]:gap-5 max-[481px]:gap-2 w-full h-full justify-between">
                    {paths.slice(0 + current, cardCount + current).map((path, i)=>
                    <Link
                    key={i}
                    href={links.slice(0 + current, cardCount + current)[i]}
                    onClick={()=>setCurrent(i)}
                    style={{ backgroundImage: `url('/images/${path}')` }}
                    className={`hover:translate-y-[-10px] bg-cover bg-no-repeat bg-center relative cursor-pointer lg:w-48 md:w-45 max-[768px]:w-43 max-[481px]:w-30 max-[481px]:h-[190px] lg:h-full h-65 rounded-2xl overflow-hidden border-1 border-(--border) hover:shadow-[3px_-3px_10px_0_#46F9D7,-3px_-3px_10px_0px_#46F9D7,3px_3px_10px_0_#15B5ED,-3px_3px_10px_0_#15B5ED]`}
                    />)}
                </div>
                <div className="rotate-180 cursor-pointer select-none" onClick={()=>setCurrent(state=>state+1 === (paths.length - cardCount + 1) ? 0 : state+cardCount)}>
                    <Icon type="arrow" />
                </div>
            </div>
        </section>
    )
}