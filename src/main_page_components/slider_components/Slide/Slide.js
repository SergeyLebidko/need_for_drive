import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';

export const PREV_SLIDE = 'ps';
export const CURRENT_SLIDE = 'cs';
export const NEXT_SLIDE = 'ns';

function Slide({slideData}) {
    const {title, description, image, buttonColor, buttonText, position} = slideData;

    const slideClassSelector = {
        [PREV_SLIDE]: 'slide prev_slide',
        [CURRENT_SLIDE]: 'slide',
        [NEXT_SLIDE]: 'slide next_slide'
    }
    const slideClassName = slideClassSelector[position];

    const buttonClassName = `button slide__button button_${buttonColor} button_small_round_border`;

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(to bottom, transparent 50%, black 100%), url("${image}")`
    };

    return (
        <div className={slideClassName} style={backgroundImageStyle}>
            <div className="slide__text_block">
                <h1 className="slide__title">{title}</h1>
                <h3 className="slide__description">{description}</h3>
                <button className={buttonClassName}>{buttonText}</button>
            </div>
        </div>
    );
}

Slide.propTypes = {
    slideData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        buttonColor: PropTypes.string,
        buttonText: PropTypes.string,
        position: PropTypes.string
    }),
    slideButtonText: PropTypes.string
};

export default Slide;
