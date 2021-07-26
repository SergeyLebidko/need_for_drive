import React from 'react';
import PlaceForm from '../../../common_components/PlaceForm/PlaceForm';
import tempMap from '../../../content/images/map.png';
import './LocationTab.scss';

function LocationTab() {
    return (
        <div className="location_tab">
            <PlaceForm/>
            <label className="location_tab__map_label">Выбрать на карте</label>
            <img src={tempMap} className="location_tab__map"/>
        </div>
    )
}

export default LocationTab;