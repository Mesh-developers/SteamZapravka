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
        <section className="w-full lg:h-130 max-[1025px]:h-80 max-[481px]:h-fit flex">
            <div className="self-start w-full flex items-center gap-4">
                <div className={`cursor-pointer select-none ${mainImage ? "relative z-1 min-[481px]:left-3" : ""}`} onClick={()=>setCurrentIndex(state=>state-1 < 0 ? data.length-1 : state-1)}>
                    <Icon type="arrow" />
                </div>
                <div className="w-full flex flex-col lg:gap-4 max-[1025px]:gap-0">
                    <Link href={data[currentIndex].link} className={`${mainImage ? "grid-cols-1 relative -left-10 max-[481px]:static max-[481px]:w-[100%] w-[106%]" : "lg:grid-cols-[2fr_1fr] max-[1025px]:grid-cols-1"} grid cursor-pointer`}>
                        <div style={{ backgroundImage: `url('/images/${currentImage}')` }} className={`${mainImage ? "rounded-3xl shadow-[inset_60px_0_100px_-5px_rgba(0,0,0,0.5),inset_-60px_0_100px_-5px_rgba(0,0,0,0.5)] h-[530px]" : "lg:rounded-l-3xl max-[1025px]:rounded-t-3xl lg:shadow-[15px_0_20px_-3px_rgba(0,0,0,0.6)] max-[1025px]:shadow-[0px_15px_20px_-3px_rgba(0,0,0,0.6)]"} relative bg-cover bg-no-repeat bg-top max-[481px]:rounded-b-[0px] lg:h-[473px] max-[1025px]:h-[221px] max-[481px]:h-[150px]`} />
                        {mainImage ?
                        <></>
                        :
                        <div className="bg-[url('/images/slider_back.png')] bg-cover bg-no-repeat bg-center pt-5 rounded-r-3xl lg:flex flex-col border-1 border-[#0A141D] gap-7 lg:h-full max-[1025px]:h-[221px] max-[1025px]:hidden">
                            <div className="flex justify-between mr-3">
                                <h1 className="lg:text-xl max-[1025px]:text-lg ml-5">{data[currentIndex].title}</h1>
                            </div>
                            <div className="w-[94%] grid grid-cols-[40%_60%] h-40 lg:grid-rows-[99px_99px] max-[1025px]:grid-rows-[63px_63px] gap-4 h-fit" onMouseLeave={()=>setCurrentImage(data[currentIndex].mainImage)}>
                                {data[currentIndex].images.map((path, i)=><div key={i} onMouseEnter={()=>setCurrentImage(path)} style={{ backgroundImage: `url('/images/${path}')` }} className={`w-full h-full bg-cover bg-no-repeat bg-center ${i % 2 === 0 ? "lg:rounded-r-2xl max-[1025px]:rounded-r-lg" : "lg:rounded-2xl max-[1025px]:rounded-lg"}`} />)}
                            </div>
                            <div className="grid grid-cols-[60%_40%] justify-between mr-3">
                                <span className="text-sm ml-5">
                                    <span className="text-(--green) lg:text-sm max-[1025px]:text-[10px]">Рекомендует</span> <br/>
                                    Steam Zapravka <br/>
                                    <span className="lg:text-2xl max-[1025px]:text-[13px] relative top-3">
                                        Уже доступна!
                                    </span>
                                </span>
                                <div className="flex flex-col">
                                    <span className="relative top-2 bg-[#666666] lg:text-[12px] max-[1025px]:text-[9px] lg:rounded-lg max-[1025px]:rounded-md w-fit py-1 px-2 self-end">Лидер продаж в STEAM</span>
                                    <div className="flex gap-1 justify-end relative top-3">
                                        {data[currentIndex].genres.map((genre, i)=><span className="lg:text-[12px] max-[1025px]:text-[9px] font-(family-name:--manrope-light) lg:rounded-lg max-[1025px]:rounded-md bg-[#666666] p-1 px-2 flex items-center" key={i}>{genre}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mr-3">
                                <div className="flex gap-2 ml-5">
                                    {data[currentIndex].platforms.map((platform, i)=><Icon key={i} type={platform} />)}
                                </div>
                                <button className="btn text-sm px-5 py-2">
                                    Купить
                                </button>
                            </div>
                        </div>
                        }
                    </Link>
                    <div className="lg:hidden h-19 rounded-b-3xl max-[1025px]:flex items-center justify-between bg-[url('/images/slider_back.png')] bg-cover bg-no-repeat bg-center px-5">
                        <h1 className="text-xl max-[481px]:text-sm">{data[currentIndex].title}</h1>
                        <button className="btn !rounded-md text-lg px-5 py-1 max-[481px]:text-sm w-24">
                            Купить
                        </button>
                    </div>
                    <div className="w-full flex justify-center items-center gap-4 lg:mt-0 max-[1025px]:mt-2">
                        {data.map((_, i)=><div onClick={()=>setCurrentIndex(i)} key={i} className={`cursor-pointer h-[10px] w-[40px] rounded-sm ${i === currentIndex ? "bg-(--white)" : "bg-(--border)"}`} />)}
                    </div>
                </div>
                <div className={`rotate-180 cursor-pointer select-none ${mainImage ? "relative min-[481px]:right-3" : ""}`} onClick={()=>setCurrentIndex(state=>state+1 === data.length ? 0 : state+1)}>
                    <Icon type="arrow" />
                </div>
            </div>
        </section>
    )
}