import React, {useState} from 'react';
import {ReactComponent as TwoLines} from '../../content/two_lines.svg';
import {ReactComponent as OneLine} from '../../content/one_line.svg';
import style from './Menu.module.scss';

const menuItems = ['Парковка', 'Страховка', 'Бензин', 'Обслуживание'];

function Menu() {
    let [opened, setOpened] = useState(false);

    let menuButtonClickHandler = () => {
        setOpened(oldValue => !oldValue)
    }

    return (
        <div className={style.menu + (opened ? ` ${style.opened}` : '')}>
            <div className={style.menu__button} onClick={menuButtonClickHandler}>
                <TwoLines/>
                <OneLine/>
                <OneLine/>
            </div>
            <ul className={style.menu__items_block}>
                {menuItems.map((item, index) => <li key={index} className={style.menu__item}>{item}</li>)}
            </ul>
        </div>
    );
}

export default Menu;