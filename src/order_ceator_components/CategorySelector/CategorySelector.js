import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createStoreConnectedComponent} from '../../store/connector';
import './CategorySelector.scss';

function CategorySelector({categoryList}) {
    let [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    let currentCategoryList = ['Все модели', ...categoryList];

    let getRadioClassNames = index => classNames('category_selector__radio', {
        'checked_radio': index === selectedCategoryIndex,
        'not_checked_radio': index !== selectedCategoryIndex
    });

    let getTitleClassNames = index => classNames('category_selector__title', {
        'checked_title': index === selectedCategoryIndex,
        'not_checked_title': index !== selectedCategoryIndex
    });

    let handleClick = index => setSelectedCategoryIndex(index);

    return (
        <ul className="category_selector">
            {currentCategoryList.map(
                (category, index) =>
                    <li key={category} className="category_selector__item">
                        <span className={getRadioClassNames(index)} onClick={() => handleClick(index)}/>
                        <span className={getTitleClassNames(index)} onClick={() => handleClick(index)}>
                            {category}
                        </span>
                    </li>
            )}
        </ul>
    )
}

CategorySelector.propTypes = {
    categoryList: PropTypes.array
}

export default createStoreConnectedComponent('CategorySelector')(CategorySelector);