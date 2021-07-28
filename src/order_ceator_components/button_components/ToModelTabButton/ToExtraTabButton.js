import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {EXTRA_MODE} from '../../../settings';
import '../../../styles/buttons.scss';

function ToExtraTabButton({setMode}) {
    let buttonClasses = classNames({
        'button': true,
        'button_main_accent': true,
        'button_main_round_border': true
    });

    // TODO При реализации функциональности добавить логику проверки возможности переключения на вкладку выбора дополнительных параметров заказа
    let handleClick = setMode(EXTRA_MODE);

    return (
        <button className={buttonClasses} onClick={handleClick}>
            Дополнительно
        </button>
    )
}

ToExtraTabButton.propTypes = {
    setMode: PropTypes.func
}

export default ToExtraTabButton;
