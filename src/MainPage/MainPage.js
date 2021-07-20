import React from 'react';
import Menu from '../menu_components/Menu/Menu';
import Title from '../Title/Title';
import Slider from '../slider_components/Slider/Slider';
import style from './MainPage.module.scss';

function MainPage() {
    return (
        <div className={style.main_page}>
            <Menu/>
            <Title/>
            <Slider/>
        </div>
    )
}

export default MainPage;