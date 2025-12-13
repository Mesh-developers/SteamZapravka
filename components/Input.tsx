import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
import Icon from "./Icon";
import Link from "next/link";

interface InputProps {
    type?: HTMLInputTypeAttribute;
    hint?: string;
    hintWrap?: boolean;
    placeholder?: string;
    value: string | number | readonly string[];
    setValue: Dispatch<SetStateAction<string>>|Dispatch<SetStateAction<number>>
}

export default function Input({ type, hint, placeholder, value, setValue, hintWrap=false }:InputProps) {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Проверяем, является ли ввод числом
        if (type === "number") {
        const numValue = inputValue === '' ? 0 : parseInt(inputValue, 10);

        // Проверяем лимит
            if (numValue <= 10000) {
                setValue(Number(inputValue));
            } else {
                // setError('Максимальное значение: 100000');
            }
        } else {
            setValue(inputValue)
        }
    };

    return (
        <div className="w-full bg-(--black) rounded-2xl grid grid-cols-[60%_40%] pl-3 items-center justify-between min-h-[52px]">
            <input
            type={type}
            placeholder={placeholder}
            className="placeholder:text-[#686868] text-white outline-none h-full !font-(family-name:--manrope-regular)"
            value={value}
            onChange={(e)=>handleChange(e)}
            />
            {hint &&
            (!hintWrap ?
            <span className="justify-self-end mr-5 text-[#686868] text-[10px]">{hint}</span>
            :
            <Link href="#faq" className="justify-self-end mr-5 cursor-pointer rounded-full bg-[#8E8E8E] px-2 py-2.5 flex justify-between items-center text-[8px] text-black h-4 gap-1 w-fit"><Icon type="question" size={12} />{hint}</Link>
            )}
        </div>
    )
}