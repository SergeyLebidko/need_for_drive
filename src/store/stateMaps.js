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
                tabItemsData: state.tabItemsData
            });
        case 'OrderCreator':
            return state => ({
                hasOrderConfirmModalShow: state.hasOrderConfirmModalShow
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
        default:
            return null;
    }
}

export default stateMapsFactory;