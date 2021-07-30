import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/CategorySelector/RadioSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ExtraTab.scss';

function ExtraTab({colorList}) {
    return (
        <div className="extra_tab">
            <RadioSelector itemList={colorList}/>
        </div>
    )
}

ExtraTab.propTypes = {
    colorList: PropTypes.array
}

export default createStoreConnectedComponent('ExtraTab')(ExtraTab);