import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {getRandomString} from '../../utils/common_utils';
import {createStoreConnectedComponent} from '../../store/connector';
import './OptionSelector.scss';

function OptionSelector({order, optionList, setOrderOptions}) {
    let [options, setOptions] = useState([]);

    useEffect(() => {
        let _options = [];

        optionList.forEach(option => {
            if (order[option.field] === undefined) {
                _options.push(option);
                return;
            }
            _options.push({
                ...option,
                value: order[option.field]
            });
        });

        setOptions(_options);
    }, []);

    useEffect(() => setOrderOptions(options), [options]);

    let handleChange = option => {
        setOptions(oldOptions => oldOptions.map(_option => {
            if (_option.field !== option.field) return _option;
            return {
                ...option,
                value: !option.value
            }
        }));
    };

    return (
        <div className="option_selector">
            <h1 className="option_selector__caption">Доп. услуги</h1>
            {optionList.length > 0 &&
            <ul>
                {options.map(
                    option => {
                        let inputId = getRandomString();
                        let optionClassNames = classNames('option_selector__option', {'checked_option': option.value})
                        return (
                            <li key={option.field} className="option_selector__item">
                                <input type="checkbox" id={inputId}/>
                                <label className={optionClassNames} onClick={() => handleChange(option)}
                                       htmlFor={inputId}>
                                    {option.name}
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
    order: PropTypes.object,
    optionList: PropTypes.array,
    setOrderOptions: PropTypes.func
}

export default createStoreConnectedComponent('OptionSelector')(OptionSelector);