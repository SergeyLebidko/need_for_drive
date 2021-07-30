import React, {useState} from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.scss';

setDefaultLocale(ru);

function DateSelector() {
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);

    let filterDate = () => {
        return true;
    }

    let filterTime = () => {
        return true
    }

    let handleChangeStartDate = date => {
        setStartDate(date);
    }

    let handleChangeEndDate = date => {
        setEndDate(date);
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
                            selected={startDate}
                            onChange={handleChangeStartDate}
                            showTimeSelect
                            startDate={startDate}
                            endDate={endDate}
                            maxDate={endDate}
                            timeIntervals={10}
                            dateFormat='Pp'
                            locale={ru}
                            timeCaption="Время"
                            isClearable
                            filterDate={filterDate}
                            filterTime={filterTime}
                        />
                    </div>
                </div>
                <div className="date_selector__row">
                    <div className="date_selector__cell">
                        <label>По</label>
                    </div>
                    <div className="date_selector__cell">
                        <DatePicker
                            selected={endDate}
                            onChange={handleChangeEndDate}
                            showTimeSelect
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            timeIntervals={10}
                            dateFormat='Pp'
                            locale={ru}
                            timeCaption="Время"
                            isClearable
                            filterDate={filterDate}
                            filterTime={filterTime}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelector;