function stateMapsFactory(component) {
    switch (component) {
        case 'Title':
            return state => ({
                lang: state.lang,
                city: state.city
            });
        case 'App':
        case 'LangSelector':
        case 'Slider':
            return state => ({
                lang: state.lang,
            });
        default:
            return null;
    }
}

export default stateMapsFactory;