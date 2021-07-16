function stateMapsFactory(component) {
    switch (component) {
        case 'Menu':
            return state => ({
                lang: state.lang
            });
        case 'Title':
            return state => ({
                lang: state.lang
            });
        default:
            return null;
    }
}

export default stateMapsFactory;