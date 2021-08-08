import React from 'react';
import {ReactComponent as PreloaderImage} from '../../content/images/preloader.svg';
import './Preloader.scss';

function Preloader() {
    return (
        <div className="preloader">
            <div className="preloader__pulsar"/>
            <PreloaderImage/>
        </div>
    )
}

export default Preloader;