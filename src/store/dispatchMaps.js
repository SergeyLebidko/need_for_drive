import {setLang, loadCity, setSliderData, setTabItemsData, setCategoryList} from './actionCreators';

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
                setCategoryList: categoryList => dispatch(setCategoryList(categoryList))
            });
        default:
            return null;
    }
}

export default dispatchMapsFactory;