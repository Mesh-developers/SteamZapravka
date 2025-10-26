import Image from "next/image";
import { CSSProperties, ReactNode } from "react";

interface AdvantageItemProps {
    title: string;
    image: string;
    children: ReactNode,
    style: CSSProperties
}

function AdvantageItem({ title, image, children, style }:AdvantageItemProps) {
    return (
        <div className="border-1 border-white rounded-2xl flex flex-col bg-[#0A0E1480] justify-between">
            <div className="flex justify-between gap-5">
                <Image width={100} height={140} src={image} alt="icon" className="relative" style={style} />
                <h3 className="text-2xl font-(family-name:--monrope-semibold) mt-5 mr-8"><div dangerouslySetInnerHTML={{ __html: title.replace(" ", "<br/>") }} /></h3>
            </div>
            <span className="self-end pr-8 font-(family-name:--monrope-regular) mb-5">
                {children}
            </span>
        </div>
    )
}

export default function Advantages() {
    const items = [
        {
            title: "Мгновенное пополнение",
            image: "/images/rocket.png",
            text: <span><span className="text-[#50EA90]">Залей за 60 секунд!</span> Ни секунды <br/>
            промедления – только любимая <br/>
            игра и твои новые победы!</span>,
            style: { top: "-20px" }
        },
        {
            title: "Надежные партнеры",
            image: "/images/lock.png",
            text: <span>Официальное пополнене счета <br/>
            <span className="text-[#50EA90]">Гарантия безопасности</span> ваших <br/>
            данных и платежей!
            </span>,
            style: { top: "-20px", left: "-10px" }
        },
        {
            title: "Выгодные цены",
            image: "/images/box.png",
            text: <span><span className="text-[#50EA90]">Самая низкая комиссия!</span><br/>
            Никаких скрытых платежей, <br/>
            только прозрачные условия.
            </span>,
            style: { top: "-14px", left: "-4px" }
        },
        {
            title: "Розыгрыши и бонусы",
            image: "/images/gift.png",
            text: <span>Пополняйте баланс через нас <br/>
            и <span className="text-[#50EA90]">участвуйте в розыгрышах</span><br/>
            в нашем Telegram-канале!
            </span>,
            style: { top: "-14px" }
        }
    ]
    return (
        <section className="w-full grid grid-cols-4 gap-5 justify-between">
            {items.map((item, i)=>(
            <AdvantageItem key={i} title={item.title} image={item.image} style={item.style} >
                {item.text}
            </AdvantageItem>
        ))}
        </section>
    )
}