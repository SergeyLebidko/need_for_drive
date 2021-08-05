import * as act from './actions';
import {
    RUS,
    ENG,
    GEO_API_URL,
    TAB_ITEMS_DATA,
    CATEGORY_LIST,
    MODEL_LIST,
    COLOR_LIST,
    RATE_LIST,
    OPTION_LIST
} from '../settings';
import {loadCityList, loadPointList} from '../utils';

// Создатель действия для установки языка
export function setLang(lang) {
    return {
        type: act.SET_LANG,
        lang
    }
}

// Создатель действия для определения города пользователя (по ip)
export function loadCity(lang) {
    return async dispatch => {
        const langMap = {[RUS]: 'ru', [ENG]: 'en'};
        const url = `${GEO_API_URL}?${new URLSearchParams({language: langMap[lang]}).toString()}`;
        const options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + process.env.REACT_APP_DADATA_API_KEY
            }
        }

        // При возникновении ошибок - выводим в консоль диагностическое сообщение
        try {
            let response = await fetch(url, options);
            let json = await response.json();

            if (json.location) {
                dispatch(setCity(json.location.data.city));
                return;
            }
            console.error('Не удалось определить город. Сервис вернул пустой объект, либо данные некорректны');
        } catch (err) {
            console.error('Ошибка при определении города: ', err.message);
        }
    }
}

// Создатель действий для установки города
export function setCity(city) {
    return {
        type: act.SET_CITY,
        city
    }
}

// Создатель действия для установки данных слайдера
export function setSliderData(sliderData) {
    return {
        type: act.SET_SLIDER_DATA,
        sliderData
    }
}

// Создатель действия для установки списка вкладок страницы оформления заказа
export function setTabItemsData(tabItemsData) {
    return {
        type: act.SET_TAB_ITEMS_DATA,
        tabItemsData
    }
}

// Создатель действия для установки списка категорий
export function setCategoryList(categoryList) {
    return {
        type: act.SET_CATEGORY_LIST,
        categoryList
    }
}

// Создатель действия для установки списка моделей авто
export function setModelList(modelList) {
    return {
        type: act.SET_MODEL_LIST,
        modelList
    }
}

/*
  Создатель действия для установки списка цветов выбранного автомобиля.
  TODO При реализации логики, рассмотреть необходимость удаления или сохранения этой функции.
  Возможно, данные списка цветов будет рациональнее получать из объекта, соответствующего выбранному автомобилю. Сейчас
  этот код нужен для тестирования верстки.
*/
export function setColorList(colorList) {
    return {
        type: act.SET_COLOR_LIST,
        colorList
    }
}

// Создатель действия для установки списка тарифов
export function setRateList(rateList) {
    return {
        type: act.SET_RATE_LIST,
        rateList
    }
}

// Создатель действия для установки списка доступных дополнительных опций
export function setOptionList(optionList) {
    return {
        type: act.SET_OPTION_LIST,
        optionList
    }
}

// Функция для отображения модального окна
export function showModal() {
    return {
        type: act.SHOW_MODAL
    }
}

// Функция для скрытия модального окна
export function hideModal() {
    return {
        type: act.HIDE_MODAL
    }
}

// Функция инициализирует все данные, необходимые для страницы создания заказа
export function loadOrderCreatorData() {
    return async dispatch => {
        dispatch(setTabItemsData(TAB_ITEMS_DATA));
        dispatch(setCategoryList(CATEGORY_LIST));
        dispatch(setModelList(MODEL_LIST));
        dispatch(setColorList(COLOR_LIST));
        dispatch(setRateList(RATE_LIST));
        dispatch(setOptionList(OPTION_LIST));

        // Загружаем списки городов и точек авто
        let _cityList = await loadCityList();
        let _pointList = await loadPointList();

        // Отсекаем города, не имеющие поинтов
        _cityList = _cityList.filter(city => {
            let point = _pointList.find(point => point.cityId && point.cityId.id === city.id);
            return !!point;
        });

        // Отсекаем поинты, не привязанные ни к одному городу
        _pointList = _pointList.filter(point => {
            let city = _cityList.find(city => point.cityId && point.cityId.id === city.id);
            return !!city;
        });

        console.log('Список городов', _cityList);
        console.log('Список местоположений', _pointList);
    }
}

// Функция - инициализатор объекта заказа
export function initOrder(order) {
    return {
        type: act.INIT_ORDER,
        order
    }
}