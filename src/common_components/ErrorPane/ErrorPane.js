import React from 'react';
import PropTypes from 'prop-types';
import './ErrorPane.scss';

function ErrorPane({text, buttonCaption, action}) {
    return (
        <div className="error_pane">
            <div className="error_pane__content">
                <h1 className="error_pane__text">{text}</h1>
                <button className="button button_main_accent button_main_round_border" onClick={action}>
                    {buttonCaption}
                </button>
            </div>
        </div>
    )
}

ErrorPane.propTypes = {
    text: PropTypes.string,
    buttonCaption: PropTypes.string,
    action: PropTypes.func
}

export default ErrorPane;