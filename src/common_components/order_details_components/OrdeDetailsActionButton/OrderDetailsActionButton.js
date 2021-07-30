import React from 'react';
import PropTypes from 'prop-types';
import {MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../../settings';
import '../../../styles/vars.scss';

export const TO_MODEL_TAB_ACTION = 'to_model_tab_action';
export const TO_EXTRA_TAB_ACTION = 'to_extra_tab_action';
export const TO_TOTAL_TAB_ACTION = 'to_total_tab_action';
export const EXECUTE_ACTION = 'execute_action';

function OrderDetailsActionButton({type, setMode}) {
    const CAPTION_SELECTOR = {
        [TO_MODEL_TAB_ACTION]: 'Выбрать модель',
        [TO_EXTRA_TAB_ACTION]: 'Дополнительно',
        [TO_TOTAL_TAB_ACTION]: 'Итого',
        [EXECUTE_ACTION]: 'Заказать'
    }
    let caption = CAPTION_SELECTOR[type];

    // TODO При реализации функциональности добавить дополнительные проверки возможности выполнения тех или иных действий
    let handleClick = () => {
        if (type === TO_MODEL_TAB_ACTION) setMode(MODEL_MODE);
        if (type === TO_EXTRA_TAB_ACTION) setMode(EXTRA_MODE);
        if (type === TO_TOTAL_TAB_ACTION) setMode(TOTAL_MODE);
    }

    return (
        <button className="button button_main_accent button_main_round_border" onClick={handleClick}>
            {caption}
        </button>
    );
}

OrderDetailsActionButton.propTypes = {
    type: PropTypes.string,
    setMode: PropTypes.func
}

export default OrderDetailsActionButton;