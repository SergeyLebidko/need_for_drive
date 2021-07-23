import React from 'react';
import Menu from '../menu_components/Menu/Menu';
import CreatorContent from '../CreatorContent/CreatorContent';
import './OrderCreator.scss';

function OrderCreator(){
    return (
        <div className="order_creator">
            <Menu/>
            <CreatorContent/>
        </div>
    )
}

export default OrderCreator;