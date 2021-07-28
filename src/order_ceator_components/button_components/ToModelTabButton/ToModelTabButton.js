import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MODEL_MODE} from '../../../settings';
import '../../../styles/buttons.scss';

function ToModelTabButton({setMode}) {
    let buttonClasses = classNames({
        'button': true,
        'button_main_accent': true,
        'button_main_round_border': true
    });

    // TODO При реализации функциональности добавить логику проверки возможности переключения на вкладку выбора модели
    let handleClick = setMode(MODEL_MODE);

    return (
        <button className={buttonClasses} onClick={handleClick}>
            Выбрать модель
        </button>
    )
}

ToModelTabButton.propTypes = {
    setMode: PropTypes.func
}

export default ToModelTabButton;
