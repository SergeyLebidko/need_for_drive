import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OrderDetailsViewer from '../../common_components/order_details_components/OrderDetailsViewer/OrderDetailsViewer';
import OrderDetailsActionButton
    from '../../common_components/order_details_components/OrdeDetailsActionButton/OrderDetailsActionButton';
import LocationTab from '../tab_components/LocationTab/LocationTab';
import ModelTab from '../tab_components/ModelTab/ModelTab';
import ExtraTab from '../tab_components/ExtraTab/ExtraTab';
import TotalTab from '../tab_components/TotalTab/TotalTab';
import TabTitles from '../TabTitles/TabTitles';
import {createStoreConnectedComponent} from '../../store/connector';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import {hasSelectedLocation, hasSelectedModel, hasSelectedExtra} from '../../utils/order_utils';
import './TabControl.scss';

function TabControl({order, showModal}) {
    const [mode, setMode] = useState(
        hasSelectedLocation(order) && hasSelectedModel(order) && hasSelectedExtra(order) ? TOTAL_MODE : LOCATION_MODE
    );

    const TAB_SELECTOR = {
        [LOCATION_MODE]: LocationTab,
        [MODEL_MODE]: ModelTab,
        [EXTRA_MODE]: ExtraTab,
        [TOTAL_MODE]: TotalTab
    }
    const TabComponent = TAB_SELECTOR[mode];

    const BUTTON_PROPS_SELECTOR = {
        [LOCATION_MODE]: {
            caption: 'Выбрать модель',
            action: hasSelectedLocation(order) ? (() => setMode(MODEL_MODE)) : null
        },
        [MODEL_MODE]: {
            caption: 'Дополнительно',
            action: hasSelectedModel(order) ? (() => setMode(EXTRA_MODE)) : null
        },
        [EXTRA_MODE]: {
            caption: 'Итого',
            action: hasSelectedExtra(order) ? (() => setMode(TOTAL_MODE)) : null
        },
        [TOTAL_MODE]: {
            caption: 'Заказать',
            action: showModal
        }
    }

    return (
        <div className="tab_control">
            <TabTitles mode={mode} setMode={setMode}/>
            <div className="tab_control__content_wrapper">
                <div className="tab_control__content">
                    <TabComponent/>
                    <OrderDetailsViewer button={<OrderDetailsActionButton {...BUTTON_PROPS_SELECTOR[mode]}/>}/>
                </div>
            </div>
        </div>
    )
}

TabControl.propTypes = {
    order: PropTypes.object,
    showModal: PropTypes.func
}

export default createStoreConnectedComponent('TabControl')(TabControl);