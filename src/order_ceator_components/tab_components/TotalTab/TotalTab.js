import React from 'react';
import car from '../../../content/images/car1.png';
import './TotalTab.scss';

function TotalTab() {
    return (
        <div className="total_tab">
            <ul className="total_tab__details_block">
                <li>
                    <span>Hyundai, i30 N</span>
                </li>
                <li>
                    <span>K 761 HA 73</span>
                </li>
                <li>
                    <span>Топливо:</span><span>100%</span>
                </li>
                <li>
                    <span>Доступна с:</span><span>01.08.2021</span>
                </li>
            </ul>
            <div className="total_tab__photo_block">
                <img src={car}/>
            </div>
        </div>
    )
}

export default TotalTab;