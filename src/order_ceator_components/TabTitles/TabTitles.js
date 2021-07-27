import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createStoreConnectedComponent} from '../../store/connector';
import './TabTitles.scss';

function TabTitles({tabItemsData, mode, setMode}) {
    let checkAccessibilityMode = () => {
        /*
            TODO Заменить код функции при реализации функциональности
            Эта строка кода нужна сейчас только для тестирования верстки.
            При реализации функциональности сервиса она должна быть заменена на код определения доступности
            выбранного режима в зависимости от состояния формируемого пользователем заказа.
        */
        return true;
    }

    let handleChangeMode = selectedMode => {
        if (!checkAccessibilityMode(selectedMode)) return;
        setMode(selectedMode);
    }

    let getItemClassNames = boundMode => {
        let hasModeAvailable = checkAccessibilityMode(boundMode);
        return classNames({
            'disabled_title': !hasModeAvailable,
            'available_title': hasModeAvailable && boundMode !== mode,
            'selected_title': hasModeAvailable && boundMode === mode
        });
    }

    return (
        <div className="tab_titles">
            <ul className="tab_titles__content">
                {tabItemsData.map(
                    item => (
                        <li key={item.title} className="tab_titles__tab_title">
                            <span
                                className={getItemClassNames(item.boundMode)}
                                onClick={() => handleChangeMode(item.boundMode)}
                            >
                                {item.title}
                            </span>
                        </li>
                    )
                )}
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