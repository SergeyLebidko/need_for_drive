import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Pin} from '../../content/images/icons/pin.svg';
import {createStoreConnectedComponent} from '../../store/connector';
import './PageHeader.scss';

function PageHeader({city}) {
    return (
        <header className="page_header">
            <div className="page_header__content">
                <span className="page_header__title">Need for drive</span>
                {city && <span className="page_header__city"><Pin/>{city}</span>}
            </div>
        </header>
    );
}

PageHeader.propTypes = {
    city: PropTypes.string
}

export default createStoreConnectedComponent('PageHeader')(PageHeader);