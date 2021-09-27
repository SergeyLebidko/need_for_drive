import React from 'react';
import PropTypes from 'prop-types';
import './NoMatch.scss';

function NoMatch({history, location}) {
    const handleToMainPageButtonClick = () => history.push('/');

    return (
        <div className="no_match">
            <div className="no_match__content">
                <h1 className="no_match__404">404</h1>
                <h3 className="no_match__path">Страница {location.pathname} не найдена</h3>
                <button
                    className="button button_main_accent button_main_round_border"
                    onClick={handleToMainPageButtonClick}
                >
                    На главную
                </button>
            </div>
        </div>
    )
}

NoMatch.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
}

export default NoMatch;
