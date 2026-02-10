"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { useSiteType } from "./SiteTypeContext";
import Modal from "./Modal";
import { useArrayContext } from "./FAQArrayContext";

type DetailsRowProps = {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean[]>>;
  isBackLight: boolean;
}

function DetailsRow({ question, answer, index, open, setOpen, isBackLight }: DetailsRowProps) {
  const { siteType } = useSiteType()
  const [isLight, setIsLight] = useState(true)

  useEffect(()=>{
    if (isLight) {
      setTimeout(()=>setIsLight(false), 200)
    }
  }, [isLight])

  useEffect(()=>{
    if (isBackLight) {
      setTimeout(()=>setIsLight(true), 1300)
    }
  }, [isBackLight])

  return (
    <details
      className="flex items-start gap-4 text-white outline-none border-b-1 border-[#222B3D] pb-4"
      onClick={(e)=>e.stopPropagation()}
    >
      {/* вопрос + иконка */}
      <summary className={`flex-1 list-none grid grid-cols-[2fr_2fr_0.5fr] justify-between gap-10 ${open ? "max-[481px]:grid-cols-[2fr_1fr]" : ""} ${isLight && isBackLight ? `${siteType === "game" ? "bg-(--green)" : "bg-(--blue)"}` : "bg-transparent"}`} onClick={(e)=>e.stopPropagation()}>
        <h2 className="lg:text-lg max-[1025px]:text-base text-(--white) select-none self-center flex flex-col max-[481px]:w-60">
          {question}
          {open ? <p className="relative flex-1 text-[12px] text-(--white) max-[481px]:flex w-60 hidden" dangerouslySetInnerHTML={{ __html: answer}}/> : <div/>}
        </h2>
        {open ? <p className="relative flex-1 lg:text-sm max-[1025px]:text-[9px] text-(--white) flex max-[481px]:hidden" dangerouslySetInnerHTML={{ __html: answer}}/> : <div/>}
        {/* плюс → крестик */}
        <div
          className={`
            grid place-items-center w-7 h-7 shrink-0 cursor-pointer relative max-[481px]:right-10
            transition-transform transition-colors duration-600 rounded-full justify-self-end self-center
            ${open ? (`rotate-45 max-[481px]:!right-0 ${siteType === "game" ? "bg-[#2364FC]" : "bg-[#3CAD6B]"}`) : "rotate-0 bg-[#182236]"}
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
    const { array: firstTwoArr } = useArrayContext()
    const { siteType } = useSiteType()
    const [show, setShow] = useState(false);

    const items = siteType === "telegram" ? [
        {
          question: "Где найти имя пользователя в Telegram?",
          answer: `<p>
              1. Откройте Telegram <br>
              2. Перейдите в настройки <br>
              3. Откройте раздел "Мой профиль" <br>
              4. Посмотрите поле "Имя пользователя" <br><br>

              Если у вас не задано имя пользователя, придумайте и добавьте его в настройках. Без него мы не сможем отправить вам звёзды.
            </p>
            <span id='tutorial' class="z-5 relative cursor-pointer rounded-2xl max-[481px]:absolute max-[481px]:!w-[75px] max-[481px]:left-40 max-[481px]:top-13 lg:!w-[270px] lg:h-20 max-[1025px]:!w-[230px] max-[1025px]:h-15 gap-2 self-center flex flex-col justify-center items-center bg-[#0698D6]">
              <img src='/images/youtube.png' class='select-none lg:w-[50px] max-[1025px]:w-[30px]' />
              <span class='select-none max-[481px]:text-[10px]'>Инструкция</span>
            </span>
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
    :
    [
        {
            question: "Где найти STEAM логин?",
            answer: `
            <p>
              Важно! Логин — это имя, которое вы
                    используете для входа в Steam.
                    Если вы введёте неверный логин, средства будут зачислены другому пользователю.<br><br>
              <a href="https://store.steampowered.com/login/" target="_blank" class="underline">STEAM Логин можно взять тут</a>
            </p>
            <span id='tutorial' class="z-5 relative cursor-pointer rounded-2xl lg:!w-[270px] lg:h-20 max-[481px]:absolute max-[481px]:!w-[75px] max-[481px]:left-40 max-[481px]:top-13 max-[1025px]:!w-[230px] max-[1025px]:h-15 flex flex-col self-center justify-center items-center bg-[#27837E]">
              <img src='/images/youtube.png' class='select-none lg:w-[50px] max-[1025px]:w-[30px]' />
              <span class='select-none max-[481px]:text-[10px]'>Инструкция</span>
            </span>
            `
        },
        {
            question: "Важно. Требования к аккаунту",
            answer: `
            <p>
            Существует перечень требований к аккаунту, при соблюдении которых возможно
            пополнение баланса без ограничений. <br><br>

            Страна вашего аккаунта должна быть одной из стран СНГ. Поддерживаются Казахстан,
            Узбекистан, Кыргызстан, Россия и другие страны СНГ. <br><br>

            Если аккаунт зарегистрирован в Китае, Турции или других странах вне СНГ, пополнение
            будет недоступно.
            </p>
            `
        },
        {
            question: "Прочитайте этот гайд при первом пополнении нового аккаунта Steam",
            answer: `
            <p>
            Если вы пополняете Steam впервые, валюта аккаунта может смениться на доллары, евро
            или другую валюту, а регион аккаунта будет изменен автоматически. <br><br>
            Чтобы сохранить текущий регион и валюту аккаунта, следуйте инструкции ниже.
            </p>
            `
        },
        {
            question: "Как правильно пополнить Steam, если аккаунт новый",
            answer: `
            <p>
              <ol>
                <li>Зайдите в профиль Steam и выберите пункт <b>«Активировать подарочную карту».</b></li>
                <li>Введите любой тестовый код, например <b>Steam-Zapravka-00000</b>, и нажмите <b>«Активировать»</b>.</li>
                <li>Добавьте бесплатную игру в библиотеку через телефон, используя мобильное приложение или браузер.</li>
                <li>Проверьте валюту аккаунта и убедитесь, что отображаются ₽ или <b>₸</b>.</li>
                <li>После этого пополняйте баланс через <b>Steam Zapravka</b>.</li>
              </ol><br><br>
              <span>
              <b>Важно:</b> если пополнить баланс без выполнения этих действий, Steam может
              автоматически изменить регион и валюту. Вернуть правильный регион позже сложно и
              обычно возможно только через поддержку Steam.
              </span>
            </p>
            `
        },
        {
          question: "У меня новый аккаунт Steam или аккаунт без пополнений",
          answer: `
          Если у вас новый аккаунт Steam или баланс ранее никогда не пополнялся, обязательно
          ознакомьтесь с инструкцией перед первым пополнением.<br><br>
          При первом пополнении нового аккаунта Steam валюта и регион аккаунта могут измениться
          автоматически.<br><br>
          В таком случае цены на внутренние товары Steam будут отображаться в другой валюте,
          например в долларах или евро, а не в валюте вашего региона. Учитывайте это перед
          пополнением.
          `
        },
        {
          question: "Пришла сумма меньше, чем в калькуляторе. Что делать ",
          answer: `
          Для пополнения баланса производится конвертация средств между валютами.<br><br>
          Из-за курсовой разницы итоговая сумма может отличаться от рассчитанной примерно на
          <b>1–5%</b>. Это нормально и не является ошибкой.
          `
        },
        {
          question: "Деньги не пришли на баланс Steam",
          answer: `
          Если вы корректно указали логин Steam, обратите внимание, что логин отличается от
          никнейма. <br><br>
          В большинстве случаев баланс зачисляется мгновенно. <br><br>
          Если средства не поступили в течение <b>10 минут</b>, пожалуйста, обратитесь в техническую
          поддержку через виджет в правом нижнем углу экрана.
          `
        },
        {
          question: "Что такое логин Steam",
          answer: `
          Логин Steam это имя, которое вы вводите при авторизации в аккаунт. <br><br>
          Он уникален и не совпадает с никнеймом, который отображается в профиле. <br><br>
          Не путайте логин и никнейм, так как у разных пользователей никнеймы могут совпадать.
          `
        }
    ]

    const [open, setOpen] = useState<boolean[]>(new Array(items.length).fill(false));
    useEffect(()=>{
      queueMicrotask(()=>setOpen(state=>state.map((_, i)=>i===0 ? true : false )))
    }, [])

    useEffect(()=>{
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(state=>{
        const buf = [...state]
        buf[0] = firstTwoArr[0]
        buf[1] = firstTwoArr[1]

        return buf
      })
    }, [firstTwoArr])

      useEffect(() => {
  let isHandlerAttached = false;
  const handler = () => setShow(true)

  const attachHandler = () => {
    const el = document.getElementById('tutorial');

    if (!el) return false;

    // Проверяем по data-атрибуту
    if (el.dataset.clickHandlerAttached === 'true') {
      return true;
    }

    // Привязываем обработчик
    el.addEventListener('click', handler);
    el.dataset.clickHandlerAttached = 'true';
    isHandlerAttached = true;

    return true;
  };

  setTimeout(() => {
    if (!attachHandler()) {
      // Если элемент не найден, используем MutationObserver
      const observer = new MutationObserver(() => {
        attachHandler();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Очистка
      return () => {
        if (isHandlerAttached) {
          const el = document.getElementById('tutorial');
          if (el) {
            el.removeEventListener('click', handler);
            delete el.dataset.clickHandlerAttached;
          }
        }
        observer.disconnect();
      };
    }
  }, 1000);

  // Очистка
  return () => {
    if (isHandlerAttached) {
      const el = document.getElementById('tutorial');
      if (el) {
        el.removeEventListener('click', handler);
        delete el.dataset.clickHandlerAttached;
      }
    }
  };

  }, [open, show]);

    return (
      <div className="lg:h-220 max-[1025px]:h-230 max-[481px]:h-fit max-[481px]:w-[99%]">
        <section id="faq" className="w-full h-fit border-1 border-(--border) bg-(--section-back) rounded-3xl px-8 py-8 max-[481px]:px-4 max-[481px]:py-5 flex flex-col gap-4">
            <h1 className="lg:text-4xl max-[1025px]:text-2xl max-[481px]:text-xl">Часто задаваемые вопросы</h1>
            {items.map(({ question, answer }, i) => (
                <DetailsRow key={question} index={i} open={open[i]} setOpen={setOpen} question={question} answer={answer} isBackLight={firstTwoArr[i]} />
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