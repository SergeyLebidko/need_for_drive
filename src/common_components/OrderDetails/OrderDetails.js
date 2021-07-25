import React from 'react';
import classNames from 'classnames';
import './OrderDetails.scss';

function OrderDetails() {
    let buttonClasses = classNames({
        'button': true,
        'button_gray_light': true,
        'button_main_round_border': true,
        'order_details__button': true
    });

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
            <button className={buttonClasses} disabled>
                Выбрать модель
            </button>
        </div>
    );
}

export default OrderDetails;