import React from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../store/connector';
import './Modal.scss';

export const CONFIRM_ORDER_MODAL = 'confirm_order_modal';
export const REMOVE_ORDER_MODAL = 'cancel_order_modal';

function Modal({type, action, hideModal}) {
    // Перед выполнением действия подтверждения обязательно закрываем модальное окно
    let handleYesButtonClick = () => {
        hideModal();
        action();
    }

    let handleNoButtonClick = () => hideModal();

    const PROPS_SELECTOR = {
        [CONFIRM_ORDER_MODAL]: {
            mainCaption: 'Подтвердить заказ?',
            yesCaption: 'Подтвердить',
            yesButtonClassNames: 'button button_main_accent button_main_round_border',
            noCaption: 'Вернуться',
            noButtonClassNames: 'button button_dark_red button_main_round_border'
        },
        [REMOVE_ORDER_MODAL]: {
            mainCaption: 'Отменить заказ?',
            yesCaption: 'Отменить',
            yesButtonClassNames: 'button button_dark_red button_main_round_border',
            noCaption: 'Вернуться',
            noButtonClassNames: 'button button_main_accent button_main_round_border'
        }
    }
    let {mainCaption, yesCaption, noCaption, yesButtonClassNames, noButtonClassNames} = PROPS_SELECTOR[type];

    return (
        <div className="confirm_modal">
            <div className="confirm_modal__content">
                <h1 className="confirm_modal__caption">{mainCaption}</h1>
                <div className="confirm_modal__control">
                    <button className={yesButtonClassNames} onClick={handleYesButtonClick}>
                        {yesCaption}
                    </button>
                    <button className={noButtonClassNames} onClick={handleNoButtonClick}>
                        {noCaption}
                    </button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    type: PropTypes.string,
    action: PropTypes.func,
    hideModal: PropTypes.func
}

export default createStoreConnectedComponent('Modal')(Modal);