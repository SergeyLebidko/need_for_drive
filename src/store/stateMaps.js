function stateMapsFactory(component) {
    switch (component) {
        case 'Menu':
        case 'Title':
            return state => ({
                lang: state.lang
            })
        default:
            return null;
    }
}

export default stateMapsFactory;