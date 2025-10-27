import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
    return (
        <footer className="w-[85%] bg-[#00050B] rounded-3xl m-auto mt-10 mb-5 px-5 py-5 grid grid-cols-3 items-center justify-between text-[#EEEEEE]">
            <div className="flex flex-col gap-5">
                <Link href={""}>Пользовательское соглашение</Link>
                <Link href={""}>Политика конфиденциальности</Link>
                <span className="text-[#515151]">© 2025 Все права защищены.</span>
            </div>
            <div className="justify-self-center"><Icon type="logo" height={82} width={174} /></div>
            <div className="flex flex-col items-end">
                <div className="flex flex-col gap-5 items-start">
                    <h4 className="text-xl">Помощь и обратная связь</h4>
                    <span className="flex items-center gap-1 text-sm"><span className="mt-1"><Icon type="mail" size={12} /></span> support@steamzapravka.io</span>
                    <span className="flex items-center gap-1 text-sm"><Icon type="telegram" size={12} /> @steam_zapravka</span>
                </div>
            </div>
        </footer>
    )
}