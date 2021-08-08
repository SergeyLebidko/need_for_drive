import React from 'react';
import PropTypes from 'prop-types';
import car from '../../../content/images/car.png';
import './TotalTab.scss';

// TODO При реализации функциональности компонент будет получать объект заказа из хранилища Redux. Сейчас нужен для тестирования верстки
function TotalTab({order}) {
    return (
        <div className="total_tab">
            <ul className="total_tab__details_block">
                {('id' in order) &&
                <li>
                    <span className="total_tab__confirm_caption">Ваш заказ подтвержден</span>
                </li>
                }
                <li>
                    <span className="total_tab__model_field">Hyundai, i30 N</span>
                </li>
                <li>
                    <span className="total_tab__auto_number_field">K 761 HA 73</span>
                </li>
                <li>
                    <span className="total_tab__gas_caption">
                        Топливо
                    </span>
                    <span className="total_tab__gas_value">
                        100%
                    </span>
                </li>
                <li>
                    <span className="total_tab__available_caption">
                        Доступна с
                    </span>
                    <span className="total_tab__available_value">
                        01.08.2021 12:00
                    </span>
                </li>
            </ul>
            <div className="total_tab__photo_block">
                <img src={car}/>
            </div>
        </div>
    )
}

TotalTab.defaultProps = {
    order: {}
}

TotalTab.propTypes = {
    order: PropTypes.object
}

export default TotalTab;