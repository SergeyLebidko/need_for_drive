import React from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../store/connector';
import './CategorySelector.scss';

function CategorySelector({categoryList}) {
    return (
        <ul>
            <li key="all_categories">
                <input type="radio" name="category_list" id="all_categories"/>
                <label htmlFor="all_categories">Все модели</label>
            </li>
            {categoryList.map(
                (category, index) =>
                    <li key={category}>
                        <input type="radio" name="category_list" id={`category_${index}`}/>
                        <label htmlFor={`category_${index}`}>{category}</label>
                    </li>
            )}
        </ul>
    )
}

CategorySelector.propTypes = {
    categoryList: PropTypes.array
}

export default createStoreConnectedComponent('CategorySelector')(CategorySelector);