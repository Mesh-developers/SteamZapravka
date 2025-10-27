import Image from "next/image";
import { CSSProperties, ReactNode } from "react";

interface AdvantageItemProps {
  title: string;
  image: string;
  children: ReactNode;
  style?: CSSProperties;
}

function AdvantageItem({ title, image, children, style }: AdvantageItemProps) {
  return (
    <div className="border border-white rounded-2xl flex flex-col bg-[rgba(10,_14,_20,_0.5)] justify-between h-full">
      {/* верхняя часть */}
      <div className="flex items-start justify-between p-4">
        <div className="relative w-[9rem] h-[8rem] shrink-0">
          <Image
            fill
            src={image}
            alt="icon"
            className="object-contain"
            style={style}
          />
        </div>
        <h3 className="text-[clamp(1.5rem,2.7vw,1.7rem)] font-(--manrope-semibold) leading-tight px-4">
            <div dangerouslySetInnerHTML={{ __html: title.replace(" ", "<br/>") }} />
        </h3>
      </div>

      {/* текст */}
      <div className="pl-6 pb-4 text-[clamp(1.2rem,1.5vw,1.2rem)] leading-[1.5] relative -top-8">
        {children}
      </div>
    </div>
  );
}

export default function Advantages() {
  const items = [
    {
      title: "Мгновенное пополнение",
      image: "/images/rocket.png",
      text: <span><span className="text-[#50EA90]">Залей за 60 секунд!</span> Ни секунды <br/>
        промедления – только любимая <br/>
        игра и твои новые победы!</span>,
      style: { top: "-1.9em", left: "-2.2em" },
    },
    {
      title: "Надежные партнеры",
      image: "/images/lock.png",
      text: <span>Официальное пополнене счета <br/>
        <span className="text-[#50EA90]">Гарантия безопасности</span> ваших <br/>
        данных и платежей!
        </span>,
      style: { top: "-2.6em", left: "-2.72em" },
    },
    {
      title: "Выгодные цены",
      image: "/images/box.png",
      text: <span><span className="text-[#50EA90]">Самая низкая комиссия!</span><br/>
        Никаких скрытых платежей, <br/>
        только прозрачные условия.
        </span>,
      style: { top: "-2em", left: "-2.45em" },
    },
    {
      title: "Розыгрыши и бонусы",
      image: "/images/gift.png",
      text: <span>Пополняйте баланс через нас <br/>
        и <span className="text-[#50EA90]">участвуйте в розыгрышах</span><br/>
        в нашем Telegram-канале!
        </span>,
      style: { top: "-1.8em", left: "-2.3em" },
    },
  ];

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item, i) => (
        <AdvantageItem
          key={i}
          title={item.title}
          image={item.image}
          style={item.style}
        >
          {item.text}
        </AdvantageItem>
      ))}
    </section>
  );
}