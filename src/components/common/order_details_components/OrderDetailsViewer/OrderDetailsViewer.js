import React from 'react';
import PropTypes from 'prop-types';
import ViewerParameter from '../ViewerParameter/ViewerParameter';
import {getFormattedPrice, capitalize} from '../../../../utils/common_utils';
import {createStoreConnectedComponent} from '../../../../store/connector';
import {getDuration} from '../../../../utils/order_utils';
import './OrderDetailsViewer.scss';

function OrderDetailsViewer({order, button, optionList}) {
    let priceString;
    let priceBlockClasses = 'order_details_viewer__price';
    const {carId} = order;
    if (carId) {
        const {priceMin, priceMax} = carId;
        if ('price' in order) {
            const {price} = order;
            priceString = `Цена: ${getFormattedPrice(order.price)}р.`;
            priceString += (price < priceMin ? ` меньше минимальной (${priceMin}р.)` : '');
            priceString += (price > priceMax ? ` больше максимальной (${priceMax}р.)` : '');
            priceBlockClasses += ((price < priceMin || price > priceMax) ? ' incorrect_price' : '');
        } else {
            priceString = `Цена: от ${getFormattedPrice(priceMin)} до ${getFormattedPrice(priceMax)}р.`;
        }
    }

    const options = [];
    optionList.forEach(option => {
        if (order[option.field]) options.push(option.name);
    });

    let duration;
    if (order.dateFrom && order.dateTo) {
        duration = '';
        const {weekCount, dayCount, hourCount, minCount} = getDuration(order.dateFrom, order.dateTo);
        if (weekCount) duration += `${weekCount}нед`;
        if (dayCount) duration += ` ${dayCount}д`;
        if (hourCount) duration += ` ${hourCount}ч`;
        if (minCount) duration += ` ${minCount}мин`;
        duration = duration.trim();
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
                    {order.carId &&
                    <ViewerParameter
                        parameterName="Модель"
                        parameterValue={`${order.carId.name}`}
                    />
                    }
                    {order.color &&
                    <ViewerParameter
                        parameterName="Цвет"
                        parameterValue={capitalize(order.color)}
                    />
                    }
                    {options.map(
                        option =>
                            <ViewerParameter
                                key={option}
                                parameterName={option}
                                parameterValue="Да"
                            />
                    )}
                    {order.rateId &&
                    <ViewerParameter
                        parameterName="Тариф"
                        parameterValue={order.rateId.rateTypeId.name}
                    />
                    }
                    {duration &&
                    <ViewerParameter
                        parameterName="Длительность аренды"
                        parameterValue={duration}
                    />
                    }
                </ul>
                {priceString &&
                <span className={priceBlockClasses}>
                    {priceString}
                </span>
                }
                {button}
            </div>
        </div>
    );
}

OrderDetailsViewer.propTypes = {
    order: PropTypes.object,
    button: PropTypes.element,
    optionList: PropTypes.array
}

export default createStoreConnectedComponent('OrderDetailsViewer')(OrderDetailsViewer);