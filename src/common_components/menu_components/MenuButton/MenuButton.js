import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as TwoLines} from '../../../content/images/icons/two_lines.svg';
import {ReactComponent as OneLine} from '../../../content/images/icons/one_line.svg';
import './MenuButton.scss';

function MenuButton({hasOpened, handleClick}) {
    let containerClasses = 'menu_button' + (hasOpened ? ' menu_button_opened' : '');
    return (
        <div className={containerClasses} onClick={handleClick}>
            <TwoLines/>
            <OneLine/>
            <OneLine/>
        </div>
    )
}

MenuButton.propTypes = {
    hasOpened: PropTypes.bool,
    handleClick: PropTypes.func
}

export default MenuButton;
