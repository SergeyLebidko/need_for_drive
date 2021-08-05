import slide0 from './content/images/slides/slide-0.png';
import slide1 from './content/images/slides/slide-1.png';
import slide2 from './content/images/slides/slide-2.png';
import slide3 from './content/images/slides/slide-3.png';
import {DEFAULT_REQUEST_HEADERS, CITY_LIST_URL} from './urls';
import {LANG_PACK} from './langPack';

export function createSliderData(lang) {
    const SLIDE_COUNT = 4;
    const slidersImages = [slide0, slide1, slide2, slide3];
    const slidersButtonColors = ['dark_green', 'teal', 'brown', 'purple'];
    const {slidersText, slideButtonText} = LANG_PACK['Slider'][lang];
    const slidersData = [];

    for (let index = 0; index < SLIDE_COUNT; index++) slidersData.push({
        ...slidersText[index],
        image: slidersImages[index],
        buttonText: slideButtonText,
        buttonColor: slidersButtonColors[index]
    });

    return slidersData;
}

export function getFormattedPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price);
}

export function getRandomString(size = 16) {
    const CHARS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    let result = [];
    for (let index = 0; index < size; index++) {
        result.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }
    return result.join('');
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export async function loadCityList() {
    return fetch(CITY_LIST_URL, {headers: DEFAULT_REQUEST_HEADERS})
        .then(response => response.json())
        .then(json => json.data);
}