"use clients"

import { Dispatch, ReactNode, SetStateAction } from "react";
import { useSiteType } from "./SiteTypeContext";

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
    const { siteType } = useSiteType()
    const colors = ["var(--green)", "#F7931A", "#3EAFF7", "#8F4794"]
    return systems.map((sys, i)=>(
        <button
        key={i}
        className={`relative w-full flex items-center place-content-center bg-(--black) rounded-3xl border-1 ${siteType === "telegram" && i === 1 ? "order-3 col-span-2" : ""}`}
        style={{ borderColor: colors[i] }}
        onClick={()=>setSystem(sys.title)}
        >
            {sys.image}
            {/* <span className={`absolute right-3 top-2 flex place-content-center w-8 text-white text-[10px] rounded-full ${system === sys.title ? "bg-[#158E78]" : "bg-transparent"}`}>{`-${sys.percent}%`}</span> */}
        </button>
    ))
}