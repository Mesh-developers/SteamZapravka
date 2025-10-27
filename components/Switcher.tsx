"use client";
import { useId, useState } from "react";

interface SwitcherProps {
  leftText?: string;   // то, что показываем когда ВЫКЛ
  rightText?: string;  // то, что показываем когда ВКЛ
};

export default function Switcher({ leftText = "OFF", rightText = "ON" }: SwitcherProps) {
  const [on, setOn] = useState(false);
  const gradientId = useId()

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      {/* hidden checkbox */}
      <input
        type="checkbox"
        className="sr-only"
        checked={on}
        onChange={() => setOn((v) => !v)}
      />

      {/* track + wave + текст */}
      <span
        className={`
          w-86 h-8
          relative
          transition-colors duration-500 ease-in-out
        `}
      >

        {/* текст внутри трека */}
        <span className="absolute inset-0 grid grid-cols-2 justify-between text-white font-normal text-sm">
          {/* левый текст */}
          <span
            className={`
              relative transition-all duration-300 ease-out border-1 border-solid rounded-s-4xl rounded-e-lg overflow-hidden flex items-center justify-center px-20 bg-linear-to-l from-[#2D2D2D] to-[#141414]
              ${on ? "border-black" : "border-white"}
            `}
          >
            <span
            className={`
              absolute top-0 left-0 w-full h-full z-10 transition-all duration-600 rounded-e-4xl rounded-s-lg bg-linear-to-l from-[#1414140] to-[rgba(20,_20,_20,_0.9)]
            `}
            />
            {/* вода left */}
            <div
            className={`
                absolute inset-0
                ${on ? "animate-fill-down" : "animate-fill-up"}
            `}
            >
            <svg
              className="absolute w-[600px] h-[40px] animate-wave"
              viewBox="0 0 300 300"
              preserveAspectRatio="none"
            >
              <path
                fill="#19A9DE"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              />
            </svg>
            </div>
            <span className="z-10 relative">
                {leftText}
            </span>
          </span>

          {/* правый текст */}
          <span
            className={`
              relative overflow-hidden transition-all duration-300 ease-out border-1 border-solid rounded-e-4xl rounded-s-lg overflow-hidden flex items-center justify-center px-20 bg-linear-to-r from-[#2D2D2D] to-[#141414]
              ${on ? "border-white" : "border-black"}
            `}
          >
          <span
            className={`
              absolute top-0 left-0 w-full h-full z-10 transition-all duration-600 rounded-e-4xl rounded-s-lg bg-linear-to-r from-[#19A9DE0] to-[rgba(20,_20,_20,_0.9)]
            `}
          />
            {/* вода right */}
            <div
            className={`
                absolute inset-0
                ${on ? "animate-fill-up" : "animate-fill-down"}
            `}
            >
            <svg
                className="absolute w-[600px] h-[40px] animate-wave"
                viewBox="0 0 300 300"
                preserveAspectRatio="none"
            >
                <path
                fill="#19A9DE"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                />
            </svg>
            </div>
            <span className="z-10 relative">
                {rightText}
            </span>
          </span>
        </span>
        {/* <span className="w-4 h-4 bg-red-100 absolute left-[50%] mix-blend-difference" /> */}
        <span className={`thumb ${on ? 'on' : ''}`} />
      </span>
    </label>
  );
}