import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common/RadioSelector/RadioSelector';
import DateSelector from '../../DateSelector/DateSelector';
import OptionSelector from '../../OptionSelector/OptionSelector';
import {createStoreConnectedComponent} from '../../../../store/connector';
import {calcOrderPrice} from '../../../../utils/order_utils';
import './ExtraTab.scss';

const ALL_COLORS_ID = 'all_colors';

function ExtraTab({order, rateList, setOrderColor, clearOrderColor, setOrderRate, setOrderPrice, clearOrderPrice}) {
    let colors;
    const {carId, color, rateId} = order;
    if (carId) colors = carId.colors;

    useEffect(() => {
        const nextPrice = calcOrderPrice(order);

        // Так как может сложиться ситуация, при которой цена заказа равна 0 - используем явную проверку на неравенство с null
        if ('price' in order) {

            // Предотвращаем зацикливание, если изменились параметры заказа не влияющие на его стоимость
            if (order.price === nextPrice) return;

            if (nextPrice !== null) {
                setOrderPrice(nextPrice)
            } else {
                clearOrderPrice();
            }
        } else {
            if (nextPrice !== null) setOrderPrice(nextPrice);
        }
    }, [order]);

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
    const ratesForSelector = [];
    let defaultRateIndex = -1;
    rateList.forEach((rate, index) => {
        ratesForSelector.push({
            name: `${rate.rateTypeId.name}, ${rate.price}р/${rate.rateTypeId.unit}`,
            rate
        });
        if (rateId && rateId.id === rate.id) defaultRateIndex = index;
    });

    const handleColorSelect = selectedColor => {
        if (selectedColor.id === ALL_COLORS_ID) {
            clearOrderColor();
            return;
        }
        setOrderColor(selectedColor.name);
    }

    const handleRateSelect = selectedRate => setOrderRate(selectedRate.rate);

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
    setOrderRate: PropTypes.func,
    setOrderPrice: PropTypes.func,
    clearOrderPrice: PropTypes.func
}

export default createStoreConnectedComponent('ExtraTab')(ExtraTab);