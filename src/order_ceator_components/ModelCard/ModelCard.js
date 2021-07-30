import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import {getFormattedPrice} from '../../utils';
import './ModelCard.scss';

function ModelCard({model, hasSelected, handleClick}) {
    let cardClassNames = classNames('model_card', {
        'selected_card': hasSelected
    });

    return (
        <div className={cardClassNames} onClick={() => handleClick(model)}>
            <span className="model_card__title">
                {model.title}
            </span>
            <span className="model_card__price">
                {getFormattedPrice(model.costStart)} - {getFormattedPrice(model.costEnd)} &#8381;
            </span>
            <img src={model.file} className="model_card__photo" alt={model.title}/>
        </div>
    );
}

ModelCard.propTypes = {
    model: propTypes.shape({
        title: propTypes.string,
        costStart: propTypes.number,
        costEnd: propTypes.number,
        file: propTypes.string
    }),
    hasSelected: propTypes.bool,
    handleClick: propTypes.func
}

export default ModelCard;