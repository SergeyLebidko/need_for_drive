import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as TwoLines} from '../../content/images/icons/two_lines.svg';
import {ReactComponent as OneLine} from '../../content/images/icons/one_line.svg';
import {ReactComponent as TelegramIcon} from '../../content/images/icons/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../content/images/icons/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../content/images/icons/instagram_icon.svg';
import {LANG_PACK} from '../../langPack';
import {connect} from 'react-redux';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {RUS, ENG, LS_LANG_KEY} from '../../settings';
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

    // Если меню открыто, то запрещаем прокрутку тела страницы
    useEffect(() => {
        let body = document.body;
        if (opened) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [opened]);

    let {menuItems} = LANG_PACK['Menu'][lang];

    let handleMenuButtonClick = () => setOpened(oldOpened => !oldOpened);

    // При смене языка - сохраняем выбор пользователя также и в local storage, чтобы он был доступен при следующем входе на сайт
    let handleLangSelectorClick = () => {
        let nextLang = LANG_SWITCHER_MAP[lang];
        setLang(LANG_SWITCHER_MAP[lang]);
        localStorage.setItem(LS_LANG_KEY, nextLang);
    };

    return (
        <div className={style.menu + (opened ? ` ${style.opened}` : '')}>
            <div className={style.menu__button} onClick={handleMenuButtonClick}>
                <TwoLines/>
                <OneLine/>
                <OneLine/>
            </div>
            <h1 className={style.menu__title}>Need for drive</h1>
            <ul className={style.menu__items_block}>
                {menuItems.map(item => <li key={item} className={style.menu__item}>{item}</li>)}
                <li key="icons_item" className={style.menu__icons_item}>
                    <TelegramIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </li>
                <li
                    className={`${style.menu__lang_selector} ${style.menu__lang_selector_mobile}`}
                    onClick={handleLangSelectorClick}
                >
                    {getNextLangTitle(lang)}
                </li>
            </ul>
            <div
                className={`${style.menu__lang_selector} ${style.menu__lang_selector_fixed}`}
                onClick={handleLangSelectorClick}
            >
                {getNextLangTitle(lang)}
            </div>
        </div>
    );
}

Menu.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.func
}

let stateMap = stateMapsFactory('Menu');
let dispatchMap = dispatchMapsFactory('Menu');
export default connect(stateMap, dispatchMap)(Menu);