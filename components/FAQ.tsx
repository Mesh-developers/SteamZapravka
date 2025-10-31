"use client"

import { useState } from "react";

function DetailsRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="flex items-start gap-4 text-white outline-none border-b-1 border-[#222B3D] pb-4"
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      {/* вопрос + иконка */}
      <summary className="flex-1 cursor-pointer list-none grid grid-cols-[2fr_2fr_0.5fr] justify-between gap-10">
        <h2 className="text-lg">{question}</h2>
        {open ? <p className="flex-1 text-sm text-gray-300">{answer}</p> : <div/>}
        {/* плюс → крестик */}
        <span
          className={`
            grid place-items-center w-7 h-7 shrink-0
            transition-all duration-600 rounded-full justify-self-end
            ${open ? "rotate-45 bg-[#2364FC]" : "rotate-0 bg-[#182236]"}
          `}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current"
          >
            <path d="M8 2V14M2 8H14" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </span>
      </summary>

    </details>
  );
}

export default function FAQ() {
    const items = [
        {
            question: "Как найти свой логин Steam",
            answer: "Открой Steam, а потом закрой, иди работай и зарабатывай деньги нефиг играть уже ващее, а то тупеешь вообще."
        },
        {
            question: "Требования и ограничения при пополнении Steam",
            answer: "Открой Steam, а потом закрой, иди работай и зарабатывай деньги нефиг играть уже ващее, а то тупеешь вообще."
        },
    ]
    return (
        <div id="faq" className="w-full h-76 border-1 border-white bg-[rgba(10,15,25,0.5)] rounded-2xl px-8 py-8 flex flex-col gap-4">
            <h1 className="text-4xl">Часто задаваемые вопросы</h1>
            {items.map(({ question, answer }) => (
                <DetailsRow key={question} question={question} answer={answer} />
            ))}
        </div>
    )
}