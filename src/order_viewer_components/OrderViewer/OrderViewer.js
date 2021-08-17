import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import NumberPane from '../NumberPane/NumberPane';
import OrderPane from '../OrderPane/OrderPane';
import Modal, {REMOVE_ORDER_MODAL} from '../../common_components/Modal/Modal';
import Preloader from '../../common_components/Preloader/Preloader';
import ErrorPane from '../../common_components/ErrorPane/ErrorPane';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderViewer.scss';

function OrderViewer({loadOrderViewerData, history, match, cancelOrder, hasModalShow, hideModal}) {
    let [done, setDone] = useState(false);
    let [errorComponent, setErrorComponent] = useState(null);

    const {params: {orderId}} = match;
    const toMainPage = () => history.push('/');

    useEffect(() => {
        loadOrderViewerData(orderId)
            .then(() => setDone(true))
            .catch(err => {
                const {httpStatus, httpText} = err;
                let errorText;
                if (httpStatus) {
                    if (httpStatus === 404) {
                        errorText = `Заказ с номером ${orderId} не найден...`;
                    } else {
                        errorText = `Произошла ошибка: ${httpStatus}:${httpText}. Попробуйте повторить запрос позже`
                    }
                } else {
                    errorText = `Произошла непредвиденная ошибка: ${err.message}`;
                }
                setErrorComponent(<ErrorPane text={errorText} buttonCaption="На главную" action={toMainPage}/>);
                setDone(true);
            });
    }, []);

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
                <>
                    {hasModalShow && <Modal type={REMOVE_ORDER_MODAL} action={handleOrderRemove}/>}
                    <Menu/>
                    <section className="order_viewer__content">
                        {errorComponent ?
                            errorComponent
                            :
                            <>
                                <PageHeader/>
                                <NumberPane orderNumber={orderId}/>
                                <OrderPane/>
                            </>
                        }

                    </section>
                </>
                :
                <Preloader/>
            }
        </div>
    )
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