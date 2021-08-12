import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ru from 'date-fns/locale/ru';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import {createStoreConnectedComponent} from '../../store/connector';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.scss';

setDefaultLocale(ru);

const TIME_MINUTES_INTERVAL = 10;

function DateSelector({order, setOrderDateFrom, setOrderDateTo, clearOrderDateFrom, clearOrderDateTo}) {
    let [dateFrom, setDateFrom] = useState(order.dateFrom || null);
    let [dateTo, setDateTo] = useState(order.dateTo || null);

    function shortCorrectDate(date) {
        let _date = date;
        _date.setMilliseconds(0);
        _date.setSeconds(0);
        return _date;
    }

    function fullCorrectDate(date) {
        let _date = shortCorrectDate(date);
        _date.setMinutes(0);
        _date.setHours(0);
        return _date;
    }


    // Фильтр, отсекающий даты, меньше нынешней
    let dateFromFilter = value => (+value) >= +fullCorrectDate(new Date());

    // Фильтр, отсекающий время меньше текущего
    let timeFromFilter = value => (+value) >= Date.now();

    let handleChangeDateFrom = date => {
        setDateFrom(date);
        if (date) {
            setOrderDateFrom(shortCorrectDate(date));
            return;
        }
        clearOrderDateFrom();
    };

    let handleChangeDateTo = date => {
        setDateTo(date);
        if (date) {
            setOrderDateTo(shortCorrectDate(date));
            return;
        }
        clearOrderDateTo();
    };

    const commonDatePickerProps = {
        showTimeSelect: true,
        timeIntervals: TIME_MINUTES_INTERVAL,
        dateFormat: 'Pp',
        locale: ru,
        timeCaption: 'Время',
        isClearable: true
    }

    return (
        <div className="date_selector">
            <h1 className="date_selector__caption">Дата аренды</h1>
            <div className="date_selector__selector_container">
                <div className="date_selector__row">
                    <div className="date_selector__cell">
                        <label>С</label>
                    </div>
                    <div className="date_selector__cell">
                        <DatePicker
                            {...commonDatePickerProps}
                            selected={dateFrom}
                            onChange={handleChangeDateFrom}
                            startDate={dateFrom}
                            filterDate={dateFromFilter}
                            filterTime={timeFromFilter}
                            endDate={dateTo}
                            maxDate={dateTo}
                        />
                    </div>
                </div>
                <div className="date_selector__row">
                    <div className="date_selector__cell">
                        <label>По</label>
                    </div>
                    <div className="date_selector__cell">
                        <DatePicker
                            {...commonDatePickerProps}
                            selected={dateTo}
                            onChange={handleChangeDateTo}
                            startDate={dateFrom}
                            endDate={dateTo}
                            minDate={dateFrom}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

DateSelector.propTypes = {
    order: PropTypes.object,
    setOrderDateFrom: PropTypes.func,
    setOrderDateTo: PropTypes.func,
    clearOrderDateFrom: PropTypes.func,
    clearOrderDateTo: PropTypes.func
}

export default createStoreConnectedComponent('DateSelector')(DateSelector);