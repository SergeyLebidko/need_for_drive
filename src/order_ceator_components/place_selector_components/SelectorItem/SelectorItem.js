import React from 'react';
import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import './SelectorItem.scss';

function SelectorItem({caption, placeholder}) {
    let inputId = randomstring.generate('alphabetic');

    return (
        <div className="selector_item">
            <div className="selector_item__label">
                <label htmlFor={inputId}>{caption}</label>
            </div>
            <div className="selector_item__field">
                <input
                    id={inputId}
                    className="text_input"
                    placeholder={placeholder}
                />
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