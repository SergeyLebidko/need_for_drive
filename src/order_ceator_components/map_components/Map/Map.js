import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapLabel, {CITY_LABEL, POINT_LABEL} from '../MapLabel/MapLabel';
import {createStoreConnectedComponent} from '../../../store/connector';
import './Map.scss';

const BIG_ZOOM = 14
const SMALL_ZOOM = 11

function Map({order, cityCoords, pointCoords, cityList, pointList, setOrderCity, setOrderPoint, clearOrderPoint}) {
    let {cityId: selectedCity, pointId: selectedPoint} = order;

    let getCenter = () => {
        // Если не выбран ни город ни местоположение, то центром карты станут координаты первого города
        if (!selectedCity && !selectedPoint) return cityCoords[0]

        // Если выбран город, но не выбрана точка в нем, то центром карты станет этот город
        if (selectedCity && !selectedPoint) {
            return cityCoords.find(cityCoord => cityCoord.id === selectedCity.id);
        }

        // Если выбраны и город и местоположение, то центром карты станет местоположение пункта выдачи
        if (selectedCity && selectedPoint) {
            return pointCoords.find(pointCoord => pointCoord.id === selectedPoint.id);
        }
    }

    let getCityCoords = city => cityCoords.find(cityCoord => cityCoord.id === city.id);

    let getPointCoords = point => pointCoords.find(pointCoord => pointCoord.id === point.id);

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
                    defaultZoom={SMALL_ZOOM}
                    zoom={selectedPoint ? BIG_ZOOM : SMALL_ZOOM}
                >
                    {cityList.map(
                        city =>
                            <MapLabel
                                key={city.id}
                                lat={getCityCoords(city).lat}
                                lng={getCityCoords(city).lng}
                                type={CITY_LABEL}
                                handleClick={() => handleCityLabelClick(city)}
                            />
                    )}
                    {pointList.map(
                        point =>
                            <MapLabel
                                key={point.id}
                                lat={getPointCoords(point).lat}
                                lng={getPointCoords(point).lng}
                                type={POINT_LABEL}
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