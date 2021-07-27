import React from 'react';
import './PlaceSelector.scss';

function PlaceSelector() {
    return (
        <div className="place_form">
            <div className="place_form__form_row">
                <div className="place_form__form_label">
                    <label htmlFor="place_form_city_field">Город</label>
                </div>
                <div className="place_form__form_field">
                    <input
                        id="place_form_city_field"
                        className="text_input"
                        placeholder="Начните вводить город ..."
                    />
                    <span className="place_form__clear_field_button">&#215;</span>
                </div>
            </div>
            <div className="place_form__form_row">
                <div className="place_form__form_label">
                    <label htmlFor="place_form_point_field">Пункт выдачи</label>
                </div>
                <div className="place_form__form_field">
                    <input
                        id="place_form_point_field"
                        className="text_input"
                        placeholder="Начните вводить пункт выдачи ..."
                    />
                    <span className="place_form__clear_field_button">&#215;</span>
                </div>
            </div>
        </div>
    );
}

export default PlaceSelector;