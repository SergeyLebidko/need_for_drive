import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapLabel from '../MapLabel/MapLabel';
import {createStoreConnectedComponent} from '../../../store/connector';
import './Map.scss';

function Map({order, cityCoords, pointCoords, cityList, pointList, setOrderCity, setOrderPoint, clearOrderPoint}) {
    let {cityId: selectedCity, pointId: selectedPoint} = order;

    let getCenter = useCallback(() => {
        // Если не выбран ни город ни местоположение, то центром карты станут координаты первого города
        if (!selectedCity && !selectedPoint) return cityCoords[0]

        // Если выбран город, но не выбрана точка в нем, то центром карты станет этот город
        if (selectedCity && !selectedPoint) {
            return cityCoords.find(cityCoord => cityCoord.id === selectedCity.id);
        }

        // Если выбраны и город и местоположение, то центром карты станет местоположение
        if (selectedCity && selectedPoint) {
            return pointCoords.find(pointCoord => pointCoord.id === selectedPoint.id);
        }
    }, [cityCoords, pointCoords, selectedCity, selectedPoint]);

    let getCityCoords = useCallback(city => cityCoords.find(cityCoord => cityCoord.id === city.id), [cityCoords]);

    let getPointCoords = useCallback(point => pointCoords.find(pointCoord => pointCoord.id === point.id), [pointCoords]);

    let handleCityLabelClick = city => {
        setOrderCity(city);
        clearOrderPoint();
    }

    let handlePointLabelClick = point => {
        setOrderCity(point.cityId)
        setOrderPoint(point);
    }

    return (
        <div className="map">
            <h1 className="map__caption">Выбрать на карте</h1>
            <div className="map__container">
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_GEOCODER_API_KEY}}
                    defaultCenter={cityCoords[0]}
                    center={getCenter()}
                    defaultZoom={11}
                >
                    {cityList.map(
                        city =>
                            <MapLabel
                                key={city.id}
                                lat={getCityCoords(city).lat}
                                lng={getCityCoords(city).lng}
                                handleClick={() => handleCityLabelClick(city)}
                            />
                    )}
                    {pointList.map(
                        point =>
                            <MapLabel
                                key={point.id}
                                lat={getPointCoords(point).lat}
                                lng={getPointCoords(point).lng}
                                handleClick={() => handlePointLabelClick(point)}
                            />
                    )}
                </GoogleMapReact>
            </div>
        </div>
    );
}

Map.propTypes = {
    order: PropTypes.object,
    cityCoords: PropTypes.array,
    pointCoords: PropTypes.array,
    cityList: PropTypes.array,
    pointList: PropTypes.array,
    setOrderCity: PropTypes.func,
    setOrderPoint: PropTypes.func,
    clearOrderPoint: PropTypes.func
}

export default createStoreConnectedComponent('Map')(Map);