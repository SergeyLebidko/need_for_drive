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
import {hasSelectedLocation, hasSelectedModel, hasSelectedExtra} from '../../utils/order_utils';
import './TabControl.scss';

function TabControl({order, showModal}) {
    let [mode, setMode] = useState(LOCATION_MODE);

    let getActionButtonProps = type => {
        if (type === TO_MODEL_TAB_ACTION && hasSelectedLocation(order)) return () => setMode(MODEL_MODE);
        if (type === TO_EXTRA_TAB_ACTION && hasSelectedModel(order)) return () => setMode(EXTRA_MODE);
        if (type === TO_TOTAL_TAB_ACTION && hasSelectedExtra(order)) return () => setMode(TOTAL_MODE);
        if (type === EXECUTE_ACTION) return showModal;
        return null;
    }

    const TAB_SELECTOR = {
        [LOCATION_MODE]: LocationTab,
        [MODEL_MODE]: ModelTab,
        [EXTRA_MODE]: ExtraTab,
        [TOTAL_MODE]: TotalTab
    }
    let TabComponent = TAB_SELECTOR[mode];

    const BUTTON_COMPONENT_SELECTOR = {
        [LOCATION_MODE]: <OrderDetailsActionButton type={TO_MODEL_TAB_ACTION} action={getActionButtonProps(TO_MODEL_TAB_ACTION)}/>,
        [MODEL_MODE]: <OrderDetailsActionButton type={TO_EXTRA_TAB_ACTION} action={getActionButtonProps(TO_EXTRA_TAB_ACTION)}/>,
        [EXTRA_MODE]: <OrderDetailsActionButton type={TO_TOTAL_TAB_ACTION} action={getActionButtonProps(TO_TOTAL_TAB_ACTION)}/>,
        [TOTAL_MODE]: <OrderDetailsActionButton type={EXECUTE_ACTION} action={getActionButtonProps(EXECUTE_ACTION)}/>
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
    order: PropTypes.object,
    showModal: PropTypes.func
}

export default createStoreConnectedComponent('TabControl')(TabControl);