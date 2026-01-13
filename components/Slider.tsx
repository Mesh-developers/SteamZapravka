"use client"

import { useEffect, useState } from "react"
import Icon from "./Icon"
import { arcRaiders, warhammer, farmingSimulator, GameInfo, monsterHunter } from "@/constants"
import Link from "next/link"

type SliderProps = {
    mainImage?: string
}

export default function Slider({ mainImage="" }:SliderProps) {
    const [currentImage, setCurrentImage] = useState(mainImage||"arc_raiders_slider.png")
    const [currentIndex, setCurrentIndex] = useState(0)
    const links = [
        "/arc-raiders",
        "/warhammer",
        "/farming-simulator",
        "/monster-hunter"
    ]
    const data: GameInfo[] = [
        {
           ...arcRaiders
        },
        {
            ...warhammer
        },
        {
            ...farmingSimulator
        },
        {
            ...monsterHunter
        }
    ].filter((val)=>val.mainImage !== mainImage)

    useEffect(()=>{
        if (data[currentIndex].mainImage !== currentImage)
            queueMicrotask(() => {
                setCurrentImage(data[currentIndex].mainImage);
            });
    }, [currentIndex])

    useEffect(()=>{
        let timer: NodeJS.Timeout;
        if (mainImage) {
            timer = setInterval(()=>setCurrentIndex(state=>state+1 < data.length ? state+1 : 0 ), 5000)
            return ()=>clearInterval(timer)
        }
    })

    return (
        <section className="w-full h-130 flex">
            <div className="self-start w-full flex items-center gap-4">
                <div className={`cursor-pointer select-none ${mainImage ? "relative z-1 left-3" : ""}`} onClick={()=>setCurrentIndex(state=>state-1 < 0 ? data.length-1 : state-1)}>
                    <Icon type="arrow" />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Link href={links[currentIndex]} className={`${mainImage ? "grid grid-cols-1 relative -left-10 w-[106%]" : "grid-cols-[2fr_1fr]"} grid cursor-pointer`}>
                        <div style={{ backgroundImage: `url('/images/${currentImage}')` }} className={`${mainImage ? "rounded-3xl shadow-[inset_60px_0_100px_-5px_rgba(0,0,0,0.5),inset_-60px_0_100px_-5px_rgba(0,0,0,0.5)] h-[530px]" : "rounded-l-3xl shadow-[15px_0_20px_-3px_rgba(0,0,0,0.6)]"} relative bg-cover bg-no-repeat bg-center lg:h-[473px] md:h-[221px]`} />
                        {mainImage ?
                        <></>
                        :
                        <div className="bg-[url('/images/slider_back.png')] bg-cover bg-no-repeat bg-center pt-5 rounded-r-3xl flex flex-col border-1 border-[#0A141D] gap-7 lg:h-full md:h-[221px]">
                            <div className="flex justify-between mr-3">
                                <h1 className="lg:text-2xl md:text-xl ml-5">{data[currentIndex].title}</h1>
                            </div>
                            <div className="w-[94%] grid grid-cols-[40%_60%] h-40 lg:grid-rows-[99px_99px] md:grid-rows-[63px_63px] gap-4 h-fit" onMouseLeave={()=>setCurrentImage(data[currentIndex].mainImage)}>
                                {data[currentIndex].images.map((path, i)=><div key={i} onMouseEnter={()=>setCurrentImage(path)} style={{ backgroundImage: `url('/images/${path}')` }} className={`w-full h-full bg-cover bg-no-repeat bg-center ${i % 2 === 0 ? "lg:rounded-r-2xl md:rounded-r-lg" : "lg:rounded-2xl md:rounded-lg"}`} />)}
                            </div>
                            <div className="flex justify-between mr-3">
                                <span className="text-sm ml-5">
                                    <span className="text-(--green)">Рекомендует</span> <br/>
                                    Steam Zapravka <br/>
                                    <span className="lg:text-2xl md:text-base relative top-3">
                                        Уже доступна!
                                    </span>
                                </span>
                                <div className="flex flex-col">
                                    <span className="relative top-2 bg-[#666666] lg:text-[12px] md:text-[9px] lg:rounded-lg md:rounded-md w-fit py-1 px-2 self-end">Лидер продаж в STEAM</span>
                                    <div className="flex gap-1 justify-end relative top-3">
                                        {data[currentIndex].genres.map((genre, i)=><span className="lg:text-[12px] md:text-[9px] font-(family-name:--manrope-light) lg:rounded-lg md:rounded-md bg-[#666666] p-1 px-2 flex items-center" key={i}>{genre}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mr-3">
                                <div className="flex gap-2 ml-5">
                                    {data[currentIndex].platforms.map((platform, i)=><Icon key={i} type={platform} />)}
                                </div>
                                <button className="btn text-sm px-5 py-2">
                                    {data[currentIndex].price} ₽
                                </button>
                            </div>
                        </div>
                        }
                    </Link>
                    <div className="w-full flex justify-center items-center gap-4">
                        {data.map((_, i)=><div onClick={()=>setCurrentIndex(i)} key={i} className={`cursor-pointer h-[10px] w-[40px] rounded-sm ${i === currentIndex ? "bg-(--white)" : "bg-(--border)"}`} />)}
                    </div>
                </div>
                <div className={`rotate-180 cursor-pointer select-none ${mainImage ? "relative right-3" : ""}`} onClick={()=>setCurrentIndex(state=>state+1 === data.length ? 0 : state+1)}>
                    <Icon type="arrow" />
                </div>
            </div>
        </section>
    )
}