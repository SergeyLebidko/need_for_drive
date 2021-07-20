import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';
import LangSelector from '../LangSelector/LangSelector';
import {ReactComponent as TelegramIcon} from '../../content/images/icons/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../content/images/icons/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../content/images/icons/instagram_icon.svg';
import {LANG_SWITCHER_MAP, LS_LANG_KEY} from '../../settings';
import {LANG_PACK} from '../../langPack';
import {connect} from 'react-redux';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import style from './Menu.module.scss';

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

    let handleMenuButtonClick = () => setOpened(menuOpened => !menuOpened);

    // При смене языка - сохраняем выбор пользователя также и в local storage, чтобы он был доступен при следующем входе на сайт
    let handleLangSelectorClick = () => {
        let nextLang = LANG_SWITCHER_MAP[lang];
        setLang(LANG_SWITCHER_MAP[lang]);
        localStorage.setItem(LS_LANG_KEY, nextLang);
    };

    return (
        <div className={style.menu + (opened ? ` ${style.opened}` : '')}>
            <MenuButton hasOpened={opened} handleClick={handleMenuButtonClick}/>
            <h1 className={style.menu__title}>Need for drive</h1>
            <ul className={style.menu__items_block}>
                {menuItems.map(item => <li key={item} className={style.menu__item}>{item}</li>)}
                <li key="icons_item" className={style.menu__icons_item}>
                    <TelegramIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </li>
                <LangSelector lang={lang} handleClick={handleLangSelectorClick}/>
            </ul>
            <LangSelector lang={lang} handleClick={handleLangSelectorClick}/>
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