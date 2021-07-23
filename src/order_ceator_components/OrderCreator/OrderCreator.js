import React from 'react';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import './OrderCreator.scss';

function OrderCreator() {
    return (
        <div className="order_creator">
            <Menu/>
            <section>
                <PageHeader/>
                <TabControl/>
            </section>
        </div>
    )
}

export default OrderCreator;