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
        className={`relative flex items-center place-content-center bg-(--black) rounded-3xl border-1 ${system === sys.title ? "border-(--green)" : "border-black" }`}
        onClick={()=>setSystem(sys.title)}
        >
            {sys.image}
            <span className={`absolute right-3 top-2 flex place-content-center w-8 text-white text-[10px] rounded-full ${system === sys.title ? "bg-[#158E78]" : "bg-transparent"}`}>{`-${sys.percent}%`}</span>
        </button>
    ))
}