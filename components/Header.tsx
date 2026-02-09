"use client";

import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Icon from "./Icon";
import Switcher from "./Switcher";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState([82, 174])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.outerWidth <= 768) {
                setSize([32, 90]);
            } else {
                setSize([82, 174]);
            }

            if(window.outerWidth <= 480) {
                setIsMobile(true);
            } else {
                setIsMobile(false)
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <>
        <header className="fixed z-50 rounded-b-3xl max-w-[1500px] lg:w-[90%] max-[481px]:w-[90%] w-[95%] h-24 bg-[#171D25] flex lg:justify-around justify-between px-7 max-[481px]:px-4 lg:px-0 items-center top-0 left-[50%] -translate-x-[50%]">
            <div className="lg:w-fit md:w-20">
                <BurgerMenu open={open} setOpen={setOpen} />
            </div>
            <div className="">
                <Switcher isMobile={isMobile} leftText="Игры" rightText="Сервисы" leftImage="gamepad_white.png" rightImage="clound_white.png" />
            </div>
            <Link href="/"><Icon type="logo" height={size[0]} width={size[1]} /></Link>
            <div className="flex lg:gap-10 gap-3 font-light lg:text-base text-sm">
                <Link href="/#steamdrop">О НАС</Link>
                <Link href="/#faq">FAQ</Link>
            </div>
            <div className="lg:flex items-center gap-2 hidden">
                <a href="#">
                    <Icon type="instagram" size={17} strokeWidth={8} />
                </a>
                <a href="https://t.me/steamzapravka" target="_blank">
                    <Icon type="telegram" size={18} />
                </a>
                <a href="#">
                    <Icon type="youtube" size={18} />
                </a>
                <a href="https://www.tiktok.com/@steam_zapravka" target="_blank">
                    <Icon type="tiktok" size={18} />
                </a>
                <a href="#">
                    <Icon type="discord" size={19} />
                </a>
                <a href="https://dtf.ru/id3087606" target="_blank">
                    <Icon type="dtf" width={20} height={22} />
                </a>
            </div>
        </header>
        <Sidebar open={open} setOpen={setOpen} />
        </>
    )
}