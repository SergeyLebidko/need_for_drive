import React, {useState} from 'react';
import OrderDetails from '../../common_components/OrderDetails/OrderDetails';
import LocationTab from '../tab_components/LocationTab/LocationTab';
import ModelTab from '../tab_components/ModelTab/ModelTab';
import ExtraTab from '../tab_components/ExtraTab/ExtraTab';
import TotalTab from '../tab_components/TotalTab/TotalTab';
import TabTitles from '../TabTitles/TabTitles';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabControl.scss';


function TabControl() {
    let [mode, setMode] = useState(LOCATION_MODE);

    let content;
    switch (mode) {
        case LOCATION_MODE:
            content = <LocationTab/>;
            break;
        case MODEL_MODE:
            content = <ModelTab/>;
            break;
        case EXTRA_MODE:
            content = <ExtraTab/>;
            break;
        case TOTAL_MODE:
            content = <TotalTab/>;
            break;
        default:
            content = null;
    }

    return (
        <div>
            <TabTitles setMode={setMode}/>
            <OrderDetails/>
            {content}
        </div>
    )
}

export default TabControl;