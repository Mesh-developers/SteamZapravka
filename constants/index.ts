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
}

export const arcRaiders: GameInfo = {
    title: "АRC Raiders",
    mainImage: "arc_raiders_slider.png",
    images: [
        "arc_raiders_slider1.jpg",
        "arc_raiders_slider2.jpg",
        "arc_raiders_slider3.jpg",
        "arc_raiders_slider4.jpg",
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

export const dayZ: GameInfo = {
    title: "DAYZ",
    mainImage: "dayz_slider.png",
    images: [
        "dayz_slider1.png",
        "dayz_slider2.png",
        "dayz_slider3.png",
        "dayz_slider4.png",
    ],
    video: "blob:https://store.steampowered.com/1c921a33-b819-4892-b4e7-e68746c8e97c",
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

export const farmingSimulator: GameInfo = {
    title: "Farming Simulator",
    mainImage: "farming_simulator_slider.png",
    images: [
        "farming_simulator_slider1.png",
        "farming_simulator_slider2.png",
        "farming_simulator_slider3.png",
        "farming_simulator_slider4.png",
    ],
    video: "blob:https://store.steampowered.com/1c921a33-b819-4892-b4e7-e68746c8e97c",
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
    platforms: ["windows", "mac"],
    price: 2799
}