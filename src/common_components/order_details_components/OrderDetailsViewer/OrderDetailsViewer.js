import React from 'react';
import PropTypes from 'prop-types';
import ViewerParameter from '../ViewerParameter/ViewerParameter';
import {getFormattedPrice} from '../../../utils';
import {createStoreConnectedComponent} from '../../../store/connector';
import './OrderDetailsViewer.scss';

function OrderDetailsViewer({order, button}) {

    // Учитываем, что цена заказа может отсутствовать либо быть выражена диапазоном чисел
    let priceString;
    if ('price' in order) {
        priceString = `Цена: {getFormattedPrice(order.price)}`;
    } else if ('cardId' in order) {
        priceString = `Цена: от ${getFormattedPrice(order.price.priceMin)} до ${getFormattedPrice(order.price.priceMax)}`;
    }

    return (
        <div className="order_details_viewer">
            <div className="order_details_viewer__content_block">
                <header className="order_details_viewer__header">Ваш заказ</header>
                <ul className="order_details_viewer__parameter_list">
                    <ViewerParameter parameterName="Пункт выдачи" parameterValue="Ульяновск, Нариманова 42"/>
                    <ViewerParameter parameterName="Модель" parameterValue="Huyndai, i30 N"/>
                    <ViewerParameter parameterName="Цвет" parameterValue="Голубой"/>
                    <ViewerParameter parameterName="Длительность аренды" parameterValue="1д 2ч"/>
                    <ViewerParameter parameterName="Тариф" parameterValue="На сутки"/>
                    <ViewerParameter parameterName="Полный бак" parameterValue="Да"/>
                    <ViewerParameter parameterName="Детские кресло" parameterValue="Да"/>
                    <ViewerParameter parameterName="Правый руль" parameterValue="Да"/>
                </ul>
                {priceString &&
                <span className="order_details_viewer__price">
                    {priceString} &#8381;
                </span>
                }
                {button}
            </div>
        </div>
    );
}

OrderDetailsViewer.propTypes = {
    order: PropTypes.object,
    button: PropTypes.element
}

export default createStoreConnectedComponent('OrderDetailsViewer')(OrderDetailsViewer);