import React, {useState, useEffect} from 'react';
import Slide, {PREV_SLIDE, CURRENT_SLIDE, NEXT_SLIDE} from '../Slide/Slide';
import DotsBlock from '../DotsBlock/DotsBlock';
import Arrow, {TO_LEFT_ARROW, TO_RIGHT_ARROW} from '../Arrow/Arrow';
import PropTypes from 'prop-types';
import './Slider.scss';

import {createStoreConnectedComponent} from "../../../../store/connector";

function Slider({sliderData}) {
    const [index, setIndex] = useState(0);

    const getNextIndex = index => index === (sliderData.length - 1) ? 0 : index + 1;
    const getPrevIndex = index => index ? index - 1 : (sliderData.length - 1);

    // Добавляем автоматическую перемотку слайдов по таймеру (каждые 10 сек)
    useEffect(() => {
        if (!sliderData.length) return;
        const interval = setInterval(() => {
            setIndex(oldIndex => getNextIndex(oldIndex));
        }, 10000);
        return () => clearInterval(interval);
    }, [sliderData]);

    const handleRightArrowClick = () => setIndex(oldIndex => getNextIndex(oldIndex));
    const handleLeftArrowClick = () => setIndex(oldIndex => getPrevIndex(oldIndex));

    // При клике на точку - реализовываем "перемотку" до нужного слайда
    const handleDotClick = dotIndex => {
        if (dotIndex === index) return;
        const distance = Math.abs(dotIndex - index);
        if (distance === 1 || distance === (sliderData.length - 1)) setIndex(dotIndex);

        // Если слайды не находятся рядом, то перематываем их в несколько шагов
        const interval = setInterval(() => {
            setIndex(oldIndex => {
                if (oldIndex < dotIndex) return oldIndex + 1;
                if (oldIndex > dotIndex) return oldIndex - 1;
                clearInterval(interval);
                return oldIndex;
            })
        }, 300);
    };

    const prevIndex = getPrevIndex(index);
    const nextIndex = getNextIndex(index);
    const currentSlidesData = [
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
            {sliderData.length > 0 && currentSlidesData.map(
                slideData => <Slide key={slideData.image} slideData={slideData}/>
            )}
            <Arrow direction={TO_LEFT_ARROW} handleClick={handleLeftArrowClick}/>
            <Arrow direction={TO_RIGHT_ARROW} handleClick={handleRightArrowClick}/>
            <DotsBlock dotsCount={sliderData.length} currentIndex={index} handleClick={handleDotClick}/>
        </section>
    );
}

Slider.propTypes = {
    sliderData: PropTypes.array
}

export default createStoreConnectedComponent('Slider')(Slider);