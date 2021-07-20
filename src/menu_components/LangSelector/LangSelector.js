import React from 'react';
import PropTypes from 'prop-types';
import './LangSelector.scss';
import {ENG, RUS, LANG_SWITCHER_MAP} from '../../settings';

function LangSelector({lang, handleClick}) {
   let getNextLangTitle = lang => ({[RUS]: 'Рус', [ENG]: 'Eng'}[LANG_SWITCHER_MAP[lang]]);

    return (
        <button className="lang_selector" onClick={handleClick}>
            {getNextLangTitle(lang)}
        </button>
    );
}

LangSelector.propTypes = {
    lang: PropTypes.string,
    handleClick: PropTypes.func
}

export default LangSelector;