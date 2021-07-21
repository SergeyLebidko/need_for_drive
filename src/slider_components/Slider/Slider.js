import React, {useState, useEffect} from 'react';
import Slide, {PREV_SLIDE, CURRENT_SLIDE, NEXT_SLIDE} from '../Slide/Slide';
import DotsBlock from '../DotsBlock/DotsBlock';
import Arrow, {TO_LEFT_ARROW, TO_RIGHT_ARROW} from '../Arrow/Arrow';
import PropTypes from 'prop-types';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import slide0 from '../../content/images/slides/slide-0.png';
import slide1 from '../../content/images/slides/slide-1.png';
import slide2 from '../../content/images/slides/slide-2.png';
import slide3 from '../../content/images/slides/slide-3.png';
import './Slider.scss';

const SLIDE_COUNT = 4;

function Slider({lang}) {
    let [index, setIndex] = useState(0);

    // Готовим данные слайдов
    const slidersImages = [slide0, slide1, slide2, slide3];
    const slidersButtonColors = ['dark_green', 'teal', 'brown', 'purple'];
    const {slidersText, slideButtonText} = LANG_PACK['Slider'][lang];
    const slidersData = [];

    for (let index = 0; index < SLIDE_COUNT; index++) slidersData.push({
        ...slidersText[index],
        image: slidersImages[index],
        buttonColor: slidersButtonColors[index]
    });

    let getNextIndex = index => index === (SLIDE_COUNT - 1) ? 0 : index + 1;
    let getPrevIndex = index => index ? index - 1 : (SLIDE_COUNT - 1);

    // Добавляем автоматическую перемотку слайдов по таймеру (каждые 10 сек)
    useEffect(() => {
        let interval = setInterval(() => {
            setIndex(oldIndex => getNextIndex(oldIndex));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    let prevIndex = getPrevIndex(index);
    let nextIndex = getNextIndex(index);

    let handleRightArrowClick = () => setIndex(oldIndex => getNextIndex(oldIndex));
    let handleLeftArrowClick = () => setIndex(oldIndex => getPrevIndex(oldIndex));

    // При клике на точку - реализовываем "перемотку" до нужного слайда
    let handleDotClick = dotIndex => {
        if (dotIndex === index) return;

        let distance = Math.abs(dotIndex - index);
        if (distance === 1 || distance === (SLIDE_COUNT - 1)) setIndex(dotIndex);

        // Если слайды не находятся рядом, то перематываем их в несколько шагов
        let interval = setInterval(() => {
            setIndex(oldIndex => {
                if (oldIndex < dotIndex) return oldIndex + 1;
                if (oldIndex > dotIndex) return oldIndex - 1;
                clearInterval(interval);
                return oldIndex;
            })
        }, 300);
    };

    let currentSlidesData = [
        {
            ...slidersData[prevIndex],
            position: PREV_SLIDE,
        },
        {
            ...slidersData[index],
            position: CURRENT_SLIDE,
        },
        {
            ...slidersData[nextIndex],
            position: NEXT_SLIDE,
        }
    ];

    return (
        <section className="slider">
            {currentSlidesData.map(
                slideData => <Slide key={slideData.image} slideData={slideData} slideButtonText={slideButtonText}/>
            )}
            <Arrow direction={TO_LEFT_ARROW} handleClick={handleLeftArrowClick}/>
            <Arrow direction={TO_RIGHT_ARROW} handleClick={handleRightArrowClick}/>
            <DotsBlock dotsCount={SLIDE_COUNT} currentIndex={index} handleClick={handleDotClick}/>
        </section>
    );
}

Slider.propTypes = {
    lang: PropTypes.string
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);