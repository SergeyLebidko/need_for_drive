import React, {useState} from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import {getFormattedPrice} from '../../../utils/common_utils';
import {DOMEN} from '../../../constants/urls';
import './ModelCard.scss';

function ModelCard({model, hasSelected, handleClick}) {
    const [hasCarImage, setHasCarImage] = useState(true);

    const handleErrorImageLoad = () => setHasCarImage(false);

    const cardClassNames = classNames('model_card', {
        'selected_card': hasSelected
    });

    return (
        <div className={cardClassNames} onClick={() => handleClick(model)}>
            <span className="model_card__title">
                {model.name}
            </span>
            <span className="model_card__price">
                {getFormattedPrice(model.priceMin)} - {getFormattedPrice(model.priceMax)} &#8381;
            </span>
            {hasCarImage ?
                <img
                    src={model.thumbnail.path[0] === '/' ? `${DOMEN}${model.thumbnail.path}` : model.thumbnail.path}
                    className="model_card__photo"
                    alt="Фото автомобиля"
                    onError={handleErrorImageLoad}
                />
                :
                <div className="model_card__no_photo">Нет фото...</div>
            }
        </div>
    );
}

ModelCard.propTypes = {
    model: propTypes.object,
    hasSelected: propTypes.bool,
    handleClick: propTypes.func
}

export default ModelCard;