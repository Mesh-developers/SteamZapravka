import { Dispatch, SetStateAction } from "react";
import { useSiteType } from "./SiteTypeContext";
import Icon from "./Icon";

interface ChipsProps {
    value: number;
    values: number[];
    setValue: Dispatch<SetStateAction<number>>;
    setIndex?: Dispatch<SetStateAction<number>>;

}

export default function Chips({ values, setValue, value, setIndex }:ChipsProps) {
    const { siteType } = useSiteType()

    return (
        <div className="w-full flex justify-between gap-2">
            {values.map((val, i)=>(
                <button
                key={i}
                onClick={()=>setIndex ? setIndex(i) : setValue(val)}
                className={`bg-(--black) flex justify-center items-center gap-1 rounded-2xl w-64 lg:h-full md:h-10 lg:text-base md:text-xs ${val === value ? "shadow-[3px_-3px_3px_-1px_#46F9D7,-3px_-3px_3px_-1px_#46F9D7,3px_3px_3px_-1px_#15B5ED,-3px_3px_3px_-1px_#15B5ED]" : ""}`}
                >
                    {siteType === "game" ?
                    `+${val} ₽`
                    :
                    <>
                    {`+${val}`}
                    <Icon type="star" />
                    </>
                    }
                </button>
            ))}
        </div>
    )
}