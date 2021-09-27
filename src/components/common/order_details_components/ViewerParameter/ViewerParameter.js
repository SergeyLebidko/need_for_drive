import React from 'react';
import PropTypes from 'prop-types';
import './ViewerParameter.scss';

function ViewerParameter({parameterName, parameterValue}) {
    return (
        <li className="viewer_parameter">
            <span className="viewer_parameter__name">
                {parameterName}
            </span>
            <span className="viewer_parameter__spacer"/>
            <span className="viewer_parameter__value">
                {parameterValue}
            </span>
        </li>
    );
}

ViewerParameter.propTypes = {
    parameterName: PropTypes.string,
    parameterValue: PropTypes.string
}

export default ViewerParameter;