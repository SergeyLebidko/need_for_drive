import React, {useRef} from 'react';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import {ReactComponent as ArrowRight} from '../../content/images/icons/arrow_right.svg';
import {ReactComponent as ArrowLeft} from '../../content/images/icons/arrow_left.svg';
import Slide1 from '../../content/images/slides/slide-1.jpg';
import Slide2 from '../../content/images/slides/slide-2.jpg';
import Slide3 from '../../content/images/slides/slide-3.jpg';
import Slide4 from '../../content/images/slides/slide-4.jpg';
import style from './Slider.module.scss';

const slideImages = [Slide1, Slide2, Slide3, Slide4];

function Slider({lang}) {
    let scroller = useRef();
    let {slidersData, moreButton} = LANG_PACK['Slider'][lang];

    let toLeft = () => {
        scroller.current.scrollTo({left: 300, top: 0, behavior: 'smooth'});
    }

    let toRight = () => {
        scroller.current.scrollTo({left: -300, top: 0, behavior: 'smooth'});
    }

    return (
        <div className={style.slider}>
            <div className={style.slider__scroller} ref={scroller}>
                {slidersData.map(
                    (element, index) =>
                        <div
                            key={index}
                            className={style.slider__slide}
                            style={{backgroundImage: `url("${slideImages[index]}")`}}
                        >
                            <div className={style.cap}/>
                            <div className={style.slider__text_content}>
                                <h1 className={style.slider__title}>{element.title}</h1>
                                <span className={style.slider__description}>{element.description}</span>
                                <input
                                    type="button"
                                    value={moreButton}
                                    className={`${style.slider__more_button} ${style["button_" + (index + 1)]}`}
                                />
                            </div>
                        </div>
                )}
            </div>
            <div className={style.slider__arrow_left} onClick={toLeft}>
                <ArrowLeft/>
            </div>
            <div className={style.slider__arrow_right} onClick={toRight}>
                <ArrowRight/>
            </div>
        </div>
    );
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);