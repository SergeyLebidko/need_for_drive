import React from 'react'
import PropTypes from 'prop-types';
import './NumberPane.scss';

function NumberPane({orderNumber}){
    return (
        <div className="number_pane">
            <h1 className="number_pane__caption_block">Заказ номер: {orderNumber}</h1>
        </div>
    )
}

NumberPane.propTypes = {
    orderNumber: PropTypes.string
}

export default NumberPane;
