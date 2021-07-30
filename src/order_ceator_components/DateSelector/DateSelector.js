import React, {useState} from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.scss';

setDefaultLocale(ru);

function DateSelector() {
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);

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
                            onChange={date => setStartDate(date)}
                            showTimeSelect
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="Pp"
                            timeIntervals={10}
                            locale="ru-RU"
                            timeCaption="Время"
                            isClearable
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
                            onChange={date => setEndDate(date)}
                            showTimeSelect
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="Pp"
                            timeIntervals={10}
                            locale="ru-RU"
                            timeCaption="Время"
                            isClearable
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelector;