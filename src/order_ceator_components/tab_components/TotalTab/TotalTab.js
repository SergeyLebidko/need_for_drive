import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../../store/connector';
import {extractDateParts} from '../../../utils/common_utils';
import {DOMEN} from '../../../urls';
import './TotalTab.scss';

function TotalTab({order}) {
    let [hasPhoto, setHasPhoto] = useState(true);

    let {carId: {name, number, tank, thumbnail: {path}}, dateFrom} = order;

    let format = value => ('0' + value).slice(-2);

    let getFormattedDate = timestamp => {
        let [year, mon, day, hour, min] = extractDateParts(new Date(timestamp));
        return `${format(day)}.${format(mon)}.${year} ${format(hour)}:${format(min)}`;
    }

    return (
        <div className="total_tab">
            <ul className="total_tab__details_block">
                {('id' in order) &&
                <li>
                    <span className="total_tab__confirm_caption">Ваш заказ подтвержден</span>
                </li>
                }
                <li>
                    <span className="total_tab__model_field">{name}</span>
                </li>
                <li>
                    {number && <span className="total_tab__auto_number_field">{number}</span>}
                </li>
                <li>
                    {tank &&
                    <>
                        <span className="total_tab__gas_caption">
                            Топливо
                        </span>
                        <span className="total_tab__gas_value">
                            {tank}%
                        </span>
                    </>
                    }
                </li>
                <li>
                    <span className="total_tab__available_caption">
                        Доступна с
                    </span>
                    <span className="total_tab__available_value">
                        {getFormattedDate(dateFrom)}
                    </span>
                </li>
            </ul>
            <div className="total_tab__photo_block">
                {hasPhoto && <img src={path[0] === '/' ? `${DOMEN}${path}` : path} onError={() => setHasPhoto(false)}/>}
            </div>
        </div>
    )
}

TotalTab.propTypes = {
    order: PropTypes.object
}

export default createStoreConnectedComponent('TotalTab')(TotalTab);