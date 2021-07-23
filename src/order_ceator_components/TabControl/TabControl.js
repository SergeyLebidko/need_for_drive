import React, {useState} from 'react';
import OrderDetails from '../../common_components/OrderDetails/OrderDetails';
import LocationTab from '../tab_components/LocationTab/LocationTab';
import ModelTab from '../tab_components/ModelTab/ModelTab';
import ExtraTab from '../tab_components/ExtraTab/ExtraTab';
import TotalTab from '../tab_components/TotalTab/TotalTab';
import TabTitles from '../TabTitles/TabTitles';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabControl.scss';

const TAB_SELECTOR = {
    [LOCATION_MODE]: LocationTab,
    [MODEL_MODE]: ModelTab,
    [EXTRA_MODE]: ExtraTab,
    [TOTAL_MODE]: TotalTab
}

function TabControl() {
    let [mode, setMode] = useState(LOCATION_MODE);

    let TabComponent = TAB_SELECTOR[mode];
    return (
        <div>
            <TabTitles setMode={setMode}/>
            <div>
                <OrderDetails/>
                <TabComponent/>
            </div>
        </div>
    )
}

export default TabControl;