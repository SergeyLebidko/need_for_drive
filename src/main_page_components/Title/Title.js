import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {ReactComponent as Pin} from '../../content/images/icons/pin.svg';
import {LANG_PACK} from '../../langPack';
import {createStoreConnectedComponent} from '../../store/connector';
import './Title.scss';

function Title({lang, city, history}) {
    const {serviceName, slogan, reservationButton} = LANG_PACK['Title'][lang];
    const currentYear = (new Date()).getFullYear();

    const handleReservationButtonClick = () => history.push('/order');

    return (
        <section className="title">
            <header className="title__header">
                <span className="title__small_service_title">Need for drive</span>
                {city && <span className="title__city"><Pin/>{city}</span>}
            </header>
            <main className="title__main">
                <h1 className="title__service_name">{serviceName}</h1>
                <h1 className="title__big_service_title">Need for drive</h1>
                <h3 className="title__slogan">{slogan}</h3>
                <button
                    className="button button_main_accent title__reservation_button"
                    onClick={handleReservationButtonClick}
                >
                    {reservationButton}
                </button>
            </main>
            <footer className="title__footer">
                <span className="title__copyright">
                    &#169; 2016-{currentYear} &quot;Need for drive&quot;
                </span>
                <a href="tel:84952342244" className="title__phone">
                    8(495)234-22-44
                </a>
            </footer>
        </section>
    )
}

Title.propTypes = {
    lang: PropTypes.string,
    city: PropTypes.string,
    history: PropTypes.object
}

export default createStoreConnectedComponent('Title')(withRouter(Title));