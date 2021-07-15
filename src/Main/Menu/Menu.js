import React, {useState} from 'react';
import {ReactComponent as TwoLines} from '../../content/two_lines.svg';
import {ReactComponent as OneLine} from '../../content/one_line.svg';
import style from './Menu.module.scss';

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
        </div>
    );
}

export default Menu;