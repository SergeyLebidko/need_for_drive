import React from 'react';
import SelectorItem from '../SelectorItem/SelectorItem';
import './PlaceSelector.scss';

function PlaceSelector() {
    return (
        <div className="place_form">
            <SelectorItem caption="Город" placeholder="Начните вводить город"/>
            <SelectorItem caption="Пункт выдачи" placeholder="Начните вводить пункт выдачи"/>
        </div>
    );
}

export default PlaceSelector;