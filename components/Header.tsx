import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Icon from "./Icon";
import Switcher from "./Switcher";

export default function Header() {
    return (
        <header className="rounded-b-xl w-[85%] h-24 bg-[#171D25] flex justify-around items-center m-auto">
            <BurgerMenu />
            <Switcher leftText="Игры" rightText="Работа" />
            <Icon type="logo" />
            <div className="flex gap-10 font-light">
                <span>О нас</span>
                <a href="#faq">FAQ</a>
            </div>
            <div className="flex items-center gap-2">
                <Link href={""}>
                    <Icon type="instagram" size={17} strokeWidth={8} />
                </Link>
                <Link href={""}>
                    <Icon type="telegram" size={18} />
                </Link>
                <Link href={""}>
                    <Icon type="youtube" size={18} />
                </Link>
                <Link href={""}>
                    <Icon type="tiktok" size={18} />
                </Link>
                <Link href={""}>
                    <Icon type="discord" size={19} />
                </Link>
                <Link href={""}>
                    <Icon type="dtf" width={20} height={22} />
                </Link>
            </div>
        </header>
    )
}