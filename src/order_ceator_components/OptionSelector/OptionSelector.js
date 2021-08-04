import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {getRandomString} from '../../utils';
import './OptionSelector.scss';

function OptionSelector({optionList}) {
    let [checked, setChecked] = useState(Array(optionList.length).fill(false));

    // TODO При реализации функциональности добавить к обработчику код добавления/удаления опции непосредственно в заказе
    let handleChange = checkedIndex => {
        setChecked(oldChecked => oldChecked.map((val, index) => index === checkedIndex ? !val : val));
    };

    return (
        <div className="option_selector">
            <h1 className="option_selector__caption">Доп. услуги</h1>
            {optionList.length > 0 &&
            <ul>
                {optionList.map(
                    (option, index) => {
                        let inputId = getRandomString();
                        let optionClassNames = classNames('option_selector__option', {'checked_option': checked[index]})
                        return (
                            <li key={option} className="option_selector__item">
                                <input type="checkbox" id={inputId}/>
                                <label className={optionClassNames} onClick={() => handleChange(index)} htmlFor={inputId}>
                                    {option}
                                </label>
                            </li>
                        )
                    }
                )}
            </ul>
            }
        </div>
    )
}

OptionSelector.propTypes = {
    optionList: PropTypes.array
}

export default OptionSelector;