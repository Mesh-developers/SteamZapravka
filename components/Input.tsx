/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, ReactNode, SetStateAction } from "react"
import Icon from "./Icon";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    hint?: string;
    hintWrap?: boolean;
    placeholder?: string;
    value: string | number | readonly string[];
    setValue: Dispatch<SetStateAction<string>>|Dispatch<SetStateAction<number>>
    renderHint?: ReactNode;
    isWarning?: boolean;
    isSuccess?: boolean;
    disabled?: boolean;
    filterHandler?: (str: string)=>boolean;
}

export default function Input({ type, hint, placeholder, value, setValue, renderHint, filterHandler, isWarning=false, isSuccess=false, hintWrap=false, disabled=false }:InputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (filterHandler) {
            if (!filterHandler(inputValue))
                return
        }
        if (type === "number") {
        const numValue = inputValue === ''  ? 0 : parseInt(inputValue, 10);
            if (numValue <= 10000) {
                // @ts-expect-error
                (setValue as Dispatch<SetStateAction<number>>)(numValue === 0 ? "" : Number(inputValue));
            }
        } else {
            (setValue as Dispatch<SetStateAction<string>>)(inputValue)
        }
    };

    return (
        <div className={`w-full bg-(--black) rounded-2xl grid grid-cols-[60%_40%] pl-3 items-center justify-between min-h-[42px] lg:min-h-[52px] ${disabled ? "brightness-60" : ""} ${isWarning ? "shadow-[2px_2px_4px_0px_#D40101,-2px_2px_4px_0px_#D40101,2px_-2px_4px_0px_#D44001,-2px_-2px_4px_0px_#D44001]" : ""} ${isSuccess ? "shadow-[2px_2px_4px_0px_#15B5ED,-2px_2px_4px_0px_#15B5ED,2px_-2px_4px_0px_#46F9D7,-2px_-2px_4px_0px_#46F9D7]" : ""}`}>
            <input
            type={type}
            placeholder={placeholder}
            className="placeholder:text-[#686868] text-white outline-none h-full !font-(family-name:--manrope-regular)"
            value={value}
            onChange={(e)=>handleChange(e)}
            onKeyDown={type === "number" ? (e) => {
                if (e.key === '+' || e.key === '-' || e.key === 'e' || e.key === 'E') {
                e.preventDefault()
                }
            } : ()=>{}}
            disabled={disabled}
            />
            {renderHint}
            {hint && !renderHint &&
            (!hintWrap ?
            <span className="justify-self-end lg:mr-5 mr-2 text-[#686868] text-[10px]">{hint}</span>
            :
            <a href="https://store.steampowered.com/account/" className="justify-self-end lg:mr-5 mr-2 cursor-pointer rounded-full bg-[#8E8E8E] px-2 py-2.5 flex justify-between items-center text-[8px] text-black h-4 gap-1 w-fit" target="_blank"><Icon type="question" size={12} />{hint}</a>
            )}
        </div>
    )
}