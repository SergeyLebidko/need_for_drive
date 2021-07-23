import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabTitles.scss';

function TabTitles({mode, setMode}) {
    const itemsData = [
        {
            title: 'Местоположение',
            boundMode: LOCATION_MODE
        },
        {
            title: 'Модель',
            boundMode: MODEL_MODE
        },
        {
            title: 'Дополнительно',
            boundMode: EXTRA_MODE
        },
        {
            title: 'Итого',
            boundMode: TOTAL_MODE
        }
    ];

    let checkAccessibilityMode = nextMode => {
        /*
            TODO Заменить код функции при реализации функциональности
            Эта строка кода нужна сейчас только для тестирования верстки.
            При реализации функциональности сервиса она должна быть заменена на код определения доступности
            выбранного режима в зависимости от состояния формируемого пользователем заказа.
        */
        return nextMode !== TOTAL_MODE;
    }

    let handleChangeMode = selectedMode => {
        if (!checkAccessibilityMode(selectedMode)) return;
        setMode(selectedMode);
    }

    let createItemJSX = item => {
        let hasModeAvailable = checkAccessibilityMode(item.boundMode);
        let itemClassNames = classNames({
            'disabled_title': !hasModeAvailable,
            'available_title': hasModeAvailable && item.boundMode !== mode,
            'selected_title': hasModeAvailable && item.boundMode === mode
        });
        return (
            <li key={item.title} className="tab_titles__tab_title">
                <span className={itemClassNames} onClick={() => handleChangeMode(item.boundMode)}>
                    {item.title}
                </span>
            </li>
        );
    }

    return (
        <div className="tab_titles">
            <ul className="tab_titles__content">
                {itemsData.map(item => createItemJSX(item))}
            </ul>
        </div>
    )
}

TabTitles.propTypes = {
    setMode: PropTypes.func,
    mode: PropTypes.string
}

export default TabTitles;