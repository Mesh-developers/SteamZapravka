import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
import Icon from "./Icon";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    hint?: string;
    placeholder?: string;
    value: string | number | readonly string[];
    setValue: Dispatch<SetStateAction<string>>

}

export default function Input({ type, hint, placeholder, value, setValue }:InputProps) {

    return (
        <div className="w-full bg-(--black) rounded-3xl grid grid-cols-[60%_40%] gap-5 pl-5 pr-10 items-center justify-between">
            <input
            type={type}
            placeholder={placeholder}
            className="placeholder:text-[#686868] text-white outline-none h-16"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
            {hint && <span className="rounded-full bg-[#D9D9D9] px-2 py-2.5 flex justify-between items-center text-[8px] text-black h-4 gap-1 w-fit"><Icon type="question" size={12} />{hint}</span>}
        </div>
    )
}