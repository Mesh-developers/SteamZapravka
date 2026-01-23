"use client"

import Link from "next/link";
import Icon from "./Icon";
import { useEffect, useState } from "react";

export default function Footer() {
    const [size, setSize] = useState([82, 174])
    useEffect(() => {
        const checkScreenSize = () => {
            if(window.outerWidth <= 768) {
                setSize([42, 100]);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <footer className="relative z-1 border-1 border-(--border) max-w-[1500px] lg:w-[76%] md:w-[95%] bg-(--section-back) rounded-t-3xl m-auto px-5 lg:py-5 md:py-3 grid grid-cols-3 items-center justify-between text-[#EEEEEE]">
            <div className="flex flex-col lg:gap-4 md:gap-2">
                <Link href={""} className="lg:text-base md:text-xs">Пользовательское соглашение</Link>
                <Link href={""} className="lg:text-base md:text-xs">Политика конфиденциальности</Link>
                <span className="lg:text-base md:text-xs">© 2025 Все права защищены.</span>
            </div>
            <div className="justify-self-center"><Icon type="logo" height={size[0]} width={size[1]} /></div>
            <div className="flex flex-col items-end">
                <div className="flex flex-col lg:gap-4 md:gap-2 items-start">
                    <h4 className="lg:text-xl md:text-xs">Помощь и обратная связь</h4>
                    <a href="mailto:support@steamzapravka.io" target="_blank" className="flex items-center gap-1 lg:text-sm md:text-[9px]"><span className="mt-1"><Icon type="mail" size={12} /></span> support@steamzapravka.io</a>
                    <a href="https://t.me/steamzapravka" target="_blank" className="flex items-center gap-1 lg:text-sm md:text-[9px]"><Icon type="telegram" size={12} /> @steam_zapravka</a>
                </div>
            </div>
        </footer>
    )
}