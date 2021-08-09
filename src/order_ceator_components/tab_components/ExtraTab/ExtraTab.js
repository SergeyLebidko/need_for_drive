import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import DateSelector from '../../DateSelector/DateSelector';
import OptionSelector from '../../OptionSelector/OptionSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ExtraTab.scss';

function ExtraTab({colorList, rateList, optionList}) {
    // TODO При реализации функциональности компонента заменить фиктивные функции handleSelect
    return (
        <div className="extra_tab">
            <RadioSelector items={colorList} handleSelect={()=>{}}/>
            <DateSelector/>
            <RadioSelector caption="Тариф" items={rateList} handleSelect={()=>{}} onlyColumn/>
            <OptionSelector optionList={optionList}/>
        </div>
    )
}

ExtraTab.propTypes = {
    colorList: PropTypes.array,
    rateList: PropTypes.array,
    optionList: PropTypes.array
}

export default createStoreConnectedComponent('ExtraTab')(ExtraTab);