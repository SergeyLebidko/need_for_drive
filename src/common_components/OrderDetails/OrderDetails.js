import React from 'react';
import './OrderDetails.scss';

function OrderDetails() {
    return (
        <div className="order_details">
            <header className="order_details__header">Ваш заказ</header>
            <ul className="order_details__parameter_list">
                <li className="order_details__parameter">
                    <span className="order_details__parameter_name">
                        Пункт выдачи
                    </span>
                    <span className="order_details__spacer"/>
                    <span className="order_details__parameter_value">
                        Ульяновск, Нариманова 42
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default OrderDetails;