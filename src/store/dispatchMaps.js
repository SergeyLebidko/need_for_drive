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
    setOrderOptions,
    clearOrderOptions,
    setOrderRate,
    clearOrderRate,
    setOrderDateFrom,
    clearOrderDateFrom,
    setOrderDateTo,
    clearOrderDateTo,
    setOrderPrice,
    clearOrderPrice
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
                clearOrderColor: () => dispatch(clearOrderColor()),
                clearOrderOptions: options => dispatch(clearOrderOptions(options)),
                clearOrderRate: () => dispatch(clearOrderRate()),
                clearOrderDateFrom: () => dispatch(clearOrderDateFrom()),
                clearOrderDateTo: () => dispatch(clearOrderDateTo()),
                clearOrderPrice: () => dispatch(clearOrderPrice())
            });
        case 'LocationTab':
            return dispatch => ({
                clearOrderModel: () => dispatch(clearOrderModel()),
                clearOrderColor: () => dispatch(clearOrderColor()),
                clearOrderOptions: options => dispatch(clearOrderOptions(options)),
                clearOrderRate: () => dispatch(clearOrderRate()),
                clearOrderDateFrom: () => dispatch(clearOrderDateFrom()),
                clearOrderDateTo: () => dispatch(clearOrderDateTo()),
                clearOrderPrice: () => dispatch(clearOrderPrice())
            });
        case 'ExtraTab':
            return dispatch => ({
                setOrderColor: color => dispatch(setOrderColor(color)),
                clearOrderColor: () => dispatch(clearOrderColor()),
                setOrderRate: rate => dispatch(setOrderRate(rate)),
                setOrderPrice: price => dispatch(setOrderPrice(price)),
                clearOrderPrice: () => dispatch(clearOrderPrice())
            });
        case 'OptionSelector':
            return dispatch => ({
                setOrderOptions: options => dispatch(setOrderOptions(options))
            });
        case 'DateSelector':
            return dispatch => ({
                setOrderDateFrom: date => dispatch(setOrderDateFrom(date)),
                setOrderDateTo: date => dispatch(setOrderDateTo(date)),
                clearOrderDateFrom: () => dispatch(clearOrderDateFrom()),
                clearOrderDateTo: () => dispatch(clearOrderDateTo())
            });
        default:
            return null;
    }
}

export default dispatchMapsFactory;