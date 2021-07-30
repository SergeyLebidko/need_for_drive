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
        case 'CategorySelector':
            return state => ({
                categoryList: state.categoryList
            });
        case 'ModelSelector':
            return state => ({
                modelList: state.modelList
            });
        default:
            return null;
    }
}

export default stateMapsFactory;