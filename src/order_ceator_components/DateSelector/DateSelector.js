import React, {useState} from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, {setDefaultLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.scss';

setDefaultLocale(ru);

const TIME_MINUTES_INTERVAL = 10;

function DateSelector() {
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);

    // TODO При реализации функциональности добавить код отсечения дат и времени, меньших текущего

    /*
      TODO При реализации функциональности добавить дополнительные проверки в обработчик
      Необходимо добавить проверку выбора даты/времени, которая бы не давала изменить время начала аренды так чтобы
      оно стало больше времени окончания аренды при одинаковых датах
    */
    let handleChangeStartDate = date => setStartDate(date);

    /*
      TODO При реализации функциональности добавить дополнительные проверки в обработчик
      Необходимо добавить проверку выбора даты/времени, которая бы не давала изменить время окончания аренды так, чтобы
      оно стало меньше времени начала аренды при одинаковых датах
    */
    let handleChangeEndDate = date => setEndDate(date);

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
                            selected={startDate}
                            onChange={handleChangeStartDate}
                            startDate={startDate}
                            endDate={endDate}
                            maxDate={endDate}
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
                            selected={endDate}
                            onChange={handleChangeEndDate}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelector;