import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import '../../../styles/buttons.scss';

function ExecuteOrderButton({history}) {
    let buttonClasses = classNames({
        'button': true,
        'button_main_accent': true,
        'button_main_round_border': true
    });

    // TODO При реализации функциональности добавить логику оформления заказа и переключения на страницу уже оформленного заказа
    let handleClick = history.push('/order/order_id');

    return (
        <button className={buttonClasses} onClick={handleClick}>
            Заказать
        </button>
    )
}

ExecuteOrderButton.propTypes = {
    history: PropTypes.object
}

export default withRouter(ExecuteOrderButton);
