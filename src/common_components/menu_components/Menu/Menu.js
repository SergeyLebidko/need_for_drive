import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton/MenuButton';
import MenuItemsBlock from '../MenuItemsBlock/MenuItemsBlock';
import LangSelector from '../LangSelector/LangSelector';
import './Menu.scss';

function Menu() {
    let [opened, setOpened] = useState(false);

    // Если меню открыто, то запрещаем прокрутку тела страницы
    useEffect(() => {
        const body = document.body;
        if (opened) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [opened]);

    const handleMenuButtonClick = () => setOpened(menuOpened => !menuOpened);

    return (
        <section className="menu">
            <MenuButton hasOpened={opened} handleClick={handleMenuButtonClick}/>
            <h1 className="menu__title">Need for drive</h1>
            <MenuItemsBlock hasOpened={opened}/>
            <LangSelector/>
        </section>
    );
}

Menu.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.func
}

export default Menu;