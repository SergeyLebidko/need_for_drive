import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import PlaceSelector from '../../place_selector_components/PlaceSelector/PlaceSelector';
import Map from '../../map_components/Map/Map';
import {createStoreConnectedComponent} from '../../../store/connector';
import './LocationTab.scss';

function LocationTab({order, clearTabsAfterLocation}) {
    let {cityId: selectedCity, pointId: selectedPoint} = order;
    let isFirstRender = useRef(true);

    // При изменении данных вкладки - сбрасываем данные последующих вкладок (как того требует ТЗ)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        clearTabsAfterLocation();
    }, [selectedCity, selectedPoint]);

    return (
        <div className="location_tab">
            <PlaceSelector/>
            <Map/>
        </div>
    );
}

LocationTab.propTypes = {
    order: PropTypes.object,
    clearTabsAfterLocation: PropTypes.func
}

export default createStoreConnectedComponent('LocationTab')(LocationTab);