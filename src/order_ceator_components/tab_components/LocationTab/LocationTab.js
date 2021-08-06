import React from 'react';
import PlaceSelector from '../../place_selector_components/PlaceSelector/PlaceSelector';
import Map from '../../map_components/Map/Map';
import './LocationTab.scss';

function LocationTab() {
    return (
        <div className="location_tab">
            <PlaceSelector/>
            <Map/>
        </div>
    )
}

export default LocationTab;