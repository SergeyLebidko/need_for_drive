import React from 'react';
import Menu from '../Menu/Menu';
import Title from '../Title/Title';
import Slider from '../Slider/Slider';
import style from './MainPage.module.css';

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