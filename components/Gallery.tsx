"use client"

import Icon from "./Icon";
import { useState } from "react";
import Link from "next/link";
import { useSiteType } from "./SiteTypeContext";

export default function Gallery() {
    const { siteType } = useSiteType()
    const [current, setCurrent] = useState(0)
    const CARD_COUNT = 6

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
        "chatGPT.png",
        "playStation.png",
        "apple.png",
        "steam.png",
        "battle.png",
        "nintendo.png",
    ]
    return (
        <section className="w-full h-95 border-1 border-(--border) bg-(--section-back) rounded-2xl px-8 py-8 flex flex-col gap-8">
            <div className="flex gap-2 items-center">
                <Icon type="grid" />
                <h1 className="text-4xl">Все игры</h1>
            </div>
            <div className="flex gap-4 justify-between items-center h-full">
                <div className="cursor-pointer select-none" onClick={()=>setCurrent(state=>state-1 < 0 ? paths.length-CARD_COUNT : state-6)}>
                    <Icon type="arrow" />
                </div>
                <div className="flex gap-2 w-full h-full justify-between">
                    {paths.slice(0 + current, CARD_COUNT + current).map((path, i)=>
                    <Link
                    key={i}
                    href={links.slice(0 + current, CARD_COUNT + current)[i]}
                    onClick={()=>setCurrent(i)}
                    style={{ backgroundImage: `url('/images/${path}')` }}
                    className={`hover:translate-y-[-10px] bg-cover bg-no-repeat bg-center transition-all delay-50 relative cursor-pointer w-48 h-full rounded-2xl overflow-hidden border-1 border-(--border) hover:shadow-[3px_-3px_10px_0_#46F9D7,-3px_-3px_10px_0px_#46F9D7,3px_3px_10px_0_#15B5ED,-3px_3px_10px_0_#15B5ED]`}
                    />)}
                </div>
                <div className="rotate-180 cursor-pointer select-none" onClick={()=>setCurrent(state=>state+1 === (paths.length - CARD_COUNT + 1) ? 0 : state+6)}>
                    <Icon type="arrow" />
                </div>
            </div>
        </section>
    )
}