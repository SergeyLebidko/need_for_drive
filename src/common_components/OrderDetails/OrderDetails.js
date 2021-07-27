import React from 'react';
import classNames from 'classnames';
import './OrderDetails.scss';

function OrderDetails() {
    let buttonClasses = classNames({
        'button': true,
        'button_main_accent': true,
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
            <span className="order_details__price">Цена: от 8 000 до 12 000 &#8381;</span>
            <button className={buttonClasses} disabled>
                Выбрать модель
            </button>
        </div>
    );
}

export default OrderDetails;