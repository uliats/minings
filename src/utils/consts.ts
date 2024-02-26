import {Substance} from "./types";

export const requestTime = 1000


export const iSubstancesMock:Substance[] = [
    {
        id: 1,
        name: "Геологоразведочные работы",
        description: "Геологическое картирование для определения структуры и состава горных пород",
        status: 1,
        image: "src/assets/1.jpg",
    },
    {
        id: 2,
        name: "Бурение и скважины",
        description: "'Бурение нефтяных и газовых скважин геотермальных скважин угольных шахт",
        status: 1,
        image: "src/assets/2.jpg",
    },
    {
        id: 3,
        name: "Обработка и переработка",
        description: "Обогащение и обработка сырья для извлечения ценных компонентов",
        status: 1,
        image: "src/assets/3.jpg",
    },
    {
        id: 4,
        name: "Горная добыча ",
        description: "Добыча угля и других полезных ископаемых из шахт и карьеров.Добыча минералов, таких как золото, железо, медь и др",
        status: 1,
        image: "src/assets/4.jpg",
    },
    {
        id: 5,
        name: "Экологические исследования и мониторинг ",
        description: "Оценка воздействия на окружающую среду и разработка мер по снижению негативного воздействия",
        status: 1,
        image: "src/assets/5.jpg",
    },
]