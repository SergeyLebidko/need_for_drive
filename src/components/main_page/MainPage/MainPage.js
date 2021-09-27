import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../../common/menu_components/Menu/Menu';
import Title from '../Title/Title';
import Slider from '../slider_components/Slider/Slider';
import {createStoreConnectedComponent} from '../../../store/connector';
import './MainPage.scss';
import {createSliderData} from "../../../utils/slider_utils";

function MainPage({lang, setSliderData}) {
    useEffect(() => setSliderData(createSliderData(lang)), [lang])

    return (
        <div className="main_page">
            <Menu/>
            <Title/>
            <Slider/>
        </div>
    );
}

MainPage.propTypes = {
    lang: PropTypes.string,
    setSliderData: PropTypes.func
}

export default createStoreConnectedComponent('MainPage')(MainPage);