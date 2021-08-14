import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import NumberPane from '../NumberPane/NumberPane';
import OrderPane from '../OrderPane/OrderPane';
import Modal, {REMOVE_ORDER_MODAL} from '../../common_components/Modal/Modal';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderViewer.scss';

function OrderViewer({loadOrderViewerData, hasLoadOrderViewerData, match, history, hasModalShow}) {
    let {params: {orderId}} = match;

    useEffect(() => loadOrderViewerData(orderId), []);

    // TODO При реализации функциональности добавить код отмены заказа и только после его выполнения перебрасывать пользователя на главную страницу
    let handleOrderRemove = () => history.push('/');

    return (
        <div className="order_viewer">
            {hasLoadOrderViewerData &&
            <>
                {hasModalShow && <Modal type={REMOVE_ORDER_MODAL} action={handleOrderRemove}/>}
                <Menu/>
                <section className="order_viewer__content">
                    <PageHeader/>
                    <NumberPane orderNumber={orderId}/>
                    <OrderPane/>
                </section>
            </>
            }
        </div>
    )
}

OrderViewer.propTypes = {
    loadOrderViewerData: PropTypes.func,
    hasLoadOrderViewerData: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object,
    hasModalShow: PropTypes.bool
}

export default createStoreConnectedComponent('OrderViewer')(OrderViewer);