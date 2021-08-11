import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import DateSelector from '../../DateSelector/DateSelector';
import OptionSelector from '../../OptionSelector/OptionSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ExtraTab.scss';

const ALL_COLORS_ID = 'all_colors';

function ExtraTab({order, rateList, setOrderColor, clearOrderColor, setOrderRate}) {
    let {carId: {colors}, color, rateId} = order;

    // Формируем данные для селектора цветов
    let colorsForSelector;
    let defaultColorIndex = 0;
    if (colors && colors.length > 0) {
        colorsForSelector = [{id: ALL_COLORS_ID, name: 'Любой'}];
        colors.forEach((_color, index) => {
            colorsForSelector.push({name: _color});
            if (_color === color) defaultColorIndex = index + 1;
        });
    }

    // Формируем данные для селектора тарифов
    let ratesForSelector = [];
    let defaultRateIndex = -1;
    rateList.forEach((rate, index) => {
        ratesForSelector.push({
            name: `${rate.rateTypeId.name}, ${rate.price}р/${rate.rateTypeId.unit}`,
            rate
        });
        if (rateId && rateId.id === rate.id) defaultRateIndex = index;
    });

    let handleColorSelect = selectedColor => {
        if (selectedColor.id === ALL_COLORS_ID) {
            clearOrderColor();
            return;
        }
        setOrderColor(selectedColor.name);
    }

    let handleRateSelect = selectedRate => setOrderRate(selectedRate.rate);

    return (
        <div className="extra_tab">
            {colorsForSelector &&
            <RadioSelector
                items={colorsForSelector}
                handleSelect={handleColorSelect}
                defaultSelectedIndex={defaultColorIndex}
            />
            }
            <DateSelector/>
            {ratesForSelector.length > 0 &&
            <RadioSelector
                caption="Тариф"
                items={ratesForSelector}
                handleSelect={handleRateSelect}
                defaultSelectedIndex={defaultRateIndex}
                onlyColumn
            />
            }
            <OptionSelector/>
        </div>
    )
}

ExtraTab.propTypes = {
    order: PropTypes.object,
    rateList: PropTypes.array,
    setOrderColor: PropTypes.func,
    clearOrderColor: PropTypes.func,
    setOrderRate: PropTypes.func
}

export default createStoreConnectedComponent('ExtraTab')(ExtraTab);