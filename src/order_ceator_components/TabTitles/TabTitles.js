import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {TOTAL_MODE} from '../../settings';
import {createStoreConnectedComponent} from '../../store/connector';
import './TabTitles.scss';

function TabTitles({tabItemsData, mode, setMode}) {
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
                {tabItemsData.map(item => createItemJSX(item))}
            </ul>
        </div>
    )
}

TabTitles.propTypes = {
    tabItemsData: PropTypes.array,
    setMode: PropTypes.func,
    mode: PropTypes.string
}

export default createStoreConnectedComponent('TabTitles')(TabTitles);