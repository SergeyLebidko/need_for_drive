import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createStoreConnectedComponent} from '../../store/connector';
import {hasSelectedLocation, hasSelectedModel, hasSelectedExtra} from '../../utils/order_utils';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabTitles.scss';

function TabTitles({order, tabItemsData, mode, setMode}) {
    const MODE_CHECKER = {
        [LOCATION_MODE]: true,
        [MODEL_MODE]: hasSelectedLocation(order),
        [EXTRA_MODE]: hasSelectedModel(order),
        [TOTAL_MODE]: hasSelectedExtra(order)
    }

    const handleChangeMode = selectedMode => {
        if (!MODE_CHECKER[selectedMode]) return;
        setMode(selectedMode);
    }

    const getItemClassNames = boundMode => {
        const hasModeAvailable = MODE_CHECKER[boundMode];
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