"use client"

import Image from "next/image";
import Icon from "./Icon";
import { useState } from "react";

export default function Gallery() {
    const [current, setCurrent] = useState(-1)
    const paths = [
        "/images/pubg.png",
        "/images/mobileLegends.png",
        "/images/honkai.png",
        "/images/genshin.png",
        "/images/zzz.png"
    ]
    return (
        <div className="w-full h-85 border-1 border-white bg-[rgba(10,15,25,0.5)] rounded-2xl px-8 py-8 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <Icon type="grid" />
                <h1 className="text-4xl">Все игры</h1>
            </div>
            <div className="flex gap-4 justify-between items-center h-full">
                <div className="cursor-pointer select-none" onClick={()=>setCurrent(state=>state-1 < 0 ? paths.length-1 : state-1)}>
                    <Icon type="arrow" />
                </div>
                <div className="flex gap-2 w-full h-full justify-between">
                    {paths.map((path, i)=>
                    <div
                    key={i}
                    onClick={()=>setCurrent(i)}
                    className={`relative cursor-pointer w-48 h-full rounded-2xl overflow-hidden ${current === i ? "border-2 border-(--green)" : "border-1 border-white"}`}
                    >
                        <Image src={path} className="object-cover pointer-events-none" alt="image" fill />
                    </div>)}
                </div>
                <div className="rotate-180 cursor-pointer select-none" onClick={()=>setCurrent(state=>state+1 === paths.length ? 0 : state+1)}>
                    <Icon type="arrow" />
                </div>
            </div>
        </div>
    )
}