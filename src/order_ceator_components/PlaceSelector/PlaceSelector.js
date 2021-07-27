import React from 'react';
import './PlaceForm.scss';

function PlaceSelector() {
    return (
        <div className="place_form">
            <div className="place_form__form_row">
                <div className="place_form__form_label">
                    Город
                </div>
                <div className="place_form__form_field">
                    <input className="text_input" placeholder="Начните вводить город ..."/>
                    <span className="place_form__clear_field_button">&#215;</span>
                </div>
            </div>
            <div className="place_form__form_row">
                <div className="place_form__form_label">
                    Пункт выдачи
                </div>
                <div className="place_form__form_field">
                    <input className="text_input" placeholder="Начните вводить пункт выдачи ..."/>
                    <span className="place_form__clear_field_button">&#215;</span>
                </div>
            </div>
        </div>
    );
}

export default PlaceSelector;