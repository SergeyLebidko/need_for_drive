import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import capitalize from 'capitalize';
import randomstring from 'randomstring';
import './RadioSelector.scss';

function RadioSelector({caption, itemList, onlyColumn}) {
    let [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    let getTitleClassNames = index => classNames('radio_selector__title', {
        'checked_title': index === selectedCategoryIndex,
        'not_checked_title': index !== selectedCategoryIndex
    });

    let handleClick = index => setSelectedCategoryIndex(index);

    let radioGroupName = randomstring.generate('alphabetic');

    let itemsContainerClassNames = classNames('radio_selector__items_container', {'only_column': onlyColumn})

    return (
        <div className="radio_selector">
            {caption && <h1 className="radio_selector__caption">{caption}</h1>}
            <ul className={itemsContainerClassNames}>
                {itemList.map(
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
                                    {capitalize(item)}
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
    onlyColumn: false
}

RadioSelector.propTypes = {
    caption: PropTypes.string,
    itemList: PropTypes.array,
    onlyColumn: PropTypes.bool
}

export default (RadioSelector);