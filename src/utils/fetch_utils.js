import {
    CITY_LIST_URL,
    DEFAULT_REQUEST_HEADERS,
    POINT_LIST_URL,
    CAR_LIST_URL,
    CATEGORY_LIST_URL,
    RATE_LIST_URL,
    STATUS_LIST_URL,
    ORDER_URL
} from '../urls';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GEOCODER_API_KEY);
Geocode.setLanguage('ru');
Geocode.setRegion('ru');

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

export async function loadCityList() {
    return loadData(CITY_LIST_URL);
}

export async function loadPointList() {
    return loadData(POINT_LIST_URL);
}

export async function loadCityCoords(city) {
    const geoData = await Geocode.fromAddress(city.name);
    const {lat, lng} = geoData.results[0].geometry.location;
    return {id: city.id, lat, lng};
}

export async function loadPointCoords(point, cityList) {
    const cityOfPoint = cityList.find(city => city.id === point.cityId.id);
    const geoData = await Geocode.fromAddress(cityOfPoint.name + ' ' + point.address);
    const {lat, lng} = geoData.results[0].geometry.location;
    return {id: point.id, lat, lng};
}

// TODO Временное ограничение на количество загружаемых моделей авто
export async function loadModelList() {
    return loadData(CAR_LIST_URL + '?limit=20');
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