// Адрес сервиса геолокации и ключ api для него
export const GEO_API_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address';

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
export const TAB_ITEMS_DATA = [
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
  Это список тарифов. В будущем он будет загружаться с сервера и отсюда его надо будет удалить.
  Сейчас он нужен здесь для тестирования верстки.
*/
export const RATE_LIST = [{name: 'поминутно. 7 руб./мин.'}, {name: 'суточный. 1000 руб./сут.'}, {name: 'недельный. 6999 руб.'}];

export const OPTION_LIST = ['Полный бак, 500 р.', 'Детское кресло, 200 р.', 'Правый руль, 1600 р.'];