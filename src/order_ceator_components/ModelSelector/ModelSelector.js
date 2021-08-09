import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ModelCard from '../ModelCard/ModelCard';
import {createStoreConnectedComponent} from '../../store/connector';
import './ModelSelector.scss';

function ModelSelector({modelList, setOrderModel}) {
    let [selectedModel, setSelectedModel] = useState(null);

    let handleCardClick = model => {
        setSelectedModel(model);
        setOrderModel(model);
    };

    return (
        <div className="model_selector">
            {modelList.map(
                model =>
                    <ModelCard
                        key={model.id}
                        model={model}
                        hasSelected={selectedModel === model}
                        handleClick={handleCardClick}
                    />
            )}
        </div>
    );
}

ModelSelector.propTypes = {
    modelList: PropTypes.array,
    setOrderModel: PropTypes.func
}

export default createStoreConnectedComponent('ModelSelector')(ModelSelector);