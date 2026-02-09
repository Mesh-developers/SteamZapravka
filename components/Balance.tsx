"use client"

import { useEffect, useState } from "react"
import Input from "./Input"
import Chips from "./Chips"
import PaymentSystems from "./PaymentSystems"
import Icon from "./Icon"
import Checkbox from "./Checkbox"
import Link from "next/link"
import { useSiteType } from "./SiteTypeContext"
import { ExchangeResponse, ExchangeTelegramResponse, LoginResponse, PaymentSystem, PromocodeResponse, TopupRequest, TopupResponse, TopupTelegramRequest, TopupTelegramResponse } from "@/typings"
import { redirect, RedirectType } from "next/navigation"
import Modal from "./Modal"
import useDebounce from "@/hooks/useDebounce"
import Image from "next/image"
import { removeAtSymbol, validateZeroStart, getDataOrLoader } from "@/utils"
import { TERMS_ERROR_TEXT } from "@/constants"
import { useArrayContext } from "./FAQArrayContext"

export default function Balance() {
    const [resMessage, setResMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [login, setLogin] = useState("")
    const [promocode, setPromocode] = useState("")
    const [price, setPrice] = useState(1000)
    const prices = [150, 500, 1000, 2000]
    const [starsIndex, setStarsIndex] = useState(2)
    const [stars, setStars] = useState([100, 500, 1000, 2500])
    const [system, setSystem] = useState<PaymentSystem>("SBP")
    const [isAgree, setIsAgree] = useState(false)
    const [isUserTerms, setIsUserTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)
    const { siteType } = useSiteType()
    const { updateFirstTwoValues } = useArrayContext()
    const [exchange, setExchange] = useState<ExchangeResponse>();
    const [exchangeTelegram, setExchangeTelegram] = useState<ExchangeTelegramResponse>();
    const debouncedLogin = useDebounce(login, 1000)
    const debouncedPromocode = useDebounce(promocode, 1000)
    const [promocodeResult, setPromocodeResult] = useState<PromocodeResponse>()
    const [loginResult, setLoginResult] = useState<LoginResponse>()

    useEffect(()=>{
        if (system === "SBP" && JSON.stringify(stars) !== JSON.stringify([100, 500, 1000, 2500])) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStars([100, 500, 1000, 2500])
        } else if (system === "CRYPTOCURRENCY" && JSON.stringify(stars) !== JSON.stringify([250, 500, 1000, 2500])) {
            setStars([250, 500, 1000, 2500])
        }
    }, [system])

    const topupRequest = async () => {
        if (isAgree || (isUserTerms && isPrivacy)) {
            const body: TopupRequest = {
                paymentMethod: system,
                amountRub: price,
                steamLogin: login,
                couponCode: promocode
            }
            setIsLoading(true)
            const req = await fetch("https://api.steamzapravka.io/steam/topup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            })

            if (req.status === 200) {
                const res: TopupResponse = await req.json()
                setIsLoading(false)
                redirect(res.sbpPaymentUrl, RedirectType.push)
            } else if (req.status === 400) {
                setResMessage((await req.json()).message)
                setIsLoading(false)
            }
        } else if (!isAgree || !isUserTerms || !isPrivacy) {
            setResMessage(TERMS_ERROR_TEXT)
        }
    }

    const topupTelegramRequest = async () => {
        if ((isAgree || (isUserTerms && isPrivacy)) && exchangeTelegram) {
            if (system === "SBP" && exchangeTelegram.priceRubSbp[starsIndex] >= 100 && exchangeTelegram.priceRubSbp[starsIndex] <= 20_000 ||
                system === "CRYPTOCURRENCY" && exchangeTelegram.priceRubCrypto[starsIndex] >= 200 && exchangeTelegram.priceRubCrypto[starsIndex] <= 20_000
            ) {
                const body: TopupTelegramRequest = {
                    telegramLogin: removeAtSymbol(login),
                    starsAmount: stars[starsIndex],
                    paymentMethod: system
                }

                setIsLoading(true)
                const req = await fetch("https://api.steamzapravka.io/stars", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(body)
                })

                if (req.status === 200) {
                    const res: TopupTelegramResponse = await req.json()
                    setIsLoading(false)
                    redirect(res.paymentLink, RedirectType.push)
                }
            } else {
                setResMessage("Cумма оплаты для СБП: 100 – 20 000 ₽.\nСумма для Crypto: 200 – 20 000 ₽")
                setIsLoading(false)
            }
        } else if (!isAgree || !isUserTerms || !isPrivacy) {
            setResMessage(TERMS_ERROR_TEXT)
        }
    }

    useEffect(()=>{
        const getExchange = async () => {
            try {
                if (siteType === "game") {
                    const res = await fetch("https://api.steamzapravka.io/steam/exchange")

                    if (res.status === 200) {
                        const data: ExchangeResponse = await res.json()
                        setExchange(data)
                    }
                } else if (siteType === "telegram") {
                    const res = await fetch("https://api.steamzapravka.io/stars/price", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            starsAmount: stars
                        })
                    })

                    if (res.status === 200) {
                        const data: ExchangeTelegramResponse = await res.json()
                        setExchangeTelegram(data)
                    } else {
                        setResMessage((await res.json()).message)
                    }
                }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any) {
                console.error(e.message)
            }
        }
        getExchange()
        if (siteType === "game")
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSystem("SBP")
    }, [siteType])


    useEffect(()=>{
        const checkLogin = async () => {
            if (debouncedLogin) {
                const res = await fetch("https://api.steamzapravka.io/steam/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        steamLogin: debouncedLogin
                    })
                })

                if (res.ok) {
                    const data: LoginResponse = await res.json()
                    setLoginResult(data)
                }
            } else {
                setLoginResult(undefined)
            }
        }
        checkLogin()
    }, [debouncedLogin])

    useEffect(()=>{
        const checkPromocode = async () => {
            if (debouncedPromocode) {
                const res = await fetch("https://api.steamzapravka.io/steam/coupon", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        couponCode: debouncedPromocode
                    })
                })

                if (res.ok) {
                    const data: PromocodeResponse = await res.json()
                    setPromocodeResult(data)
                }
            }
        }
        checkPromocode()
    }, [debouncedPromocode])

    return (
        <>
        <section id="balance" className="w-full h-84 border-1 border-(--border) bg-(--section-back) rounded-3xl px-8 py-8 flex flex-col gap-6 max-[769px]:hidden">
            <div className="flex justify-between">
                <h1 className="text-4xl">Пополни {siteType === "game" ? <>баланс <span className="text-(--blue)">STEAM</span></> : <><span className="text-(--blue)">TELEGRAM STARS</span></>}</h1>
                <Link href={"#faq"} className="w-48 h-9 rounded-full border-2 border-[#3EAFF7]" onClick={()=>updateFirstTwoValues(false, true)}>
                    <span className="p-2 flex items-center justify-center gap-1 w-full h-full rounded-full text-sm">
                        <svg width="10" height="16" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.5625C1.23478 0.5625 0.98043 0.681026 0.792893 0.892005C0.605357 1.10298 0.5 1.38913 0.5 1.6875C0.5 2.84906 0.873 4.45219 1.092 5.28919C1.1184 5.3875 1.17255 5.47346 1.24626 5.53406C1.31997 5.59465 1.40922 5.62658 1.5005 5.625C1.59157 5.62652 1.68061 5.5947 1.7542 5.53434C1.82779 5.47397 1.88195 5.38832 1.9085 5.29031C2.1275 4.45781 2.5 2.86312 2.5 1.6875C2.5 1.38913 2.39464 1.10298 2.20711 0.892005C2.01957 0.681026 1.76522 0.5625 1.5 0.5625ZM0 1.6875C0 1.23995 0.158035 0.810725 0.43934 0.494257C0.720644 0.17779 1.10218 0 1.5 0C1.89782 0 2.27936 0.17779 2.56066 0.494257C2.84196 0.810725 3 1.23995 3 1.6875C3 2.95312 2.606 4.62038 2.388 5.45062C2.3307 5.66495 2.2132 5.8526 2.0531 5.98546C1.893 6.11831 1.69893 6.1892 1.5 6.1875C1.0945 6.1875 0.729 5.895 0.612 5.44781C0.3945 4.61475 0 2.94019 0 1.6875ZM1.5 7.3125C1.36739 7.3125 1.24021 7.37176 1.14645 7.47725C1.05268 7.58274 1 7.72582 1 7.875C1 8.02418 1.05268 8.16726 1.14645 8.27275C1.24021 8.37824 1.36739 8.4375 1.5 8.4375C1.63261 8.4375 1.75979 8.37824 1.85355 8.27275C1.94732 8.16726 2 8.02418 2 7.875C2 7.72582 1.94732 7.58274 1.85355 7.47725C1.75979 7.37176 1.63261 7.3125 1.5 7.3125ZM0.5 7.875C0.5 7.57663 0.605357 7.29048 0.792893 7.0795C0.98043 6.86853 1.23478 6.75 1.5 6.75C1.76522 6.75 2.01957 6.86853 2.20711 7.0795C2.39464 7.29048 2.5 7.57663 2.5 7.875C2.5 8.17337 2.39464 8.45952 2.20711 8.6705C2.01957 8.88147 1.76522 9 1.5 9C1.23478 9 0.98043 8.88147 0.792893 8.6705C0.605357 8.45952 0.5 8.17337 0.5 7.875Z" fill="#EEEEEE"/>
                        </svg>
                        Важная информация
                    </span>
                </Link>
            </div>
            <div className="grid grid-cols-[60%_19%_18%] grid-rows-[160px] h-full gap-x-5 gap-y-10">
                <div className="bg-linear-to-r from-[#33475D] to-[#355477] rounded-2xl px-5 py-5 grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4">
                    <Input placeholder={siteType === "game" ? "Ваш логин Steam" : "Ваш @Username"} value={login} setValue={setLogin} hintWrap hint="ГДЕ НАЙТИ?" isWarning={siteType === "game" && loginResult && !loginResult.usernameExists} isSuccess={siteType === "game" && loginResult && loginResult.usernameExists} renderHint={siteType === "game" && loginResult && !loginResult.usernameExists ? <span className="text-[10px] mr-5 justify-self-end w-fit px-2 py-1 btn !rounded-full !from-[#EA5053] !to-[#842D2F]">НЕВЕРНЫЙ ЛОГИН</span> : undefined} />
                    <Input type="number" disabled={siteType === "telegram"} value={siteType === "game" ? price : (system === "SBP" ? String(exchangeTelegram?.priceRubSbp[starsIndex]) : String(exchangeTelegram?.priceRubCrypto[starsIndex]))} setValue={setPrice} hint={siteType === "game" ? `~${(price / (exchange?.usdToRub || 0)).toFixed(2)} $ / ${(price / (exchange?.kztToRub || 0)).toFixed(2)} ₸` : "~12.24 TON / 1728.42 ₽"} filterHandler={validateZeroStart} />
                    <Input placeholder="Промокод" value={promocode} setValue={setPromocode} renderHint={promocodeResult ? <span className={`text-[10px] mr-5 justify-self-end w-fit px-2 py-1 btn !rounded-full ${promocodeResult.discountPercentage === 0 ? "!from-[#EA5053] !to-[#842D2F]" : ""}`}>{promocodeResult.discountPercentage === 0 ? "НЕВЕРНЫЙ КОД" : `СКИДКА ${promocodeResult?.discountPercentage}%`}</span> : undefined} />
                    <Chips value={siteType === "game" ? price : stars[starsIndex]} values={siteType === "game" ? prices : stars} setValue={setPrice} setIndex={siteType === "telegram" ? setStarsIndex : undefined} />
                </div>
                <div className="bg-linear-to-r from-[#33475D] to-[#355477] rounded-2xl px-5 py-5 grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4">
                    <PaymentSystems
                    system={system}
                    setSystem={setSystem}
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
                        },
                    ]}
                    />
                </div>
                <button onClick={siteType === "game" ? topupRequest : topupTelegramRequest } className={`bg-radial border-1 border-transparent ${siteType === "game" ? "from-[#45C47E] hover:border-(--green)" : "from-[#0698D6] hover:border-(--blue)"} from-0% ${siteType === "game" ? "to-[#2D8451]" : "to-[#035070]"} rounded-2xl font-medium text-xl`}>
                    {siteType === "game" ?
                    <>
                    Пополнить баланс <br/> {getDataOrLoader(price, " ₽")}
                    </>
                    :
                    <>
                    Купить звёзды <br/> {getDataOrLoader(system === "SBP" ? Number(exchangeTelegram?.priceRubSbp[starsIndex]) : Number(exchangeTelegram?.priceRubCrypto[starsIndex]), " ₽")}
                    </>
                    }
                </button>
            </div>
            <Checkbox checked={isAgree} setChecked={setIsAgree}>
                <span>
                    Я согласен с условиями <Link href={"/user-agreement.pdf"} className="underline">Пользовательского соглашения</Link> и <Link href={"/policy-of-confidentiality.pdf"} className="underline">Политики конфиденциальности</Link>.
                </span>
            </Checkbox>
        </section>
        <section className="max-[769px]:flex hidden w-full h-fit border-1 border-(--border) bg-(--section-back) rounded-3xl px-4 py-4 flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="max-[481px]:text-[16px] text-lg">Пополни {siteType === "game" ? <>баланс <span className="text-(--blue)">STEAM</span></> : <><span className="text-(--blue)">TELEGRAM STARS</span></>}</h1>
                <button className="min-[481px]:w-40 w-30 h-7 rounded-full border-2 border-[#3EAFF7]">
                    <span className="p-2 flex items-center justify-center gap-1 w-full h-full rounded-full">
                        <svg width="6" height="12" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.5625C1.23478 0.5625 0.98043 0.681026 0.792893 0.892005C0.605357 1.10298 0.5 1.38913 0.5 1.6875C0.5 2.84906 0.873 4.45219 1.092 5.28919C1.1184 5.3875 1.17255 5.47346 1.24626 5.53406C1.31997 5.59465 1.40922 5.62658 1.5005 5.625C1.59157 5.62652 1.68061 5.5947 1.7542 5.53434C1.82779 5.47397 1.88195 5.38832 1.9085 5.29031C2.1275 4.45781 2.5 2.86312 2.5 1.6875C2.5 1.38913 2.39464 1.10298 2.20711 0.892005C2.01957 0.681026 1.76522 0.5625 1.5 0.5625ZM0 1.6875C0 1.23995 0.158035 0.810725 0.43934 0.494257C0.720644 0.17779 1.10218 0 1.5 0C1.89782 0 2.27936 0.17779 2.56066 0.494257C2.84196 0.810725 3 1.23995 3 1.6875C3 2.95312 2.606 4.62038 2.388 5.45062C2.3307 5.66495 2.2132 5.8526 2.0531 5.98546C1.893 6.11831 1.69893 6.1892 1.5 6.1875C1.0945 6.1875 0.729 5.895 0.612 5.44781C0.3945 4.61475 0 2.94019 0 1.6875ZM1.5 7.3125C1.36739 7.3125 1.24021 7.37176 1.14645 7.47725C1.05268 7.58274 1 7.72582 1 7.875C1 8.02418 1.05268 8.16726 1.14645 8.27275C1.24021 8.37824 1.36739 8.4375 1.5 8.4375C1.63261 8.4375 1.75979 8.37824 1.85355 8.27275C1.94732 8.16726 2 8.02418 2 7.875C2 7.72582 1.94732 7.58274 1.85355 7.47725C1.75979 7.37176 1.63261 7.3125 1.5 7.3125ZM0.5 7.875C0.5 7.57663 0.605357 7.29048 0.792893 7.0795C0.98043 6.86853 1.23478 6.75 1.5 6.75C1.76522 6.75 2.01957 6.86853 2.20711 7.0795C2.39464 7.29048 2.5 7.57663 2.5 7.875C2.5 8.17337 2.39464 8.45952 2.20711 8.6705C2.01957 8.88147 1.76522 9 1.5 9C1.23478 9 0.98043 8.88147 0.792893 8.6705C0.605357 8.45952 0.5 8.17337 0.5 7.875Z" fill="#EEEEEE"/>
                        </svg>
                        <span className="min-[481px]:text-[12px] text-[8px]">
                            Важная информация
                        </span>
                    </span>
                </button>
            </div>
            <div className="grid min-[481px]:grid-cols-2 grid-cols-1 gap-3 w-full">
                <div className="hidden flex-col gap-3 w-full min-[481px]:flex">
                    <div className="w-full h-[230px] relative">
                        {siteType === "game" ?
                        <Image src={"/images/steam_topup.png"} quality={100} className="border-1 border-(--border) rounded-2xl object-cover" fill alt="steam cover" />
                        :
                        <Image src={"/images/telegram_topup.png"} quality={100} className="border-1 border-(--border) rounded-2xl object-cover" fill alt="steam cover" />
                        }
                    </div>
                    <h3>Инструкция</h3>
                    <ol className="text-xs flex flex-col gap-1 ml-3">
                        <li>Введите ваш логин Steam.</li>
                        <li>Введите желаемую сумму для пополнения.</li>
                        <li>Введите промокод (если есть).</li>
                        <li>Выберите удобный способ оплаты.</li>
                        <li>Примите условия оферты.</li>
                        <li>Нажмите на кнопку “Пополнить баланс”.</li>
                    </ol>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="bg-linear-to-r from-[#33475D] to-[#355477] flex flex-col rounded-2xl w-full min-[481px]:h-[263px] h-[278px] p-1 gap-3">
                        <Input placeholder={siteType === "game" ? "Ваш логин Steam" : "Ваш @Username"} value={login} setValue={setLogin} hintWrap hint="ГДЕ НАЙТИ?" isWarning={siteType === "game" && loginResult && !loginResult.usernameExists} isSuccess={siteType === "game" && loginResult && loginResult.usernameExists} renderHint={siteType === "game" && loginResult && !loginResult.usernameExists ? <span className="text-[10px] mr-5 justify-self-end w-fit px-2 py-1 btn !rounded-full !from-[#EA5053] !to-[#842D2F]">НЕВЕРНЫЙ ЛОГИН</span> : undefined} />
                        <div className="flex flex-col gap-2">
                            <Input type="number" disabled={siteType === "telegram"} value={siteType === "game" ? price : (system === "SBP" ? String(exchangeTelegram?.priceRubSbp[starsIndex]) : String(exchangeTelegram?.priceRubCrypto[starsIndex]))} setValue={setPrice} hint={siteType === "game" ? `~${(price / (exchange?.usdToRub || 0)).toFixed(2)} $ / ${(price / (exchange?.kztToRub || 0)).toFixed(2)} ₸` : "~12.24 TON / 1728.42 ₽"} filterHandler={validateZeroStart} />
                            <Chips value={siteType === "game" ? price : stars[starsIndex]} values={siteType === "game" ? prices : stars} setValue={setPrice} setIndex={siteType === "telegram" ? setStarsIndex : undefined} />
                        </div>
                        <Input placeholder="Промокод" value={promocode} setValue={setPromocode} renderHint={promocodeResult ? <span className={`text-[10px] mr-5 justify-self-end w-fit px-2 py-1 btn !rounded-full ${promocodeResult.discountPercentage === 0 ? "!from-[#EA5053] !to-[#842D2F]" : ""}`}>{promocodeResult.discountPercentage === 0 ? "НЕВЕРНЫЙ КОД" : `СКИДКА ${promocodeResult?.discountPercentage}%`}</span> : undefined} />
                        <div className="flex gap-3">
                            <PaymentSystems
                            system={system}
                            setSystem={setSystem}
                            systems={[
                                {
                                    title: "SBP",
                                    percent: 8,
                                    image: <Icon type="sbp" width={50} height={50} />
                                },
                                {
                                    title: "CRYPTOCURRENCY",
                                    percent: 5,
                                    image: <Icon type="crypto" width={60} height={60} />
                                },
                            ]}
                            />
                        </div>
                    </div>
                    <button onClick={siteType === "game" ? topupRequest : topupTelegramRequest} className={`min-[481px]:mt-0 leading-7 py-2 bg-radial ${siteType === "game" ? "from-[#45C47E]" : "from-[#0698D6]"} from-0% ${siteType === "game" ? "to-[#2D8451]" : "to-[#035070]"} rounded-2xl font-medium text-lg`}>
                        {siteType === "game" ?
                        <>
                        Пополнить баланс <br/> {getDataOrLoader(price, " ₽")}
                        </>
                        :
                        <>
                        Купить звёзды <br/> {getDataOrLoader(system === "SBP" ? Number(exchangeTelegram?.priceRubSbp[starsIndex]) : Number(exchangeTelegram?.priceRubCrypto[starsIndex]), " ₽")}
                        </>
                        }
                    </button>
                    <div className="flex flex-col">
                        <Checkbox checked={isUserTerms} setChecked={setIsUserTerms}>
                            <span className="!font-(family-name:--manrope-regular) text-[11px] text-nowrap">
                                Я согласен с условиями <Link href={"/user-agreement.pdf"} className="underline">Пользовательского соглашения</Link>.
                            </span>
                        </Checkbox>
                        <Checkbox checked={isPrivacy} setChecked={setIsPrivacy}>
                            <span className="!font-(family-name:--manrope-regular) text-[11px] text-nowrap">
                                Я согласен с условиями <Link href={"/policy-of-confidentiality.pdf"} className="underline">Политики конфиденциальности</Link>.
                            </span>
                        </Checkbox>
                    </div>
                </div>
            </div>
        </section>
        <Modal open={!!resMessage} onClose={()=>setResMessage("")}>
            <div className="bg-(--section-back) w-fit h-fit p-10 rounded-2xl border-1 border-(--border) flex flex-col gap-2 whitespace-pre">
                {resMessage}
            </div>
        </Modal>
        <Modal open={isLoading} onClose={()=>{}}>
            <span className="loader"></span>
        </Modal>
        </>
    )
}