import React from 'react';
import PropTypes from 'prop-types';
import {getRandomString} from '../../../utils';
import './SelectorItem.scss';

function SelectorItem({caption, placeholder}) {
    let inputId = getRandomString();

    return (
        <div className="selector_item">
            <div className="selector_item__label_block">
                <label htmlFor={inputId}>{caption}</label>
            </div>
            <div className="selector_item__input_block">
                <input id={inputId} placeholder={placeholder}/>
                <span className="selector_item__clear_button">&#215;</span>
            </div>
        </div>
    )
}

SelectorItem.propTypes = {
    caption: PropTypes.string,
    placeholder: PropTypes.string
}

export default SelectorItem;