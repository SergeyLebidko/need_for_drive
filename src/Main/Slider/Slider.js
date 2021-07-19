import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
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
const slideCount = slideImages.length;

function getNextIndex(index) {
    return index === (slideCount - 1) ? 0 : index + 1;
}

function getPrevIndex(index) {
    return index ? index - 1 : (slideCount - 1);
}

function Slider({lang}) {
    let [index, setIndex] = useState(0);
    let {slidersData, moreButton} = LANG_PACK['Slider'][lang];

    // Реализовываем автоматическую перемотку слайдов по таймеру (каждые 10 сек)
    useEffect(() => {
        let interval = setInterval(() => {
            setIndex(oldIndex => getNextIndex(oldIndex));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    let prevIndex = getPrevIndex(index);
    let nextIndex = getNextIndex(index);

    let rightArrowHandler = () => setIndex(oldIndex => getPrevIndex(oldIndex));
    let leftArrowHandler = () => setIndex(oldIndex => getNextIndex(oldIndex));

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
                                value={moreButton}
                                className={element.buttonClassName}
                            />
                        </div>
                    </div>
            )}
            <div className={style.cap}/>
            <div className={style.slider__arrow_left} onClick={rightArrowHandler}>
                <ArrowLeft/>
            </div>
            <div className={style.slider__arrow_right} onClick={leftArrowHandler}>
                <ArrowRight/>
            </div>
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