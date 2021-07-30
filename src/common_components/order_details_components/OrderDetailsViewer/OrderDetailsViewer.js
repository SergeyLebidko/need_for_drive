import React from 'react';
import PropTypes from 'prop-types';
import {getFormattedPrice} from '../../../utils';
import './OrderDetailsViewer.scss';

function OrderDetailsViewer({button}) {
    return (
        <div className="order_details_viewer">
            <div className="order_details_viewer__content_block">
                <header className="order_details_viewer__header">Ваш заказ</header>
                <ul className="order_details_viewer__parameter_list">
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Пункт выдачи
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        Ульяновск, Нариманова 42
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Модель
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        Huyndai, i30 N
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Цвет
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        Голубой
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Длительность аренды
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        1д 2ч
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Тариф
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        На сутки
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Полный бак
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        Да
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Детское кресло
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        Да
                    </span>
                    </li>
                    <li className="order_details_viewer__parameter">
                    <span className="order_details_viewer__parameter_name">
                        Правый руль
                    </span>
                        <span className="order_details_viewer__spacer"/>
                        <span className="order_details_viewer__parameter_value">
                        Да
                    </span>
                    </li>
                </ul>
                <span className="order_details_viewer__price">
                    Цена: от {getFormattedPrice(8000)} до {getFormattedPrice(12000)} &#8381;
                </span>
                {button}
            </div>
        </div>
    );
}

OrderDetailsViewer.propTypes = {
    button: PropTypes.element
}

export default OrderDetailsViewer;