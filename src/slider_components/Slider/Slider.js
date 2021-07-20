import React, {useState, useEffect} from 'react';
import Arrow from '../Arrow/Arrow';
import PropTypes from 'prop-types';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import {TO_LEFT_ARROW, TO_RIGHT_ARROW} from '../Arrow/Arrow';
import slide0 from '../../content/images/slides/slide-0.png';
import slide1 from '../../content/images/slides/slide-1.png';
import slide2 from '../../content/images/slides/slide-2.png';
import slide3 from '../../content/images/slides/slide-3.png';
import style from './Slider.module.scss';

const slideImages = [slide0, slide1, slide2, slide3];
const slideCount = slideImages.length;

function Slider({lang}) {
    let [index, setIndex] = useState(0);
    let {slidersData, slideButtonText} = LANG_PACK['Slider'][lang];

    let getNextIndex = index => index === (slideCount - 1) ? 0 : index + 1;
    let getPrevIndex = index => index ? index - 1 : (slideCount - 1);

    // Реализовываем автоматическую перемотку слайдов по таймеру (каждые 10 сек)
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
    let dotClickHandler = dotIndex => {
        if (dotIndex === index) return;

        let distance = Math.abs(dotIndex - index);
        if (distance === 1 || distance === (slideCount - 1)) setIndex(dotIndex);

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

    // Готовим данные к рендерингу
    let currentSlidesData = [
        {
            ...slidersData[prevIndex],
            image: slideImages[prevIndex],
            slideClassName: `${style.slider__slide} ${style.prev_slide}`,
            buttonClassName: `${style.slide__more_button} ${style["button_" + prevIndex]}`
        },
        {
            ...slidersData[index],
            image: slideImages[index],
            slideClassName: style.slider__slide,
            buttonClassName: `${style.slide__more_button} ${style["button_" + index]}`
        },
        {
            ...slidersData[nextIndex],
            image: slideImages[nextIndex],
            slideClassName: `${style.slider__slide} ${style.next_slide}`,
            buttonClassName: `${style.slide__more_button} ${style["button_" + nextIndex]}`
        }
    ];

    return (
        <div className={style.slider}>
            <Arrow direction={TO_LEFT_ARROW} handleClick={handleLeftArrowClick}/>
            <Arrow direction={TO_RIGHT_ARROW} handleClick={handleRightArrowClick}/>
            {currentSlidesData.map(
                element =>
                    <div
                        key={element.image}
                        className={element.slideClassName}
                        style={{backgroundImage: `url("${element.image}")`}}
                    >
                        <div className={style.slide__text_block}>
                            <h1 className={style.slide__title}>{element.title}</h1>
                            <h3 className={style.slide__description}>{element.description}</h3>
                            <input
                                type="button"
                                value={slideButtonText}
                                className={element.buttonClassName}
                            />
                        </div>
                    </div>
            )}
            <div className={style.cap}/>
            <div className={style.slider__dots_block}>
                {slideImages.map(
                    (element, elementIndex) => {
                        if (elementIndex === index) return (
                            <div
                                className={`${style.slider__dot} ${style.full_dot}`}
                                onClick={() => dotClickHandler(elementIndex)}
                                key={element}
                            />
                        );
                        return (
                            <div
                                className={`${style.slider__dot} ${style.empty_dot}`}
                                onClick={() => dotClickHandler(elementIndex)}
                                key={element}
                            />
                        )
                    }
                )}
            </div>
        </div>
    );
}

Slider.propTypes = {
    lang: PropTypes.string
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);