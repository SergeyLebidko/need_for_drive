import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ModelCard from '../ModelCard/ModelCard';
import {createStoreConnectedComponent} from '../../store/connector';
import './ModelSelector.scss';

function ModelSelector({modelList}) {
    let [selectedModel, setSelectedModel] = useState(null);

    let handleCardClick = model => setSelectedModel(model);

    return (
        <div className="model_selector">
            {modelList.map(
                model =>
                    <ModelCard
                        key={model.title}
                        model={model}
                        hasSelected={selectedModel === model}
                        handleClick={handleCardClick}
                    />
            )}
        </div>
    );
}

ModelSelector.propTypes = {
    modelList: PropTypes.array
}

export default createStoreConnectedComponent('ModelSelector')(ModelSelector);