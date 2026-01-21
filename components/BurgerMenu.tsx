"use client";

import { Dispatch, SetStateAction } from "react";

type BurgerMenuProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function BurgerMenu({ open, setOpen }:BurgerMenuProps) {

  return (
    <>
    <button
      onClick={() => setOpen((v) => !v)}
      className="group flex flex-col gap-[6px] w-8 h-8 items-center justify-center"
      aria-label="Меню"
    >
      {/* три полоски */}
      <span
        className={`
          w-6 h-0.5 rounded-full bg-white
          transition-all duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-[8px]" : ""}
        `}
      />
      <span
        className={`
          w-6 h-0.5 rounded-full bg-white
          transition-all duration-300 ease-in-out
          ${open ? "opacity-0 scale-0" : ""}
        `}
      />
      <span
        className={`
          w-6 h-0.5 rounded-full bg-white
          transition-all duration-300 ease-in-out
          ${open ? "-rotate-45 -translate-y-[8px]" : ""}
        `}
      />
    </button>
    </>
  );
}