import React from 'react';
import PropTypes from 'prop-types';
import './ConfirmModal.scss';

function ConfirmModal() {
    return (
        <div className="confirm_modal">
            <div className="confirm_modal__content">
                <h1 className="confirm_modal__caption">Подтвердить заказ</h1>
                <div className="confirm_modal__control">
                    <button className="button button_main_accent button_main_round_border">
                        Подтвердить
                    </button>
                    <button className="button button_dark_red button_main_round_border">
                        Вернуться
                    </button>
                </div>
            </div>
        </div>
    )
}

ConfirmModal.propTypes = {
    mainCaption: PropTypes.string,
    cancelCaption: PropTypes.string,
    confirmCaption: PropTypes.string,
    handleCancel: PropTypes.func,
    handleConfirm: PropTypes.func
}

export default ConfirmModal;