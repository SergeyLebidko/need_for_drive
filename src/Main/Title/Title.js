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
                <span className={style.title__small_service_title}>Need for drive</span>
                <span className={style.title__city}>
                    <Pin/>
                    Город
                </span>
            </div>
            <div className={style.title__main}>
                <div className={style.title__service_name}>{serviceName}</div>
                <div className={style.title__big_service_title}>Need for drive</div>
                <div className={style.title__slogan}>{slogan}</div>
                <input type="button" value={reservationButton} className={style.title__reservation_button}/>
            </div>
            <div className={style.title__footer}>
                <span className={style.title__copyright}>&#169; 2016-{(new Date()).getFullYear()} "Need for drive"</span>
                <span className={style.title__phone}>8(495)234-22-44</span>
            </div>
        </div>
    )
}

let stateMap = stateMapsFactory('Title');
let dispatchMap = dispatchMapsFactory('Title');
export default connect(stateMap, dispatchMap)(Title);