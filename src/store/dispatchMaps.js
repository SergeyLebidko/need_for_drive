import {setLang} from './actionCreators';

function dispatchMapsFactory(component) {
    switch (component) {
        case 'App':
        case 'Menu':
            return dispatch => ({
                setLang: lang => dispatch(setLang(lang))
            })
        default:
            return null;
    }
}

export default dispatchMapsFactory;