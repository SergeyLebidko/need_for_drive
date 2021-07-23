import React from 'react';
import PropTypes from 'prop-types';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabTitles.scss';

function TabTitles({setMode}) {

    let handleLocationTabChoice = () => setMode(LOCATION_MODE);
    let handleModelTabChoice = () => setMode(MODEL_MODE);
    let handleExtraTabChoice = () => setMode(EXTRA_MODE);
    let handleTotalTabChoice = () => setMode(TOTAL_MODE);

    return (
        <div className="tab_titles">
            <ul className="tab_titles__content">
                <li className="tab_titles__tab_title" onClick={handleLocationTabChoice}>
                    Местоположение
                </li>
                <li className="tab_titles__tab_title" onClick={handleModelTabChoice}>
                    Модель
                </li>
                <li className="tab_titles__tab_title" onClick={handleExtraTabChoice}>
                    Дополнительно
                </li>
                <li className="tab_titles__tab_title" onClick={handleTotalTabChoice}>
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