import React from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import ModelSelector from '../../ModelSelector/ModelSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ModelTab.scss';

function ModelTab({categoryList, modelList}) {
    return (
        <div className="model_tab">
            <RadioSelector itemList={categoryList}/>
            <ModelSelector modelList={modelList}/>
        </div>
    )
}

ModelTab.propTypes = {
    categoryList: PropTypes.array,
    modelList: PropTypes.array
}

export default createStoreConnectedComponent('ModelTab')(ModelTab);