import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import Modal, {CONFIRM_ORDER_MODAL} from '../../common_components/Modal/Modal';
import Preloader from '../../common_components/Preloader/Preloader';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderCreator.scss';

function OrderCreator({order, sendOrder, loadOrderCreatorData, hasOrderCreatorDataLoaded, hasModalShow, history}) {
    useEffect(() => loadOrderCreatorData(), []);

    // TODO При реализации функциональности вставить код отправки сформированного заказа на бэкенд
    // С целью тестирования верстки пока переводим пользователя на страницу фиктивного заказа
    // В дальнейшем, при реализации функционала будем переключать на страницу уже сформированного заказа
    let handleOrderCreate = () => {
        let result = sendOrder(order);
        console.log('result', result);
        history.push('/order/0123456789');
    };

    return (
        <div className="order_creator">
            {hasOrderCreatorDataLoaded ?
                <>
                    {hasModalShow && <Modal type={CONFIRM_ORDER_MODAL} action={handleOrderCreate}/>}
                    <Menu/>
                    <section className="order_creator__content">
                        <PageHeader/>
                        <TabControl/>
                    </section>
                </>
                :
                <Preloader/>
            }
        </div>
    )
}

OrderCreator.propTypes = {
    order: PropTypes.object,
    sendOrder: PropTypes.func,
    loadOrderCreatorData: PropTypes.func,
    hasOrderCreatorDataLoaded: PropTypes.bool,
    hasModalShow: PropTypes.bool,
    history: PropTypes.object
}

export default createStoreConnectedComponent('OrderCreator')(OrderCreator);