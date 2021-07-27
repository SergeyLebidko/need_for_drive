import React from 'react';
import PlaceSelector from '../../PlaceSelector/PlaceSelector';
import tempMap from '../../../content/images/map.png';
import './LocationTab.scss';

function LocationTab() {
    return (
        <div className="location_tab">
            <PlaceSelector/>
            <label className="location_tab__map_label">Выбрать на карте</label>
            <img src={tempMap} className="location_tab__map"/>
        </div>
    )
}

export default LocationTab;