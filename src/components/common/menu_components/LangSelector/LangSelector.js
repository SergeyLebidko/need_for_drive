import React from 'react';
import PropTypes from 'prop-types';
import {createStoreConnectedComponent} from '../../../../store/connector';
import {ENG, RUS, LANG_SWITCHER_MAP, LS_LANG_KEY} from '../../../../constants/settings';
import './LangSelector.scss';

function LangSelector({lang, setLang}) {
    const getNextLangTitle = lang => ({[RUS]: 'Рус', [ENG]: 'Eng'}[LANG_SWITCHER_MAP[lang]]);

    // При смене языка - сохраняем выбор пользователя также и в local storage, чтобы он был доступен при следующем входе на сайт
    const handleClick = () => {
        const nextLang = LANG_SWITCHER_MAP[lang];
        setLang(LANG_SWITCHER_MAP[lang]);
        localStorage.setItem(LS_LANG_KEY, nextLang);
    };

    return (
        <button className="lang_selector" onClick={handleClick}>
            {getNextLangTitle(lang)}
        </button>
    );
}

LangSelector.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.func
}

export default createStoreConnectedComponent('LangSelector')(LangSelector);