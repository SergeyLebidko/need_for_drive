import React from 'react';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import style from './Slider.module.scss';

function Slider({lang}) {
    let {slidersData, moreButton} = LANG_PACK['Slider'][lang];

    return (
        <div className={style.slider}>
            {slidersData.map(
                element =>
                    <div>
                        <h1>{element.title}</h1>
                        <span>{element.description}</span>
                        <input type="button" value={moreButton}/>
                    </div>
            )}
        </div>
    );
}

let stateMap = stateMapsFactory('Slider');
let dispatchMap = dispatchMapsFactory('Slider');
export default connect(stateMap, dispatchMap)(Slider);