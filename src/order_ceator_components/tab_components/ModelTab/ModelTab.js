import React from 'react';
import CategorySelector from '../../../common_components/CategorySelector/CategorySelector';
import ModelSelector from '../../ModelSelector/ModelSelector';
import './ModelTab.scss';

function ModelTab(){
    return (
        <div className="model_tab">
            <CategorySelector/>
            <ModelSelector/>
        </div>
    )
}

export default ModelTab;