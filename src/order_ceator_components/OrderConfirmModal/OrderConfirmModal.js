import React from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderConfirmModal.scss';

function OrderConfirmModal({handleConfirm, hideOrderConfirmModal}) {
    return (
        <div className="confirm_modal">
            <div className="confirm_modal__content">
                <h1 className="confirm_modal__caption">Подтвердить заказ</h1>
                <div className="confirm_modal__control">
                    <button className="button button_main_accent button_main_round_border" onClick={handleConfirm}>
                        Подтвердить
                    </button>
                    <button className="button button_dark_red button_main_round_border" onClick={hideOrderConfirmModal}>
                        Вернуться
                    </button>
                </div>
            </div>
        </div>
    )
}

OrderConfirmModal.propTypes = {
    hideOrderConfirmModal: PropTypes.func,
    handleConfirm: PropTypes.func
}

export default createStoreConnectedComponent('OrderConfirmModal')(OrderConfirmModal);