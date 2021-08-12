import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ru from 'date-fns/locale/ru';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import {createStoreConnectedComponent} from '../../store/connector';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.scss';

setDefaultLocale(ru);

const TIME_MINUTES_INTERVAL = 30;

function DateSelector({order, setOrderDateFrom, setOrderDateTo, clearOrderDateFrom, clearOrderDateTo}) {
    let [dateFrom, setDateFrom] = useState(order.dateFrom || null);
    let [dateTo, setDateTo] = useState(order.dateTo || null);

    let extract = date => [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()];

    let shortCorrectDate = date => {
        let [year, mon, day, hour, min] = extract(date);
        return new Date(year, mon, day, hour, min);
    };

    let fullCorrectDate = date => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function getNormalizedDate() {
        let now = shortCorrectDate(new Date());
        let result = fullCorrectDate(new Date());
        while (+result < +now) result.setMinutes(result.getMinutes() + TIME_MINUTES_INTERVAL);
        return result;
    }

    // Фильтр для поля from, отсекающий даты, меньше нынешней
    let dateFromFilter = value => +value >= +fullCorrectDate(new Date());

    // Фильтр для поля from, отсекающий время меньше текущего
    let timeFromFilter = value => +value >= +shortCorrectDate(new Date());

    // Фильтр для поля to, отсекающий время меньше времени в поле from
    let timeToFilter = value => {
        let _dateFrom = new Date(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate(), dateFrom.getHours(), dateFrom.getMinutes());
        _dateFrom.setMinutes(_dateFrom.getMinutes() + TIME_MINUTES_INTERVAL);

        if (+fullCorrectDate(value) === +fullCorrectDate(new Date())) {
            return +(new Date(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate(), value.getHours(), value.getMinutes())) >= +_dateFrom;
        }

        return +shortCorrectDate(value) > +_dateFrom;
    }

    let handleChangeDateFrom = date => {
        if (!date) {
            setDateFrom(null);
            setDateTo(null);
            clearOrderDateFrom();
            clearOrderDateTo();
            return;
        }
        let _date;
        if (+date < +shortCorrectDate(new Date())) {
            _date = getNormalizedDate();
        } else {
            _date = shortCorrectDate(date);
        }
        setDateFrom(_date);
        setOrderDateFrom(_date);
        setDateTo(null);
        clearOrderDateTo();
    };

    let handleChangeDateTo = date => {
        if (!date) {
            setDateTo(null);
            clearOrderDateTo();
            return;
        }
        let _date = shortCorrectDate(date);
        setDateTo(_date);
        setOrderDateTo(_date);
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
                            filterTime={timeToFilter}
                            disabled={!dateFrom}
                            placeholderText={dateFrom ? '' : 'Выберите дату начала'}
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