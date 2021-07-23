import React from 'react';
import PropTypes from 'prop-types';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../settings';
import './TabTitles.scss';

function TabTitles({setMode}) {

    let handleLocationTabChoice = () => setMode(LOCATION_MODE);
    let handleModelTabChoice = () => setMode(MODEL_MODE);
    let handleExtraTabChoice = () => setMode(EXTRA_MODE);
    let handleTotalTabChoice = () => setMode(TOTAL_MODE);

    return (
        <div>
            <ul>
                <li onClick={handleLocationTabChoice}>
                    Местоположение
                </li>
                <li onClick={handleModelTabChoice}>
                    Модель
                </li>
                <li onClick={handleExtraTabChoice}>
                    Дополнительно
                </li>
                <li onClick={handleTotalTabChoice}>
                    Итого
                </li>
            </ul>
        </div>
    )
}

TabTitles.propTypes = {
    setMode: PropTypes.func
}

export default TabTitles;