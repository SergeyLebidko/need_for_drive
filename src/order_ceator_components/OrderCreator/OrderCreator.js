import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import Modal, {CONFIRM_ORDER_MODAL} from '../../common_components/Modal/Modal';
import Preloader from '../../common_components/Preloader/Preloader';
import ErrorPane from '../../common_components/ErrorPane/ErrorPane';
import {getErrText} from '../../utils/fetch_utils';
import {createStoreConnectedComponent} from '../../store/connector';
import './OrderCreator.scss';

function OrderCreator({sendOrder, clearOrder, loadOrderCreatorData, hasModalShow, hideModal, history}) {
    let [done, setDone] = useState(false);
    let [errorComponent, setErrorComponent] = useState(null);

    useEffect(() => {
        loadOrderCreatorData()
            .then(() => setDone(true))
            .catch(err => {
                setDone(true);
                setErrorComponent(
                    <ErrorPane
                        text={`Не удалось загрузить необходимые данные: ${getErrText(err)}`}
                        action={() => history.push('/')}
                        buttonCaption="На главную"
                    />
                );
            })
    }, []);

    const handleOrderCreate = () => {
        setDone(false);
        hideModal();
        sendOrder()
            .then(orderId => {
                clearOrder();
                history.push(`/order/${orderId}`);
            })
            .catch(err => {
                setErrorComponent(
                    <ErrorPane
                        text={`Не удалось сохранить заказ: ${getErrText(err)}. Попробуйте сделать это позже...`}
                        action={() => setErrorComponent(null)}
                        buttonCaption="Ок"
                    />
                );
                setDone(true);
            });
    };

    return (
        <div className="order_creator">
            {done ?
                <>
                    {hasModalShow && <Modal type={CONFIRM_ORDER_MODAL} action={handleOrderCreate}/>}
                    <Menu/>
                    <section className="order_creator__content">
                        {errorComponent ?
                            errorComponent
                            :
                            <>
                                <PageHeader/>
                                <TabControl/>
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

OrderCreator.propTypes = {
    sendOrder: PropTypes.func,
    clearOrder: PropTypes.func,
    loadOrderCreatorData: PropTypes.func,
    hasModalShow: PropTypes.bool,
    hideModal: PropTypes.func,
    history: PropTypes.object
}

export default createStoreConnectedComponent('OrderCreator')(OrderCreator);