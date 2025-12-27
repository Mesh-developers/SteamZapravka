interface BacklightProps {
    count: number;
    gap?: number;
    fromColor?: string;
    toColor?: string;
    marginTop?: number
}

export default function Backlight({ count, gap=10, fromColor, toColor, marginTop }:BacklightProps) {
    return (
        <div className={`absolute justify-center mt-35 w-[75%] top-0 left-[50%] -translate-x-[50%] flex flex-col blur-lg`} style={{ gap: gap }} >
            {Array(count).fill(1).map((_, i)=><div key={i} className="w-full h-76 rounded-full bg-radial from-[rgba(70,249,215,1)] to-[rgba(21,181,237,0)] opacity-20 blur-3xl" style={{"--tw-gradient-from": fromColor, "--tw-gradient-to": toColor, marginTop: marginTop} as React.CSSProperties} />)}
        </div>
    )
}