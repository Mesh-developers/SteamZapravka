import { ReactNode } from "react"

type MainProps = {
    children: ReactNode;
    classStyle?: string;
}

export default function Main({ children, classStyle }:MainProps) {
    return (
        <main className={`relative z-1 pt-25 my-10 lg:w-[85%] max-w-[1400px] m-auto flex min-h-screen flex-col gap-10 items-start justify-items-start bg-transparent ${classStyle}`}>
            {children}
        </main>
    )
}