import React, {useState} from 'react';
import OrderDetails from '../../common_components/order_details_components/OrderDetails/OrderDetails';
import OrderDetailsActionButton, {TO_MODEL_TAB_ACTION, TO_EXTRA_TAB_ACTION, TO_TOTAL_TAB_ACTION, EXECUTE_ACTION}
    from '../../common_components/order_details_components/OrdeDetailsActionButton/OrderDetailsActionButton';
import LocationTab from '../tab_components/LocationTab/LocationTab';
import ModelTab from '../tab_components/ModelTab/ModelTab';
import ExtraTab from '../tab_components/ExtraTab/ExtraTab';
import TotalTab from '../tab_components/TotalTab/TotalTab';
import TabTitles from '../TabTitles/TabTitles';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabControl.scss';

function TabControl() {
    let [mode, setMode] = useState(LOCATION_MODE);

    const TAB_SELECTOR = {
        [LOCATION_MODE]: LocationTab,
        [MODEL_MODE]: ModelTab,
        [EXTRA_MODE]: ExtraTab,
        [TOTAL_MODE]: TotalTab
    }
    let TabComponent = TAB_SELECTOR[mode];

    const BUTTON_COMPONENT_SELECTOR = {
        [LOCATION_MODE]: <OrderDetailsActionButton type={TO_MODEL_TAB_ACTION} setMode={setMode}/>,
        [MODEL_MODE]: <OrderDetailsActionButton type={TO_EXTRA_TAB_ACTION} setMode={setMode}/>,
        [EXTRA_MODE]: <OrderDetailsActionButton type={TO_TOTAL_TAB_ACTION} setMode={setMode}/>,
        [TOTAL_MODE]: <OrderDetailsActionButton type={EXECUTE_ACTION} setMode={setMode}/>
    }
    let orderDetailsActionButton = BUTTON_COMPONENT_SELECTOR[mode];

    return (
        <div className="tab_control">
            <TabTitles mode={mode} setMode={setMode}/>
            <div className="tab_control__content_wrapper">
                <div className="tab_control__content">
                    <TabComponent/>
                    <OrderDetails button={orderDetailsActionButton}/>
                </div>
            </div>
        </div>
    )
}

export default TabControl;