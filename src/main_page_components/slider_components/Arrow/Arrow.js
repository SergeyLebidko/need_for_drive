import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as ArrowLeft} from '../../../content/images/icons/arrow_left.svg';
import {ReactComponent as ArrowRight} from '../../../content/images/icons/arrow_right.svg';
import './Arrow.scss';

export const TO_LEFT_ARROW = 'tl';
export const TO_RIGHT_ARROW = 'tr';

function Arrow({direction, handleClick}) {
    let arrow;
    let containerClassNames = 'arrow';
    if (direction === TO_LEFT_ARROW) {
        arrow = <ArrowLeft/>;
        containerClassNames += ' arrow_left';
    }
    if (direction === TO_RIGHT_ARROW) {
        arrow = <ArrowRight/>;
        containerClassNames += ' arrow_right';
    }

    return (
        <div className={containerClassNames} onClick={handleClick}>
            {arrow}
        </div>
    );
}

Arrow.propTypes = {
    direction: PropTypes.string,
    handleClick: PropTypes.func
}

export default Arrow;