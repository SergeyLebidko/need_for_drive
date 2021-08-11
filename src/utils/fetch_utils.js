import {
    CITY_LIST_URL,
    DEFAULT_REQUEST_HEADERS,
    POINT_LIST_URL,
    CAR_LIST_URL,
    CATEGORY_LIST_URL,
    RATE_LIST_URL
} from '../urls';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GEOCODER_API_KEY);
Geocode.setLanguage('ru');
Geocode.setRegion('ru');

async function loadData(url) {
    return fetch(url, {headers: DEFAULT_REQUEST_HEADERS})
        .then(response => response.json())
        .then(json => json.data);
}

export async function loadCityList() {
    return loadData(CITY_LIST_URL);
}

export async function loadPointList() {
    return loadData(POINT_LIST_URL);
}

export async function loadCityCoords(city) {
    let geoData = await Geocode.fromAddress(city.name);
    let {lat, lng} = geoData.results[0].geometry.location;
    return {id: city.id, lat, lng};
}

export async function loadPointCoords(point, cityList) {
    let cityOfPoint = cityList.find(city => city.id === point.cityId.id);
    let geoData = await Geocode.fromAddress(cityOfPoint.name + ' ' + point.address);
    let {lat, lng} = geoData.results[0].geometry.location;
    return {id: point.id, lat, lng};
}

// TODO Временно установим ограничение на количество загружаемых машин
export async function loadModelList() {
    return loadData(CAR_LIST_URL + '?limit=15');
}

export async function loadCategoryList() {
    return loadData(CATEGORY_LIST_URL);
}

export function loadRateList() {
    return loadData(RATE_LIST_URL);
}