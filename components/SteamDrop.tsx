import { ReactNode, useEffect, useState } from "react"
import Icon from "./Icon"
import { useSiteType } from "./SiteTypeContext"

function LinkItem({children, link}:{ children: ReactNode, link: string }) {
    return (
        <a href={link} className="relative lg:max-w-[126px] lg:max-w-[126px] lg:min-w-[126px] lg:w-[126px] lg:h-[126px] md:w-[82px] md:h-[82px] flex items-center justify-center rounded-3xl shadow-xl bg-linear-to-b from-[#080C14] to-[#0C111D]" style={{ boxShadow: "0 0px 6.6px 0 #020305, inset 0 6.31px 6.31px 0 #0C121E, inset 0 -6.31px 6.31px 0 #070B12" }}>
            {children}
        </a>
    )
}

export default function SteamDrop() {
    const { siteType } = useSiteType()
    const [iconSize, setIconSize] = useState(82)
    useEffect(() => {
        const checkScreenSize = () => {
        if(window.outerWidth <= 768){
            setIconSize(42)
        }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    const medias = [
        <Icon key={0} type="youtube2" size={iconSize} />,
        <Icon key={1} type="telegram2" size={iconSize} />,
        <Icon key={2} type="tiktok" size={iconSize} strokeWidth={0.5} />,
        <span key={3} className="absolute z-2 w-full h-full flex items-center justify-center bg-[rgba(51,_233,_198,_0.1)] rounded-xl border-2 border-white lg:text-xl md:text-sm" style={{ boxShadow: "inset 0 0 10px #33E9E9" }}>#FREE</span>,
        <span key={4} className="absolute z-2 w-full h-full flex items-center justify-center bg-[rgba(18,141,255,0.1)] rounded-xl border-2 border-white lg:text-xl md:text-sm" style={{ boxShadow: "inset 0 0 10px #0026ffff" }}>#DROPS</span>,
        <Icon key={5} type="instagram" size={iconSize} strokeWidth={4} />,
        <Icon key={6} type="discord2" size={iconSize} />,
        <Icon key={7} type="dtf2" size={iconSize} />,
    ]
    const links = [
        "#",
        "https://t.me/steamzapravka",
        "https://www.tiktok.com/@steam_zapravka",
        "#",
        "#",
        "#",
        "#",
        "https://dtf.ru/id3087606"
    ]
    return (
        <section className="w-full h-80 border-1 border-(--border) bg-(--section-back) rounded-2xl lg:px-8 md:px-3 py-8 grid grid-cols-2">
            <div className="flex flex-col gap-6">
                <h1 className="lg:text-4xl md:text-2xl font-(family-name:--manrope-semibold)">Не пропусти лучший шанс <br/>{siteType === "game" ? <>заполучить <span className="text-(--green)">STEAM-ДРОП!</span></> : <>дотянуться до <span className="text-(--blue)">TG STARS!</span></> }</h1>
                <h2 className="lg:text-xl md:text-base">Подпишись, чтобы забирать <span className={`text-(${siteType === "game" ? "--blue" : "--green"})`}>бонусы первым!</span></h2>
                <span className="lg:text-base md:text-xs lg:w-130 md:w-85 lg:whitespace-wrap tracking-wide">Преврати пополнение кошелька в твой постоянный профит. Мы разыгрываем ценные призы, Steam-гифты и промокоды только для наших подписчиков. Все новости о самых низких
                комиссиях и специальных акциях — мгновенно в ленте!</span>
            </div>
            <div className="w-full grid lg:grid-cols-[repeat(4,126px)] md:grid-cols-4 lg:grid-rows-2 md:auto-rows-min lg:gap-x-3 md:gap-x-6 gap-y-4 justify-end justify-items-end lg:content-start md:content-center">
                {medias.map((item, i)=><LinkItem key={i} link={links[i]}>{item}</LinkItem>)}
            </div>
        </section>
    )
}