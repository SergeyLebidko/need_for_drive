import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../../styles/vars.scss';

export const TO_MODEL_TAB_ACTION = 'to_model_tab_action';
export const TO_EXTRA_TAB_ACTION = 'to_extra_tab_action';
export const TO_TOTAL_TAB_ACTION = 'to_total_tab_action';
export const EXECUTE_ACTION = 'execute_action';
export const CANCEL_ACTION = 'cancel_action';

function OrderDetailsActionButton({type, action}) {
    const CAPTION_SELECTOR = {
        [TO_MODEL_TAB_ACTION]: 'Выбрать модель',
        [TO_EXTRA_TAB_ACTION]: 'Дополнительно',
        [TO_TOTAL_TAB_ACTION]: 'Итого',
        [EXECUTE_ACTION]: 'Заказать',
        [CANCEL_ACTION]: 'Отменить'
    }
    let caption = CAPTION_SELECTOR[type];

    // TODO При реализации функциональности добавить дополнительные проверки возможности выполнения тех или иных действий
    let handleClick = () => action();

    // TODO При реализации функциональности добавить выбор класса для случая недоступности действия кнопки
    let buttonClassNames = classNames(
        'button',
        'button_main_round_border',
        {
            'button_main_accent': type !== CANCEL_ACTION,
            'button_dark_red': type === CANCEL_ACTION
        });

    return (
        <button className={buttonClassNames} onClick={handleClick}>
            {caption}
        </button>
    );
}

OrderDetailsActionButton.defaultProps = {
    setMode: null
}

OrderDetailsActionButton.propTypes = {
    type: PropTypes.string,
    action: PropTypes.func
}

export default OrderDetailsActionButton;