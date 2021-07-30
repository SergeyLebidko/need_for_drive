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
            <div>
                <div>
                    <label>С</label>
                </div>
                <div>
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
                <div>
                    <label>По</label>
                </div>
                <div>
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
    )
}

export default DateSelector;