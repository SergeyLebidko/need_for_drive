import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import randomstring from 'randomstring';
import {createStoreConnectedComponent} from '../../store/connector';
import './CategorySelector.scss';

function CategorySelector({categoryList}) {
    let [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    let currentCategoryList = ['Все модели', ...categoryList];

    let getTitleClassNames = index => classNames('category_selector__title', {
        'checked_title': index === selectedCategoryIndex,
        'not_checked_title': index !== selectedCategoryIndex
    });

    let handleClick = index => setSelectedCategoryIndex(index);

    return (
        <ul className="category_selector">
            {currentCategoryList.map(
                (category, index) => {
                    let radioId = randomstring.generate('alphabetic');
                    return (
                        <li key={category} className="category_selector__item">
                            <input type="radio" name="category_selector" id={radioId}/>
                            <label
                                className={getTitleClassNames(index)}
                                onClick={() => handleClick(index)}
                                htmlFor={radioId}
                            >
                                {category}
                            </label>
                        </li>
                    )
                }
            )}
        </ul>
    )
}

CategorySelector.propTypes = {
    categoryList: PropTypes.array
}

export default createStoreConnectedComponent('CategorySelector')(CategorySelector);