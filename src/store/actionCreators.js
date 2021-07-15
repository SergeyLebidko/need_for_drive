import * as act from './actions';

export function setLang(lang) {
    return {
        type: act.SET_LANG,
        lang
    }
}