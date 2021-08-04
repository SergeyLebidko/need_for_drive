import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common_components/menu_components/Menu/Menu';
import PageHeader from '../../common_components/PageHeader/PageHeader';
import NumberPane from '../NumberPane/NumberPane';
import './OrderViewer.scss';

function OrderViewer({match}) {
    return (
        <div className="order_viewer">
            <Menu/>
            <section className="order_viewer__content">
                <PageHeader/>
                <NumberPane orderNumber={match.params.orderId}/>
            </section>
        </div>
    )
}

OrderViewer.propTypes = {
    match: PropTypes.object
}

export default OrderViewer;