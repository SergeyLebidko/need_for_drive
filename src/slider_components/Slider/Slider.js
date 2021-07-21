import React, {useState, useEffect} from 'react';
import Slide, {PREV_SLIDE, CURRENT_SLIDE, NEXT_SLIDE} from '../Slide/Slide';
import DotsBlock from '../DotsBlock/DotsBlock';
import Arrow, {TO_LEFT_ARROW, TO_RIGHT_ARROW} from '../Arrow/Arrow';
import PropTypes from 'prop-types';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import './Slider.scss';

function Slider({sliderData}) {
    let [index, setIndex] = useState(0);

    let getNextIndex = index => index === (sliderData.length - 1) ? 0 : index + 1;
    let getPrevIndex = index => index ? index - 1 : (sliderData.length - 1);

    // Добавляем автоматическую перемотку слайдов по таймеру (каждые 10 сек)
    useEffect(() => {
        if (!sliderData.length) return;
        let interval = setInterval(() => {
            setIndex(oldIndex => getNextIndex(oldIndex));
        }, 10000);
        return () => clearInterval(interval);
    }, [sliderData]);

    let handleRightArrowClick = () => setIndex(oldIndex => getNextIndex(oldIndex));
    let handleLeftArrowClick = () => setIndex(oldIndex => getPrevIndex(oldIndex));

    // При клике на точку - реализовываем "перемотку" до нужного слайда
    let handleDotClick = dotIndex => {
        if (dotIndex === index) return;
        let distance = Math.abs(dotIndex - index);
        if (distance === 1 || distance === (sliderData.length - 1)) setIndex(dotIndex);

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

    let prevIndex = getPrevIndex(index);
    let nextIndex = getNextIndex(index);
    let currentSlidesData = [
        {
            ...sliderData[prevIndex],
            position: PREV_SLIDE,
        },
        {
            ...sliderData[index],
            position: CURRENT_SLIDE,
        },
        {
            ...sliderData[nextIndex],
            position: NEXT_SLIDE,
        }
    ];

    return (
        <section className="slider">
            {sliderData.length > 0 ?
                currentSlidesData.map(slideData => <Slide key={slideData.image} slideData={slideData}/>)
                :
                ''
            }
            <Arrow direction={TO_LEFT_ARROW} handleClick={handleLeftArrowClick}/>
            <Arrow direction={TO_RIGHT_ARROW} handleClick={handleRightArrowClick}/>
            <DotsBlock dotsCount={sliderData.length} currentIndex={index} handleClick={handleDotClick}/>
        </section>
    );
}

Slider.propTypes = {
    sliderData: PropTypes.array
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);