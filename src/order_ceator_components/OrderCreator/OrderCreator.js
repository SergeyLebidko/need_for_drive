import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import TabControl from '../TabControl/TabControl';
import {createStoreConnectedComponent} from '../../store/connector';
import {TAB_TITLES_DATA, CATEGORY_LIST, MODEL_LIST, COLOR_LIST, RATE_LIST} from '../../settings';
import './OrderCreator.scss';

function OrderCreator({setTabItemsData, setCategoryList, setModelList, setColorList, setRateList}) {

    // Передаем нижележащим компонентам необходимые данные
    useEffect(() => {
        setTabItemsData(TAB_TITLES_DATA);
        setCategoryList(CATEGORY_LIST);
        setModelList(MODEL_LIST);
        setColorList(COLOR_LIST);
        setRateList(RATE_LIST)
    }, []);

    return (
        <div className="order_creator">
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
    setRateList: PropTypes.func
}

export default createStoreConnectedComponent('OrderCreator')(OrderCreator);