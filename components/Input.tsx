import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
import Icon from "./Icon";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    hint?: string;
    hintWrap?: boolean;
    placeholder?: string;
    value: string | number | readonly string[];
    setValue: Dispatch<SetStateAction<string>>
}

export default function Input({ type, hint, placeholder, value, setValue, hintWrap=false }:InputProps) {

    return (
        <div className="w-full bg-(--black) rounded-2xl grid grid-cols-[60%_40%] gap-5 pl-5 items-center justify-between min-h-[62px]">
            <input
            type={type}
            placeholder={placeholder}
            className="placeholder:text-[#686868] text-white outline-none h-full !font-(family-name:--manrope-regular)"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
            {hint &&
            (!hintWrap ?
            <span className="mr-5 text-[#686868] text-[10px]">{hint}</span>
            :
            <span className="rounded-full bg-[#D9D9D9] px-2 py-2.5 flex justify-between items-center text-[8px] text-black h-4 gap-1 w-fit"><Icon type="question" size={12} />{hint}</span>
            )}
        </div>
    )
}