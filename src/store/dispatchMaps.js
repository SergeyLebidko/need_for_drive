import {setLang, loadCity} from './actionCreators';

function dispatchMapsFactory(component) {
    switch (component) {
        case 'App':
            return dispatch => ({
                setLang: lang => dispatch(setLang(lang)),
                defineCity: lang => dispatch(loadCity(lang))
            });
        case 'LangSelector':
            return dispatch => ({
                setLang: lang => dispatch(setLang(lang))
            });
        default:
            return null;
    }
}

export default dispatchMapsFactory;