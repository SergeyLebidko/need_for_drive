import React from 'react';
import Menu from '../menu_components/Menu/Menu';
import Title from '../Title/Title';
import Slider from '../slider_components/Slider/Slider';
import './MainPage.scss';

function MainPage() {
    return (
        <div className="main_page">
            <Menu/>
            <Title/>
            <Slider/>
        </div>
    )
}

export default MainPage;