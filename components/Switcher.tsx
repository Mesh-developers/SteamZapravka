"use client";

import { useRouter } from "next/navigation";
import { useSiteType } from "./SiteTypeContext";
import Image from "next/image";

interface SwitcherProps {
  leftText?: string;   // то, что показываем когда ВЫКЛ
  rightText?: string;  // то, что показываем когда ВКЛ
  leftImage?: string;
  rightImage?: string;
  isMobile: boolean
};

export default function Switcher({ leftText = "OFF", rightText = "ON", leftImage="", rightImage="", isMobile }: SwitcherProps) {
  const {siteType: on, toggleType: setOn} = useSiteType();
  const navigator = useRouter()

  return (
    <div className="relative inline-flex items-center cursor-pointer select-none" onClick={()=>navigator.push("/")}>
      {/* track + wave + текст */}
      <span
        className={`
          w-86 h-8 max-[481px]:w-25
          relative
          transition-colors duration-500 ease-in-out
        `}
      >

        {/* текст внутри трека */}
        <span className="absolute inset-0 grid grid-cols-2 justify-between text-white font-normal text-sm">
          {/* левый текст */}
          <span
          onClick={() => setOn("game")}
            className={`
              relative transition-all duration-300 ease-out border-1 border-solid rounded-s-4xl overflow-hidden flex items-center justify-center px-20 max-[481px]:px-0 bg-linear-to-l from-[#2D2D2D] to-[#141414]
              ${on === "telegram" ? "border-black" : "border-white"}
            `}
          >
            {/* <span
            className={`
              absolute top-0 left-0 w-full h-full z-10 transition-all duration-200 bg-linear-to-r from-[#1414140] to-[rgba(20,_20,_20,_0.9)]
              ${on === "telegram" ? "opacity-0 !duration-[2.5s]" : "opacity-100"}
            `}
            /> */}
            {/* вода left */}
            <div
            className={`
                absolute inset-0
                ${on === "telegram" ? "animate-fill-down" : "animate-fill-up"}
            `}
            >
            <svg
              className="absolute w-[600px] h-[40px] animate-wave"
              viewBox="0 0 300 300"
              preserveAspectRatio="none"
            >
              <path
                fill="var(--green)"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              />
            </svg>
            </div>
            <span className="z-10 relative">
                {!isMobile ? leftText : <Image width={70} height={60} src={"/images/" + leftImage} alt={leftImage} className="!w-[20px] !h-[15px]" quality={100} />}
            </span>
          </span>

          {/* правый текст */}
          <span
            onClick={() => setOn("telegram")}
            className={`
              relative overflow-hidden transition-all duration-300 ease-out border-1 border-solid rounded-e-4xl overflow-hidden flex items-center justify-center px-20 max-[481px]:px-0 bg-linear-to-r from-[#2D2D2D] to-[#141414]
              ${on === "telegram" ? "border-white" : "border-black"}
            `}
          >
          {/* <span
            className={`
              absolute top-0 left-0 w-full h-full z-10 transition-all duration-200 rounded-e-4xl rounded-s-lg bg-linear-to-r to-[#19A9DE0] from-[rgba(20,_20,_20,_0.8)] from-15%
              ${on === "telegram" ? "opacity-100" : "opacity-0 !duration-[2.5s]"}
              `}
          /> */}
            {/* вода right */}
            <div
            className={`
                absolute inset-0
                ${on === "telegram" ? "animate-fill-up" : "animate-fill-down"}
            `}
            >
            <svg
                className="absolute w-[600px] h-[40px] animate-wave"
                viewBox="0 0 300 300"
                preserveAspectRatio="none"
            >
                <path
                fill="#19A9DE"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                />
            </svg>
            </div>
            <span className="z-10 relative">
                {!isMobile ? rightText : <Image width={100} height={90} src={"/images/" + rightImage} alt={rightImage} className="!w-[20px] !h-[15px]" quality={100} />}
            </span>
          </span>
        </span>
        {/* <span className={`thumb z-11 ${on === "telegram" ? 'on' : ''}`} /> */}
      </span>
    </div>
  );
}