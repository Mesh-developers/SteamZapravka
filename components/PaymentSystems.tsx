"use clients"

import { Dispatch, ReactNode, SetStateAction } from "react";

interface PaymentSystemsProps {
    system: string;
    setSystem: Dispatch<SetStateAction<string>>;
    systems: {
        title: string;
        percent: number;
        image: ReactNode
    }[]
}

export default function PaymentSystems({ system, setSystem, systems }:PaymentSystemsProps) {
    const colors = ["var(--green)", "#F7931A"]
    return systems.map((sys, i)=>(
        <button
        key={i}
        className={`relative w-full flex items-center place-content-center bg-(--black) rounded-3xl border-1 col-span-2 ${sys.title === "crypto" ? "opacity-70" : "" }`}
        style={{ borderColor: system === sys.title ? colors[i] : "var(--black)" }}
        onClick={()=>setSystem(sys.title)}
        disabled={sys.title === "crypto"}
        >
            {sys.image}
            {/* <span className={`absolute right-3 top-2 flex place-content-center w-8 text-white text-[10px] rounded-full ${system === sys.title ? "bg-[#158E78]" : "bg-transparent"}`}>{`-${sys.percent}%`}</span> */}
        </button>
    ))
}