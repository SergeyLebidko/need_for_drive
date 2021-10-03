import {
    CITY_LIST_URL,
    DEFAULT_REQUEST_HEADERS,
    POINT_LIST_URL,
    CAR_LIST_URL,
    CATEGORY_LIST_URL,
    RATE_LIST_URL,
    STATUS_LIST_URL,
    ORDER_URL,
    YANDEX_MAP_API_URL
} from '../constants/urls';

async function executeFetch(url, options) {
    try {
        return await fetch(url, options);
    } catch (err) {
        return Promise.reject({httpStatus: '', httpText: err.message});
    }
}

async function extractData(response) {
    if (!response.ok) {
        const text = await response.text();
        return Promise.reject({httpStatus: response.status, httpText: text});
    }
    const json = await response.json();
    return json.data;
}

async function loadData(url) {
    const response = await executeFetch(url, {headers: DEFAULT_REQUEST_HEADERS});
    return await extractData(response);
}

async function sendData(url, method, data) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...DEFAULT_REQUEST_HEADERS
        },
        body: JSON.stringify(data)
    }
    const response = await executeFetch(url, options);
    return await extractData(response);
}

export async function loadYandexMapApi() {
    return new Promise(resolve => {
        if (window.ymaps) {
            resolve(window.ymaps);
        } else {
            const src = YANDEX_MAP_API_URL;
            const mapScript = document.createElement('script');
            mapScript.src = src;
            mapScript.async = true;
            mapScript.onload = () => window.ymaps.ready(() => resolve(window.ymaps));
            document.body.appendChild(mapScript);
        }
    });
}

export async function loadCityList() {
    return loadData(CITY_LIST_URL);
}

export async function loadPointList() {
    return loadData(POINT_LIST_URL);
}

export async function loadCityCoords(city) {
    const ymaps = await loadYandexMapApi();
    const geocodeResult = await ymaps.geocode(city.name);
    const [lat, lng] = geocodeResult.geoObjects.get(0).geometry._coordinates;
    return {id: city.id, lat, lng};
}

export async function loadPointCoords(point, cityList) {
    const cityOfPoint = cityList.find(city => city.id === point.cityId.id);
    const ymaps = await loadYandexMapApi();
    const geocodeResult = await ymaps.geocode(cityOfPoint.name + ' ' + point.address);
    const [lat, lng] = geocodeResult.geoObjects.get(0).geometry._coordinates;
    return {id: point.id, lat, lng};
}

export async function loadModelList() {
    return loadData(CAR_LIST_URL);
}

export async function loadCategoryList() {
    return loadData(CATEGORY_LIST_URL);
}

export function loadRateList() {
    return loadData(RATE_LIST_URL);
}

export async function loadStatusList() {
    return loadData(STATUS_LIST_URL);
}

export async function sendOrder(order) {
    const {method, url} = ('id' in order) ?
        {
            method: 'PUT',
            url: `${ORDER_URL}/${order.id}`
        }
        :
        {
            method: 'POST',
            url: ORDER_URL
        };
    return sendData(url, method, order);
}

export async function loadOrder(orderId) {
    return loadData(ORDER_URL + `/${orderId}`);
}

export const getErrText = err => err.httpStatus === '' ? err.httpText : `${err.httpStatus} ${err.httpText}`;