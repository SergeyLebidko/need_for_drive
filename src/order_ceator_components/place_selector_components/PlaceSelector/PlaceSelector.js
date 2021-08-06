import React from 'react';
import PropTypes from 'prop-types';
import SelectorItem from '../SelectorItem/SelectorItem';
import {createStoreConnectedComponent} from '../../../store/connector';
import './PlaceSelector.scss';

function PlaceSelector({order, cityList, pointList}) {
    let {cityId: selectedCity, pointId: selectedPoint} = order;

    let handleCitySelect = city => {
        // TODO Тестовый вывод
        console.log(city);
    }

    let handlePointSelect = point => {
        // TODO Тестовый вывод
        console.log(point);
    }

    return (
        <div className="place_selector">
            <SelectorItem
                caption="Город"
                placeholder="Начните вводить город"
                items={cityList}
                defaultItem={selectedCity}
                handleSelect={handleCitySelect}
                searchFieldName="name"
            />
            <SelectorItem
                caption="Пункт выдачи"
                placeholder="Начните вводить пункт выдачи"
                items={pointList}
                defaultItem={selectedPoint}
                handleSelect={handlePointSelect}
                searchFieldName="address"
            />
        </div>
    );
}

PlaceSelector.propTypes = {
    order: PropTypes.object,
    cityList: PropTypes.array,
    pointList: PropTypes.array
}

export default createStoreConnectedComponent('PlaceSelector')(PlaceSelector);