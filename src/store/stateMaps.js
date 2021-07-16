function stateMapsFactory(component) {
    switch (component) {
        case 'App':
        case 'Menu':
        case 'Title':
            return state => ({
                lang: state.lang,
                city: state.city
            })
        default:
            return null;
    }
}

export default stateMapsFactory;