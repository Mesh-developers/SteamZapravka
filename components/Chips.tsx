import { Dispatch, SetStateAction } from "react";
import { useSiteType } from "./SiteTypeContext";
import Icon from "./Icon";

interface ChipsProps {
    value: string;
    values: string[];
    setValue: Dispatch<SetStateAction<string>>;

}

export default function Chips({ values, setValue, value }:ChipsProps) {
    const { siteType } = useSiteType()

    return (
        <div className="w-full flex justify-between gap-2">
            {values.map((val, i)=>(
                <button
                key={i}
                onClick={()=>setValue(val)}
                className={`bg-(--black) flex justify-center items-center gap-1 rounded-2xl w-64 h-full ${val === value ? "border-1 border-(--green)" : ""}`}
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