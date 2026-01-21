"use client"

import { FAVOURITES_STORAGE_KEY } from "@/constants";
import useLocalStorage from "@/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const sections = [
    {
      title: 'Игры',
      items: [
        {
          title: 'Arena Breakout',
          image: "arena_brt.png",
          href: "/arena-breakout"
        },
        {
          title: 'PUBG Mobile',
          image: "pubg_icon.png",
          href: "/pubg"
        },
        {
          title: 'Genshin Impact',
          image: "genshin_icon.png",
          href: "/genshin"
        },
        {
          title: 'Honkai Star Rail',
          image: "honkai_icon.png",
          href: "/honkai"
        },
        {
          title: 'Zenless Zone Zero',
          image: "zzz_icon.png",
          href: "/zzz"
        },
        {
          title: 'State of Survival',
          image: "state_survival_icon.png",
          href: "/state-survival"
        },
        {
          title: 'Roblox',
          image: "roblox_icon.png",
          href: "/roblox"
        },
        {
          title: 'Marvel Rivals',
          image: "marvel_rivals_icon.png",
          href: "/marvel-rivals"
        },
        {
          title: 'Mobile Legends: Bang Bang',
          image: "mobile_legends_icon.png",
          href: "/mobile-legends"
        },
        {
          title: 'Delta Force',
          image: "deltaforce_icon.png",
          href: "/deltaforce"
        },
        {
          title: 'Valorant',
          image: "valorant_icon.png",
          href: "/valorant"
        },
        {
          title: 'Free Fire',
          image: "freefire_icon.png",
          href: "/freefire"
        },
      ]
    },
    {
      title: 'Сервисы',
      items: [
        {
          title: 'Chat GPT',
          image: "chatgpt_icon.png",
          href: "/chatgpt"
        },
        {
          title: 'PlayStation',
          image: "playstation_icon.png",
          href: "/playstation"
        },
        {
          title: 'Apple',
          image: "apple_icon.png",
          href: "/apple"
        },
        {
          title: 'Steam',
          image: "steam_icon.png",
          href: "/steam"
        },
        {
          title: 'Battle.net',
          image: "battle_icon.png",
          href: "/battle"
        },
        {
          title: 'Nintendo',
          image: "nintendo_icon.png",
          href: "/nintendo"
        },
      ]
    }
];

type LinkItemProps = {
  isFavourite?: boolean;
  image: string;
  title: string;
  href: string;
  toggleFavourites: ()=>void;
}

function LinkItem({ isFavourite, image, title, href, toggleFavourites }:LinkItemProps) {
  return (
    <li className="flex items-center gap-4 cursor-pointer">
      <div onClick={toggleFavourites}>
        {isFavourite ?
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9766 6.15527C14.1243 6.42359 14.3863 6.61005 14.6885 6.66016L21.2266 7.74414L16.6279 12.2783C16.4004 12.5028 16.2934 12.8226 16.3408 13.1387L17.2832 19.417L11.2891 16.5928C11.0194 16.4659 10.7072 16.4659 10.4375 16.5928L4.44336 19.417L5.38574 13.1387C5.43318 12.8226 5.3262 12.5028 5.09863 12.2783L0.5 7.74414L7.03809 6.66016C7.34025 6.61005 7.60228 6.42359 7.75 6.15527L10.8633 0.501953L13.9766 6.15527Z" fill="#46F9D7" stroke="#334056"/>
        </svg>
        :
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5381 6.39648C13.7596 6.79889 14.1533 7.0781 14.6064 7.15332L20.1758 8.07617L16.2773 11.9219C15.9359 12.2586 15.7755 12.7386 15.8467 13.2129L16.6494 18.5654L11.5029 16.1406L11.3477 16.0781C10.9812 15.953 10.5778 15.9737 10.2236 16.1406L5.07617 18.5654L5.87988 13.2129C5.95105 12.7386 5.7907 12.2586 5.44922 11.9219L1.5498 8.07617L7.12012 7.15332C7.57327 7.0781 7.96693 6.79889 8.18848 6.39648L10.8633 1.53906L13.5381 6.39648Z" stroke="#334056" strokeWidth="2"/>
        </svg>
        }
      </div>
      <Link href={href} className="flex items-center gap-4">
        <Image quality={100} width={25} height={25} src={"/images/" + image} alt="cover" loading="eager" className="object-cover !w-[25px] !h-[25px] rounded-[6px]" />
        <span className="font-(family-name:--manrope-semibold)">{title}</span>
      </Link>
    </li>
  )
}

type SidebarProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({ open, setOpen }:SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sectionOpen, setSectionOpen] = useState(new Array<boolean>(sections.length).fill(false))
  const [favourites, setFavourites] =  useLocalStorage<string[]>(FAVOURITES_STORAGE_KEY, [])

  // Закрытие сайдбара при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mouseover', handleClickOutside);
      // Блокируем прокрутку страницы при открытом сайдбаре
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [open]);


  return (
    <div
    ref={sidebarRef}
    className={`sidebar fixed select-none z-500 top-0 left-0 h-full w-94 bg-[#171D25] shadow-2xl transition-all duration-200 ease-in-out overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-full'}`}
    >
        <div className="p-6">
          {sections.map((section, i)=>
            <ul className="space-y-5 list-none mb-5" key={i}>
              {favourites.map((favourite, j)=>{
                const favouriteItem = section.items.find((item)=>item.title === favourite)
                if (favouriteItem) {
                  return <LinkItem key={j} image={favouriteItem.image} title={favouriteItem.title} href={favouriteItem.href} isFavourite toggleFavourites={()=>setFavourites(state=>state.filter(fav=>fav !== favourite))}  />
                } else {
                  return <div key={j}></div>
                }
              })}
            </ul>
            )}
            {sections.map((section, i) => (
            <div key={i} className={sections.length - 1 === i ? "mb-0" : "mb-8"}>
                <h3 className="text-lg font-(family-name:--bounded-black) mb-4 uppercase tracking-wider flex w-full gap-4 items-center cursor-pointer" onClick={()=>setSectionOpen(state=>{const buf = [...state]; buf[i] = !buf[i]; return buf})}>
                    {section.title}
                    <div className="w-full h-[1px] bg-(--white)" />
                    <svg width="12" height="24" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-200 ${sectionOpen[i] ? "-rotate-90" : ""}`}>
                        <path d="M5 0.5L0.5 5.97169L5 11.4434" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </h3>
                {sectionOpen[i] ?
                <ul className="space-y-5 list-none">
                {section.items.map((item, itemIndex) => favourites.find(fav=>fav === item.title) ? <div key={itemIndex}></div> : (
                    <LinkItem
                    key={itemIndex}
                    href={item.href}
                    title={item.title}
                    image={item.image}
                    toggleFavourites={()=>setFavourites(state=>[...state, item.title])}
                    />
                ))}
                </ul>
                :
                <></>
                }
            </div>
            ))}
        </div>
    </div>
  );
}