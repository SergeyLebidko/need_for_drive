import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ModelCard from '../ModelCard/ModelCard';
import './ModelSelector.scss';

function ModelSelector({modelList}) {
    let [selectedModel, setSelectedModel] = useState(null);

    let handleCardClick = model => setSelectedModel(model);

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
    modelList: PropTypes.array
}

export default (ModelSelector);