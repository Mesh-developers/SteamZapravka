"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { useSiteType } from "./SiteTypeContext";
import Modal from "./Modal";

function DetailsRow({ question, answer, index, show, setShow, open, setOpen }: { question: string; answer: string; index: number; show: boolean; setShow: Dispatch<SetStateAction<boolean>>; open: boolean; setOpen: Dispatch<SetStateAction<boolean[]>> }) {
  const { siteType } = useSiteType()
  useEffect(() => {
    const el = document.getElementById('telegram_tutorial');

    if (!el) return;
    const handler = ()=>{ setShow(true) }
    el.addEventListener('click', handler);

    return () => el.removeEventListener('click', handler);
  }, [open, show]);

  return (
    <details
      className="flex items-start gap-4 text-white outline-none border-b-1 border-[#222B3D] pb-4"

    >
      {/* вопрос + иконка */}
      <summary className="flex-1 list-none grid grid-cols-[2fr_2fr_0.5fr] justify-between gap-10">
        <h2 className="lg:text-lg md:text-base text-(--white) select-none self-center">{question}</h2>
        {open ? <p className="relative flex-1 lg:text-sm md:text-[9px] text-(--white) flex" dangerouslySetInnerHTML={{ __html: answer}}/> : <div/>}
        {/* плюс → крестик */}
        <div
          className={`
            grid place-items-center w-7 h-7 shrink-0 cursor-pointer
            transition-all duration-600 rounded-full justify-self-end self-center
            ${open ? (`rotate-45 ${siteType === "game" ? "bg-[#2364FC]" : "bg-[#3CAD6B]"}`) : "rotate-0 bg-[#182236]"}
          `}
        onClick={()=>setOpen(state=>{
          const buf = new Array(state.length).fill(false)
          buf[index] = !open

          return buf
        })}
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
        </div>
      </summary>

    </details>
  );
}

export default function FAQ() {
    const { siteType } = useSiteType()
    const [show, setShow] = useState(false);

    const items = [
        {
            question: siteType === "game" ? "Где найти STEAM логин?" : "Где найти имя пользователя в Telegram?",
            answer: siteType === "game" ?
            `
            <p>
              Важно! Логин — это имя, которое вы
                    используете для входа в Steam.
                    Если вы введёте неверный логин, средства будут зачислены другому пользователю.<br><br>
              <a href="https://store.steampowered.com/login/" target="_blank" class="underline">STEAM Логин можно взять тут</a>
            </p>
            <div id='telegram_tutorial' class="cursor-pointer rounded-2xl lg:!w-[270px] lg:h-20 md:!w-[230px] md:h-15 flex flex-col self-center justify-center items-center bg-[#27837E]">
              <img src='/images/youtube.png' class='lg:w-[50px] md:w-[30px]' />
              <span class='select-none'>Инструкция</span>
            </div>
            `
            :`<p>
                    1. Откройте Telegram <br>
                    2. Перейдите в настройки <br>
                    3. Откройте раздел "Мой профиль" <br>
                    4. Посмотрите поле "Имя пользователя" <br><br>

                    Если у вас не задано имя пользователя, придумайте и добавьте его в настройках. Без него мы не сможем отправить вам звёзды.
                  </p>
                    <div id='telegram_tutorial' class="cursor-pointer rounded-2xl lg:!w-[270px] lg:h-20 md:!w-[230px] md:h-15 gap-2 self-center flex flex-col justify-center items-center bg-[#0698D6]">
                      <img src='/images/youtube.png' class='lg:w-[50px] md:w-[30px]' />
                      <span class='select-none'>Инструкция</span>
                    </div>
                    `
        },
        {
            question: "Как быстро приходят звёзды?",
            answer: "Звёзды поступают в течение 2 минут после подтверждения оплаты. Иногда пополнение может занять больше времени из-за высокой нагрузки на сервера Telegram."
        },
        {
            question: "В каком виде приходят звёзды?",
            answer: "На ваш аккаунт приходит подарок от неизвестного пользователя. Это и есть звёзды, которые сразу оказываются на вашем балансе."
        },
        {
            question: "Что делать, если звёзды не пришли?",
            answer: "Если звёзды не поступили, обратитесь в нашу службу поддержки. Напишите в личные сообщения аккаунту, указанному на сайте, и укажите ваше имя пользователя в Telegram и сумму пополнения."
        },
        {
            question: "Можно ли менять имя пользователя в процессе покупки?",
            answer: "Нет, менять или удалять имя пользователя Telegram после ввода на сайте запрещено до момента зачисления звёзд. Если вы всё же изменили имя, напишите в поддержку, указав старое имя пользователя."
        },
        {
            question: "Могу ли я купить звёзды другому человеку?",
            answer: "Да, вы можете купить звёзды для другого аккаунта. После покупки уточните у получателя, пришли ли ему звёзды. Не переводите звёзды незнакомым людям, если вас об этом просят как оплату за товары или услуги."
        },
        {
            question: "Есть ли ограничения на количество покупаемых звёзд?",
            answer: "Да, на нашем сайте можно купить от 50 до 50 000 звёзд за один раз. Ограничения могут меняться в зависимости от лимитов платёжной системы."
        },
        {
            question: "Можно ли вернуть звёзды или получить возврат денежных средств?",
            answer: "Если заказ успешно выполнен, возврат средств невозможен. Если возникли проблемы с заказом — обратитесь в поддержку, и мы поможем разобраться."
        },
        {
            question: "Как можно использовать звёзды в Telegram?",
            answer: "Звёзды можно использовать для оплаты товаров и услуг в мини-приложениях и ботах, покупки подарков, подписки на приватные каналы, поддержки авторов и отправки платных сообщений другим пользователям или сообществам."
        },
        {
            question: "Цена на сайте и в платёжной форме не совпадает, что делать?",
            answer: "Цена на звёзды иногда меняется из-за колебаний курса или обновлений условий. Если вы увидели разницу — это значит, что цена изменилась с момента вашего входа на сайт. Вы можете продолжить оплату по новой цене или обновить страницу, чтобы увидеть актуальное предложение."
        },
    ]

    const [open, setOpen] = useState<boolean[]>(new Array(items.length).fill(false));
    useEffect(()=>{
      queueMicrotask(()=>setOpen(state=>state.map((_, i)=>i===0 ? true : false )))
    }, [])

    return (
      <div className="lg:h-230 md:h-270">
        <section id="faq" className="w-full h-fit border-1 border-(--border) bg-(--section-back) rounded-3xl px-8 py-8 flex flex-col gap-4">
            <h1 className="lg:text-4xl md:text-2xl">Часто задаваемые вопросы</h1>
            {items.map(({ question, answer }, i) => (
                <DetailsRow key={question} index={i} open={open[i]} setOpen={setOpen} show={show} setShow={setShow} question={question} answer={answer} />
            ))}
            <Modal open={show} onClose={()=>setShow(false)}>
              <div className="bg-(--section-back) w-fit h-fit p-10 rounded-2xl border-1 border-(--border) flex flex-col gap-2">
                {siteType === "game" ?
                <video src="/video/steam_login.mp4" autoPlay loop />
                :
                <Image width={340} height={600} src="/images/telegram_tutorial.webp" alt="telegram tutorial" />
                }
              </div>
            </Modal>
        </section>
      </div>
    )
}