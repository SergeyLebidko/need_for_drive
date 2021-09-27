import slide0 from '../content/images/slides/slide-0.png';
import slide1 from '../content/images/slides/slide-1.png';
import slide2 from '../content/images/slides/slide-2.png';
import slide3 from '../content/images/slides/slide-3.png';
import {LANG_PACK} from '../constants/langPack';

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