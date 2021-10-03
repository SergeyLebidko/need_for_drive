import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../../store/connector';
import './Map.scss';

const BIG_ZOOM = 14
const SMALL_ZOOM = 11

function Map({order, cityCoords, pointCoords, cityList, pointList, setOrderCity, setOrderPoint, clearOrderPoint}) {
    const {cityId: selectedCity, pointId: selectedPoint} = order;

    const mapContainerRef = useRef();
    const mapRef = useRef();

    const rewindTimer = useRef();

    const getCityCoords = city => cityCoords.find(cityCoord => cityCoord.id === city.id);

    const getPointCoords = point => pointCoords.find(pointCoord => pointCoord.id === point.id);

    const getCenter = () => {
        // Если не выбран ни город ни местоположение, то центром карты станут координаты первого города
        if (!selectedCity && !selectedPoint) return cityCoords[0];

        // Если выбран город, но не выбрана точка в нем, то центром карты станет этот город
        if (selectedCity && !selectedPoint) {
            return cityCoords.find(cityCoord => cityCoord.id === selectedCity.id);
        }

        // Если выбраны и город и местоположение, то центром карты станет местоположение пункта выдачи
        if (selectedCity && selectedPoint) {
            return pointCoords.find(pointCoord => pointCoord.id === selectedPoint.id);
        }
    }

    useEffect(() => {
        const {lat, lng} = getCenter();

        // Создаем карту
        const ymaps = window.ymaps;
        mapRef.current = new ymaps.Map(
            mapContainerRef.current,
            {
                center: [lat, lng],
                zoom: (selectedPoint ? BIG_ZOOM : SMALL_ZOOM),
                controls: ['smallMapDefaultSet']
            },
            {
                autoFitToViewport: 'always'
            }
        );

        // Добавляем метки городов
        cityList.forEach(city => {
            const {lat, lng} = getCityCoords(city);
            const mark = new ymaps.Placemark(
                [lat, lng],
                {},
                {
                    preset: 'islands#icon',
                    iconColor: 'red'
                }
            );
            mark.events.add('click', () => {
                handleCityLabelClick(city);
                // rewindMapToCoords([lat, lng], SMALL_ZOOM);
            });
            mapRef.current.geoObjects.add(mark);
        });

        // Добавляем метки пунктов выдачи
        pointList.forEach(point => {
            const {lat, lng} = getPointCoords(point);
            const mark = new ymaps.Placemark(
                [lat, lng],
                {},
                {
                    preset: 'islands#icon',
                    iconColor: 'blue'
                }
            );
            mark.events.add('click', () => {
                handlePointLabelClick(point);
                // rewindMapToCoords([lat, lng], BIG_ZOOM);
            });
            mapRef.current.geoObjects.add(mark);
        });
    }, []);

    useEffect(() => {
        clearTimeout(rewindTimer.current);
        rewindTimer.current = setTimeout(() => {
            const {lat, lng} = getCenter();
            rewindMapToCoords([lat, lng], (selectedPoint ? BIG_ZOOM : SMALL_ZOOM));
        }, 500);
    }, [selectedCity, selectedPoint]);

    // Функция, осуществляющая "перемотку" карты до нужных координат
    const rewindMapToCoords = (coords, zoom) => {
        mapRef.current.panTo(coords).then(() => mapRef.current.setZoom(zoom, {duration: 200}));
    }

    const handleCityLabelClick = city => {
        setOrderCity(city);
        clearOrderPoint();
    }

    const handlePointLabelClick = point => {
        setOrderCity(point.cityId)
        setOrderPoint(point);
    }

    return (
        <div className="map">
            <h1 className="map__caption">Выбрать на карте</h1>
            <div className="map__container" ref={mapContainerRef}/>
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