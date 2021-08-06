import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OrderDetailsViewer from '../../common_components/order_details_components/OrderDetailsViewer/OrderDetailsViewer';
import OrderDetailsActionButton, {TO_MODEL_TAB_ACTION, TO_EXTRA_TAB_ACTION, TO_TOTAL_TAB_ACTION, EXECUTE_ACTION}
    from '../../common_components/order_details_components/OrdeDetailsActionButton/OrderDetailsActionButton';
import LocationTab from '../tab_components/LocationTab/LocationTab';
import ModelTab from '../tab_components/ModelTab/ModelTab';
import ExtraTab from '../tab_components/ExtraTab/ExtraTab';
import TotalTab from '../tab_components/TotalTab/TotalTab';
import TabTitles from '../TabTitles/TabTitles';
import {createStoreConnectedComponent} from '../../store/connector';
import {LOCATION_MODE, MODEL_MODE, EXTRA_MODE, TOTAL_MODE} from '../../settings';
import './TabControl.scss';

function TabControl({showModal}) {
    let [mode, setMode] = useState(LOCATION_MODE);

    const TAB_SELECTOR = {
        [LOCATION_MODE]: LocationTab,
        [MODEL_MODE]: ModelTab,
        [EXTRA_MODE]: ExtraTab,
        [TOTAL_MODE]: TotalTab
    }
    let TabComponent = TAB_SELECTOR[mode];

    const BUTTON_COMPONENT_SELECTOR = {
        [LOCATION_MODE]: <OrderDetailsActionButton type={TO_MODEL_TAB_ACTION} action={() => setMode(MODEL_MODE)}/>,
        [MODEL_MODE]: <OrderDetailsActionButton type={TO_EXTRA_TAB_ACTION} action={() => setMode(EXTRA_MODE)}/>,
        [EXTRA_MODE]: <OrderDetailsActionButton type={TO_TOTAL_TAB_ACTION} action={() => setMode(TOTAL_MODE)}/>,
        [TOTAL_MODE]: <OrderDetailsActionButton type={EXECUTE_ACTION} action={showModal}/>
    }
    let orderDetailsActionButton = BUTTON_COMPONENT_SELECTOR[mode];

    return (
        <div className="tab_control">
            <TabTitles mode={mode} setMode={setMode}/>
            <div className="tab_control__content_wrapper">
                <div className="tab_control__content">
                    <TabComponent/>
                    <OrderDetailsViewer button={orderDetailsActionButton}/>
                </div>
            </div>
        </div>
    )
}

TabControl.propTypes = {
    showModal: PropTypes.func
}

export default createStoreConnectedComponent('TabControl')(TabControl);