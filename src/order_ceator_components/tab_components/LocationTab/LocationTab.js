import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import PlaceSelector from '../../place_selector_components/PlaceSelector/PlaceSelector';
import Map from '../../map_components/Map/Map';
import {createStoreConnectedComponent} from '../../../store/connector';
import './LocationTab.scss';

function LocationTab(props) {
    let {
        order,
        optionList,
        clearOrderModel,
        clearOrderColor,
        clearOrderOptions,
        clearOrderRate,
        clearOrderDateFrom,
        clearOrderDateTo,
        clearOrderPrice
    } = props;

    let {cityId: selectedCity, pointId: selectedPoint} = order;
    let isFirstRender = useRef(true);

    // При изменении данных вкладки - сбрасываем данные последующих вкладок (как того требует ТЗ)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        clearOrderModel();
        clearOrderColor();
        clearOrderOptions(optionList);
        clearOrderRate();
        clearOrderDateFrom();
        clearOrderDateTo();
        clearOrderPrice();
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
    optionList: PropTypes.array,
    clearOrderModel: PropTypes.func,
    clearOrderColor: PropTypes.func,
    clearOrderOptions: PropTypes.func,
    clearOrderRate: PropTypes.func,
    clearOrderDateFrom: PropTypes.func,
    clearOrderDateTo: PropTypes.func,
    clearOrderPrice: PropTypes.func
}

export default createStoreConnectedComponent('LocationTab')(LocationTab);