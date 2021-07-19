import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Pin} from '../../content/images/icons/pin.svg';
import {LANG_PACK} from '../../langPack';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import style from './Title.module.scss';

function Title({lang, city}) {
    let {serviceName, slogan, reservationButton} = LANG_PACK['Title'][lang];
    let currentYear = (new Date()).getFullYear();

    return (
        <div className={style.title}>
            <div className={style.title__header}>
                <span className={style.title__small_service_title}>Need for drive</span>
                {city && <span className={style.title__city}><Pin/>{city}</span>}
            </div>
            <div className={style.title__main}>
                <h1 className={style.title__service_name}>{serviceName}</h1>
                <h1 className={style.title__big_service_title}>Need for drive</h1>
                <h3 className={style.title__slogan}>{slogan}</h3>
                <input type="button" value={reservationButton} className={style.title__reservation_button}/>
            </div>
            <div className={style.title__footer}>
                <span
                    className={style.title__copyright}>&#169; 2016-{currentYear} &quot;Need for drive&quot;</span>
                <span className={style.title__phone}>8(495)234-22-44</span>
            </div>
        </div>
    )
}

Title.propTypes = {
    lang: PropTypes.string,
    city: PropTypes.string
}

let stateMap = stateMapsFactory('Title');
let dispatchMap = dispatchMapsFactory('Title');
export default connect(stateMap, dispatchMap)(Title);