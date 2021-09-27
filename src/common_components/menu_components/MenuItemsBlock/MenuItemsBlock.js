import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LangSelector from '../LangSelector/LangSelector';
import {ReactComponent as TelegramIcon} from '../../../content/images/icons/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../../content/images/icons/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../../content/images/icons/instagram_icon.svg';
import {createStoreConnectedComponent} from '../../../store/connector';
import {LANG_PACK} from '../../../constants/langPack';
import './MenuItemsBlock.scss';

function MenuItemsBlock({hasOpened, lang}) {
    const {menuItems} = LANG_PACK['MenuItemsBlock'][lang];
    const containerClassNames = classNames('menu_items_block', {'menu_items_block_visible': hasOpened});

    return (
        <div className={containerClassNames}>
            <nav className="menu_items_block__navigation">
                {menuItems.map(item => <span key={item} className="menu_items_block__item">{item}</span>)}
                <span key="icons" className="menu_items_block__icons_item">
                    <TelegramIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </span>
            </nav>
            <LangSelector/>
        </div>
    );
}

MenuItemsBlock.propTypes = {
    hasOpened: PropTypes.bool,
    lang: PropTypes.string
}

export default createStoreConnectedComponent('MenuItemsBlock')(MenuItemsBlock);