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
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
        <span
        className={`
          lg:w-6 lg:h-6 md:w-3 md:h-3 md:rounded-sm lg:rounded-lg border-2 border-[#33475D] bg-(--black) p-1 flex items-center justify-center
          transition-all duration-200 ease-in-out

        `}
        >
            <div className={`w-full h-full rounded-[2px] ${checked ? 'bg-(--green)' : 'bg-transparent'}`} />
      </span>
      <span className="lg:ml-3 md:ml-1 text-white lg:h-fit md:h-[120%]">
        {children}
      </span>
    </label>
  );
}