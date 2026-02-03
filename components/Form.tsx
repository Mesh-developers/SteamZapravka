"use client"

import { Dispatch, SetStateAction, useState } from "react";
import InputNumber from "./InputNumber";
import PaymentSystems from "./PaymentSystems";
import Icon from "./Icon";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Link from "next/link";
import Select from "./Select";
import Image from "next/image";
import { PaymentSystem, VouchersResponse } from "@/typings";
import { redirect, RedirectType, usePathname } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { initialOrder, ORDER_STORAGE_KEY } from "@/constants";
import { replaceWords, truncateString, validateSteamUsername } from "@/utils";
import useData from "@/hooks/useData";
import Skeleton from "react-loading-skeleton";
import Modal from "./Modal";

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
    prefix: string|string[];
    isService?: boolean
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
                    <span className={`${isTopup ? "text-[11px]" : "text-[17px]"} ${disabled ? "text-[#717274]" : ""}`}>{truncateString(isTopup ? coin : price + " ₽", 20)}</span>
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

function CardSkeleton({ isTopup = false }: { isTopup: boolean }) {
  return (
    <div
      className={`w-full border-1 border-gray-800 ${isTopup ? "h-36" : "h-60"} grid grid-rows-[4fr_1fr] overflow-hidden rounded-2xl font-(family-name:--bounded-regular)`}
    >
      {/* Верхняя часть с изображением */}
      <div className="relative flex bg-gray-900 w-full h-full">
        {!isTopup && (
          <div className="z-1 relative self-end ml-3 mb-2">
            <Skeleton
              width={60}
              height={16}
              baseColor="#1a202c"
              highlightColor="#2d3748"
            />
          </div>
        )}

        {/* Градиентная подложка (имитация оригинала) */}
        <div className="absolute bg-linear-to-b from-[#00000000] to-[#0E131E] left-0 bottom-0 w-full h-8" />
      </div>

      {/* Нижняя часть с информацией */}
      <div className="flex justify-between items-center bg-[#171D25] px-3 py-2">
        <div className="flex flex-col gap-1 w-2/3">
          {/* Основная цена/название */}
          <Skeleton
            width={isTopup ? "80%" : "60%"}
            height={isTopup ? 14 : 20}
            baseColor="#1a202c"
            highlightColor="#2d3748"
          />

          {/* Зачеркнутая цена (только для !isTopup) */}
          {!isTopup && (
            <Skeleton
              width="40%"
              height={10}
              baseColor="#1a202c"
              highlightColor="#2d3748"
              className="relative -top-1"
            />
          )}
        </div>

        {/* Кнопка */}
        <div className="w-1/3 flex justify-end">
          <Skeleton
            width={55}
            height={isTopup ? 24 : 28}
            borderRadius={16}
            baseColor="#1a202c"
            highlightColor="#2d3748"
          />
        </div>
      </div>
    </div>
  )
}

function UniqueCard({ image, title, text, length=0 }:Omit<UniqueCard, "text"> & { length?: number, text: string }) {
    return (
        <div style={{ backgroundImage: `url('/images/${image}')` }} className={`flex flex-col ${length % 2 === 0 ? "col-span-2" : "col-span-1" } bg-no-repeat bg-center bg-cover gap-6 border-1 border-(--border) overflow-hidden rounded-2xl h-60 text-white pl-8 pr-5 pt-10`}>
            <h3 className="text-xl">{title}</h3>
            <p className="text-[14px]">{text}</p>
        </div>
    )
}

export default function Form({ cover, boxes, uniqueCard, instructions, type, products, prefix, isService }:FormProps) {
    const pathname = usePathname()
    const isRoblox = pathname === "/roblox"
    const isLegends = pathname === "/mobile-legends"
    const [, setOrder] = useLocalStorage(ORDER_STORAGE_KEY, initialOrder)
    const [isTopup, setIsTopup] = useState(type === "topup")
    const [count, setCount] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(1)
    const [system, setSystem] = useState<PaymentSystem>("SBP")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")
    const [serverId, setServerId] = useState("")
    const [region, setRegion] = useState("")
    const [product, setProduct] = useState("")
    const [password, setPassword] = useState("")
    const [nick, setNick] = useState("")
    const [backup, setBackup] = useState("")
    const [isUserTerms, setIsUserTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const coinArray = boxes[currentIndex]?.coin?.split(" ") || [""]
    const getPureName = (prod: string) => Array.isArray(prefix) ? replaceWords(prod.replaceAll(":", ""), new Map(prefix.map(pre=>[pre, ""]))) : prod.replaceAll(":", "").replaceAll(prefix, "")
    const productPrice = products.find(prod=>prod.name === product)?.price
    const { data: productsData } = useData(
    [pathname, isTopup],
    isTopup ? products.map(prod=>prod.id) : boxes.map(box=>box.id),
    (data)=>isTopup ? data.filter(d=>d.inStock) : data,
    isService || !isTopup)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const buyBox = async () =>{
        if (isPrivacy && isUserTerms && productsData) {
            const res = await fetch("https://api.steamzapravka.io/vouchers", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    productId: boxes[currentIndex].id,
                    email,
                    paymentMethod: system
                })
            })
            if (res.ok) {
                const data: VouchersResponse = await res.json()

                if (data.inStock && (data.amountToBeSoldFor === productsData[currentIndex].priceInRub || data.amountToBeSoldFor === productPrice)) {
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

    const buyProduct = async () => {
        if (isPrivacy && isUserTerms && productsData) {
            const body = {
                productId: productsData[currentIndex].productId,
                accountId: id,
                region: region === "Любой" ? "Any" : region,
                paymentMethod: system
            }
            const {region: reg, accountId, ...robloxBody} = body
            const res = await fetch(isRoblox ? "https://api.steamzapravka.io/topup/roblox " : (isService ? "https://api.steamzapravka.io/vouchers" : "https://api.steamzapravka.io/topup"), {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(isRoblox ?
                {
                    ...robloxBody,
                    loginOrEmail: email,
                    password,
                    nickname: nick,
                    backupCode: backup,

                }
                :
                (isService ?
                {
                    ...robloxBody,
                    email
                }
                :
                (isLegends ?
                {
                    ...robloxBody,
                    region: reg,
                    accountId,
                    serverId
                }
                :
                body
                )))
            })

            if (res.ok) {
                const data: VouchersResponse = await res.json()
                if (data.inStock && (data.amountToBeSoldFor === productsData[currentIndex].priceInRub || data.amountToBeSoldFor === productPrice)) {
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
        <div className="w-full flex flex-col gap-4">
            <div className={`w-full h-50 rounded-2xl bg-left bg-no-repeat bg-contain max-[481px]:bg-cover max-[481px]:w-[100%] max-[481px]:h-30`} style={{ backgroundImage: `url('/images/${cover}')` }} />
            {type === "all" ?
                <div className="hidden max-[481px]:block">
                    <div className="grid grid-cols-2 gap-5 justify-between">
                        <div className={`relative w-full`}>
                            <div className={`absolute transition-all duration-100 w-12 h-9 rounded-full bg-(--green) blur-md -top-1 ${isTopup ? "hidden" : ""}`} />
                            <button onClick={()=>setIsTopup(false)} style={{ backgroundImage: isTopup ? "url('/images/gift-btn-unactive.png')" : "url('/images/gift-btn-active.png')" }} className={`w-full relative z-1 ${isTopup ? "bg-right text-[#6D6D6D]" : "bg-left"} bg-no-repeat bg-cover !font-(family-name:--manrope-regular) text-[13px] h-[44px] bg-(--black) rounded-full px-4 py-2`}>Подарочная карта</button>
                        </div>
                        <div className={`relative w-full`}>
                            <div className={`absolute transition-all duration-100 w-12 h-9 rounded-full bg-(--blue) blur-md right-0 -top-1 ${isTopup ? "" : "hidden"}`} />
                            <button onClick={()=>setIsTopup(true)} style={{ backgroundImage: isTopup ? "url('/images/topup-btn-active.png')" : "url('/images/topup-btn-unactive.png')" }} className={`w-full relative z-1 ${isTopup ? "bg-right" : "bg-left text-[#6D6D6D]"} bg-no-repeat bg-cover !font-(family-name:--manrope-regular) text-[13px] h-[44px] bg-(--black) rounded-full px-4 py-2`}>Прямое пополнение</button>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
            <div className="grid grid-cols-[60%_40%] max-[481px]:grid-cols-1 w-full h-fit">
                {!isTopup ?
                <div className="grid grid-cols-2 max-[481px]:grid-cols-1 w-full h-fit gap-6">
                    {productsData ?
                    boxes.map((box, i)=>
                    <Card
                    key={i}
                    index={i}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    price={productsData[i]?.priceInRub || box.price}
                    image={box.image}
                    altPrice={(productsData[i]?.priceInRub || box.price) * 0.8}
                    coin={box.coin}
                    disabled={!productsData[i]?.inStock}
                    callback={()=>setIsOpenForm(true)}
                    />)
                    :
                    boxes.map((_, i)=>
                    <CardSkeleton key={i} isTopup={isTopup} />
                    )}
                    <UniqueCard title={uniqueCard.title} text={uniqueCard.text[Number(isTopup)]} image={uniqueCard.image} length={boxes.length} />
                </div>
                :
                <div className="flex flex-col gap-5">
                    <div className="relative flex flex-col gap-15 bg-(--section-back) border-1 border-(--border) rounded-3xl py-10 px-6">
                        {isService ?
                        <svg width="349" height="297" viewBox="0 0 249 197" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[54%] top-[16%]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6477 13.2037C26.2879 30.0759 15.1999 60.6522 22.3832 88.3835L24.0238 94.7167L18.6373 99.6081C10.5387 106.961 6.51005 113.172 3.07212 123.6C-0.737527 135.157 -0.984619 144.689 2.22455 156.295C9.65403 183.163 36.5621 200.369 64.7027 196.244C68.3463 195.71 84.8722 188.215 147.985 158.476L226.723 121.374L231.518 116.543C245.051 102.909 250.901 85.1495 247.954 66.646C246.419 57.0088 239.85 44.0065 232.596 36.25C219.369 22.1052 199.181 15.3138 180.689 18.7883C175.551 19.7538 171.656 21.2999 162.936 25.8329L151.764 31.6393L148.283 27.0648C146.368 24.5493 141.103 19.5231 136.582 15.8952C118.258 1.19133 92.3171 -3.84002 70.2537 3.03026C61.0709 5.89073 56.9716 7.91399 49.6477 13.2037ZM77.7867 11.5408C96.6758 7.62066 115.814 11.8156 129.789 22.9381C136.432 28.2248 144.044 36.9249 146.399 41.9231C148.793 47.0044 151.2 46.9041 157.135 41.4769C164.078 35.1278 170.796 31.424 178.864 29.4998C203.712 23.5725 229.613 38.2148 236.433 62.0456C241.88 81.0791 234.958 102.682 219.942 113.521C217.505 115.28 205.216 121.57 192.635 127.498L169.757 138.278L166.138 130.597C164.147 126.373 162.743 122.81 163.017 122.681C163.291 122.552 165.489 122.759 167.899 123.142C171.9 123.776 173.124 123.44 181.944 119.284L191.605 114.732L194.465 116.679C202.554 122.186 213.461 116.12 213.481 106.104C213.491 100.862 210.803 97.0183 205.701 94.9805C198.335 92.0377 191.67 95.5891 189.475 103.629L188.102 108.653L179.519 112.697C171.381 116.531 170.696 116.685 166.353 115.66C163.833 115.063 161.191 114.602 160.483 114.633C159.744 114.667 160.805 110.614 162.964 105.149L166.735 95.6065L184.119 87.3765L201.503 79.1473L206.638 81.1448C211.316 82.9638 212.183 82.9493 216.359 80.9815C220.357 79.0979 221.181 78.2158 222.794 74.0998C224.574 69.5562 224.539 69.198 221.879 64.5834C218.631 58.9491 214.787 56.9482 208.904 57.8297C205.693 58.3113 204.655 58.9353 202.412 61.7359C200.942 63.5691 199.545 66.7576 199.305 68.821L198.869 72.5736L179.923 81.5429L160.976 90.5135L157.209 101.123C155.138 106.958 153.02 111.915 152.505 112.138C151.076 112.755 145.698 111.135 145.617 110.062C145.577 109.542 149.207 101.098 153.683 91.2998C160.688 75.9622 162.174 73.4186 164.359 73.02C173.402 71.3739 178.626 65.565 177.368 58.5589C175.858 50.1557 167.164 45.634 159.48 49.2547C156.524 50.6479 155.578 51.8411 154.051 56.0999C152.425 60.6409 152.445 61.7876 154.223 65.6815L156.245 70.1048L147.438 89.2939C140.908 103.527 138.19 108.447 136.915 108.346C135.97 108.271 131.719 107.142 127.468 105.84L119.741 103.47L125.699 88.1634C129.764 77.718 132.26 72.6672 133.553 72.2596C134.596 71.9327 136.577 70.5929 137.956 69.2842C145.395 62.2175 141.318 49.6861 131.101 48.2114C124.61 47.2749 117.417 53.0596 117.094 59.4764C116.927 62.7896 120.231 69.5501 122.548 70.6373C124.062 71.3474 123.884 72.7453 121.398 79.6823L118.457 87.8882L108.417 66.5807L98.3766 45.2723L100.148 43.1788C102.382 40.538 103.098 34.2597 101.542 30.9475C98.6328 24.7517 90.8905 21.9419 84.7283 24.8456C73.7803 30.0044 76.7741 47.2189 88.7828 48.1542L92.1274 48.4147L103.467 72.4645L114.807 96.5157L110.939 106.49C105.893 119.509 99.6701 133.847 97.2628 138.006C95.4939 141.061 94.2612 141.828 81.3018 147.934L67.2582 154.551L64.5972 152.511C58.0983 147.531 47.4037 151.581 45.2502 159.839C44.4154 163.04 45.5852 168.189 47.7468 170.831C50.1259 173.739 56.738 175.715 60.6666 174.694C65.2751 173.494 69.1293 168.766 69.5924 163.744L69.9456 159.911L85.4123 152.615C99.3297 146.051 101.065 145.013 102.739 142.25C103.762 140.561 104.903 139.033 105.273 138.855C105.643 138.676 108.533 144.02 111.695 150.73L117.443 162.929L94.4873 173.746C80.9127 180.142 69.3827 185.067 66.2728 185.798C49.3435 189.775 31.3371 183.264 19.4154 168.857C14.5307 162.954 12.8756 159.437 11.1437 151.279C8.42217 138.467 11.2112 124.031 18.2754 114.368C21.9508 109.339 29.3668 102.835 33.8108 100.741C36.7476 99.3568 36.7574 99.298 34.7692 95.0435C31.8071 88.7058 29.9865 78.821 30.0543 69.4422C30.1335 58.4523 35.8065 42.2834 42.5176 33.9154C52.5227 21.4432 63.4375 14.5178 77.7867 11.5408ZM91.0372 30.2181C94.5453 30.8256 97.2007 36.04 95.3039 38.5969C93.1466 41.504 89.6543 42.5908 87.1232 41.1398C83.8983 39.2923 83.4527 37.9419 84.8154 34.1415C86.1768 30.3406 87.3776 29.5837 91.0372 30.2181ZM42.2493 58.5553C40.8232 62.5347 40.8943 63.6331 42.8446 67.7718C44.7948 71.9106 45.5965 72.6648 49.5732 74.0983C53.6163 75.5558 54.6072 75.4809 59.0638 73.381L64.039 71.0366L75.6981 75.7002L87.3567 80.3652L90.1786 86.3538C92.5656 91.4197 93.4467 92.4777 95.8925 93.2169C101.922 95.0394 101.938 94.9348 97.1408 84.755L92.6396 75.2023L79.9154 70.1472L67.1902 65.0926L64.9122 59.0465C62.6768 53.114 62.5457 52.9692 57.941 51.3093C53.7731 49.8068 52.7246 49.8646 48.5584 51.8278C44.4274 53.7743 43.6754 54.5759 42.2493 58.5553ZM55.5728 57.357C58.7634 58.5072 59.8999 60.6033 59.2839 64.1965C58.3728 69.5168 50.5532 70.0962 48.1614 65.0203C47.1454 62.8641 48.8773 58.3033 51.1133 57.2497C52.1054 56.7822 54.1122 56.8305 55.5728 57.357ZM132.498 55.1132C134.911 56.3242 135.749 58.3278 135.196 61.5558C134.315 66.6972 126.641 67.8277 124.432 63.1413C121.963 57.9019 127.358 52.534 132.498 55.1132ZM166.345 54.3654C169.513 54.9133 171.821 59.0062 170.711 62.1056C169.6 65.2045 165.222 66.8873 162.431 65.2871C159.256 63.469 158.653 61.857 159.81 58.2808C160.952 54.7511 162.662 53.7264 166.345 54.3654ZM27.1932 124.806C24.17 128.082 23.4171 134.145 25.4878 138.539C27.1037 141.969 28.1281 142.884 31.8498 144.226C34.2903 145.106 37.5771 145.571 39.156 145.261C43.4791 144.412 48.0479 139.418 48.583 134.958L49.0337 131.199L73.3949 119.678C94.4729 109.708 98.1322 108.22 100.545 108.638C103.187 109.096 103.393 108.952 104.5 105.861L105.669 102.602L101.051 101.825L96.4329 101.049L71.1463 112.964L45.8588 124.88L43.7652 123.103C39.5359 119.515 31.2957 120.362 27.1932 124.806ZM38.7344 127.353C40.9372 128.147 43.2021 133.31 42.2466 135.357C40.8917 138.259 35.5631 139.472 32.8153 137.503C30.622 135.931 30.4108 135.424 30.7981 132.656C31.1179 130.364 31.9936 129.205 34.1854 128.172C35.8107 127.406 37.8581 127.037 38.7344 127.353ZM213.358 64.7268C214.818 65.2533 216.397 66.4974 216.865 67.4914C217.921 69.7316 216.361 74.3546 214.209 75.3687C211.465 76.662 207.35 75.3685 206.157 72.8374C203.761 67.7515 208.121 62.839 213.358 64.7268ZM136.257 115.123L153.363 120.052L158.403 130.653L163.443 141.253L153.973 145.716L144.502 150.179L137.769 135.889L131.036 121.599L127.361 120.363C125.341 119.683 123.406 119.26 123.06 119.423C122.716 119.585 125.978 127.241 130.311 136.436L138.188 153.154L130.973 156.554L123.757 159.954L116.635 144.839L109.512 129.724L112.939 120.061C114.847 114.682 116.983 110.352 117.758 110.295C118.524 110.239 126.849 112.411 136.257 115.123ZM58.8246 156.712C61.8353 157.298 64.2428 162.407 62.7779 165.102C60.2573 169.734 54.4723 169.641 52.2542 164.934C50.0362 160.227 53.6479 155.707 58.8246 156.712ZM203.433 101.014C209.441 103.181 207.27 112.979 200.98 112.089C197.134 111.545 195.137 109.124 195.629 105.604C196.107 102.18 200.12 99.8204 203.433 101.014Z" fill="#0E151F"/>
                        </svg>
                        :
                        <Image src={`/images/gamepad.png`} width={400} height={200} alt="gamepad" className="absolute top-7 -right-2" loading="eager" />
                        }
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-5">
                            {isRoblox ?
                            <>
                            <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">E-mail/Login</span>
                                <Input placeholder="Ваш E-mail/Login" value={email} setValue={setEmail} isWarning={email === ""} />
                            </div>
                            <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">Пароль</span>
                                <Input placeholder="Ваш пароль" value={password} setValue={setPassword} />
                            </div>
                            <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">Nikname в игре</span>
                                <Input placeholder="Ваш nikname" value={nick} setValue={setNick} />
                            </div>
                            <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">Backup code</span>
                                <Input placeholder="Ваш Backup code" value={backup} setValue={setBackup} />
                            </div>
                            {/* <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">Регион</span>
                                <Select placeholder="Любой" value={region} setValue={setRegion} options={[...new Set(products.map(prod=>prod.region))]} />
                            </div> */}
                            </>
                            :
                            <>
                            <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">{isService ? "E-mail"  : (isLegends ? "UID от аккаунта" : "ID от аккаунта") }</span>
                                <Input placeholder={isService ? "Ваш E-mail" : (isLegends ? "Ваш UID" : "Ваш ID")} value={isService ? email : id} setValue={isService ? setEmail : setId} isWarning={isService ? email === "" : id === ""} filterHandler={!isService && !isLegends ? (str)=>validateSteamUsername(str) : undefined} />
                            </div>
                            {isLegends ?
                            <div className="flex flex-col gap-1 relative z-1">
                                <span className="text-lg">Zone ID от аккаунта</span>
                                <Input placeholder="Ваш Zone ID" value={serverId} setValue={setServerId} isWarning={serverId === ""} />
                            </div>
                            :
                            <></>
                            }
                            <div className="flex flex-col gap-1 relative">
                                <span className="text-lg">Регион</span>
                                <Select placeholder="Любой" value={region} setValue={setRegion} options={[...new Set(products.map(prod=>prod.region))]} />
                            </div>
                            <div className="flex flex-col gap-1 relative">
                                <span className="text-lg">Выберите товар из полного списка</span>
                                <Select
                                placeholder="Выберите товар"
                                value={truncateString(product, 30)}
                                setValue={setProduct}
                                options={products.filter(prod=>prod.region === region && productsData?.find(p=>p.productId === prod.id)?.inStock).map(prod=>prod.name)}
                                callback={(opt: string)=>setCurrentIndex(Number(productsData?.findIndex(p=>p.name === opt)))}
                                />
                            </div>
                            </>
                            }
                        </div>
                        <div className="flex flex-col gap-1 z-1">
                            <span className="text-lg">Быстрый выбор</span>
                            <div className="flex gap-7 w-full justify-between">
                                {productsData ?
                                productsData.sort((a, b) => a.priceInRub - b.priceInRub).slice(0, 3).map((prod, i)=>
                                <Card
                                key={i}
                                index={i}
                                isTopup={isTopup}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                price={prod.priceInRub || 0}
                                image={products[i].image || boxes[i]?.image}
                                coin={getPureName(prod.name)}
                                disabled={!prod.inStock || false}
                                callback={()=>setProduct("")}
                                />)
                                :
                                products.slice(0, 3).map((_, i)=>
                                <CardSkeleton key={i} isTopup={isTopup} />)
                                }
                            </div>
                        </div>
                    </div>
                    <UniqueCard title={uniqueCard.title} text={uniqueCard.text[Number(isTopup)]} image={uniqueCard.image} />
                </div>
                }
                <div className="w-full h-full overflow-hidden flex flex-col pl-6 max-[481px]:hidden">
                    <form onSubmit={(e)=>e.preventDefault()} className="w-full min-h-[768px] h-full flex flex-col gap-2 bg-(--section-back) font-(family-name:--bounded-regular) min-[1399px]:!px-7 px-10 pt-8 rounded-3xl border-1 border-(--border) overflow-hidden">
                     {type === "all" ?
                        <div className="flex gap-5 justify-between">
                            <div className={`relative w-fit`}>
                                <div className={`absolute transition-all duration-100 w-12 h-9 rounded-full bg-(--green) blur-md -top-1 ${isTopup ? "hidden" : ""}`} />
                                <button onClick={()=>setIsTopup(false)} style={{ backgroundImage: isTopup ? "url('/images/gift-btn-unactive.png')" : "url('/images/gift-btn-active.png')" }} className={`w-[198px] relative z-1 ${isTopup ? "bg-right text-[#6D6D6D]" : "bg-left"} bg-no-repeat bg-cover !font-(family-name:--manrope-regular) text-[16px] h-[44px] bg-(--black) rounded-full px-4 py-2`}>Подарочная карта</button>
                            </div>
                            <div className={`relative w-fit`}>
                                <div className={`absolute transition-all duration-100 w-12 h-9 rounded-full bg-(--blue) blur-md right-0 -top-1 ${isTopup ? "" : "hidden"}`} />
                                <button onClick={()=>setIsTopup(true)} style={{ backgroundImage: isTopup ? "url('/images/topup-btn-active.png')" : "url('/images/topup-btn-unactive.png')" }} className={`w-[198px] min-[1399px]:!w-[185px] min-[1399px]:!text-[14px] relative z-1 ${isTopup ? "bg-right" : "bg-left text-[#6D6D6D]"} bg-no-repeat bg-cover !font-(family-name:--manrope-regular) text-[16px] h-[44px] bg-(--black) rounded-full px-4 py-2`}>Прямое пополнение</button>
                            </div>
                        </div>
                     :
                     <></>
                     }
                        <span className={`text-lg ${type === "all" ? "mt-4" : "mt-2"}`}>Товар</span>
                        <InputNumber withoutCounter count={count} setCount={setCount} value={truncateString(isTopup && productsData ? getPureName(product || productsData[currentIndex]?.name || "") : boxes[currentIndex]?.coin, 28)} image={products.find(prod=>prod.name === product)?.image || products[currentIndex]?.image || boxes[currentIndex]?.image || boxes[boxes.length]?.image || products[2]?.image || ""} />
                        <div className="flex gap-3 w-full h-20 mt-4">
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
                        {!isTopup &&
                        <>
                        <span className="text-lg mt-2">E-mail</span>
                        <Input isWarning={!!email && !emailRegex.test(email)} type="email" placeholder="Ваш E-mail" value={email} setValue={setEmail} />
                        </>}
                        <button onClick={()=>isTopup ? buyProduct() : buyBox()} className="!font-(family-name:--manrope-medium) mt-5 w-full h-25 btn !rounded-3xl text-xl">
                            <span>
                                Купить {truncateString(isTopup && productsData ? getPureName(product || productsData[currentIndex]?.name || "") : ((Number(coinArray[coinArray.length-2]) ? "" : coinArray[coinArray.length-2] + " ") + coinArray[coinArray.length-1]), 28)}<br />{isTopup && productsData ? (productPrice || productsData[currentIndex]?.priceInRub) : (productsData ? productsData[currentIndex]?.priceInRub : boxes[currentIndex]?.price) * count} ₽
                            </span>
                        </button>
                        <div className="mt-4 flex flex-col gap-2">
                            <Checkbox checked={isUserTerms} setChecked={setIsUserTerms}>
                                <span className="!font-(family-name:--manrope-regular) text-[12px]">
                                    Я согласен с условиями <Link href={"/user-agreement.pdf"} className="underline">Пользовательского соглашения</Link>.
                                </span>
                            </Checkbox>
                            <Checkbox checked={isPrivacy} setChecked={setIsPrivacy}>
                                <span className="!font-(family-name:--manrope-regular) text-[12px]">
                                    Я согласен с условиями <Link href={"/policy-of-confidentiality.pdf"} className="underline">Политики конфиденциальности</Link>.
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
            <Modal open={isOpenForm} onClose={()=>setIsOpenForm(!isOpenForm)}>
                <form onSubmit={(e)=>e.preventDefault()} className="w-[90%] h-185 flex flex-col gap-2 bg-(--section-back) font-(family-name:--bounded-regular) px-5 pb-5 rounded-3xl border-1 border-(--border) overflow-hidden mx-5">
                    <div className="w-full grid justify-items-end relative top-5">
                        <svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setIsOpenForm(!isOpenForm)}>
                        <g clip-path="url(#clip0_1965_4933)">
                        <path d="M15.7863 1.21484L1.21484 15.7863M1.21484 1.21484L15.7863 15.7863" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1965_4933">
                        <rect width="19" height="19" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <span className={`text-xl`}>Товар</span>
                    <InputNumber withoutCounter count={count} setCount={setCount} value={truncateString(isTopup && productsData ? getPureName(product || productsData[currentIndex]?.name || "") : boxes[currentIndex]?.coin, 28)} image={products.find(prod=>prod.name === product)?.image || products[currentIndex]?.image || boxes[currentIndex]?.image || boxes[boxes.length]?.image || products[2]?.image || ""} />
                    <div className="flex gap-3 w-full h-20 mt-2">
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
                    {!isTopup &&
                    <>
                    <span className="text-xl mt-2">E-mail</span>
                    <Input isWarning={!!email && !emailRegex.test(email)} type="email" placeholder="Ваш E-mail" value={email} setValue={setEmail} />
                    </>}
                    <button onClick={()=>isTopup ? buyProduct() : buyBox()} className="!font-(family-name:--manrope-medium) mt-5 w-full min-h-18 btn !rounded-3xl text-xl">
                        <span>
                            Купить {truncateString(isTopup && productsData ? getPureName(product || productsData[currentIndex]?.name || "") : ((Number(coinArray[coinArray.length-2]) ? "" : coinArray[coinArray.length-2] + " ") + coinArray[coinArray.length-1]), 28)}<br />{isTopup && productsData ? (productPrice || productsData[currentIndex]?.priceInRub) : (productsData ? productsData[currentIndex]?.priceInRub : boxes[currentIndex]?.price) * count} ₽
                        </span>
                    </button>
                    <div className="mt-4 flex flex-col gap-2">
                        <Checkbox checked={isUserTerms} setChecked={setIsUserTerms}>
                            <span className="!font-(family-name:--manrope-regular) text-[14px]">
                                Я согласен с условиями <Link href={"/user-agreement.pdf"} className="underline">Пользовательского соглашения</Link>.
                            </span>
                        </Checkbox>
                        <Checkbox checked={isPrivacy} setChecked={setIsPrivacy}>
                            <span className="!font-(family-name:--manrope-regular) text-[14px]">
                                Я согласен с условиями <Link href={"/policy-of-confidentiality.pdf"} className="underline">Политики конфиденциальности</Link>.
                            </span>
                        </Checkbox>
                    </div>
                    <span className="text-xl mt-2">Инструкция</span>
                    <ol className={`!font-(family-name:--manrope-regular) ml-5 ${(pathname === "/pubg" || pathname === "/freefire") && isTopup ? "text-[14px]" : "text-[14px]"}`}>
                        {instructions[Number(isTopup)].map((item, i)=><li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ol>
                </form>
            </Modal>
        </div>
    )
}