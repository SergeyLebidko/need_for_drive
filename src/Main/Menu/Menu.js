import React from 'react';
import {ReactComponent as TwoLines} from '../../content/two_lines.svg';
import {ReactComponent as OneLine} from '../../content/one_line.svg';
import style from './Menu.module.scss';

function Menu() {
    return (
        <div className={style.menu}>
            <div className={style.menu__button}>
                <TwoLines/>
                <OneLine/>
                <OneLine/>
            </div>
        </div>
    );
}

export default Menu;