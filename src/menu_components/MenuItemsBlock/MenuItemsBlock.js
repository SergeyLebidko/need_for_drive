import React from 'react';
import PropTypes from 'prop-types';
import './MenuItemsBlock.scss';
import {LANG_PACK} from "../../langPack";
import style from "../Menu/Menu.module.scss";
import {ReactComponent as TelegramIcon} from '../../content/images/icons/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../content/images/icons/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../content/images/icons/instagram_icon.svg';
import LangSelector from "../LangSelector/LangSelector";

function MenuItemsBlock({hasOpened, lang}) {
    let {menuItems} = LANG_PACK['Menu'][lang];

    return (
        <div>
            <ul className={style.menu__items_block}>
                {menuItems.map(item => <li key={item} className={style.menu__item}>{item}</li>)}
                <li key="icons_item" className={style.menu__icons_item}>
                    <TelegramIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </li>
                <LangSelector/>
            </ul>
        </div>
    );
}

MenuItemsBlock.propTypes = {
    hasOpened: PropTypes.bool,
    lang: PropTypes.string
}

export default MenuItemsBlock;