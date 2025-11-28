"use client"

import { useEffect, useState } from "react"
import Icon from "./Icon"

export default function Slider() {
    const [currentImage, setCurrentImage] = useState("arc_raiders_slider.png")
    const [currentIndex, setCurrentIndex] = useState(0)
    const data: {
        title: string;
        mainImage: string;
        images: string[];
        genres: string[];
        platforms: Array<"windows"|"mac">;
        price: number;
    }[] = [
        {
            title: "АRC Raiders",
            mainImage: "arc_raiders_slider.png",
            images: [
                "arc_raiders_slider1.png",
                "arc_raiders_slider2.png",
                "arc_raiders_slider3.png",
                "arc_raiders_slider4.png",
            ],
            genres: ["Выживание", "Шутер"],
            platforms: ["windows"],
            price: 2799
        },
        {
            title: "DAYZ",
            mainImage: "dayz_slider.png",
            images: [
                "dayz_slider1.png",
                "dayz_slider2.png",
                "dayz_slider3.png",
                "dayz_slider4.png",
            ],
            genres: ["Выживание", "Шутер"],
            platforms: ["windows"],
            price: 2799
        },
        {
            title: "Farming Simulator",
            mainImage: "farming_simulator_slider.png",
            images: [
                "farming_simulator_slider1.png",
                "farming_simulator_slider2.png",
                "farming_simulator_slider3.png",
                "farming_simulator_slider4.png",
            ],
            genres: ["Выживание", "Шутер"],
            platforms: ["windows", "mac"],
            price: 2799
        },
    ]

    useEffect(()=>{
        if (data[currentIndex].mainImage !== currentImage)
            queueMicrotask(() => {
                setCurrentImage(data[currentIndex].mainImage);
            });
    }, [currentIndex])

    return (
        <section className="w-full h-130 flex">
            <div className="self-start w-full flex items-center gap-4">
                <div className="cursor-pointer select-none" onClick={()=>setCurrentIndex(state=>state-1 < 0 ? data.length-1 : state-1)}>
                    <Icon type="arrow" />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="grid grid-cols-[2fr_1fr]">
                        <div style={{ backgroundImage: `url('/images/${currentImage}')` }} className="relative bg-cover bg-no-repeat bg-center h-[473px] rounded-l-2xl shadow-[15px_0_20px_-3px_rgba(0,0,0,0.6)]" />
                        <div className="bg-[url('/images/slider_back.png')] bg-cover bg-no-repeat bg-center pt-5 rounded-r-3xl flex flex-col cursor-pointer border-1 border-[#0A141D] gap-7">
                            <div className="flex justify-between mr-3">
                                <h1 className="text-2xl ml-5">{data[currentIndex].title}</h1>
                                <div className="flex gap-1">
                                    {data[currentIndex].genres.map((genre, i)=><span className="text-[12px] font-(family-name:--manrope-light) rounded-lg bg-[#0698D6] p-1 px-2 flex items-center" key={i}>{genre}</span>)}
                                </div>
                            </div>
                            <div className="w-[94%] grid grid-cols-[40%_60%] h-40 grid-rows-[99px_99px] gap-4 h-fit" onMouseLeave={()=>setCurrentImage(data[currentIndex].mainImage)}>
                                {data[currentIndex].images.map((path, i)=><div key={i} onMouseEnter={()=>setCurrentImage(path)} style={{ backgroundImage: `url('/images/${path}')` }} className={`w-full h-full bg-cover bg-no-repeat bg-center ${i % 2 === 0 ? "rounded-r-2xl" : "rounded-2xl"}`} />)}
                            </div>
                            <div className="flex justify-between mr-3">
                                <span className="text-2xl ml-5">
                                    Уже доступна! <br/>
                                    <span className="relative top-2 bg-[#666666] text-[12px] rounded-lg w-fit py-1 px-2">Лидер продаж в STEAM</span>
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-sm">
                                        <span className="text-(--green)">Рекомендует!</span> <br/>
                                        Steam Zapravka
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mr-3 mt-1">
                                <div className="flex gap-2 ml-5">
                                    {data[currentIndex].platforms.map((platform, i)=><Icon key={i} type={platform} />)}
                                </div>
                                <button className="shadow-[0_3px_3px_0_rgba(0,0,0,0.20),0_5px_5px_0_rgba(0,0,0,0.17),0_12px_7px_0_rgba(0,0,0,0.10),0_21px_8px_0_rgba(0,0,0,0.03),0_32px_9px_0_rgba(0,0,0,0)] bg-radial from-[#45C47E] from-0% to-[#2D8451] rounded-xl text-sm px-5 py-2">
                                    {data[currentIndex].price} ₽
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center gap-4">
                        {data.map((_, i)=><div onClick={()=>setCurrentIndex(i)} key={i} className={`cursor-pointer h-[15px] w-[60px] rounded-sm ${i === currentIndex ? "bg-(--white)" : "bg-(--border)"}`} />)}
                    </div>
                </div>
                <div className="rotate-180 cursor-pointer select-none" onClick={()=>setCurrentIndex(state=>state+1 === data.length ? 0 : state+1)}>
                    <Icon type="arrow" />
                </div>
            </div>
        </section>
    )
}