import React from 'react';
import PropTypes from 'prop-types';
import TotalTab from '../../order_ceator_components/tab_components/TotalTab/TotalTab';
import OrderDetailsViewer from '../../common_components/order_details_components/OrderDetailsViewer/OrderDetailsViewer';
import OrderDetailsActionButton, {CANCEL_ACTION}
    from '../../common_components/order_details_components/OrdeDetailsActionButton/OrderDetailsActionButton';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderPane.scss';

function OrderPane({showModal}) {
    let detailsViewerButton = <OrderDetailsActionButton type={CANCEL_ACTION} action={showModal}/>

    return (
        <div className="order_pane">
            <div className="order_pane__content">
                <TotalTab order={{id: 'ORDER01234567890'}}/>
                <OrderDetailsViewer button={detailsViewerButton}/>
            </div>
        </div>
    )
}

OrderPane.propTypes = {
    showModal: PropTypes.func
}

export default createStoreConnectedComponent('OrderPane')(OrderPane);