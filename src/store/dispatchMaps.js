import {
    setLang,
    loadCity,
    setSliderData,
    setTabItemsData,
    setCategoryList,
    setModelList,
    setColorList
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
                setTabItemsData: tabItemsData => dispatch(setTabItemsData(tabItemsData)),
                setCategoryList: categoryList => dispatch(setCategoryList(categoryList)),
                setModelList: modelList => dispatch(setModelList(modelList)),
                setColorList: colorList => dispatch(setColorList(colorList))
            });
        default:
            return null;
    }
}

export default dispatchMapsFactory;