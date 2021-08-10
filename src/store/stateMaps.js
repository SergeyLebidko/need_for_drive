function stateMapsFactory(component) {
    switch (component) {
        case 'Title':
            return state => ({
                lang: state.lang,
                city: state.city
            });
        case 'App':
        case 'MainPage':
        case 'LangSelector':
        case 'MenuItemsBlock':
            return state => ({
                lang: state.lang,
            });
        case 'PageHeader':
            return state => ({
                city: state.city
            });
        case 'Slider':
            return state => ({
                sliderData: state.sliderData
            });
        case 'TabTitles':
            return state => ({
                order: state.order,
                tabItemsData: state.tabItemsData
            });
        case 'OrderCreator':
            return state => ({
                hasModalShow: state.hasModalShow,
                hasOrderCreatorDataLoaded: (function () {
                    let {cityList, pointList, cityCoords, pointCoords, modelList, categoryList} = state;
                    return (
                        cityList.length > 0 &&
                        pointList.length > 0 &&
                        cityCoords.length > 0 &&
                        pointCoords.length > 0 &&
                        modelList.length > 0 &&
                        categoryList.length > 0
                    );
                })()
            });
        case 'OrderViewer':
            return state => ({
                hasModalShow: state.hasModalShow
            });
        case 'ModelTab':
            return state => ({
                categoryList: state.categoryList,
                modelList: state.modelList
            });
        case 'ExtraTab':
            return state => ({
                colorList: state.colorList,
                rateList: state.rateList,
                optionList: state.optionList
            });
        case 'Modal':
            return state => ({
                hasModalShow: state.hasModalShow
            });
        case 'PlaceSelector':
            return state => ({
                order: state.order,
                cityList: state.cityList,
                pointList: state.pointList
            });
        case 'Map':
            return state => ({
                order: state.order,
                cityCoords: state.cityCoords,
                pointCoords: state.pointCoords,
                cityList: state.cityList,
                pointList: state.pointList
            });
        case 'TabControl':
        case 'LocationTab':
        case 'OrderDetailsViewer':
        case 'ModelSelector':
            return state => ({
                order: state.order
            });
        default:
            return null;
    }
}

export default stateMapsFactory;