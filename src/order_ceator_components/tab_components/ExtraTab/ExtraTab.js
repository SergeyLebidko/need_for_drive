import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import DateSelector from '../../DateSelector/DateSelector';
import OptionSelector from '../../OptionSelector/OptionSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ExtraTab.scss';

function ExtraTab({colorList, rateList, optionList}) {
    return (
        <div className="extra_tab">
            <RadioSelector itemList={colorList}/>
            <DateSelector/>
            <RadioSelector caption="Тариф" itemList={rateList} onlyColumn/>
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