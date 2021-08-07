import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../../styles/vars.scss';

export const TO_MODEL_TAB_ACTION = 'to_model_tab_action';
export const TO_EXTRA_TAB_ACTION = 'to_extra_tab_action';
export const TO_TOTAL_TAB_ACTION = 'to_total_tab_action';
export const EXECUTE_ACTION = 'execute_action';
export const CANCEL_ACTION = 'cancel_action';

function OrderDetailsActionButton({type, hasEnabled, action}) {
    const CAPTION_SELECTOR = {
        [TO_MODEL_TAB_ACTION]: 'Выбрать модель',
        [TO_EXTRA_TAB_ACTION]: 'Дополнительно',
        [TO_TOTAL_TAB_ACTION]: 'Итого',
        [EXECUTE_ACTION]: 'Заказать',
        [CANCEL_ACTION]: 'Отменить'
    }
    let caption = CAPTION_SELECTOR[type];

    let buttonClassNames = classNames(
        'button',
        'button_main_round_border',
        {
            'button_main_accent': type !== CANCEL_ACTION && hasEnabled,
            'button_dark_red': type === CANCEL_ACTION && hasEnabled,
            'button_gray_light': !hasEnabled
        });

    return (
        <button className={buttonClassNames} onClick={action}>
            {caption}
        </button>
    );
}

OrderDetailsActionButton.defaultProps = {
    setMode: null,
    hasEnabled: true
}

OrderDetailsActionButton.propTypes = {
    type: PropTypes.string,
    hasEnabled: PropTypes.bool,
    action: PropTypes.func
}

export default OrderDetailsActionButton;