import React from 'react';
import PropTypes from 'prop-types';
import LangSelector from '../LangSelector/LangSelector';
import {ReactComponent as TelegramIcon} from '../../content/images/icons/telegram_icon.svg';
import {ReactComponent as FacebookIcon} from '../../content/images/icons/facebook_icon.svg';
import {ReactComponent as InstagramIcon} from '../../content/images/icons/instagram_icon.svg';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {connect} from 'react-redux';
import {LANG_PACK} from '../../langPack';
import './MenuItemsBlock.scss';

function MenuItemsBlock({hasOpened, lang}) {
    let {menuItems} = LANG_PACK['MenuItemsBlock'][lang];

    let classNames = 'menu_items_block' + (hasOpened ? ' menu_items_block_visible' : '');

    return (
        <div className={classNames}>
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

let stateMap = stateMapsFactory('MenuItemsBlock');
let dispatchMap = dispatchMapsFactory('MenuItemsBlock');
export default connect(stateMap, dispatchMap)(MenuItemsBlock);