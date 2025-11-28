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
    return systems.map((sys, i)=>(
        <button
        key={i}
        className={`relative w-full min-h-[42px] flex items-center place-content-center bg-(--black) rounded-2xl col-span-2 ${system === sys.title ? "shadow-[3px_-3px_3px_-1px_#46F9D7,-3px_-3px_3px_-1px_#46F9D7,3px_3px_3px_-1px_#15B5ED,-3px_3px_3px_-1px_#15B5ED]" : "brightness-50"}`}
        onClick={()=>setSystem(sys.title)}
        disabled={sys.title === "crypto"}
        >
            {sys.image}
            {/* <span className={`absolute right-3 top-2 flex place-content-center w-8 text-white text-[10px] rounded-full ${system === sys.title ? "bg-[#158E78]" : "bg-transparent"}`}>{`-${sys.percent}%`}</span> */}
        </button>
    ))
}