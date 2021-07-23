import React from 'react';
import Menu from '../menu_components/Menu/Menu';
import './OrderCreator.scss';

function OrderCreator(){
    return (
        <div className="order_creator">
            <Menu/>
            <section>Здесь будет контент</section>
        </div>
    )
}

export default OrderCreator;