"use client"

import Link from "next/link";
import Icon from "./Icon";
import { useEffect, useState } from "react";

export default function Footer() {
    const [size, setSize] = useState([82, 174])
    useEffect(() => {
        const checkScreenSize = () => {
            if(window.outerWidth <= 768) {
                setSize([25, 80]);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <footer className="relative z-1 border-1 border-(--border) max-w-[1500px] lg:w-[85%] max-[769px]:w-[95%] bg-(--section-back) rounded-t-3xl m-auto max-[481px]:px-2 px-5 lg:py-5 max-[769px]:py-3 grid grid-cols-3 max-[481px]:grid-cols-[2fr_1fr_2fr] items-center justify-between text-[#EEEEEE]">
            <div className="flex flex-col lg:gap-4 max-[769px]:gap-2 max-[481px]:w-35">
                <Link href={"/user-agreement.pdf"} className="lg:text-base max-[769px]:text-xs max-[481px]:text-[8px]">Пользовательское соглашение</Link>
                <Link href={"/policy-of-confidentiality.pdf"} className="lg:text-base max-[769px]:text-xs max-[481px]:text-[8px]">Политика конфиденциальности</Link>
                <span className="lg:text-base max-[769px]:text-xs max-[481px]:text-[8px]">© 2025 Все права защищены.</span>
            </div>
            <div className="justify-self-center relative max-[481px]:right-2"><Icon type="logo" height={size[0]} width={size[1]} /></div>
            <div className="flex flex-col items-end">
                <div className="flex flex-col lg:gap-4 max-[769px]:gap-2 items-start">
                    <h4 className="lg:text-xl max-[769px]:text-xs max-[481px]:text-[10px]">Помощь и обратная связь</h4>
                    <a href="mailto:support@steamzapravka.io" target="_blank" className="flex items-center gap-1 lg:text-sm max-[769px]:text-[9px]"><span className="mt-1"><Icon type="mail" size={12} /></span> support@steamzapravka.io</a>
                    <a href="https://t.me/steamzapravka" target="_blank" className="flex items-center gap-1 lg:text-sm max-[769px]:text-[9px]"><Icon type="telegram" size={12} /> @steam_zapravka</a>
                </div>
            </div>
        </footer>
    )
}