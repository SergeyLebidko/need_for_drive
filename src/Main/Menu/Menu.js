import React, {useState} from 'react';
import {ReactComponent as TwoLines} from '../../content/images/two_lines.svg';
import {ReactComponent as OneLine} from '../../content/images/one_line.svg';
import {ReactComponent as TelegramIcon} from '../../content/images/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../content/images/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../content/images/instagram_icon.svg';
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
                <li key="icons_item" className={style.menu__icons_item}>
                    <TelegramIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </li>
                <li className={`${style.menu__lang_selector} ${style.menu__lang_selector_mobile}`}>
                    Рус
                </li>
            </ul>
            <div className={`${style.menu__lang_selector} ${style.menu__lang_selector_fixed}`}>
                Рус
            </div>
        </div>
    );
}

export default Menu;