import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import NumberPane from '../NumberPane/NumberPane';
import OrderPane from '../OrderPane/OrderPane';
import Modal, {REMOVE_ORDER_MODAL} from '../../common_components/Modal/Modal';
import Preloader from '../../common_components/Preloader/Preloader';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderViewer.scss';
import NoMatch from "../../common_components/NoMatch/NoMatch";

function OrderViewer(props) {
    let {
        order,
        loadOrderViewerData,
        hasLoadOrderViewerData,
        match,
        cancelOrder,
        hasModalShow,
        hideModal
    } = props;
    let {params: {orderId}} = match;

    useEffect(() => loadOrderViewerData(orderId), []);

    let handleOrderRemove = () => cancelOrder().then(() => hideModal());

    return (
        <div className="order_viewer">
            {hasLoadOrderViewerData ?
                (
                    ('id' in order) ?
                        <>
                            {hasModalShow && <Modal type={REMOVE_ORDER_MODAL} action={handleOrderRemove}/>}
                            <Menu/>
                            <section className="order_viewer__content">
                                <PageHeader/>
                                <NumberPane orderNumber={orderId}/>
                                <OrderPane/>
                            </section>
                        </>
                        :
                        <NoMatch location={{pathname: `/order/${orderId}`}}/>
                )
                :
                <Preloader/>
            }
        </div>
    )
}

OrderViewer.propTypes = {
    order: PropTypes.object,
    loadOrderViewerData: PropTypes.func,
    hasLoadOrderViewerData: PropTypes.bool,
    match: PropTypes.object,
    cancelOrder: PropTypes.func,
    hasModalShow: PropTypes.bool,
    hideModal: PropTypes.func
}

export default createStoreConnectedComponent('OrderViewer')(OrderViewer);