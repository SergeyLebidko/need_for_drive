import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../../store/connector';
import {extractDateParts} from '../../../utils/common_utils';
import {
    NEW_ORDER_STATUS_ID,
    CONFIRMED_ORDER_STATUS_ID,
    CANCELED_ORDER_STATUS_ID,
    TEMP_ORDER_STATUS_ID,
    TEST_ORDER_STATUS_ID
} from '../../../settings';
import {DOMEN} from '../../../urls';
import './TotalTab.scss';

function TotalTab({order}) {
    let [hasShowPhoto, setHasShowPhoto] = useState(true);

    let name, number, tank, path;
    const {carId, dateFrom, orderStatusId} = order;
    if (carId) {
        name = carId.name;
        number = carId.number;
        tank = carId.tank;
        path = carId.thumbnail.path;
    }

    const format = value => ('0' + value).slice(-2);

    const getFormattedDate = timestamp => {
        const [year, mon, day, hour, min] = extractDateParts(new Date(timestamp));
        return `${format(day)}.${format(mon)}.${year} ${format(hour)}:${format(min)}`;
    }

    const ORDER_STATUS_SELECTOR = {
        [NEW_ORDER_STATUS_ID]: 'Ваш заказ создан',
        [CONFIRMED_ORDER_STATUS_ID]: 'Ваш заказ подтвержден',
        [CANCELED_ORDER_STATUS_ID]: 'Ваш заказ отменен',
        [TEMP_ORDER_STATUS_ID]: 'Временный заказ',
        [TEST_ORDER_STATUS_ID]: 'Тестовый заказ'
    }

    const handlePhotoLoadError = () => setHasShowPhoto(false);

    return (
        <div className="total_tab">
            <ul className="total_tab__details_block">
                {orderStatusId &&
                <li>
                    <span
                        className="total_tab__confirm_caption">{ORDER_STATUS_SELECTOR[orderStatusId.id]}
                    </span>
                </li>
                }
                {name &&
                <li>
                    <span className="total_tab__model_field">{name}</span>
                </li>
                }
                {(number && number !== 'undefined') &&
                <li>
                    <span className="total_tab__auto_number_field">{number}</span>
                </li>
                }
                {tank &&
                <li>
                    <span className="total_tab__gas_caption">
                        Топливо
                    </span>
                    <span className="total_tab__gas_value">
                        {tank}%
                    </span>
                </li>
                }
                {dateFrom &&
                <li>
                    <span className="total_tab__available_caption">
                        Доступна с
                    </span>
                    <span className="total_tab__available_value">
                        {getFormattedDate(dateFrom)}
                    </span>
                </li>
                }
            </ul>
            <div className="total_tab__photo_block">
                {hasShowPhoto ?
                    (path && <img
                        src={path[0] === '/' ? `${DOMEN}${path}` : path}
                        onError={handlePhotoLoadError}
                        alt="Фото автомобиля"
                    />)
                    :
                    <span className="total_tab__no_photo">Нет фото...</span>
                }
            </div>
        </div>
    )
}

TotalTab.propTypes = {
    order: PropTypes.object
}

export default createStoreConnectedComponent('TotalTab')(TotalTab);