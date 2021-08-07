import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createStoreConnectedComponent} from '../../store/connector';
import {hasSelectedLocation, hasSelectedModel, hasSelectedExtra} from '../../utils/order_utils';
import {MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabTitles.scss';

function TabTitles({order, tabItemsData, mode, setMode}) {
    let checkAccessibilityMode = selectedMode => {
        if (selectedMode === MODEL_MODE) return hasSelectedLocation(order);
        if (selectedMode === EXTRA_MODE) return hasSelectedModel(order);
        if (selectedMode === TOTAL_MODE) return hasSelectedExtra(order);
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
    order: PropTypes.object,
    tabItemsData: PropTypes.array,
    setMode: PropTypes.func,
    mode: PropTypes.string
}

export default createStoreConnectedComponent('TabTitles')(TabTitles);