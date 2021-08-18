import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './PopupItem.scss';

function PopupItem({item, fieldName, hasSelect, handleClick, handleMouseEnter}) {
    const itemClassNames = classNames('popup_item', {'selected_popup_item': hasSelect});

    return (
        <li className={itemClassNames} onClick={handleClick} onMouseEnter={handleMouseEnter}>
            {item[fieldName]}
        </li>
    );
}

PopupItem.propTypes = {
    item: PropTypes.object,
    fieldName: PropTypes.string,
    hasSelect: PropTypes.bool,
    handleClick: PropTypes.func,
    handleMouseEnter: PropTypes.func
}

export default PopupItem;