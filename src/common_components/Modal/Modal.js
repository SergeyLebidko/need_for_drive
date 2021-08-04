import React from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../store/connector';
import './Modal.scss';

function Modal({caption, handleConfirm, hideModal}) {
    let handleCancel = () => hideModal();

    return (
        <div className="confirm_modal">
            <div className="confirm_modal__content">
                <h1 className="confirm_modal__caption">{caption}</h1>
                <div className="confirm_modal__control">
                    <button className="button button_main_accent button_main_round_border" onClick={handleConfirm}>
                        Подтвердить
                    </button>
                    <button className="button button_dark_red button_main_round_border" onClick={handleCancel}>
                        Вернуться
                    </button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    caption: PropTypes.string,
    handleConfirm: PropTypes.func,
    hideModal: PropTypes.func
}

export default createStoreConnectedComponent('Modal')(Modal);