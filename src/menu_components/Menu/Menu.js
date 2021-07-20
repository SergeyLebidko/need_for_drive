import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';
import MenuItemsBlock from '../MenuItemsBlock/MenuItemsBlock';
import LangSelector from '../LangSelector/LangSelector';
import style from './Menu.module.scss';

// lang - текущий язык, setLang - функция для смены текущего языка
function Menu() {
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


    let handleMenuButtonClick = () => setOpened(menuOpened => !menuOpened);

    return (
        <div className={style.menu + (opened ? ` ${style.opened}` : '')}>
            <MenuButton hasOpened={opened} handleClick={handleMenuButtonClick}/>
            <h1 className={style.menu__title}>Need for drive</h1>
            <MenuItemsBlock hasOpened={opened}/>
            <LangSelector/>
        </div>
    );
}

Menu.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.func
}

export default Menu;