"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputNumber from "./InputNumber";
import PaymentSystems from "./PaymentSystems";
import Icon from "./Icon";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Link from "next/link";
import Select from "./Select";
import Image from "next/image";
import { VouchersBatch, VouchersResponse } from "@/typings";
import { redirect, RedirectType, usePathname } from "next/navigation";

type Box = {
    id: number;
    coin: string;
    image: string;
    price: number;
    altPrice?: number;
}

type UniqueCard = {
    title: string;
    text: string[];
    image: string;
}

type CardProps = {
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>
    index: number;
    isTopup?: boolean;
    disabled: boolean;
    callback?: ()=>void;
} & Omit<Box, "id">

interface FormProps {
    cover: string;
    boxes: Omit<Box, "altPrice">[];
    uniqueCard: UniqueCard;
    instructions: string[][];
    type: "vauchers"|"topup"|"all";
    products: { id: number; name: string, price: number; region: string; inStock?: boolean; image?: string }[];
    prefix: string;
}

function Card({ altPrice, price, coin, image, index, currentIndex, setCurrentIndex, isTopup, disabled, callback }:CardProps) {
    if (!coin) return <div />
    return (
        <div className={`w-full cursor-pointer border-1 border-(--border) ${isTopup ? "h-36" : "h-60"} ${currentIndex !== index ? "" : "shadow-[3px_-3px_5px_0_#46F9D7,-3px_-3px_5px_0px_#46F9D7,3px_3px_5px_0_#15B5ED,-3px_3px_5px_0_#15B5ED]"} grid grid-rows-[4fr_1fr] overflow-hidden rounded-2xl font-(family-name:--bounded-regular)`} onClick={()=>{ if(!disabled) setCurrentIndex(index); if (callback) callback()}}>
            <div className={`relative flex bg-center bg-no-repeat bg-cover w-full h-full`} style={{ backgroundImage: `url('/images/${image}')` }}>
                {!isTopup && <span className={`z-2 relative text-[13px] relative self-end ml-3 ${disabled ? "text-[#717274]" : ""}`}>{coin}</span>}
                <div className="absolute bg-linear-to-b from-[#00000000] to-[#0E131E] left-0 bottom-0 w-full h-8" />
            </div>
            <div className="flex justify-between items-center bg-[#171D25] px-3">
                <div className="flex flex-col gap-0">
                    <span className={`${isTopup ? "text-[12px]" : "text-[17px]"} ${disabled ? "text-[#717274]" : ""}`}>{isTopup ? coin : price + " ₽"}</span>
                    {!isTopup && <span className={`text-[#999999] line-through text-[10px] relative -top-1.5 ${disabled ? "text-[#717274]" : ""}`}>{altPrice?.toFixed(0)} ₽</span>}
                </div>
                <button
                className={`${isTopup ? "text-[10px] py-0" : "text-[8px] py-1" } ${disabled ? "bg-[#171D25] border-[#000000]" : "border-[#2D8451] bg-radial"} min-w-[55px] border-1 from-[#45C47E] from-5% to-[#2D8451] rounded-2xl shadow-lg/30 px-2`}
                >
                    {isTopup ? price + " ₽" : "ВЫБРАТЬ"}
                </button>
            </div>
        </div>
    )
}

function UniqueCard({ image, title, text, length=0 }:Omit<UniqueCard, "text"> & { length?: number, text: string }) {
    return (
        <div style={{ backgroundImage: `url('/images/${image}')` }} className={`flex flex-col ${length % 2 === 0 ? "col-span-2" : "col-span-1" } bg-no-repeat bg-center bg-cover gap-6 border-1 border-(--border) overflow-hidden rounded-2xl h-60 text-white pl-8 pr-5 pt-10`}>
            <h3 className="text-xl">{title}</h3>
            <p className="text-[13px]">{text}</p>
        </div>
    )
}

export default function Form({ cover, boxes, uniqueCard, instructions, type, products, prefix }:FormProps) {
    const pathname = usePathname()
    const [isTopup, setIsTopup] = useState(type === "topup")
    const [count, setCount] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(1)
    const [system, setSystem] = useState("Sbp")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")
    const [region, setRegion] = useState("")
    const [product, setProduct] = useState("")
    const [password, setPassword] = useState("")
    const [nick, setNick] = useState("")
    const [backup, setBackup] = useState("")
    const [isUserTerms, setIsUserTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)
    const [productsData, setProductsData] = useState<VouchersBatch[]>()
    const [boxesData, setBoxesData] = useState<VouchersBatch[]>()
    const coinArray = boxes[currentIndex]?.coin?.split(" ") || [""]
    const getPureName = (prod: string) => prod.replaceAll(":", "").replaceAll(prefix, "")
    const productPrice = products.find(prod=>prod.name === product)?.price
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const buy = async () =>{
        if (isPrivacy && isUserTerms && boxesData) {
            const res = await fetch("https://api.steamzapravka.io/vouchers", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    productId: boxes[currentIndex].id,
                    email,
                    paymentMethod: system.toUpperCase()
                })
            })
            if (res.ok) {
                const data: VouchersResponse = await res.json()
                console.log(data.amountToBeSoldFor)
                if (data.inStock && (data.amountToBeSoldFor === boxesData[currentIndex].priceInRub || data.amountToBeSoldFor === productPrice))
                    redirect(data.paymentUrl, RedirectType.push)
            }
        }
    }

    useEffect(()=>{
        const getProductsData = async () => {
            // if (products.length) {
            //     const res = await fetch("https://api.steamzapravka.io/vouchers/batch", {
            //         method: "POST",
            //         headers: {
            //             'Content-Type': 'application/json;charset=utf-8'
            //         },
            //         body: JSON.stringify({
            //             productIds: products.map(prod=>prod.id)
            //         })
            //     })

            //     if (res.ok) {
            //         const data: VouchersBatch[] = await res.json()
            //         console.log(data)
            //         setProductsData(data.filter(d=>d.name !== "NOT_FOUND"))
            //     }
            // }

            if (boxes.length) {
                const res = await fetch("https://api.steamzapravka.io/vouchers/batch", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        productIds: boxes.map(box=>box.id)
                    })
                })

                if (res.ok) {
                    const data: VouchersBatch[] = await res.json()
                    setBoxesData(data)
                }
            }
        }

        getProductsData()
    }, [])

    return (
        <div className="w-full flex flex-col gap-4">
            <div className={`w-full h-50 rounded-2xl bg-left bg-no-repeat bg-contain`} style={{ backgroundImage: `url('/images/${cover}')` }} />

            <div className="grid grid-cols-[60%_40%] w-full h-fit">
                {!isTopup ?
                <div className="grid grid-cols-2 w-full h-fit gap-6">
                    {boxesData && boxes.map((box, i)=>
                                        <Card
                                        key={i}
                                        index={i}
                                        currentIndex={currentIndex}
                                        setCurrentIndex={setCurrentIndex}
                                        price={boxesData[i].priceInRub}
                                        image={box.image}
                                        altPrice={boxesData[i].priceInRub * 0.8}
                                        coin={box.coin}
                                        disabled={!boxesData[i].inStock}
                                        />
                    )}
                    <UniqueCard title={uniqueCard.title} text={uniqueCard.text[Number(isTopup)]} image={uniqueCard.image} length={boxes.length} />
                </div>
                :
                <div className="flex flex-col gap-5">
                    <div className="relative flex flex-col gap-15 bg-(--section-back) border-1 border-(--border) rounded-3xl py-10 px-6">
                        <Image src="/images/gamepad.png" width={400} height={200} alt="gamepad" className="absolute top-7 -right-2" />
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-5">
                            {pathname === "roblox" ?
                            <>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">E-mail/Login</span>
                                <Input placeholder="Ваш E-mail/Login" value={email} setValue={setEmail} isWarning={email === ""} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">Пароль</span>
                                <Input placeholder="Ваш пароль" value={password} setValue={setPassword} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">Nikname в игре</span>
                                <Input placeholder="Ваш nikname" value={nick} setValue={setNick} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">Backup code</span>
                                <Input placeholder="Ваш Backup code" value={backup} setValue={setBackup} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">Регион</span>
                                <Select placeholder="Любой" value={region} setValue={setRegion} options={[...new Set(products.map(prod=>prod.region))]} />
                            </div>
                            </>
                            :
                            <>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">ID от аккаунта</span>
                                <Input placeholder="Ваш ID" value={id} setValue={setId} isWarning={id === ""} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">Регион</span>
                                <Select placeholder="Любой" value={region} setValue={setRegion} options={[...new Set(products.map(prod=>prod.region))]} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lg">Выберите товар из полного списка</span>
                                <Select placeholder="Выберите товар " value={product} setValue={setProduct} options={products.filter(prod=>prod.region === region).map(prod=>prod.name)} />
                            </div>
                            </>
                            }
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg">Быстрый выбор</span>
                            <div className="flex gap-7 w-full justify-between">
                                {products.sort((a, b) => a.price - b.price).slice(0, 3).map((prod, i)=>
                                <Card
                                key={i}
                                index={i}
                                isTopup={isTopup}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                price={prod.price}
                                image={prod.image || boxes[i]?.image}
                                coin={getPureName(prod.name)}
                                disabled={prod.inStock || false}
                                callback={()=>setProduct("")}
                                />)}
                            </div>
                        </div>
                    </div>
                    <UniqueCard title={uniqueCard.title} text={uniqueCard.text[Number(isTopup)]} image={uniqueCard.image} />
                </div>
                }
                <div className="w-full h-full overflow-hidden flex flex-col pl-6">
                    <form onSubmit={(e)=>e.preventDefault()} className="w-full min-h-[768px] flex flex-col gap-2 bg-(--section-back) font-(family-name:--bounded-regular) px-15 pt-15 rounded-3xl border-1 border-(--border) overflow-hidden">
                     {type === "all" ?
                        <div className="flex gap-5 justify-between">
                            <div className={`relative w-fit`}>
                                <div className={`absolute transition-all duration-100 w-12 h-9 rounded-full bg-(--green) blur-md -top-1 ${isTopup ? "hidden" : ""}`} />
                                <button onClick={()=>setIsTopup(false)} style={{ backgroundImage: isTopup ? "url('/images/gift-btn-unactive.png')" : "url('/images/gift-btn-active.png')" }} className={`w-[198px] relative z-1 ${isTopup ? "bg-right text-[#6D6D6D]" : "bg-left"} bg-no-repeat bg-cover !font-(family-name:--manrope-regular) text-[16px] h-[44px] bg-(--black) rounded-full px-4 py-2`}>Подарочная карта</button>
                            </div>
                            <div className={`relative w-fit`}>
                                <div className={`absolute transition-all duration-100 w-12 h-9 rounded-full bg-(--blue) blur-md right-0 -top-1 ${isTopup ? "" : "hidden"}`} />
                                <button onClick={()=>setIsTopup(true)} style={{ backgroundImage: isTopup ? "url('/images/topup-btn-active.png')" : "url('/images/topup-btn-unactive.png')" }} className={`w-[198px] relative z-1 ${isTopup ? "bg-right" : "bg-left text-[#6D6D6D]"} bg-no-repeat bg-cover !font-(family-name:--manrope-regular) text-[16px] h-[44px] bg-(--black) rounded-full px-4 py-2`}>Прямое пополнение</button>
                            </div>
                        </div>
                     :
                     <></>
                     }
                        <span className="text-lg">Товар</span>
                        <InputNumber withoutCounter count={count} setCount={setCount} value={isTopup ? getPureName(product || products[currentIndex].name) : boxes[currentIndex]?.coin} image={products.find(prod=>prod.name === product)?.image || products[currentIndex]?.image || boxes[currentIndex]?.image} />
                        <div className="flex gap-3 w-full h-20 mt-4">
                            <PaymentSystems
                            systems={[
                                {
                                    title: "Sbp",
                                    percent: 8,
                                    image: <Icon type="sbp" width={80} height={50} />
                                },
                                {
                                    title: "crypto",
                                    percent: 5,
                                    image: <Icon type="crypto" width={90} height={60} />
                                }
                            ]}
                            system={system}
                            setSystem={setSystem}
                            />
                        </div>
                        {!isTopup &&
                        <>
                        <span className="text-lg mt-2">E-mail</span>
                        <Input isWarning={!!email && !emailRegex.test(email)} type="email" placeholder="Ваш E-mail" value={email} setValue={setEmail} />
                        </>}
                        <button onClick={()=>buy()} className="!font-(family-name:--manrope-medium) mt-5 w-full h-25 btn !rounded-3xl text-xl">
                            <span>
                                Купить {isTopup ? getPureName(product || products[currentIndex].name) : ((Number(coinArray[coinArray.length-2]) ? "" : coinArray[coinArray.length-2] + " ") + coinArray[coinArray.length-1])}<br />{isTopup ? (productPrice || products[currentIndex].price) : (boxesData ? boxesData[currentIndex].priceInRub : boxes[currentIndex]?.price) * count} ₽
                            </span>
                        </button>
                        <div className="mt-4 flex flex-col gap-2">
                            <Checkbox checked={isUserTerms} setChecked={setIsUserTerms}>
                                <span className="!font-(family-name:--manrope-regular) text-[12px]">
                                    Я согласен с условиями <Link href={""} className="underline">Пользовательского соглашения</Link>.
                                </span>
                            </Checkbox>
                            <Checkbox checked={isPrivacy} setChecked={setIsPrivacy}>
                                <span className="!font-(family-name:--manrope-regular) text-[12px]">
                                    Я согласен с условиями <Link href={""} className="underline">Политики конфиденциальности</Link>.
                                </span>
                            </Checkbox>
                        </div>
                        <span className="text-lg mt-2">Инструкция</span>
                        <ol className={`!font-(family-name:--manrope-regular) ml-5 ${(pathname === "/pubg" || pathname === "/freefire") && isTopup ? "text-[16px]" : "text-[13px]"}`}>
                            {instructions[Number(isTopup)].map((item, i)=><li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                        </ol>
                    </form>
                </div>
            </div>
        </div>
    )
}