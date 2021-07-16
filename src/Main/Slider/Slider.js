import React from 'react';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import Slide1 from '../../content/images/slides/slide-1.jpg';
import Slide2 from '../../content/images/slides/slide-2.jpg';
import Slide3 from '../../content/images/slides/slide-3.jpg';
import Slide4 from '../../content/images/slides/slide-4.jpg';
import style from './Slider.module.scss';

const slideImages = [Slide1, Slide2, Slide3, Slide4];

function Slider({lang}) {
    let {slidersData, moreButton} = LANG_PACK['Slider'][lang];

    return (
        <div className={style.slider}>
            {slidersData.map(
                (element, index) =>
                    <div
                        key={index}
                        className={style.slider__slide}
                        style={{backgroundImage: `url("${slideImages[index]}")`}}
                    >
                        <div>
                            <h1 className={style.slider__title}>{element.title}</h1>
                            <span className={style.slider__description}>{element.description}</span>
                            <input type="button" value={moreButton}/>
                        </div>
                    </div>
            )}
        </div>
    );
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);