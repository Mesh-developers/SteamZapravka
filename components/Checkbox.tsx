"use client"
import { Dispatch, ReactNode, SetStateAction } from "react";

interface CheckboxProps {
    children: ReactNode;
    checked: boolean;
    setChecked: Dispatch<SetStateAction<boolean>>
}

export default function Checkbox({ children, checked, setChecked }:CheckboxProps) {
  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <label className="flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
      />
        <span
        className={`
          lg:w-6 lg:h-6 w-3 h-3 rounded-sm lg:rounded-lg border-2 border-[#33475D] bg-(--black) p-1 flex items-center justify-center
          transition-all duration-200 ease-in-out max-[481px]:peer-checked:bg-(--green)

        `}
        >
            <div className={`w-full h-full rounded-[2px] peer-checked:bg-(--green) ${checked ? 'bg-(--green)' : 'bg-transparent'}`} />
      </span>
      <span className="lg:ml-3 ml-1 text-white lg:h-fit h-[110%]">
        {children}
      </span>
    </label>
  );
}