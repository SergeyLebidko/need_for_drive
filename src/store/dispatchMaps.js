import {
    setLang,
    loadCity,
    setSliderData,
    showModal,
    hideModal,
    loadOrderCreatorData,
    setOrderCity,
    setOrderPoint,
    clearOrderCity,
    clearOrderPoint,
    setOrderModel,
    clearOrderModel,
    setOrderColor,
    clearOrderColor,
    setOrderOptions
} from './actionCreators';

function dispatchMapsFactory(component) {
    switch (component) {
        case 'App':
            return dispatch => ({
                setLang: lang => dispatch(setLang(lang)),
                defineCity: lang => dispatch(loadCity(lang))
            });
        case 'MainPage':
            return dispatch => ({
                setSliderData: sliderData => dispatch(setSliderData(sliderData))
            });
        case 'LangSelector':
            return dispatch => ({
                setLang: lang => dispatch(setLang(lang))
            });
        case 'OrderCreator':
            return dispatch => ({
                loadOrderCreatorData: () => dispatch(loadOrderCreatorData())
            });
        case 'OrderPane':
        case 'TabControl':
            return dispatch => ({
                showModal: () => dispatch(showModal())
            });
        case 'Modal':
            return dispatch => ({
                hideModal: () => dispatch(hideModal())
            })
        case 'PlaceSelector':
            return dispatch => ({
                setOrderCity: city => dispatch(setOrderCity(city)),
                setOrderPoint: point => dispatch(setOrderPoint(point)),
                clearOrderCity: () => dispatch(clearOrderCity()),
                clearOrderPoint: () => dispatch(clearOrderPoint())
            });
        case 'Map':
            return dispatch => ({
                setOrderCity: city => dispatch(setOrderCity(city)),
                setOrderPoint: point => dispatch(setOrderPoint(point)),
                clearOrderPoint: () => dispatch(clearOrderPoint())
            });
        case 'ModelSelector':
            return dispatch => ({
                setOrderModel: model => dispatch(setOrderModel(model)),
                clearOrderColor: () => dispatch(clearOrderColor())
            });
        case 'LocationTab':
            return dispatch => ({
                clearOrderModel: () => dispatch(clearOrderModel())
            });
        case 'ExtraTab':
            return dispatch => ({
                setOrderColor: color => dispatch(setOrderColor(color)),
                clearOrderColor: () => dispatch(clearOrderColor())
            });
        case 'OptionSelector':
            return dispatch => ({
                setOrderOptions: options => dispatch(setOrderOptions(options))
            })
        default:
            return null;
    }
}

export default dispatchMapsFactory;