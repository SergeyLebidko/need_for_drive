import React from 'react';
import PropTypes from 'prop-types';
import TotalTab from '../../order_ceator_components/tab_components/TotalTab/TotalTab';
import OrderDetailsViewer from '../../common_components/order_details_components/OrderDetailsViewer/OrderDetailsViewer';
import OrderDetailsActionButton
    from '../../common_components/order_details_components/OrdeDetailsActionButton/OrderDetailsActionButton';
import {createStoreConnectedComponent} from '../../store/connector';
import {CANCELED_ORDER_STATUS_ID} from '../../constants/settings';
import './OrderPane.scss';

function OrderPane({order, showModal}) {
    const actionForButton = order.orderStatusId.id === CANCELED_ORDER_STATUS_ID ? null : showModal;

    return (
        <div className="order_pane">
            <div className="order_pane__content">
                <TotalTab/>
                <OrderDetailsViewer
                    button={<OrderDetailsActionButton caption="Отменить" action={actionForButton} hasDifferentColor/>}
                />
            </div>
        </div>
    )
}

OrderPane.propTypes = {
    order: PropTypes.object,
    showModal: PropTypes.func
}

export default createStoreConnectedComponent('OrderPane')(OrderPane);