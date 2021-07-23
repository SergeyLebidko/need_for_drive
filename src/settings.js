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