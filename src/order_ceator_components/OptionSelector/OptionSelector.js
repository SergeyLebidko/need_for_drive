import React, {useState} from 'react';
import classNames from 'classnames';
import randomstring from 'randomstring';
import './OptionSelector.scss';

function OptionSelector() {
    let [hasFuelTank, setHasFuelTank] = useState(false);
    let [hasChildrenChair, setHasChildrenChair] = useState(false);
    let [hasRightWheel, setHasRightWheel] = useState(false);

    let tankOptionClasses = classNames('option_selector__title', {'checked_title': hasFuelTank});
    let chairOptionClasses = classNames('option_selector__title', {'checked_title': hasChildrenChair});
    let wheelOptionClasses = classNames('option_selector__title', {'checked_title': hasRightWheel});

    // TODO При реализации функциональности добавить к обработчикам код добавления/удаления опции непосредственно в заказ
    let handleTankOptionClick = () => setHasFuelTank(fuelTank => !fuelTank);
    let handleChairOptionClick = () => setHasChildrenChair(childrenChair => !childrenChair);
    let handleWheelOptionClick = () => setHasRightWheel(rightWheel => !rightWheel);

    let tankId = randomstring.generate('alphabetic');
    let chairId = randomstring.generate('alphabetic');
    let wheelId = randomstring.generate('alphabetic');

    return (
        <div className="option_selector">
            <h1 className="option_selector__caption">Доп. услуги</h1>
            <ul>
                <li className="option_selector__item">
                    <input type="checkbox" id={tankId}/>
                    <label className={tankOptionClasses} onClick={handleTankOptionClick} htmlFor={tankId}>
                        Полный бак, 500 р.
                    </label>
                </li>
                <li className="option_selector__item">
                    <input type="checkbox" id={chairId}/>
                    <label className={chairOptionClasses} onClick={handleChairOptionClick} htmlFor={chairId}>
                        Детское кресло, 200 р.
                    </label>
                </li>
                <li className="option_selector__item">
                    <input type="checkbox" id={wheelId}/>
                    <label className={wheelOptionClasses} onClick={handleWheelOptionClick} htmlFor={wheelId}>
                        Правый руль, 1600 р.
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default OptionSelector;