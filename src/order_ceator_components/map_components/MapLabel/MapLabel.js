import React from 'react';
import PropTypes from 'prop-types';
import './MapLabel.scss';

function MapLabel({handleClick}){
    return <div className="map_label" onClick={handleClick}/>;
}

MapLabel.propTypes = {
    handleClick: PropTypes.func
}

export default MapLabel;