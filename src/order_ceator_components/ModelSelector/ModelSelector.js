import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {getFormattedPrice} from '../../utils';
import {createStoreConnectedComponent} from '../../store/connector';
import './ModelSelector.scss';

function ModelSelector({modelList}) {
    let [selectedModelIndex, setSelectedModelIndex] = useState(null);

    let handleCardClick = index => setSelectedModelIndex(index);

    let getCardClassNames = index => classNames({
        'model_selector__card': true,
        'selected_card': index === selectedModelIndex
    });

    return (
        <div className="model_selector">
            {modelList.map(
                (model, index) =>
                    <div key={model.title} className={getCardClassNames(index)} onClick={() => handleCardClick(index)}>
                        <span className="model_selector__title">
                            {model.title}
                        </span>
                        <span className="model_selector__price">
                            {getFormattedPrice(model.costStart)} - {getFormattedPrice(model.costEnd)} &#8381;
                        </span>
                        <img src={model.file} className="model_selector__photo"/>
                    </div>
            )}
        </div>
    );
}

ModelSelector.propTypes = {
    modelList: PropTypes.array
}

export default createStoreConnectedComponent('ModelSelector')(ModelSelector);