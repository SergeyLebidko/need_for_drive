import React from 'react';
import {ReactComponent as Pin} from '../../content/images/pin.svg';
import {LANG_PACK} from '../../langPack';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import style from './Title.module.scss';

function Title({lang}) {

    let {serviceName, slogan, reservationButton} = LANG_PACK['Title'][lang];

    return (
        <div className={style.title}>
            <div className={style.title__header}>
                <span>Need for drive</span>
                <span>
                    <Pin/>
                    Город
                </span>
            </div>
            <div className={style.title__main}>
                <span>{serviceName}</span>
                <span>Need for drive</span>
                <span>{slogan}</span>
                <input type="button" value={reservationButton}/>
            </div>
            <div className={style.title__footer}>
                <span>&#169; 2016-{(new Date()).getFullYear()} "Need for drive"</span>
                <span>8(495)234-22-44</span>
            </div>
        </div>
    )
}

let stateMap = stateMapsFactory('Title');
let dispatchMap = dispatchMapsFactory('Title');
export default connect(stateMap, dispatchMap)(Title);