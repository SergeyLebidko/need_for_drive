import React from 'react';
import PropTypes from 'prop-types';
import './DotsBlock.scss';

function DotsBlock({dotsCount, currentIndex, handleClick}) {
    let dots = [];
    let dotClassList;
    for (let index = 0; index < dotsCount; index++) {
        if (index === currentIndex) {
            dotClassList = 'dots_block__dot full_dot';
        } else {
            dotClassList = 'dots_block__dot empty_dot';
        }
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