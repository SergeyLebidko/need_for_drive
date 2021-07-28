import React, {useState} from 'react';
import OrderDetails from '../../common_components/OrderDetails/OrderDetails';
import LocationTab from '../tab_components/LocationTab/LocationTab';
import ModelTab from '../tab_components/ModelTab/ModelTab';
import ExtraTab from '../tab_components/ExtraTab/ExtraTab';
import TotalTab from '../tab_components/TotalTab/TotalTab';
import TabTitles from '../TabTitles/TabTitles';
import ToModelTabButton from '../button_components/ToModelTabButton/ToModelTabButton';
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
        [LOCATION_MODE]: ToModelTabButton
    }
    let OrderDetailsButtonComponent = BUTTON_COMPONENT_SELECTOR[mode]
    let orderDetailsButton = <OrderDetailsButtonComponent setMode={setMode}/>

    return (
        <div className="tab_control">
            <TabTitles mode={mode} setMode={setMode}/>
            <div className="tab_control__content_wrapper">
                <div className="tab_control__content">
                    <TabComponent/>
                    <OrderDetails button={orderDetailsButton}/>
                </div>
            </div>
        </div>
    )
}

export default TabControl;