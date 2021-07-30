import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import DateSelector from '../../DateSelector/DateSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ExtraTab.scss';

function ExtraTab({colorList}) {
    return (
        <div className="extra_tab">
            <RadioSelector itemList={colorList}/>
            <DateSelector/>
        </div>
    )
}

ExtraTab.propTypes = {
    colorList: PropTypes.array
}

export default createStoreConnectedComponent('ExtraTab')(ExtraTab);