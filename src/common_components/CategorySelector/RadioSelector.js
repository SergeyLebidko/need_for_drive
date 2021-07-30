import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import randomstring from 'randomstring';
import './RadioSelector.scss';

function RadioSelector({itemList}) {
    let [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    let currentCategoryList = ['Все модели', ...itemList];

    let getTitleClassNames = index => classNames('radio_selector__title', {
        'checked_title': index === selectedCategoryIndex,
        'not_checked_title': index !== selectedCategoryIndex
    });

    let handleClick = index => setSelectedCategoryIndex(index);

    let radioGroupName = randomstring.generate('alphabetic');

    return (
        <ul className="radio_selector">
            {currentCategoryList.map(
                (item, index) => {
                    let radioId = randomstring.generate('alphabetic');
                    return (
                        <li key={item} className="radio_selector__item">
                            <input type="radio" name={`radio_selector_${radioGroupName}`} id={radioId}/>
                            <label
                                className={getTitleClassNames(index)}
                                onClick={() => handleClick(index)}
                                htmlFor={radioId}
                            >
                                {item}
                            </label>
                        </li>
                    )
                }
            )}
        </ul>
    )
}

RadioSelector.propTypes = {
    itemList: PropTypes.array
}

export default (RadioSelector);