import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import NumberPane from '../NumberPane/NumberPane';
import OrderPane from '../OrderPane/OrderPane';
import Modal, {CANCEL_ORDER_MODAL} from '../../common_components/Modal/Modal';
import Preloader from '../../common_components/Preloader/Preloader';
import ErrorPane from '../../common_components/ErrorPane/ErrorPane';
import NoMatch from '../../common_components/NoMatch/NoMatch';
import {getErrText} from '../../utils/fetch_utils';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderViewer.scss';

function OrderViewer({loadOrderViewerData, history, match, cancelOrder, hasModalShow, hideModal}) {
    let [done, setDone] = useState(false);
    let [error, setError] = useState(null);

    const {params: {orderId}} = match;

    const toMainPage = () => history.push('/');

    useEffect(() => {
        loadOrderViewerData(orderId)
            .then(() => setDone(true))
            .catch(err => {
                setError(err);
                setDone(true);
            });
    }, []);

    const handleOrderCancel = () => {
        setDone(false);
        hideModal();
        cancelOrder()
            .then(() => {
                setDone(true);
            })
            .catch(err => {
                setError(err);
                setDone(true);
            });
    };

    // При рендеринге учитываем возможные ошибки и их характер (заказ не найден, сетевая ошибка и т.п.)
    return (
        <div className="order_viewer">
            {done ?
                (error ?
                        (error.httpStatus === 404 ?
                                <NoMatch history={history} location={{pathname: `/order/${orderId}`}}/>
                                :
                                <>
                                    <Menu/>
                                    <section className="order_viewer__content">
                                        <ErrorPane
                                            text={`Произошла ошибка: ${getErrText(error)}. Попробуйте выполнить запрос позже...`}
                                            buttonCaption="На главную"
                                            action={toMainPage}
                                        />
                                    </section>
                                </>
                        )
                        :
                        <>
                            {hasModalShow && <Modal type={CANCEL_ORDER_MODAL} action={handleOrderCancel}/>}
                            <Menu/>
                            <section className="order_viewer__content">
                                <PageHeader/>
                                <NumberPane orderNumber={orderId}/>
                                <OrderPane/>
                            </section>
                        </>
                )
                :
                <Preloader/>
            }
        </div>
    );
}

OrderViewer.propTypes = {
    loadOrderViewerData: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
    cancelOrder: PropTypes.func,
    hasModalShow: PropTypes.bool,
    hideModal: PropTypes.func
}

export default createStoreConnectedComponent('OrderViewer')(OrderViewer);