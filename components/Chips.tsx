import { Dispatch, SetStateAction } from "react";

interface ChipsProps {
    value: string;
    values: string[];
    setValue: Dispatch<SetStateAction<string>>;

}

export default function Chips({ values, setValue, value }:ChipsProps) {
    return (
        <div className="w-full flex justify-between gap-2">
            {values.map((val, i)=>(
                <button
                key={i}
                onClick={()=>setValue(val)}
                className={`bg-(--black) rounded-3xl w-64 h-16 ${val === value ? "border-1 border-(--green)" : ""}`}
                >
                    {`+${val} ₽`}
                </button>
            ))}
        </div>
    )
}