import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as ArrowLeft} from '../../../content/images/icons/arrow_left.svg';
import {ReactComponent as ArrowRight} from '../../../content/images/icons/arrow_right.svg';
import './Arrow.scss';

export const TO_LEFT_ARROW = 'tl';
export const TO_RIGHT_ARROW = 'tr';

function Arrow({direction, handleClick}) {
    let containerClassNames = classNames('arrow', {
        'arrow_left': direction === TO_LEFT_ARROW,
        'arrow_right': direction === TO_RIGHT_ARROW
    });
    const ARROW_SELECTOR = {
        [TO_LEFT_ARROW]: <ArrowLeft/>,
        [TO_RIGHT_ARROW]: <ArrowRight/>
    }
    let arrow = ARROW_SELECTOR[direction];

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