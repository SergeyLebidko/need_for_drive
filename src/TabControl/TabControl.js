import React, {useState} from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import LocationTab from '../LocationTab/LocationTab';
import ModelTab from '../ModelTab/ModelTab';
import ExtraTab from '../ExtraTab/ExtraTab';
import TotalTab from '../TotalTab/TotalTab';
import './TabControl.scss';

const LOCATION_MODE = 'lm';
const MODEL_MODE = 'mm';
const EXTRA_MODE = 'em';
const TOTAL_MODE = 'tm';

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
            <OrderDetails/>
            {content}
        </div>
    )
}

export default TabControl;