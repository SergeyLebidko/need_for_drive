import React, {useState} from 'react';
import {ReactComponent as TwoLines} from '../../content/images/two_lines.svg';
import {ReactComponent as OneLine} from '../../content/images/one_line.svg';
import {ReactComponent as TelegramIcon} from '../../content/images/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../content/images/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../content/images/instagram_icon.svg';
import {LANG_PACK} from '../../langPack';
import {connect} from 'react-redux';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {RUS, ENG} from '../../settings';
import style from './Menu.module.scss';

// С помощью этой константы будем определять, на какой язык мы можем сейчас переключиться
const LANG_SWITCHER_MAP = {
    RUS: ENG,
    ENG: RUS
}

function getNextLangTitle(lang) {
    return {
        RUS: 'Рус',
        ENG: 'Eng'
    }[LANG_SWITCHER_MAP[lang]]
}

// lang - текущий язык, setLang - функция для смены текущего языка
function Menu({lang, setLang}) {
    let [opened, setOpened] = useState(false);

    let {menuItems} = LANG_PACK['Menu'][lang];

    let menuButtonClickHandler = () => setOpened(oldValue => !oldValue);

    let langSelectorClickHandler = () => setLang(LANG_SWITCHER_MAP[lang]);

    return (
        <div className={style.menu + (opened ? ` ${style.opened}` : '')}>
            <div className={style.menu__button} onClick={menuButtonClickHandler}>
                <TwoLines/>
                <OneLine/>
                <OneLine/>
            </div>
            <h1 className={style.menu__title}>Need for drive</h1>
            <ul className={style.menu__items_block}>
                {menuItems.map((item, index) => <li key={index} className={style.menu__item}>{item}</li>)}
                <li key="icons_item" className={style.menu__icons_item}>
                    <TelegramIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </li>
                <li
                    className={`${style.menu__lang_selector} ${style.menu__lang_selector_mobile}`}
                    onClick={langSelectorClickHandler}
                >
                    {getNextLangTitle(lang)}
                </li>
            </ul>
            <div
                className={`${style.menu__lang_selector} ${style.menu__lang_selector_fixed}`}
                onClick={langSelectorClickHandler}
            >
                {getNextLangTitle(lang)}
            </div>
        </div>
    );
}

let stateMap = stateMapsFactory('Menu');
let dispatchMap = dispatchMapsFactory('Menu');
export default connect(stateMap, dispatchMap)(Menu);