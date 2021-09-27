import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './DotsBlock.scss';

function DotsBlock({dotsCount, currentIndex, handleClick}) {
    const dots = [];
    let dotClassList;
    let hasIndexEquals;
    for (let index = 0; index < dotsCount; index++) {
        hasIndexEquals = index === currentIndex;
        dotClassList = classNames('dots_block__dot', {'full_dot': hasIndexEquals, 'empty_dot': !hasIndexEquals});
        dots.push(<div key={index} className={dotClassList} onClick={() => handleClick(index)}/>);
    }

    return (
        <div className="dots_block">
            {dots}
        </div>
    );
}

DotsBlock.propTypes = {
    dotsCount: PropTypes.number,
    currentIndex: PropTypes.number,
    handleClick: PropTypes.func
}

export default DotsBlock;