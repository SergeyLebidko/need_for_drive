import React, {useState, useEffect} from 'react';
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

function OrderViewer({order, loadOrderViewerData, history, match, cancelOrder, hasModalShow, hideModal}) {
    let [done, setDone] = useState(false);

    const {params: {orderId}} = match;

    useEffect(() => loadOrderViewerData(orderId).then(() => setDone(true)), []);

    const handleOrderRemove = () => {
        setDone(false);
        cancelOrder().then(() => {
            setDone(true);
            hideModal();
        });
    };

    return (
        <div className="order_viewer">
            {done ?
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
                        <NoMatch history={history} location={{pathname: `/order/${orderId}`}}/>
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
    history: PropTypes.object,
    match: PropTypes.object,
    cancelOrder: PropTypes.func,
    hasModalShow: PropTypes.bool,
    hideModal: PropTypes.func
}

export default createStoreConnectedComponent('OrderViewer')(OrderViewer);