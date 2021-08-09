import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import SelectorItem from '../SelectorItem/SelectorItem';
import {createStoreConnectedComponent} from '../../../store/connector';
import './PlaceSelector.scss';

function PlaceSelector(props) {
    let {
        order,
        cityList,
        pointList,
        setOrderCity,
        setOrderPoint,
        clearOrderCity,
        clearOrderPoint,
        clearOrderModel
    } = props;

    let [pointListToSelector, setPointListToSelector] = useState([]);
    let isFirstRender = useRef(true);

    let {cityId: selectedCity, pointId: selectedPoint} = order;

    // Учитываем, что изменение выбранного города может произойти и от компонента карты
    useEffect(() => {
        if (selectedCity) {
            setPointListToSelector(pointList.filter(point => point.cityId.id === selectedCity.id));
        } else {
            setPointListToSelector([]);
        }
    }, [selectedCity]);

    // При изменении выбранных города и местоположения сбрасываем данные последующих вкладок, как того требует ТЗ
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        clearOrderModel();
        // TODO Вставить функцию сброса дополнительных данных заказа
    }, [selectedCity, selectedPoint])

    let handleCitySelect = city => {
        if (city) {
            setOrderCity(city);
            clearOrderPoint();
        } else {
            clearOrderCity();
            clearOrderPoint();
        }
    }

    let handlePointSelect = point => {
        if (point) {
            setOrderPoint(point);
        } else {
            clearOrderPoint();
        }
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
                items={pointListToSelector}
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
    pointList: PropTypes.array,
    setOrderCity: PropTypes.func,
    setOrderPoint: PropTypes.func,
    clearOrderCity: PropTypes.func,
    clearOrderPoint: PropTypes.func,
    clearOrderModel: PropTypes.func
}

export default createStoreConnectedComponent('PlaceSelector')(PlaceSelector);