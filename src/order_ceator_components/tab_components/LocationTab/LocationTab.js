import React from 'react';
import tempMap from '../../../content/images/map.png';
import './LocationTab.scss';

function LocationTab() {
    return (
        <div className="location_tab">
            <div className="location_tab__place_form">
                <div className="location_tab__form_row">
                    <div className="location_tab__form_label">
                        Город
                    </div>
                    <div className="location_tab__form_field">
                        <input className="text_input" placeholder="Начните вводить город ..."/>
                    </div>
                </div>
                <div className="location_tab__form_row">
                    <div className="location_tab__form_label">
                        Пункт выдачи
                    </div>
                    <div className="location_tab__form_field">
                        <input className="text_input" placeholder="Начните вводить пунк выдачи ..."/>
                    </div>
                </div>
            </div>
            <label className="location_tab__map_label">Выбрать на карте</label>
            <img src={tempMap} className="location_tab__map"/>
        </div>
    )
}

export default LocationTab;