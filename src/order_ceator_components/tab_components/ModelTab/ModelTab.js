import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import RadioSelector from '../../../common_components/RadioSelector/RadioSelector';
import ModelSelector from '../../ModelSelector/ModelSelector';
import {createStoreConnectedComponent} from '../../../store/connector';
import './ModelTab.scss';

const ALL_MODELS_ID = 'all_models';

function ModelTab({categoryList, modelList}) {
    let [modelListForShow, setModelListForShow] = useState([]);
    let categoryListForShow = [{id: ALL_MODELS_ID, name: 'Все модели'}, ...categoryList];

    useEffect(() => setModelListForShow(modelList), [modelList]);

    let handleCategorySelect = selectedCategory => {
        if (selectedCategory.id === ALL_MODELS_ID) {
            setModelListForShow(modelList);
        } else {
            setModelListForShow(
                modelList.filter(model => model.categoryId ? model.categoryId.id === selectedCategory.id : false)
            );
        }
    }

    return (
        <div className="model_tab">
            <RadioSelector items={categoryListForShow} handleSelect={handleCategorySelect}/>
            <ModelSelector modelList={modelListForShow}/>
        </div>
    )
}

ModelTab.propTypes = {
    categoryList: PropTypes.array,
    modelList: PropTypes.array
}

export default createStoreConnectedComponent('ModelTab')(ModelTab);