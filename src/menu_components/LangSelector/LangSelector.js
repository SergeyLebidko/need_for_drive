import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import stateMapsFactory from '../../store/stateMaps';
import dispatchMapsFactory from '../../store/dispatchMaps';
import {ENG, RUS, LANG_SWITCHER_MAP, LS_LANG_KEY} from '../../settings';
import './LangSelector.scss';

function LangSelector({lang, setLang}) {
    let getNextLangTitle = lang => ({[RUS]: 'Рус', [ENG]: 'Eng'}[LANG_SWITCHER_MAP[lang]]);

    // При смене языка - сохраняем выбор пользователя также и в local storage, чтобы он был доступен при следующем входе на сайт
    let handleClick = () => {
        let nextLang = LANG_SWITCHER_MAP[lang];
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

let stateMap = stateMapsFactory('LangSelector');
let dispatchMap = dispatchMapsFactory('LangSelector');
export default connect(stateMap, dispatchMap)(LangSelector);