import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Icon from "./Icon";
import Switcher from "./Switcher";

export default function Header() {
    return (
        <header className="relative z-2 rounded-b-3xl max-w-[1500px] lg:w-[80%] md:w-[95%] h-24 bg-[#171D25] flex justify-around items-center m-auto">
            <BurgerMenu />
            <Switcher leftText="Игры" rightText="Telegram" />
            <Link href="/"><Icon type="logo" /></Link>
            <div className="flex gap-10 font-light">
                <span>О НАС</span>
                <a href="#faq">FAQ</a>
            </div>
            <div className="flex items-center gap-2">
                <a href="#">
                    <Icon type="instagram" size={17} strokeWidth={8} />
                </a>
                <a href="https://t.me/steamzapravka">
                    <Icon type="telegram" size={18} />
                </a>
                <a href="#">
                    <Icon type="youtube" size={18} />
                </a>
                <a href="https://www.tiktok.com/@steam_zapravka">
                    <Icon type="tiktok" size={18} />
                </a>
                <a href="#">
                    <Icon type="discord" size={19} />
                </a>
                <a href="https://dtf.ru/id3087606">
                    <Icon type="dtf" width={20} height={22} />
                </a>
            </div>
        </header>
    )
}