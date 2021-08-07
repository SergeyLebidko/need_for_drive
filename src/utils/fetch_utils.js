import {CITY_LIST_URL, DEFAULT_REQUEST_HEADERS, POINT_LIST_URL} from '../urls';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GEOCODER_API_KEY);
Geocode.setLanguage('ru');
Geocode.setRegion('ru');

export async function loadCityList() {
    return fetch(CITY_LIST_URL, {headers: DEFAULT_REQUEST_HEADERS})
        .then(response => response.json())
        .then(json => json.data);
}

export async function loadPointList() {
    return fetch(POINT_LIST_URL, {headers: DEFAULT_REQUEST_HEADERS})
        .then(response => response.json())
        .then(json => json.data);
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