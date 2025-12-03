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
          w-6 h-6 rounded-lg border-2 border-[#33475D] bg-(--black) p-1 flex items-center justify-center
          transition-all duration-200 ease-in-out

        `}
        >
            <div className={`w-full h-full rounded-[2px] ${checked ? 'bg-(--green)' : 'bg-transparent'}`} />
      </span>
      <span className="ml-3 text-white">
        {children}
      </span>
    </label>
  );
}