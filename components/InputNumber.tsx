"use client"
import { Dispatch, SetStateAction } from "react";

interface InputNumberProps {
    image: string;
    value: string;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    withoutCounter?: boolean;
}

export default function InputNumber({ image, value, count, setCount, withoutCounter=false }:InputNumberProps) {
    return (
        <div className="bg-(--black) w-full h-16 flex gap-3 pl-2 pr-6 py-2 rounded-3xl items-center justify-between font-(family-name:--bounded-regular)">
            <div className="flex w-fit h-full items-center gap-3">
                <div className="bg-center bg-no-repeat bg-cover rounded-2xl w-16 h-full" style={{ backgroundImage: `url('/images/${image}')` }} />
                <span className="bg-(--black)">{value}</span>
            </div>
            {withoutCounter ?
            <div />
            :
            <div className="flex gap-2 items-center">
                <button className="select-none" onClick={()=>setCount(state=>state-1 === 0 ? 1 : state-1)}>–</button>
                <span>{count}</span>
                <button className="select-none" onClick={()=>setCount(state=>state+1)}>+</button>
            </div>
            }
        </div>
    )
}