import { OrderData } from "@/typings";

export type Platforms = Array<"windows"|"mac">

export type GameInfo = {
    title: string;
    mainImage: string;
    description: string;
    minimal: string[];
    recommended: string[];
    video: string;
    images: string[];
    genres: string[];
    platforms: Platforms;
    price: number;
    link: string;
}

export const arcRaiders: GameInfo = {
    title: "АRC Raiders",
    mainImage: "arc_raiders_slider.webp",
    link: "/arc-raiders",
    images: [
        "arc_raiders_slider1.webp",
        "arc_raiders_slider2.webp",
        "arc_raiders_slider3.webp",
        "arc_raiders_slider4.webp",
    ],
    video: "https://vk.com/video_ext.php?oid=-212496568&id=456249267&hash=20271acdbce58623",
    description: `
    ARC Raiders — многопользовательская игра жанра extraction adventure, действие которой разворачивается в суровом будущем на Земле, атакованной загадочными механическими захватчиками ARC.\n
    В ARC Raiders вас ждет Поверхность, которой заправляют смертоносные машины, и красочный подземный мир Сперанцы. Мастерите, чините и улучшайте экипировку в безопасности собственной мастерской, а затем совершайте вылазки на Поверхность, в разоренный, но все еще прекрасный мир.
    Играйте в одиночку или в группе до трех человек и вступайте в противостояние с нескончаемыми машинами ARC и непредсказуемыми выжившими.
    Только вам решать, каким рейдером вам стать и на что пойти ради победы?
    `,
    minimal: [`
    ОС: Windows 10 or later 64-bit (latest update)
    Процессор: Intel Core i5-6600K or AMD Ryzen R5 1600 processor
    Оперативная память: 12 GB ОЗУ
    Видеокарта: NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 580 / Intel Arc A380
    Directx: версии 12
    Сеть: Широкополосное подключение к интернету
    `],
    recommended: [`
    ОС: Windows 10 or later 64-bit (latest update)
    Процессор: Intel Core i5-9600K or AMD Ryzen 5 3600 processor
    Оперативная память: 16 GB ОЗУ
    Видеокарта: NVIDIA GeForce RTX 2070/AMD Radeon RX 5700 XT/Intel Arc B570
    Directx: версии 12
    Сеть: Широкополосное подключение к интернету
    `],
    genres: ["Выживание", "Шутер"],
    platforms: ["windows"],
    price: 2799
}

export const warhammer: GameInfo = {
    title: "Warhammer 40,000: Space Marine 2",
    mainImage: "warhammer_slider.webp",
    link: "/warhammer",
    images: [
        "warhammer_slider1.webp",
        "warhammer_slider2.webp",
        "warhammer_slider3.webp",
        "warhammer_slider4.webp",
    ],
    video: "https://vk.com/video_ext.php?oid=-192813321&id=456240953&hash=66c657dbf5e6e643",
    description: `
    Warhammer 40000: Space Marine 2 – это ожидаемая экшен-игра в жанре шутера от третьего лица, продолжение оригинальной Warhammer 40,000: Space Marine. Игра погружает игрока в мрачную вселенную Warhammer 40k, где игроки вновь берут на себя роль титулованного космодесантника, капитана Тита, представителя Ордена Ультрамаринов. Основные события игры сосредоточены на противостоянии орд тирантидов — инопланетной расы, стремящейся уничтожить все живое.
    `,
    minimal: [`
    ОС: Windows 10/11 64-разрядная
    Процессор: Intel Core i5-8600K / AMD Ryzen 5 2600X
    Видеокарта: NVIDIA® GeForce® GTX 1060 6 ГБ / AMD RX 580
    Оперативная память: 8 ГБ ОЗУ
    Место на диске: 75 ГБ
    `],
    recommended: [`
    ОС: Windows 10/11 64-разрядная
    Процессор: Intel Core i7-12700 / AMD Ryzen 7 5800X
    Видеокарта: NVIDIA® GeForce® RTX 3070 / AMD RX 6800 XT
    Оперативная память: 16 ГБ ОЗУ
    Место на диске: 75 ГБ
    `],
    genres: ["Шутер", "Приключения"],
    platforms: ["windows"],
    price: 2799
}

export const farmingSimulator: GameInfo = {
    title: "Farming Simulator",
    mainImage: "farming_simulator_slider.webp",
    link: "/farming-simulator",
    images: [
        "farming_simulator_slider1.webp",
        "farming_simulator_slider2.webp",
        "farming_simulator_slider3.webp",
        "farming_simulator_slider4.webp",
    ],
    video: "https://vk.com/video_ext.php?oid=-145852098&id=456239543&hash=75162782f137f9ee",
    description: `
    Farming Simulator 25 – проект, разработанный в жанре симулятора, где мы займёмся развитием сельскохозяйственной фермы, создавая масштабную аграрную компанию. Мир игры огромен и позволит тебе посетить разные локации Европы и Америки. Выращивай культуры, займись животноводством и отправляйся в лес, чтобы и там начать свою деятельность. Важно проявлять свои стратегические навыки, разрабатывать план действий и держать в балансе экономику предприятий, чтобы не нести потери. На выбор предлагается огромное количество аграрных атрибутов и видов техники, которые ты будешь открыть постепенно, по мере развития. Данная часть культовой серии игр была разработана на новом движке, а поэтому приключение станет ещё более интересным и реалистичным. Графика детализирована и проработана до мелочей, что позволит каждому стать полноценным участником игры.
    `,
    minimal: [`
    ОС: Windows 10 (64-bit)
    Процессор: Intel Core i5-6400, AMD Ryzen 5 1400 или лучше
    Оперативная память: 8 ГБ
    Видеокарта: NVIDIA GeForce GTX 1050 Ti, AMD Radeon RX 470 или лучше (но минимум с 3 ГБ видеопамяти)
    DirectX: версия 12
    `,
    `
    ОС: macOS 11.3 или новее
    Процессор: Intel Core i5-6400, Apple M1 или лучше
    Оперативная память: 8 ГБ ОЗУ
    Видеокарта: AMD Radeon RX 470 или Apple M1 или лучше (минимум 3 ГБ VRAM, поддержка DX12)
    Сеть: широкополосное подключение к интернету
    Место на диске: 45 ГБ
    Звуковая карта: Sound Card
    `],
    recommended: [`
    ОС: Windows 10 (64-bit)
    Процессор: Intel Core i7-10700, AMD Ryzen 7 3800X или лучше
    Оперативная память: 12 ГБ
    Видеокарта: NVIDIA GeForce RTX 2070, AMD Radeon RX 5700 XT, Intel Arc A750 или лучше (но минимум с 8 ГБ видеопамяти)
    DirectX: версия 12
    `,
    `
    ОС: macOS 11.3 или новее
    Процессор: Apple M1 Pro или лучше
    Оперативная память: 16 ГБ ОЗУ
    Видеокарта: Apple M1 Pro или лучше
    Сеть: широкополосное подключение к интернету
    Место на диске: 45 ГБ
    Звуковая карта: Sound Card
    `],
    genres: ["Симулятор", "Стратегия"],
    platforms: ["windows", "mac"],
    price: 2799
}

export const monsterHunter: GameInfo = {
    title: "Monster Hunter",
    mainImage: "monster_hunter_slider.webp",
    link: "/monster-hunter",
    images: [
        "monster_hunter_slider1.webp",
        "monster_hunter_slider2.webp",
        "monster_hunter_slider3.webp",
        "monster_hunter_slider4.webp",
    ],
    video: "https://vk.com/video_ext.php?oid=-387766&id=456266656&hash=4160b09299a76c9e",
    description: `
    Monster Hunter: World — это эпическая игра в жанре экшен-RPG, которая погружает игроков в захватывающий мир, населённый гигантскими монстрами и опасными существами. Игрок берёт на себя роль охотника, отправляющегося в Новую Землю, чтобы исследовать её разнообразные экосистемы, изучать повадки монстров и добывать ресурсы для создания мощного снаряжения. Каждый монстр уникален по поведению, атакующим паттернам и слабым местам, что делает каждое сражение непредсказуемым и требует внимательного подхода, стратегии и умения быстро реагировать. Игра сочетает динамичные бои, исследование и сбор ресурсов, превращая охоту на монстров в захватывающее приключение.
    `,
    minimal: [`
    Видеокарта: NVIDIA® GeForce® GTX 1660 (VRAM 6GB) or AMD Radeon™ RX 5500 XT (VRAM 8GB)
    Процессор: Intel® Core™ i5-10400 or Intel® Core™ i3-12100 or AMD Ryzen™ 5 3600
    Оперативная память: 16 GB RAM
    Жесткий диск: 75 GB available space
    Операционная система: Windows®10 (64-bit Required) / Windows®11 (64-bit Required)
    DirectX: Version 12
    `],
    recommended: [`
    Видеокарта: NVIDIA® GeForce® RTX 2060 Super (VRAM 8GB) or AMD Radeon™ RX 6600 (VRAM 8GB)
    Процессор: Intel® Core™ i5-10400 or Intel® Core™ i3-12100 or AMD Ryzen™ 5 3600
    Оперативная память: 16 GB RAM
    Жесткий диск: 75 GB available space
    Операционная система: Windows®10 (64-bit Required) / Windows®11 (64-bit Required)
    DirectX: Version 12
    `],
    genres: ["RPG", "Action"],
    platforms: ["windows"],
    price: 2799
}

const APP_PREFIX = "zapravka"

export const ORDER_STORAGE_KEY = `${APP_PREFIX}_order_data`
export const FAVOURITES_STORAGE_KEY = `${APP_PREFIX}_favourites`

export const initialOrder: OrderData = {id: "00000000000", name: "Какой-то заказ", amount: 0, email: "support@steamzapravka.io", paymentSystem: "SBP", href: "" }

export const TERMS_ERROR_TEXT = "Вы не согласились с условиями площадки!"

export const STEAM_COMMISSION = 8;