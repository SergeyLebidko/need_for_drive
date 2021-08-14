import * as act from './actions';
import {
    RUS,
    ENG,
    GEO_API_URL,
    TAB_ITEMS_DATA,
    OPTION_LIST,
    NEW_ORDER_STATUS_ID,
    CANCELED_ORDER_STATUS_ID
} from '../settings';
import {
    loadCityList,
    loadPointList,
    loadCityCoords,
    loadPointCoords,
    loadModelList,
    loadCategoryList,
    loadRateList,
    loadStatusList,
    sendOrder as sendOrderData,
    loadOrder
} from '../utils/fetch_utils';

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

// Создатель действия для установки списка статусов заказов
export function setStatusList(statusList) {
    return {
        type: act.SET_STATUS_LIST,
        statusList
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
        // Инициализируем данные с именами вкладок
        dispatch(setTabItemsData(TAB_ITEMS_DATA));

        // Инициализируем заказ как пустой объект
        dispatch(initOrder({}));

        // Загружаем списки городов и точек авто
        let cityList = await loadCityList();
        let pointList = await loadPointList();

        // Отсекаем города, не имеющие поинтов
        cityList = cityList.filter(city => {
            let point = pointList.find(point => point.cityId && point.cityId.id === city.id);
            return !!point;
        });

        // Отсекаем поинты, не привязанные ни к одному городу
        pointList = pointList.filter(point => {
            let city = cityList.find(city => point.cityId && point.cityId.id === city.id);
            return !!city;
        });

        let coords;

        // Создаем список координат городов
        let cityCoords = [];
        for (let city of cityList) {
            coords = await loadCityCoords(city);
            cityCoords.push(coords);
        }

        // Создаем список координат поинтов
        let pointCoords = [];
        for (let point of pointList) {
            coords = await loadPointCoords(point, cityList);
            pointCoords.push(coords);
        }

        dispatch(setCityList(cityList));
        dispatch(setPointList(pointList));
        dispatch(setCityCoords(cityCoords));
        dispatch(setPointCoords(pointCoords));

        // Загружаем список автомобилей
        let modelList = await loadModelList();
        dispatch(setModelList(modelList));

        // Загружаем список категорий авто и отбрасываем категории, для которых нет ни одного автомобиля
        let categoryList = await loadCategoryList();
        categoryList = categoryList.filter(
            category => !!modelList.find(model => model.categoryId ? model.categoryId.id === category.id : false)
        );
        dispatch(setCategoryList(categoryList));

        // Загружаем список тарифов
        let rateList = await loadRateList();
        dispatch(setRateList(rateList));

        // Инициализируем список дополнительных опций
        dispatch(setOptionList(OPTION_LIST));

        // Загружаем список возможных статусов заказов
        let statusList = await loadStatusList();
        dispatch(setStatusList(statusList));
    }
}

// Создатель действия для очистки данных всех вкладок после вкладки Местоположение
export function clearTabsAfterLocation() {
    return dispatch => {
        dispatch(clearOrderModel());
        dispatch(clearTabsAfterModel());
    }
}

// Создатель действия для очистки данных всех после вкладки выбора модели
export function clearTabsAfterModel() {
    return dispatch => {
        dispatch(clearOrderColor());
        dispatch(clearOrderOptions(OPTION_LIST));
        dispatch(clearOrderRate());
        dispatch(clearOrderDateFrom());
        dispatch(clearOrderDateTo());
        dispatch(clearOrderPrice());
    }
}

// Создатель действия для сохранения списка городов
export function setCityList(cityList) {
    return {
        type: act.SET_CITY_LIST,
        cityList
    }
}

// Создатель действия для сохранения списка местоположений
export function setPointList(pointList) {
    return {
        type: act.SET_POINT_LIST,
        pointList
    }
}

// Создатель действия для сохранения списка координат городов
export function setCityCoords(cityCoords) {
    return {
        type: act.SET_CITY_COORDS,
        cityCoords
    }
}

// Создатель действия для сохранения списка координат местоположений
export function setPointCoords(pointCoords) {
    return {
        type: act.SET_POINT_COORDS,
        pointCoords
    }
}

// Создатель действия для инициализации заказа
export function initOrder(order) {
    return {
        type: act.INIT_ORDER,
        order
    }
}

// Создатель действия для установки города в заказе
export function setOrderCity(city) {
    return {
        type: act.SET_ORDER_CITY,
        city
    }
}

// Создатель действия для установки местоположения (point) в заказе
export function setOrderPoint(point) {
    return {
        type: act.SET_ORDER_POINT,
        point
    }
}

// Создатель действия для удаления города из заказа
export function clearOrderCity() {
    return {
        type: act.CLEAR_ORDER_CITY
    }
}

// Создатель действия для удаления местоположения (point) из заказа
export function clearOrderPoint() {
    return {
        type: act.CLEAR_ORDER_POINT
    }
}

// Создатель действия для установки модели авто в заказе
export function setOrderModel(model) {
    return {
        type: act.SET_ORDER_MODEL,
        model
    }
}

// Создатель действия для удаления модели авто из заказа
export function clearOrderModel() {
    return {
        type: act.CLEAR_ORDER_MODEL
    }
}

// Создатель действия для установки выбранного цвета авто
export function setOrderColor(color) {
    return {
        type: act.SET_ORDER_COLOR,
        color
    }
}

// Создатель действия для удаления цвета авто из заказа
export function clearOrderColor() {
    return {
        type: act.CLEAR_ORDER_COLOR
    }
}

// Создатель действия для установки дополнительных опций заказа
export function setOrderOptions(options) {
    return {
        type: act.SET_ORDER_OPTIONS,
        options
    }
}

// Создатель действия для удаления дополнительных опций из заказа
export function clearOrderOptions(options) {
    return {
        type: act.CLEAR_ORDER_OPTIONS,
        options
    }
}

// Создатель действия для установки тарифа в заказе
export function setOrderRate(rate) {
    return {
        type: act.SET_ORDER_RATE,
        rate
    }
}

// Создатель действия для удаления информации о тарифе из заказа
export function clearOrderRate() {
    return {
        type: act.CLEAR_ORDER_RATE
    }
}

// Создатель действия для установки даты и времени начала аренды
export function setOrderDateFrom(date) {
    return {
        type: act.SET_ORDER_DATE_FROM,
        date
    }
}

// Создатель действия для удаления даты и времени начала аренды
export function clearOrderDateFrom() {
    return {
        type: act.CLEAR_ORDER_DATE_FROM
    }
}

// Создатель действия для установки дата и времени окончания аренды
export function setOrderDateTo(date) {
    return {
        type: act.SET_ORDER_DATE_TO,
        date
    }
}

// Создатель действия для удаления даты и времени окончания аренды
export function clearOrderDateTo() {
    return {
        type: act.CLEAR_ORDER_DATE_TO
    }
}

// Создатель действия для установки цены заказа
export function setOrderPrice(price) {
    return {
        type: act.SET_ORDER_PRICE,
        price
    }
}

// Создатель действия для удаления цены заказа
export function clearOrderPrice() {
    return {
        type: act.CLEAR_ORDER_PRICE
    }
}

// Создатель действия для установки статуса заказа
export function setOrderStatus(status) {
    return {
        type: act.SET_ORDER_STATUS,
        status
    }
}

// Создатель действия для отправки заказа
export function sendOrder() {
    return async (dispatch, getState) => {
        // Перед отправкой проставляем заказу статус нового
        let statusList = getState().statusList;
        let newStatus = statusList.find(status => status.id === NEW_ORDER_STATUS_ID);
        dispatch(setOrderStatus(newStatus));

        // Отправляем заказ и возвращаем вызывающему коду его идентификатор
        let order = getState().order;
        let createdOrder = await sendOrderData(order);
        return createdOrder.id;
    }
}

// Создатель действия для загрузки заказа с сервера
export function loadOrderViewerData(orderId) {
    return async dispatch => {
        let statusList = await loadStatusList();
        dispatch(setStatusList(statusList));

        let order;
        try {
            order = await loadOrder(orderId);
        } catch (e) {
            order = {};
        }
        if (order) dispatch(initOrder(order));
    }
}

// Создатель действия для отмены заказа
export function cancelOrder(){
    return async (dispatch, getState) => {
        let canceledStatusObj = getState().statusList.find(status => status.id === CANCELED_ORDER_STATUS_ID);
        dispatch(setOrderStatus(canceledStatusObj));

        let order = getState().order;
        order = await sendOrderData(order);

        dispatch(initOrder(order));
    }
}