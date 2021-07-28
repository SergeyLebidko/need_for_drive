import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {TOTAL_MODE} from '../../../settings';
import '../../../styles/buttons.scss';

function ToTotalTabButton({setMode}) {
    let buttonClasses = classNames({
        'button': true,
        'button_main_accent': true,
        'button_main_round_border': true
    });

    // TODO При реализации функциональности добавить логику проверки возможности переключения на вкладку "Итого"
    let handleClick = () => setMode(TOTAL_MODE);

    return (
        <button className={buttonClasses} onClick={handleClick}>
            Итого
        </button>
    )
}

ToTotalTabButton.propTypes = {
    setMode: PropTypes.func
}

export default ToTotalTabButton;
