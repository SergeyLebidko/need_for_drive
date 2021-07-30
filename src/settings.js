import car1 from './content/images/car1.png';
import car2 from './content/images/car2.png';
import car3 from './content/images/car3.png';
import car4 from './content/images/car4.png';
import car5 from './content/images/car5.png';
import car6 from './content/images/car6.png';
import car7 from './content/images/car7.png';
import car8 from './content/images/car8.png';

// Адрес сервиса геолокации и ключ api для него
export const GEO_API_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address';
export const GEO_API_KEY = 'b322506c01afde93ab2d13340a578f4e55814d53';

// Константа для ключа получения языка из local storage
export const LS_LANG_KEY = 'lang_key'

// Константы для хранения текущего языка
export const RUS = 'ru';
export const ENG = 'en';

export const LANG_SWITCHER_MAP = {
    [RUS]: ENG,
    [ENG]: RUS
}

// Константы для работы с вкладками при создании заказа
export const LOCATION_MODE = 'lm';
export const MODEL_MODE = 'mm';
export const EXTRA_MODE = 'em';
export const TOTAL_MODE = 'tm';

// Список вкладок формы создания заказа
export const TAB_TITLES_DATA = [
    {
        title: 'Местоположение',
        boundMode: LOCATION_MODE
    },
    {
        title: 'Модель',
        boundMode: MODEL_MODE
    },
    {
        title: 'Дополнительно',
        boundMode: EXTRA_MODE
    },
    {
        title: 'Итого',
        boundMode: TOTAL_MODE
    }
];

/*
  TODO Удалить при реализации функциональности.
  Это список категорий автомобилей. Сейчас он нужен для тестирования верстки. При реализации функциональности данные
  категорий будут запрашиваться с сервера и этот список должен быть удален.
*/
export const CATEGORY_LIST = ['все модели', 'эконом+', 'Спорт', 'Супер-Эконом', 'Люкс'];

/*
  TODO Удалить при реализации функциональности.
  Это список моделей автомобилей. Сейчас он нужен для тестирования верстки. При реализации функциональности эти данные
  будут запрашиваться с сервера и необходимость в этом списке отпадёт.
*/
export const MODEL_LIST = [
    {
        title: 'SANTA FE',
        costStart: 10000,
        costEnd: 32000,
        file: car1
    },
    {
        title: 'SONATA',
        costStart: 8000,
        costEnd: 25000,
        file: car2
    },
    {
        title: 'CRETA',
        costStart: 5000,
        costEnd: 15000,
        file: car3
    },
    {
        title: 'TESLA CYBERTRACK',
        costStart: 15000,
        costEnd: 40000,
        file: car4
    },
    {
        title: 'TIGUAN',
        costStart: 11000,
        costEnd: 20000,
        file: car5
    },
    {
        title: 'CAYENNE',
        costStart: 25000,
        costEnd: 50000,
        file: car6
    },
    {
        title: 'QASHQAI',
        costStart: 15000,
        costEnd: 35500,
        file: car7
    },
    {
        title: 'X-TRAIL',
        costStart: 17300,
        costEnd: 28250,
        file: car8
    }
]

/*
  TODO Удалить при реализации функциональности.
  Это список цветов автомобилей. Сейчас он нужен для тестирования верстки. При реализации функциональности эти данные
  будут изменяться в зависимости от выбранного пользователем автомобиля (для некоторых автомобилей они могут даже
  отсутствовать).
*/
export const COLOR_LIST = ['любой', 'Черный', 'Белый', 'красный', 'Серый', 'металлический', 'Синий'];