import React from 'react';
import PropTypes from 'prop-types';
import './OrderViewer.scss';

function OrderViewer({match}) {
    return (
        <div>
            Здесь будет окно просмотра сведений о заказе {match.params.orderId}
        </div>
    )
}

OrderViewer.propTypes = {
    match: PropTypes.object
}

export default OrderViewer;