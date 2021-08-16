import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {capitalize, getRandomString} from '../../utils/common_utils';
import './RadioSelector.scss';

function RadioSelector({caption, items, onlyColumn, handleSelect, defaultSelectedIndex}) {
    let [selectedCategoryIndex, setSelectedCategoryIndex] = useState(defaultSelectedIndex);

    const getTitleClassNames = index => classNames('radio_selector__title', {
        'checked_title': index === selectedCategoryIndex,
        'not_checked_title': index !== selectedCategoryIndex
    });

    const handleClick = index => {
        setSelectedCategoryIndex(index);
        handleSelect(items[index]);
    };

    const radioGroupName = getRandomString();

    const itemsContainerClassNames = classNames('radio_selector__items_container', {'only_column': onlyColumn})

    return (
        <div className="radio_selector">
            {caption && <h1 className="radio_selector__caption">{caption}</h1>}
            <ul className={itemsContainerClassNames}>
                {items.map(
                    (item, index) => {
                        let radioId = getRandomString('alphabetic');
                        return (
                            <li key={item.name} className="radio_selector__item">
                                <input type="radio" name={`radio_selector_${radioGroupName}`} id={radioId}/>
                                <label
                                    className={getTitleClassNames(index)}
                                    onClick={() => handleClick(index)}
                                    htmlFor={radioId}
                                >
                                    {capitalize(item.name)}
                                </label>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

RadioSelector.defaultProps = {
    caption: null,
    onlyColumn: false,
    defaultSelectedIndex: 0
}

RadioSelector.propTypes = {
    caption: PropTypes.string,
    items: PropTypes.array,
    onlyColumn: PropTypes.bool,
    handleSelect: PropTypes.func,
    defaultSelectedIndex: PropTypes.number
}

export default RadioSelector;