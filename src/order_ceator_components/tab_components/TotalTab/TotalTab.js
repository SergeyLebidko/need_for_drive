import React from 'react';
import car from '../../../content/images/car1.png';
import './TotalTab.scss';

function TotalTab() {
    return (
        <div className="total_tab">
            <ul className="total_tab__details_block">
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
                        01.08.2021
                    </span>
                </li>
            </ul>
            <div className="total_tab__photo_block">
                <img src={car}/>
            </div>
        </div>
    )
}

export default TotalTab;