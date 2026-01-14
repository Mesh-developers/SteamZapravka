"use client"

import { useEffect, useState } from "react";
import Icon from "./Icon";
import Image from "next/image";
import PaymentSystems from "./PaymentSystems";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Link from "next/link";
import { initialOrder, ORDER_STORAGE_KEY, Platforms } from "@/constants";
import Slider from "./Slider";
import { PaymentSystem, VouchersResponse } from "@/typings";
import useData from "@/hooks/useData";
import useLocalStorage from "@/hooks/useLocalStorage";
import { redirect, RedirectType, usePathname } from "next/navigation";

type GamePageProps = {
    mainImage: string;
    images: string[];
    video: string;
    description: string;
    minimal: string[];
    recommended: string[];
    platforms: Platforms;
    price: number;
    editions: {
        id: number;
        name: string;
        price: number;
        region: string;
    }[]
}

export default function GamePage({ mainImage, images, video, description, minimal, recommended, platforms, price, editions }:GamePageProps) {
    const pathname = usePathname()
    const [, setOrder] = useLocalStorage(ORDER_STORAGE_KEY, initialOrder)
    const [edition, setEdition] = useState("")
    const [isUserTerms, setIsUserTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [currentEditionIndex, setCurrentEditionIndex] = useState(0)
    const [email, setEmail] = useState("")
    const [system, setSystem] = useState<PaymentSystem>("SBP")
    const { data: editionsData } = useData(pathname, editions.map(edit=>edit.id), (data)=>data.filter(d=>d.inStock))

    const leftArrowHandler = () => setCurrentIndex(state=>state-1 < -1 ? images.length-1 : state-1)
    const rightArrowHandler = () => setCurrentIndex(state=>state+1 === images.length ? -1 : state+1)

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            leftArrowHandler()
        } else if (event.key === 'ArrowRight') {
            rightArrowHandler()
        }
    };

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    const buy = async () => {
        if (isPrivacy && isUserTerms && editionsData) {
            const res = await fetch("https://api.steamzapravka.io/vouchers", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    productId: editionsData[currentEditionIndex].productId,
                    email,
                    paymentMethod: system
                })
            })

            if (res.ok) {
                const data: VouchersResponse = await res.json()
                if (data.inStock && (data.amountToBeSoldFor === editionsData[currentEditionIndex].priceInRub)) {
                    setOrder({
                        id: data.orderId,
                        name: data.productName,
                        amount: data.amountToBeSoldFor,
                        paymentSystem: system,
                        href: data.paymentUrl,
                        email
                    })
                    redirect(data.paymentUrl, RedirectType.push)
                }
            }
        }
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex gap-4 h-180">
                <div className="flex flex-[2] flex-col gap-2">
                    <div className="min-w-[848px] w-full h-full flex relative justify-between items-center overflow-hidden group">
                        {currentIndex === -1 ?
                        <iframe src={video} className="w-full h-full absolute rounded-3xl" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media; fullscreen; picture-in-picture"/>
                        :
                        <Image
                        fill
                        src={`/images/${images[currentIndex]}`}
                        className="w-full h-full absolute object-cover rounded-3xl border-1 border-(--border)"
                        alt="edit image"
                        quality={100}
                        loading="eager"
                        />
                        }
                        <div className="transition-all delay-200 relative group-hover:ml-5 -ml-7 cursor-pointer select-none" onClick={leftArrowHandler}>
                            <Icon type="arrow" />
                        </div>
                        <div className="transition-all delay-200 relative group-hover:mr-5 -mr-7 rotate-180 cursor-pointer select-none" onClick={rightArrowHandler}>
                            <Icon type="arrow" />
                        </div>
                        {/* <div className="absolute top-[92%] w-full flex justify-center items-center gap-4">
                            {[...images, ""].map((_, i)=><div onClick={()=>setCurrentIndex(i-1)} key={i} className={`cursor-pointer w-[40px] h-[10px] rounded-sm opacity-60 ${i-1 === currentIndex ? "bg-(--white)" : "bg-(--border)"}`} />)}
                        </div> */}
                    </div>
                    <div className="flex gap-3 justify-between">
                        <div
                        className={`${currentIndex === -1 ? "shadow-[3px_-3px_8px_-1px_#46F9D7,-3px_-3px_8px_-1px_#46F9D7,3px_3px_8px_-1px_#15B5ED,-3px_3px_8px_-1px_#15B5ED]" : ""} relative overflow-hidden w-full h-[80px] rounded-2xl border-1 border-(--border) cursor-pointer`}
                        >
                            <div className="absolute w-full h-full bg-transparent" onClick={()=>setCurrentIndex(-1)} />
                            <iframe
                            src={video}
                            className="w-full h-full"
                            />
                        </div>
                        {images.map((image, i)=><div
                                                key={i}
                                                onClick={()=>setCurrentIndex(i)}
                                                style={{ backgroundImage: `url('/images/${image}')` }}
                                                className={`${currentIndex === i ? "shadow-[3px_-3px_8px_-1px_#46F9D7,-3px_-3px_8px_-1px_#46F9D7,3px_3px_8px_-1px_#15B5ED,-3px_3px_8px_-1px_#15B5ED]" : ""} w-full h-[80px] rounded-2xl border-1 border-(--border) bg-center bg-no-repeat bg-cover cursor-pointer`}
                                                />)}
                    </div>
                </div>
                <div className="flex flex-1 min-w-[535px] flex-col w-full gap-2">
                    <div className="relative w-full min-h-[200px]">
                        <div
                        style={{backgroundImage: `url('/images/${mainImage}')`}}
                        className="bg-cover bg-top bg-no-repeat w-full h-full rounded-4xl border-1 border-(--border)"
                        />
                    </div>
                    <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-4 px-8 pt-6 border-1 border-(--border) bg-(--section-back) w-full h-full rounded-4xl">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg">E-mail</h3>
                            <Input
                            placeholder="Ваш E-mail"
                            value={email}
                            setValue={setEmail}
                            />
                        </div>
                        <div className="flex gap-3 w-full h-15">
                            <PaymentSystems
                            systems={[
                                {
                                    title: "SBP",
                                    percent: 8,
                                    image: <Icon type="sbp" width={80} height={50} />
                                },
                                {
                                    title: "CRYPTOCURRENCY",
                                    percent: 5,
                                    image: <Icon type="crypto" width={90} height={60} />
                                }
                            ]}
                            system={system}
                            setSystem={setSystem}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg">Выберите издание</h3>
                            <Select
                            placeholder="Ваше издание"
                            options={editionsData?.map(edit=>edit.name) || editions.map(edit=>edit.name)}
                            value={edition}
                            setValue={setEdition}
                            callback={(opt)=>setCurrentEditionIndex(editions.findIndex(edit=>edit.name === opt))}
                            />
                        </div>
                        <button onClick={buy} className="!font-(family-name:--manrope-medium) w-full h-20 btn !rounded-[25px] text-3xl">
                            {edition ?
                            <span>Купить за {(editionsData && editionsData[currentEditionIndex].priceInRub) || price} ₽</span>
                            :
                            <span>Купить</span>
                            }
                        </button>
                        <div className="mt-4 flex flex-col gap-2">
                            <Checkbox checked={isUserTerms} setChecked={setIsUserTerms}>
                                <span className="!font-(family-name:--manrope-regular) text-[15px]">
                                    Я согласен с условиями <Link href={""} className="underline">Пользовательского соглашения</Link>.
                                </span>
                            </Checkbox>
                            <Checkbox checked={isPrivacy} setChecked={setIsPrivacy}>
                                <span className="!font-(family-name:--manrope-regular) text-[15px]">
                                    Я согласен с условиями <Link href={""} className="underline">Политики конфиденциальности</Link>.
                                </span>
                            </Checkbox>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full px-8 py-6 border-1 border-(--border) bg-(--section-back) rounded-4xl mt-10">
                <h2 className="text-xl">Об этой игре</h2>
                <p className="whitespace-pre-line">{description}</p>
            </div>
            {platforms.map((platform, i)=>
            <div key={i} className="flex gap-4">
                <div className="w-full px-8 py-6 border-1 border-(--border) bg-(--section-back) rounded-4xl">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Минимальные системные требования</h2>
                        <Icon type={platform} />
                    </div>
                    <p className="whitespace-pre-line">{minimal[i]}</p>
                </div>
                <div className="w-full px-8 py-6 border-1 border-(--border) bg-(--section-back) rounded-4xl">
                    <div className="flex justify-between">
                        <h2 className="text-xl">Рекомендованные системные требования</h2>
                        <Icon type={platform} />
                    </div>
                    <p className="whitespace-pre-line">{recommended[i]}</p>
                </div>
            </div>
            )}
            <div className="mt-5" />
            <Slider mainImage={mainImage} />
            <div className="mt-15" />
        </div>
    )
}