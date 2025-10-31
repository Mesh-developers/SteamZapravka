import { ReactNode } from "react"
import Icon from "./Icon"

function LinkItem({children}:{ children: ReactNode }) {
    return (
        <div className="relative max-w-[126px] max-w-[126px] min-w-[126px] flex items-center justify-center rounded-3xl shadow-[rgba(2,_3,_5,_0.34)] shadow-xl bg-linear-to-b from-[#080C14] to-[#0C111D]" style={{ boxShadow: "inset 0 6.31px 6.31px 0 #0C121E, inset 0 -6.31px 6.31px 0 #070B12;" }}>
            {children}
        </div>
    )
}

export default function SteamDrop() {
    const medias = [
        <Icon key={0} type="youtube2" size={82} />,
        <Icon key={1} type="telegram2" size={82} />,
        <Icon key={2} type="tiktok" size={82} strokeWidth={0.5} />,
        <span key={3} className="absolute z-2 w-full h-full flex items-center justify-center bg-[rgba(51,_233,_198,_0.1)] rounded-xl border-2 border-white text-xl" style={{ boxShadow: "inset 0 0 10px #33E9E9" }}>#FREE</span>,
        <span key={4} className="absolute z-2 w-full h-full flex items-center justify-center bg-[rgba(18,141,255,0.1)] rounded-xl border-2 border-white text-xl" style={{ boxShadow: "inset 0 0 10px #0026ffff" }}>#DROPS</span>,
        <Icon key={5} type="instagram" size={82} strokeWidth={4} />,
        <Icon key={6} type="discord2" size={82} />,
        <Icon key={7} type="dtf2" size={82} />,
    ]
    return (
        <div className="w-full h-80 border-1 border-white bg-[rgba(10,15,25,0.5)] rounded-2xl px-8 py-8 grid grid-cols-2">
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl font-(family-name:--manrope-semibold)">Не пропусти лучший шанс <br/>заполучить <span className="text-(--green)">STEAM-ДРОП!</span></h1>
                <h2 className="text-xl">Подпишись, чтобы забирать <span className="text-(--blue)">бонусы первым!</span></h2>
                <span className="tracking-wide">Преврати пополнение кошелька в твой постоянный профит. <br/>Мы разыгрываем ценные призы, Steam-гифты и промокоды <br/>только для наших подписчиков. Все новости о самых низких <br/>
                комиссиях и специальных акциях — мгновенно в ленте!</span>
            </div>
            <div className="w-full grid grid-cols-[repeat(4,126px)] grid-rows-2 gap-x-3 gap-y-4 justify-end justify-items-end">
                {medias.map((item, i)=><LinkItem key={i}>{item}</LinkItem>)}
            </div>
        </div>
    )
}