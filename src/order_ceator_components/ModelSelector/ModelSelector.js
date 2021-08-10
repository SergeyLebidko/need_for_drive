import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ModelCard from '../ModelCard/ModelCard';
import {createStoreConnectedComponent} from '../../store/connector';
import './ModelSelector.scss';

const SHOW_LIMIT = 10;

function ModelSelector({order, modelList, setOrderModel, clearOrderColor}) {
    let [selectedModel, setSelectedModel] = useState(order.carId ? order.carId : null);
    let [currentShowLimit, setCurrentShowLimit] = useState(SHOW_LIMIT);

    useEffect(() => {
        setCurrentShowLimit(SHOW_LIMIT);
    }, [modelList])

    let handleCardClick = model => {
        setSelectedModel(model);
        setOrderModel(model);
        // При изменении выбранной модели - сбрасываем данные вкладки с дополнительными параметрами
        clearOrderColor();
        // TODO Вставить функции сброса других дополнительных параметров
    };

    let handleMoreButtonClick = () => setCurrentShowLimit(oldLimit => oldLimit + SHOW_LIMIT);

    return (
        <div className="model_selector">
            <div className="model_selector__model_list">
                {modelList.map(
                    (model, index) => {
                        if (index < currentShowLimit) {
                            return (
                                <ModelCard
                                    key={model.id}
                                    model={model}
                                    hasSelected={selectedModel && (selectedModel.id === model.id)}
                                    handleClick={handleCardClick}
                                />
                            );
                        }
                    }
                )}
            </div>
            {(currentShowLimit < modelList.length) &&
            <div className="model_selector__more_control">
                <button className="button button_main_accent button_main_round_border" onClick={handleMoreButtonClick}>
                    Показать еще
                </button>
            </div>
            }
        </div>
    );
}

ModelSelector.propTypes = {
    modelList: PropTypes.array,
    order: PropTypes.object,
    setOrderModel: PropTypes.func,
    clearOrderColor: PropTypes.func
}

export default createStoreConnectedComponent('ModelSelector')(ModelSelector);