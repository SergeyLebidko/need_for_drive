import React from 'react';
import PropTypes from 'prop-types';
import ViewerParameter from '../ViewerParameter/ViewerParameter';
import {createStoreConnectedComponent} from '../../../store/connector';
import './OrderDetailsViewer.scss';
import {getFormattedPrice} from "../../../utils/common_utils";

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
                    {(order.cityId && order.pointId) &&
                        <ViewerParameter
                            parameterName="Пункт выдачи"
                            parameterValue={`${order.cityId.name}, ${order.pointId.address}`}
                        />
                    }

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