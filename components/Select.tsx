"use client"
import { Dispatch, SetStateAction, useState } from "react";
import Icon from "./Icon";

type SelectProps = {
    placeholder: string;
    options: string[];
    value: string;
    setValue: Dispatch<SetStateAction<string>>
}

export default function Select({ placeholder, options, value, setValue }:SelectProps) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full relative">
            <div onClick={()=>setShow(!show)} className="cursor-pointer w-full bg-(--black) rounded-2xl flex px-3 items-center justify-between min-h-[52px]">
                <span className={value ? "" : "text-[#686868]"}>{value || placeholder}</span>
                <div className={`${show ? "rotate-90" : "rotate-270"} transition-all delay-200 select-none`}>
                    <Icon type="arrow" size={18} />
                </div>
            </div>
            {show &&
            <div className="flex flex-col w-full absolute">
                {options.map((option, i)=><div key={i} onClick={()=>{setValue(option);setShow(false)}} className="w-full flex items-center bg-(--black) rounded-2xl min-h-[45px] pl-3 cursor-pointer">{option}</div>)}
            </div>
            }
        </div>
    )
}