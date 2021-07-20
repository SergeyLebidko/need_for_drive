import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';

export const PREV_SLIDE = 'ps';
export const CURRENT_SLIDE = 'cs';
export const NEXT_SLIDE = 'ns';

function Slide({slideData, slideButtonText}) {
    let {title, description, image, position, slideIndex} = slideData;

    const slideClassSelector = {
        [PREV_SLIDE]: 'slide prev_slide',
        [CURRENT_SLIDE]: 'slide',
        [NEXT_SLIDE]: 'slide next_slide'
    }
    let slideClassName = slideClassSelector[position];

    let buttonClassName = `slide__button button_${slideIndex}`;

    let inlineStyle = {
        backgroundImage: `linear-gradient(to bottom, transparent 50%, black 100%), url("${image}")`
    };

    return (
        <div className={slideClassName} style={inlineStyle}>
            <div className="slide__text_block">
                <h1 className="slide__title">{title}</h1>
                <h3 className="slide__description">{description}</h3>
                <button className={buttonClassName}>{slideButtonText}</button>
            </div>
        </div>
    );
}

Slide.propTypes = {
    slideData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        position: PropTypes.string,
        slideIndex: PropTypes.number
    }),
    slideButtonText: PropTypes.string
};

export default Slide;
