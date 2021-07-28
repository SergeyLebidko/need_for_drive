import React from 'react';
import PropTypes from 'prop-types';
import {getFormattedPrice} from '../../utils';
import './OrderDetails.scss';

function OrderDetails({button}) {
    return (
        <div className="order_details">
            <div className="order_details__content_block">
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
                    <li className="order_details__parameter">
                    <span className="order_details__parameter_name">
                        Модель
                    </span>
                        <span className="order_details__spacer"/>
                        <span className="order_details__parameter_value">
                        Huyndai, i30 N
                    </span>
                    </li>
                </ul>
                <span className="order_details__price">
                    Цена: от {getFormattedPrice(8000)} до {getFormattedPrice(12000)} &#8381;
                </span>
                {button}
            </div>
        </div>
    );
}

OrderDetails.propTypes = {
    button: PropTypes.element
}

export default OrderDetails;