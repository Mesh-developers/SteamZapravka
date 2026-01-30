import { ReactNode, useEffect, useState } from "react"
import Icon from "./Icon"
import { useSiteType } from "./SiteTypeContext"

function LinkItem({children, link}:{ children: ReactNode, link: string }) {
    return (
        <a href={link} target="_blank" className="relative lg:max-w-[126px] lg:max-w-[126px] lg:min-w-[126px] lg:w-[126px] lg:h-[126px] w-[82px] h-[82px] flex items-center justify-center rounded-3xl shadow-xl bg-linear-to-b from-[#080C14] to-[#0C111D]" style={{ boxShadow: "0 0px 6.6px 0 #020305, inset 0 6.31px 6.31px 0 #0C121E, inset 0 -6.31px 6.31px 0 #070B12" }}>
            {children}
        </a>
    )
}

export default function SteamDrop() {
    const { siteType } = useSiteType()
    const [iconSize, setIconSize] = useState(82)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkScreenSize = () => {
            if(window.outerWidth <= 768){
                setIconSize(42)
            }
            if (window.outerWidth <= 480) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
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
        "https://t.me/steamzapravka",
        "https://t.me/steamzapravka",
        "#",
        "#",
        "https://dtf.ru/id3087606"
    ]
    return (
        <section id="steamdrop" className="w-full h-fit border-1 border-(--border) bg-(--section-back) rounded-2xl lg:px-8 px-3 py-4 grid min-[481]:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-6">
                <h1 className="lg:text-4xl text-2xl max-[481px]:text-[23px] font-(family-name:--manrope-semibold) min-[481px]:text-start text-center">Не пропусти лучший шанс <br/>{siteType === "game" ? <>заполучить <span className="text-(--green)">STEAM-ДРОП!</span></> : <>дотянуться до <span className="text-(--blue)">TG STARS!</span></> }</h1>
                <h2 className="lg:text-xl text-base min-[481px]:block hidden">Подпишись, чтобы забирать <span className={`text-(${siteType === "game" ? "--blue" : "--green"})`}>бонусы первым!</span></h2>
                <span className="lg:text-base md:text-xs lg:w-130 md:w-85 lg:whitespace-wrap tracking-wide min-[481]:block hidden">Преврати пополнение кошелька в твой постоянный профит. Мы разыгрываем ценные призы, Steam-гифты и промокоды только для наших подписчиков. Все новости о самых низких
                комиссиях и специальных акциях — мгновенно в ленте!</span>
            </div>
            <div className="w-full max-[481px]:mt-2 grid lg:grid-cols-[repeat(4,126px)] min-[481px]:grid-cols-4 min-[320px]:grid-cols-3 lg:grid-rows-2 auto-rows-min lg:gap-x-3 gap-x-6 gap-y-4 justify-end justify-items-end lg:content-start content-center">
                {medias.filter((_, i)=>(isMobile && i !== 3 && i !== 4) || !isMobile).map((item, i)=><LinkItem key={i} link={links[i]}>{item}</LinkItem>)}
            </div>
            <h2 className="text-sm text-center max-[481px]:block hidden mt-2">Подпишись, чтобы забирать <span className={`text-(${siteType === "game" ? "--blue" : "--green"})`}>бонусы первым!</span></h2>
        </section>
    )
}