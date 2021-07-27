import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import {createStoreConnectedComponent} from '../../store/connector';
import {TAB_TITLES_DATA} from '../../settings';
import './OrderCreator.scss';

function OrderCreator({setTabItemsData}) {

    // При монтировании передаем нижележащим компонентам список вкладок
    useEffect(() => setTabItemsData(TAB_TITLES_DATA), []);

    return (
        <div className="order_creator">
            <Menu/>
            <section className="order_creator__content">
                <PageHeader/>
                <TabControl/>
            </section>
        </div>
    )
}

OrderCreator.propTypes = {
    setTabItemsData: PropTypes.func
}

export default createStoreConnectedComponent('OrderCreator')(OrderCreator);