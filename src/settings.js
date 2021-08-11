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

export const OPTION_LIST = [
    {
        price: 500,
        name: 'Полный бак',
        field: 'isFullTank',
        value: false
    },
    {
        price: 200,
        name: 'Детское кресло',
        field: 'isNeedChildChair',
        value: false
    },
    {
        price: 1600,
        name: 'Правый руль',
        field: `isRightWheel`,
        value: false
    }
];