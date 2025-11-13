"use client"

import { Dispatch, SetStateAction, useState } from "react";
import InputNumber from "./InputNumber";
import PaymentSystems from "./PaymentSystems";
import Icon from "./Icon";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Box = {
    coin: string;
    image: string;
    price: number;
    altPrice: number;
}

type CardProps = {
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>
    index: number;
} & Box

interface FormProps {
    cover: string;
    boxes: Box[];
    uniqueCard: {
        title: string;
        text: string;
        image: string;
    };
    instructions: string[];
}

function Card({ altPrice, price, coin, image, index, currentIndex, setCurrentIndex }:CardProps) {
    if (!coin) return <div />
    return (
        <div className={`border-1 ${currentIndex !== index ? "border-white" : "border-(--green)"} grid grid-rows-[4fr_1fr] overflow-hidden rounded-2xl h-60 font-(family-name:--bounded-regular)`}>
            <div className={`flex bg-center bg-no-repeat bg-cover w-full h-full shadow-[inset_0_-10px_15px_-5px_#0E131E]`} style={{ backgroundImage: `url('/images/${image}')` }}>
                <span className="text-[13px] relative self-end ml-2">{coin}</span>
            </div>
            <div className="flex justify-between items-center bg-[#171D25] px-2">
                <div className="flex flex-col">
                    <span className="text-[17px]">{price} ₽</span>
                    <span className="text-[#999999] line-through text-[8px]">{altPrice} ₽</span>
                </div>
                <button
                onClick={()=>setCurrentIndex(index)}
                className="border-1 border-[#2D8451] bg-radial from-[#45C47E] from-5% to-[#2D8451] rounded-2xl shadow-lg/30 text-[8px] px-2 py-1"
                >
                    ВЫБРАТЬ
                </button>
            </div>
        </div>
    )
}

export default function Form({ cover, boxes, uniqueCard, instructions }:FormProps) {
    const pathname = usePathname()
    console.log(pathname)
    const [count, setCount] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(1)
    const [system, setSystem] = useState("sbp")
    const [email, setEmail] = useState("")
    const [isUserTerms, setIsUserTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)
    return (
        <div className="w-full flex flex-col gap-4">
            <div className={`w-full h-50 rounded-2xl bg-left bg-no-repeat bg-contain`} style={{ backgroundImage: `url('/images/${cover}')` }} />

            <div className="grid grid-cols-2 w-full h-fit gap-6">
                <div className="grid grid-cols-2 w-full h-fit gap-6">
                    {boxes.map((box, i)=><Card
                                        key={i}
                                        index={i}
                                        currentIndex={currentIndex}
                                        setCurrentIndex={setCurrentIndex}
                                        price={box.price}
                                        image={box.image}
                                        altPrice={box.altPrice}
                                        coin={box.coin}
                                        />
                    )}
                    <div style={{ backgroundImage: `url('/images/${uniqueCard.image}')` }} className={`flex flex-col ${boxes.length % 2 === 0 ? "col-span-2" : "col-span-1" } bg-no-repeat bg-center bg-cover gap-6 border-1 border-white overflow-hidden rounded-2xl h-60 text-white pl-10 pr-5 py-10`}>
                        <h3 className="text-xl">{uniqueCard.title}</h3>
                        <p className="text-[13px]">{uniqueCard.text}</p>
                    </div>
                </div>
                <div className="h-full overflow-hidden flex flex-col">
                    <form onSubmit={(e)=>e.preventDefault()} className="min-h-[768px] flex flex-col gap-2 bg-[#171D25] font-(family-name:--bounded-regular) px-15 pt-15 rounded-xl border-1 border-white overflow-hidden">
                        <span className="text-lg">Товар</span>
                        <InputNumber count={count} setCount={setCount} value={boxes[currentIndex].coin} image={boxes[currentIndex].image} />
                        <div className="flex gap-6 w-full h-20 mt-4">
                            <PaymentSystems
                            systems={[
                                {
                                    title: "sbp",
                                    percent: 8,
                                    image: <Icon type="sbp" width={80} height={50} />
                                },
                                {
                                    title: "crypto",
                                    percent: 5,
                                    image: <Icon type="crypto" width={90} height={60} />
                                },
                                {
                                    title: "sbp+",
                                    percent: 10,
                                    image: <Icon type="sbp" width={80} height={50} />
                                }
                            ]}
                            system={system}
                            setSystem={setSystem}
                            />
                        </div>
                        <span className="text-lg mt-2">E-mail</span>
                        <Input type="email" placeholder="Ваш E-mail" value={email} setValue={setEmail} />
                        <button className="!font-(family-name:--manrope-medium) mt-5 w-full h-25 bg-radial from-[#45C47E] from-40% to-[#2D8451] rounded-2xl text-xl shadow-lg/30">
                            <span>
                                Купить {boxes[currentIndex].coin.split(" ")[1]}<br />{boxes[currentIndex].price * count} ₽
                            </span>
                        </button>
                        <div className="mt-4 flex flex-col gap-2">
                            <Checkbox checked={isUserTerms} setChecked={setIsUserTerms}>
                                <span className="!font-(family-name:--manrope-regular)">
                                    Я согласен с условиями <Link href={""} className="underline">Пользовательского соглашения</Link>.
                                </span>
                            </Checkbox>
                            <Checkbox checked={isPrivacy} setChecked={setIsPrivacy}>
                                <span className="!font-(family-name:--manrope-regular)">
                                    Я согласен с условиями <Link href={""} className="underline">Политики конфиденциальности</Link>.
                                </span>
                            </Checkbox>
                        </div>
                        <span className="text-lg mt-2">Инструкция</span>
                        <ol className="!font-(family-name:--manrope-regular) ml-5">
                            {instructions.map((item, i)=><li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                        </ol>
                    </form>
                    {pathname === "/valorant" ?
                    <div className="h-full w-full flex justify-center items-center overflow-hidden">
                        <div className="relative h-full w-[70%] flex justify-center items-center">
                            <div className="bg-radial blur-2xl from-[#46F9D7] to-60% to-[#15B5ED00] rounded-full w-full h-[45%] opacity-20" />
                            <Image
                            fill
                            style={{ objectFit: "contain" }}
                            src="/images/valorant_girl.png"
                            alt="valorant girl"
                            />
                        </div>
                    </div>
                    :
                    <></>
                    }
                </div>
            </div>
        </div>
    )
}