import React, {useState} from 'react';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import {ReactComponent as ArrowRight} from '../../content/images/icons/arrow_right.svg';
import {ReactComponent as ArrowLeft} from '../../content/images/icons/arrow_left.svg';
import slide0 from '../../content/images/slides/slide-0.jpg';
import slide1 from '../../content/images/slides/slide-1.jpg';
import slide2 from '../../content/images/slides/slide-2.jpg';
import slide3 from '../../content/images/slides/slide-3.jpg';
import style from './Slider.module.scss';

const slideImages = [slide0, slide1, slide2, slide3];

function getNextIndex(index) {
    return index === (slideImages.length - 1) ? 0 : index + 1;
}

function getPrevIndex(index) {
    return index ? index - 1 : (slideImages.length - 1);
}

function Slider({lang}) {
    let [index, setIndex] = useState(0);
    let {slidersData, moreButton} = LANG_PACK['Slider'][lang];

    let prevSlide = (
        <div
            key={slideImages[getPrevIndex(index)]}
            className={`${style.slider__slide} ${style.prev_slide}`}
            style={{backgroundImage: `url("${slideImages[getPrevIndex(index)]}")`}}
        />
    );
    let slide = (
        <div
            key={slideImages[index]}
            className={style.slider__slide}
            style={{backgroundImage: `url("${slideImages[index]}")`}}
        />
    );
    let nextSlide = (
        <div
            key={slideImages[getNextIndex(index)]}
            className={`${style.slider__slide} ${style.next_slide}`}
            style={{backgroundImage: `url("${slideImages[getNextIndex(index)]}")`}}
        />
    );

    let rightArrowHandler = () => setIndex(oldIndex => getNextIndex(oldIndex));
    let leftArrowHandler = () => setIndex(oldIndex => getPrevIndex(oldIndex));

    return (
        <div className={style.slider}>
            <div className={style.cap}/>
            {prevSlide}
            {slide}
            {nextSlide}
            <div className={style.slider__arrow_left} onClick={rightArrowHandler}>
                <ArrowLeft/>
            </div>
            <div className={style.slider__arrow_right} onClick={leftArrowHandler}>
                <ArrowRight/>
            </div>
        </div>
    );
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);