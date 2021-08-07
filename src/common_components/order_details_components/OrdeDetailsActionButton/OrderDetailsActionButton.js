import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../../styles/vars.scss';

function OrderDetailsActionButton({caption, hasDifferentColor, action}) {
    let buttonClassNames = classNames(
        'button',
        'button_main_round_border',
        {
            'button_main_accent': !hasDifferentColor && !!action,
            'button_dark_red': hasDifferentColor && !!action,
            'button_gray_light': !action
        });

    return (
        <button className={buttonClassNames} onClick={action}>
            {caption}
        </button>
    );
}

OrderDetailsActionButton.defaultProps = {
    action: null,
    hasDifferentColor: false
}

OrderDetailsActionButton.propTypes = {
    caption: PropTypes.string,
    hasDifferentColor: PropTypes.bool,
    action: PropTypes.func
}

export default OrderDetailsActionButton;