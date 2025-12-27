"use client"
import useLocalStorage from "@/hooks/useLocalStorage"
import Icon from "./Icon"
import { OrderData } from "@/typings"
import { initialOrder, ORDER_STORAGE_KEY } from "@/constants"
import Link from "next/link"
import Image from "next/image"

type PaymentProps = {
    success?: boolean
}

export default function Payment({ success }:PaymentProps) {
    const [order] = useLocalStorage<OrderData>(ORDER_STORAGE_KEY, initialOrder)
    return (
        <section className="relative overflow-hidden w-full flex flex-col gap-5 pl-15 py-10 bg-(--section-back) border-1 border-(--border) rounded-3xl">
            <div className={`absolute rounded-full bg-radial blur-3xl ${success ? "from-[rgba(46,204,113,0.15)] to-[rgba(46,204,113,0)]" : "from-[rgba(201,54,54,0.15)] to-[rgba(201,54,54,0)]"} w-[90%] h-[90%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`} />
            <div className="relative z-5 flex flex-col gap-4 items-center">
                {success ? <Icon type="checkMark" /> : <Icon type="failCross" />}
                <h1 className="text-4xl font-(family-name:--manrope-semibold) -mt-4">{success ? "Оплата прошла успешно" : "Оплата не прошла"}</h1>
                <span className="whitespace-pre-line text-[#9FB3B8] text-md text-center">{success ? "Средства успешно зачисляются на ваш аккаунт.\nОбычно это занимает несколько минут." : "К сожалению, произошла ошибка при обработке платежа.\nПопробуйте еще раз или обратитесь в поддержку."}</span>
            </div>
            <div className="flex relative z-5">
                <div className="bg-[#0C161B] border-1 border-(--border) rounded-3xl p-10 flex flex-col gap-5">
                    <h3 className="font-(family-name:--manrope-semibold) text-xl">Детали операции</h3>
                    <div className="w-full h-[1px] bg-(--border)" />
                    <div className="flex justify-between">
                        <span className="text-(--gray)">Номер заказа</span>
                        <span>{order.id}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-(--gray)">Продукт</span>
                        <span>{order.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-(--gray)">Сумма</span>
                        <span>{order.amount} ₽</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-(--gray)">E-mail</span>
                        <span>{order.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-(--gray)">Способ оплаты</span>
                        <span>{order.paymentSystem}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-(--gray)">Статус</span>
                        <span className={success ? "text-[#2ECC71]" : "text-[#C93636]"}>{success ? "Успешно" : "Неудача"}</span>
                    </div>
                    <div className="w-full h-[1px] bg-(--border)" />
                    <span className="text-(--gray)">Если средства не поступили в течении 30 минут, обратитесь в поддержку.</span>
                    <div className="flex gap-5">
                        {success ?
                        <Link href="/" className="text-center btn p-5 !rounded-3xl w-full font-(family-name:--manrope-semibold)">Перейти на главную</Link>
                        :
                        <a href={order.href} className="!from-[#C93636] !to-[#842D2D] text-center btn p-5 !rounded-3xl w-full font-(family-name:--manrope-semibold)">Повторить попытку</a>
                        }
                        <Link href="/" className="text-center btn p-5 !rounded-3xl w-full font-(family-name:--manrope-semibold) !bg-none !shadow-none border-[#3A5056] border-1">Написать в поддержку</Link>
                    </div>
                </div>
                <Image className="absolute right-10 -bottom-10" width={success ? 500 : 420} height={success ? 500 : 420} src={success ? "/images/mika_ok.png" : "/images/mika_sad.png" } alt="mika" />
            </div>
        </section>
    )
}