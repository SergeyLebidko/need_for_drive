import React from 'react';
import tempMap from '../../../content/images/map.png';
import './LocationTab.scss';

function LocationTab() {
    return (
        <div className="location_tab">
            <table className="location_tab__input_block">
                <tbody>
                <tr>
                    <td>
                        <label htmlFor="location_tab_city_field">Город</label>
                    </td>
                    <td>
                        <input
                            id="location_tab_city_field"
                            className="text_input_field"
                            placeholder="Начните вводить город"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="location_tab_point_field">Пункт выдачи</label>
                    </td>
                    <td>
                        <input
                            id="location_tab_point_field"
                            className="text_input_field"
                            placeholder="Начните вводить пункт выдачи"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            <label className="location_tab__map_label">Выбрать на карте</label>
            <img src={tempMap} className="location_tab__map"/>
        </div>
    )
}

export default LocationTab;