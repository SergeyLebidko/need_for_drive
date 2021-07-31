import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import OrderConfirmModal from '../OrderConfirmModal/OrderConfirmModal';
import {createStoreConnectedComponent} from '../../store/connector';
import {TAB_TITLES_DATA, CATEGORY_LIST, MODEL_LIST, COLOR_LIST, RATE_LIST, OPTION_LIST} from '../../settings';
import './OrderCreator.scss';

function OrderCreator(props) {
    let {
        setTabItemsData,
        setCategoryList,
        setModelList,
        setColorList,
        setRateList,
        setOptionList,
        hasOrderConfirmModalShow,
        hideOrderConfirmModal
    } = props;

    // Передаем нижележащим компонентам необходимые данные
    useEffect(() => {
        setTabItemsData(TAB_TITLES_DATA);
        setCategoryList(CATEGORY_LIST);
        setModelList(MODEL_LIST);
        setColorList(COLOR_LIST);
        setRateList(RATE_LIST);
        setOptionList(OPTION_LIST)
    }, []);

    // TODO При реализации функциональности вставить код отправки сформированного заказа на бэкенд
    let handleConfirmOrderCreate = () => hideOrderConfirmModal();

    return (
        <div className="order_creator">
            {hasOrderConfirmModalShow && <OrderConfirmModal handleConfirm={handleConfirmOrderCreate}/>}
            <Menu/>
            <section className="order_creator__content">
                <PageHeader/>
                <TabControl/>
            </section>
        </div>
    )
}

OrderCreator.propTypes = {
    setTabItemsData: PropTypes.func,
    setCategoryList: PropTypes.func,
    setModelList: PropTypes.func,
    setColorList: PropTypes.func,
    setRateList: PropTypes.func,
    setOptionList: PropTypes.func,
    hasOrderConfirmModalShow: PropTypes.bool,
    hideOrderConfirmModal: PropTypes.func
}

export default createStoreConnectedComponent('OrderCreator')(OrderCreator);