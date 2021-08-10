import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import DateSelector from '../../DateSelector/DateSelector';
import OptionSelector from '../../OptionSelector/OptionSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ExtraTab.scss';

const ALL_COLORS_ID = 'all_colors';

function ExtraTab({order, setOrderColor, clearOrderColor, rateList, optionList}) {
    let {carId: {colors}} = order;

    let colorsForSelector;
    if (colors && colors.length > 0) {
        colorsForSelector = [{id: ALL_COLORS_ID, name: 'Любой'}];
        colors.forEach(color => colorsForSelector.push({name: color}));
    }

    let handleColorSelect = selectedColor => {
        if (selectedColor.id === ALL_COLORS_ID) {
            clearOrderColor();
            return;
        }
        setOrderColor(selectedColor.name);
    }

    // TODO При реализации функциональности компонента заменить фиктивные функции handleSelect
    return (
        <div className="extra_tab">
            {colorsForSelector && <RadioSelector items={colorsForSelector} handleSelect={handleColorSelect}/>}
            <DateSelector/>
            <RadioSelector caption="Тариф" items={rateList} handleSelect={() => {}} onlyColumn/>
            <OptionSelector optionList={optionList}/>
        </div>
    )
}

ExtraTab.propTypes = {
    order: PropTypes.object,
    setOrderColor: PropTypes.func,
    clearOrderColor: PropTypes.func,
    rateList: PropTypes.array,
    optionList: PropTypes.array
}

export default createStoreConnectedComponent('ExtraTab')(ExtraTab);