import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MapLabel.scss';

export const CITY_LABEL = 'cl';
export const POINT_LABEL = 'pl';

function MapLabel({type, handleClick}) {
    const labelClassNames = classNames(
        'map_label',
        {
            'city_label': type === CITY_LABEL,
            'point_label': type === POINT_LABEL
        });
    return <div className={labelClassNames} onClick={handleClick}/>;
}

MapLabel.propTypes = {
    type: PropTypes.string,
    handleClick: PropTypes.func
}

export default MapLabel;